import { CategoriesPlural } from '../../../config/categories';
import { Role } from './role';

export enum UserStatus {
  active = 'active',
  pending = 'pending',
}

export type User = {
  id: number;
  type: 'user';
  attributes: {
    email: string;
    rememberMeToken: string;
    isSuperuser: boolean;
    status: UserStatus;
    createdAt: string;
    updatedAt: string;
    acceptedTermsAt: string;
  };
  relations?: {
    [key in CategoriesPlural]?: Role[];
  };
};
