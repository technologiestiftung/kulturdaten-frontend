import getConfig from 'next/config';

const {
  publicRuntimeConfig: { api },
} = getConfig();

type StructuredData =
  | string
  | number
  | boolean
  | Array<StructuredData>
  | { [key: string]: StructuredData };

export interface ApiCall {
  request: {
    route: string;
    method: 'POST' | 'GET' | 'PATCH' | 'DELETE';
    headers: {
      'Content-Type'?: 'application/json' | 'multipart/form-data';
      'Authorization'?: string;
    };
    body: { [key: string]: StructuredData };
  };
  response: { status: number; body: { [key: string]: StructuredData } };
}

/**
 * Define routes
 */

export enum ApiRoutes {
  authRegister = 'authRegister',
  authLogin = 'authLogin',
  authLogout = 'authLogout',
  authValidate = 'authValidate',
  authInfo = 'authInfo',
}

export const apiRoutes: { [key in ApiRoutes]: string } = {
  authRegister: '/auth/register',
  authLogin: '/auth/login',
  authLogout: '/auth/logout',
  authValidate: '/auth/validate',
  authInfo: '/auth/info',
};

/**
 * Makes a call to kulturdaten.berlin API
 * @param request
 * @returns
 */
export const call = async <T extends ApiCall>({ request, response }: T): Promise<T['response']> => {
  try {
    const resp = await fetch(new URL(request.route, api).toString(), {
      method: request.method,
      headers: request.headers,
      body: JSON.stringify(request.body, null, 2),
    });

    const body: T['response']['body'] = await resp.json();

    // TODO: Optimize when API became generalized
    switch (resp.status) {
      case response.status: {
        return {
          status: response.status,
          body,
        };
      }
      case 422: {
        const regError = new Error(JSON.stringify(body));
        regError.name = 'reg error';
        throw regError;
      }
      default: {
        throw new Error(JSON.stringify(body));
      }
    }
  } catch (e) {
    throw e;
  }
};

/**
 * Helpers
 */

export const getApiUrl = (apiRoute: ApiRoutes): URL => new URL(apiRoutes[apiRoute], api);
export const getApiUrlString = (apiRoute: ApiRoutes): string => getApiUrl(apiRoute).toString();
export const makeBearer = (token: string): string => `Bearer ${token}`;

/**
 * Export routes
 */

export type { AuthInfo } from './routes/auth/info';
export { authInfoBlueprint } from './routes/auth/info';
export type { AuthLogin } from './routes/auth/login';
export { authLoginBlueprint } from './routes/auth/login';
export type { AuthLogout } from './routes/auth/logout';
export { authLogoutBlueprint } from './routes/auth/logout';
export type { AuthRegister } from './routes/auth/register';
export { authRegisterBlueprint } from './routes/auth/register';
export type { AuthValidate } from './routes/auth/validate';
export { authValidateBlueprint } from './routes/auth/validate';
