import Downloader from 'js-file-downloader';
import getConfig from 'next/config';
import { useCallback, useContext } from 'react';
import { makeBearer } from '.';
import { DownloadContext } from '../../components/Download/DownloadContext';
import { useAuthToken } from '../../components/user/UserContext';
import { useT } from '../i18n';

const publicRuntimeConfig = getConfig ? getConfig()?.publicRuntimeConfig : undefined;
const api = publicRuntimeConfig?.api;

export const useDownload = (): ((
  route: string,
  fileName: string,
  onProcess?: (e: ProgressEvent) => void
) => void) => {
  const authToken = useAuthToken();
  const { add, update, remove, getNewId } = useContext(DownloadContext);
  const t = useT();

  const callback = useCallback(
    async (route: string, fileName: string, onProcess?: (e: ProgressEvent) => void) => {
      const url = new URL(route, api).toString();
      const id = getNewId();

      add({
        id,
        fileName,
        progress: 0,
      });

      const downloader = new Downloader({
        url,
        headers: [{ name: 'Authorization', value: makeBearer(authToken) }],
        autoStart: false,
        contentTypeDetermination: 'header',
        filename: fileName,
        forceDesktopMode: true,
        process: (e: ProgressEvent) => {
          update({
            id,
            fileName,
            progress: e.total / e.loaded,
          });

          if (typeof onProcess === 'function') {
            onProcess(e);
          }

          return undefined;
        },
      });

      update({
        id,
        fileName,
        progress: 0,
      });

      downloader
        .start()
        .then(() => {
          setTimeout(() => {
            remove({ id, fileName, progress: 1 });
          }, 2000);
        })
        .catch((error) => {
          update({
            id,
            fileName,
            progress: 0,
            error: t('general.serverProblem') as string,
          });
          console.error(error);
          setTimeout(() => {
            remove({ id, fileName, progress: 0, error: t('general.serverProblem') as string });
          }, 3000);
        });
    },
    [add, authToken, getNewId, remove, update, t]
  );

  return callback;
};
