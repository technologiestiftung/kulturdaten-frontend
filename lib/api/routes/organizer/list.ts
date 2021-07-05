import { apiRoutes, makeBearer, ApiCall, ApiRoute, ApiCallFactory } from '../..';
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

export const organizerListFactory: ApiCallFactory = (
  token: OrganizerList['request']['headers']['Authorization'],
  query: {
    page: string;
    size: string;
  }
): OrganizerList => ({
  request: {
    route: apiRoutes.organizerList(query),
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
