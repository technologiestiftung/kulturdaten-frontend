import { apiRoutes, makeBearer, ApiCall, ApiRoute } from '../..';
import { Organizer } from '../../types/organizer';

/**
 * /auth/info
 */

export type OrganizerUpdate = ApiCall & {
  request: {
    route: ReturnType<ApiRoute>;
    method: 'PATCH';
    headers: {
      'Authorization': string;
      'Content-Type': 'application/json';
    };
    body: Organizer;
  };
  response: {
    status: 200;
    body: {
      data: Organizer;
      meta: {
        message: 'Organizer updated successfully';
      };
    };
  };
};

export const organizerUpdateFactory = (
  token: OrganizerUpdate['request']['headers']['Authorization'],
  query: {
    id: string;
    entry: Organizer;
  }
): OrganizerUpdate => ({
  request: {
    route: apiRoutes.organizerUpdate({ organizer: query.id }),
    method: 'PATCH',
    headers: {
      'Authorization': makeBearer(token),
      'Content-Type': 'application/json',
    },
    body: query.entry,
  },
  response: {
    status: 200,
    body: undefined,
  },
});
