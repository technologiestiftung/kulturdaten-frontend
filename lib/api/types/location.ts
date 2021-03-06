import { Language } from '../../../config/locale';
import { Accessibility } from './accessibility';
import { Address } from './address';
import { CategoryEntry, DefaultAttributes, Translation } from './general';
import { OpeningHours } from './hours';
import { Organizer } from './organizer';
import { Service } from './service';

export type LocationTranslation = {
  type: 'locationtranslation';
  attributes: {
    language: Language;
    name?: string;
    description?: string;
    openingHours?: string;
  };
} & Translation;

export enum LocationType {
  virtual = 'virtual',
  physical = 'physical',
}

export type Location = {
  data: {
    id?: string;
    attributes?: {
      url?: string;
      rentUrl?: string;
      type?: LocationType;
    } & DefaultAttributes;
    relations?: {
      translations: LocationTranslation[];
      organizer?: Organizer['data'];
      address?: Address;
      openingHours?: OpeningHours[];
      accessibility?: Accessibility;
      service?: Service;
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
