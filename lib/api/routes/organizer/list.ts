import { apiRoutes, makeBearer, ApiCall, ApiRoute, ApiCallBlueprint } from '../..';
import { Organizer } from '../../types/organizer';

/**
 * /auth/info
 */

export interface OrganizerList extends ApiCall {
  request: {
    route: ReturnType<ApiRoute>;
    method: 'GET';
    headers: {
      Authorization: string;
    };
  };
  response: {
    status: 200;
    body: {
      data: Organizer[];
    };
  };
}

export const organizerListBlueprint: ApiCallBlueprint = (
  token: OrganizerList['request']['headers']['Authorization']
): OrganizerList => ({
  request: {
    route: apiRoutes.organizerList(),
    method: 'GET',
    headers: {
      Authorization: makeBearer(token),
    },
  },
  response: {
    status: 200,
    body: undefined,
  },
});
