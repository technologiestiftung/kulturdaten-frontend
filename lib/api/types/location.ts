import { Language } from '../../../config/locale';
import { Address } from './address';
import { CategoryEntry, DefaultAttributes, Translation } from './general';
import { OpeningHours } from './openingHours';
import { Organizer } from './organizer';

export type LocationTranslation = {
  type: 'locationtranslation';
  attributes: {
    language: Language;
    name?: string;
    description?: string;
  };
} & Translation;

export enum LocationType {
  virtuallocation = 'virtuallocation',
  physicallocation = 'physicallocation',
}

export type Location = {
  data: {
    type: LocationType;
    id?: string;
    attributes?: {
      url?: string;
    } & DefaultAttributes;
    relations?: {
      translations: LocationTranslation[];
      organizer?: Organizer;
      address?: Address;
      openingHours?: OpeningHours[];
    } & CategoryEntry['data']['relations'];
  };
  meta?: {
    publishable:
      | boolean
      | {
          [key: string]: string[];
        };
  };
} & CategoryEntry;

export type CreateLocation = {
  relations?: {
    links?: string[];
    translations?: LocationTranslation[];
    address?: Address;
  };
};
