/* eslint-disable react/display-name */
import { Localization } from '../lib/i18n';

export const enDE: Localization = {
  test: {
    content: () => 'Test Content',
  },
  language: {
    de: () => 'German',
    en: () => 'English',
  },
  greetings: {
    welcome: () => 'Welcome.',
    hello: () => 'Hello.',
    hey: () => 'Hey.',
    heyhey: () => 'Hey hey.',
  },
  dayPicker: {
    ariaLabel: () => 'Choose',
    minError: ({ min }) => `Please choose at least ${min} ${min === 1 ? 'day' : 'days'}`,
  },
  days: {
    monday: {
      long: () => 'Monday',
      short: () => 'Mo',
    },
    tuesday: {
      long: () => 'Tuesday',
      short: () => 'Tu',
    },
    wednesday: {
      long: () => 'Wednesday',
      short: () => 'We',
    },
    thursday: {
      long: () => 'Thursday',
      short: () => 'Th',
    },
    friday: {
      long: () => 'Friday',
      short: () => 'Fr',
    },
    saturday: {
      long: () => 'Saturday',
      short: () => 'Sa',
    },
    sunday: {
      long: () => 'Sunday',
      short: () => 'Su',
    },
  },
  dateCreate: {
    overlayTitle: ({ offerTitle }) => `Create date for ‘${offerTitle}’`,
    create: () => 'Create date',
  },
  accordion: {
    open: () => 'show',
    close: () => 'hide',
  },
  userMenu: {
    loggedIn: () => 'Logged in',
    settings: () => 'Settings',
    logOut: () => 'Log out',
    ariaLabelOpen: () => 'Show user menu',
    ariaLabelClose: () => 'Hide user menu',
  },
  forms: {
    optional: () => 'optional',
    required: () => 'required',
    errors: {
      passwordConfirm: () => 'The entered passwords do not match.',
    },
  },
  start: {
    login: () => 'Login',
    register: () => 'Register',
    dashboard: () => 'App Dashboard',
    imprint: () => 'Imprint',
  },
  login: {
    email: () => 'Email',
    password: () => 'Password',
    remember: () => 'Stay logged in',
    submit: () => 'Login',
    headline: () => 'Log in to Kulturdaten.Berlin now.',
  },
  register: {
    email: () => 'Email',
    password: () => 'Password',
    confirmPassword: () => 'Confirm password',
    submit: () => 'Register',
    headline: () => 'Register now for free for Kulturdaten.Berlin. ',
    subline: () => 'Use will always be free of charge.',
  },
  statusBar: {
    status: () => 'Status',
    draft: () => 'Draft',
    published: () => 'published',
    saved: () => 'Saved',
    savedShort: () => 'Saved',
  },
  save: {
    issues: () => 'There are issues with your inputs.',
    issuesShort: () => 'Input issues',
    invalid: () => 'issues present',
    hint: () => 'There are fields which should be filled.',
    hintShort: () => 'Empty fields',
    confirmExit: () =>
      'There are unsaved changes on this page. When leaving these will be lost. Are you sure you want to leave?',
    alertSymbolAriaLabel: () => 'There are errors in this input fields.',
    infoSymbolAriaLabel: () => 'Here are input fields which should be filled.',
  },
  media: {
    title: () => 'Images',
    copyright: () => 'Author',
    alt: () => 'Alt text',
    license: () => 'License',
    licenseEnd: () => 'End date license',
    imageProcessing: () => 'The image is being processed and loaded',
    openImage: () => 'Open original image in new tab',
    url: () => 'URL',
    format: () => 'Format',
    size: () => 'Size',
    mb: () => 'MB',
    delete: () => 'delete image',
    deleteConfirm: () => 'Do you really want to delete this image? This cannot be undone.',
    maxReached: ({ count }) => `Maximum number of images (${count}) reached.`,
    ariaLabel: () => 'Upload files',
    hint: () =>
      'In order for the image to be publicly available, the mandatory fields must be filled out.',
    dropZoneLabel: () => 'Upload new images',
  },
  logo: {
    title: () => 'Logo',
    imageProcessing: () => 'The logo is being processed and loaded',
    openImage: () => 'Open original logo in new tab',
    delete: () => 'delete logo',
    deleteConfirm: () => 'Do you really want to delete the logo? This cannot be undone.',
    ariaLabel: () => 'Upload logo',
    hint: () =>
      'In order for the logo to be publicly available, the mandatory fields must be filled out.',
    dropZoneLabel: () => 'Upload new logo',
  },
  dropZone: {
    allowedFileTypes: () => 'Allowed file types',
    uploading: ({ progress }) => `Uploading files: ${progress} done`,
    success: ({ count }) => `Successfully uploaded ${count} ${count === 1 ? 'file' : 'files'}`,
    pending: () => `Upload done. Files are being processed.`,
    ariaLabel: () => 'Upload files',
  },
  date: {
    time: () => 'Time',
    from: () => 'From',
    to: () => 'To',
    title: () => 'Title',
    status: () => 'Status',
    info: () => 'Information',
    checkboxAriaLabel: () => 'Select date',
    allCheckboxAriaLabel: () => 'Select all dates',
    details: () => 'Details',
    detailsShowAriaLabel: () => 'Show details',
    detailsHideAriaLabel: () => 'Hide details',
    scheduled: () => 'scheduled',
    scheduledArchived: () => 'scheduled',
    cancelled: () => 'cancelled',
    allDay: () => 'is all day',
    clock: () => 'time',
    toDateInvalid: () => 'The date needs to end at a later day that it starts.',
    toTimeInvalid: () => 'The date needs to end at a later time than it starts.',
    titleInfoTitle: () => 'The title of the date will be combined with the title of the offer.',
    roomInfo: () => 'Room information',
    additionalLinks: () => 'Additional links',
    ticketLink: () => 'Ticket link',
    currentDates: () => 'Current dates',
    archivedDates: () => 'Past dates',
    mode: {
      title: () => 'Offer mode',
      permanent: {
        label: () => 'Permanent offer',
        description1: () =>
          'Offers not limited in time, such as: permanent exhibitions, collections',
        description2: () =>
          'Permanent offers take over the opening times of the assigned location.',
      },
      scheduled: {
        label: () => 'Offer with dates',
        description1: () =>
          'Time-limited offers, such as: performances, concerts, film screenings, courses',
        description2: () =>
          'Offers with dates can contain any number of individual and series dates, each with individual times.',
      },
    },
    recurrence: {
      title: () => 'Repeat date',
      frequency: () => 'Frequency',
      days: () => 'days',
      weeks: () => 'weeks',
      months: () => 'months',
      never: () => 'never repeat',
      daily: () => 'daily',
      weekly: () => 'weekly',
      monthly: () => 'monthly',
      repeatEvery: () => 'Repeat every',
      onWeekdays: () => 'On weekdays',
      ends: () => 'Ends',
    },
  },
  general: {
    german: () => 'German',
    english: () => 'English',
    name: () => 'name',
    city: () => 'city',
    created: () => 'created',
    updated: () => 'updated',
    create: () => 'create',
    close: () => 'close',
    back: () => 'back',
    choose: () => 'Please choose',
    delete: () => 'delete',
    add: () => 'add',
    type: () => 'Type',
    publish: () => 'publish',
    filter: () => 'Filters',
    sort: () => 'Sort',
    ascending: () => 'ascending',
    descending: () => 'descending',
    ascendingAriaLabel: () => 'Sort list ascending',
    descendingAriaLabel: () => 'Sort list descending',
    show: (props) => `show${props?.name ? ` ${props.name}` : ''}`,
    hide: (props) => `hide${props?.name ? ` ${props.name}` : ''}`,
    expandList: () => 'Expand list view',
    minimizeList: () => 'Minimize list view',
    options: () => 'Options',
    save: () => 'save',
    saving: () => 'saving',
    saved: () => 'saved',
    loading: () => 'loading',
    max: () => 'max.',
    topics: () => 'Topics',
  },
  tags: {
    boxLabel: () => 'Already added topics',
    delete: () => 'delete topic',
    add: () => 'add topic',
    placeholder: () => 'No topic has been added yet',
    autocompleteLabel: () => 'Add new topic',
    noOptions: () => 'No topics found',
  },
  tooltip: {
    open: () => 'open tooltip',
    close: () => 'close tooltip',
  },
  linkList: {
    placeholder: () => 'No links added yet',
    addNew: () => 'Add new link',
    maxLinks: ({ amount }) => `maximum of ${amount} links`,
    maxReached: ({ amount }) =>
      `The maximum of ${amount} links is reached. You can not add more links, but you can edit or delete existing links.`,
  },
  richText: {
    history: () => 'History',
    format: () => 'Paragraph format',
    lists: () => 'Lists',
    style: () => 'Text style',
    undo: () => 'Undo change',
    redo: () => 'Redo change',
    paragraph: () => 'Paragraph',
    headingOne: () => 'Headline 1',
    headingTwo: () => 'Headline 2',
    headingThree: () => 'Headline 3',
    listOrdered: () => 'Numbered list',
    listUnordered: () => 'Unordered list',
    bold: () => 'Bold',
    italic: () => 'Italic',
    underline: () => 'Underline',
  },
  overlay: {
    ariaClose: () => 'Close overlay window',
  },
  pagination: {
    next: () => 'next',
    previous: () => 'previous',
    currentPage: ({ currentPage, lastPage }) => `Page ${currentPage} of ${lastPage}`,
  },
  categories: {
    organizer: {
      list: {
        loading: () => 'Loading Organizers',
        nothing: () => 'No Organizers found with current filters',
      },
      filters: {
        status: {
          label: () => 'Status',
          all: () => 'all',
          published: () => 'public',
          draft: () => 'draft',
        },
        type: {
          label: () => 'Type',
          all: () => 'all',
        },
        subject: {
          label: () => 'Subject',
          all: () => 'all',
          typeFirst: () => 'choose type first',
        },
        activeFilters: ({ activeFiltersCount }) => `${activeFiltersCount} active`,
      },
      requirements: {
        label: () => 'Required for publishing',
        name: () => 'Name added',
        description: () => 'Description added',
        categorization: () => 'Type(s) and subject(s) chosen',
        address: () => 'Address added',
      },
      title: {
        plural: () => 'Organizers',
        singular: () => 'Organizer',
      },
      form: {
        create: () => 'Create new Organizer',
        baseInfo: () => 'Basic information',
        address: () => 'Address data (not public)',
        name: () => 'Name',
        nameGerman: () => 'Name German',
        nameGermanSimple: () => 'Name German: simple Language',
        nameEnglish: () => 'Name English',
        nameEnglishSimple: () => 'Name English: simple Language',
        description: () => 'Description',
        descriptionExists: () => 'filled out',
        descriptionExistsNot: () => 'not filled out',
        descriptionGerman: () => 'German',
        descriptionGermanSimple: () => 'German: simple Language',
        descriptionEnglish: () => 'English',
        descriptionEnglishSimple: () => 'English: simple Language',
        classification: () => 'Classification',
        type: () => 'Type(s)',
        subjects: () => 'Subject(s)',
        chooseTypeFirst: () => 'Please choose type first',
        tags: () => 'Tags',
        street1: () => 'Street and house number',
        street2: () => 'Additional address',
        zipCode: () => 'Zip code',
        city: () => 'City',
        submit: () => 'create',
        save: () => 'save',
        edit: () => 'edit',
        editCancel: () => 'cancel',
        contact: () => 'Contact data (public)',
        tel: () => 'Phone',
        email: () => 'Email',
        website: () => 'Website',
        links: () => 'Relevant links',
      },
      tabs: {
        info: () => 'Information',
        categorization: () => 'Categorization',
        media: () => 'Images',
      },
      metaLinks: {
        rights: () => 'Access rights',
        export: () => 'Export',
      },
      sort: {
        name: () => 'Name',
        created: () => 'Creation date',
        updated: () => 'Last updated',
      },
      view: {
        label: () => 'View',
        cards: () => 'Cards',
        table: () => 'Table',
      },
      table: {
        created: () => 'created',
        updated: () => 'updated',
      },
    },
    offer: {
      title: {
        plural: () => 'Offers',
        singular: () => 'Offer',
      },
      form: {
        create: () => 'Create new Offer',
        name: () => 'Name',
        nameGerman: () => 'Name German',
        nameGermanSimple: () => 'Name German: simple Language',
        nameEnglish: () => 'Name English',
        nameEnglishSimple: () => 'Name English: simple Language',
        description: () => 'Description',
        descriptionExists: () => 'filled out',
        descriptionExistsNot: () => 'not filled out',
        descriptionGerman: () => 'German',
        descriptionGermanSimple: () => 'German: simple Language',
        descriptionEnglish: () => 'English',
        descriptionEnglishSimple: () => 'English: simple Language',
        submit: () => 'create',
        save: () => 'save',
        edit: () => 'edit',
        editCancel: () => 'cancel',
        organizer: {
          label: () => 'Organized by',
          choose: () => 'Choose Organizer',
          edit: () => 'Change Organizer',
          title: ({ name }) => `Choose Organizer for ‘${name}’`,
        },
        location: {
          label: () => 'Location',
          choose: () => 'Choose Location',
          edit: () => 'Change Location',
          title: ({ name }) => `Choose Location for ‘${name}’`,
        },
      },
      tabs: {
        info: () => 'Information',
        categorization: () => 'Categorization',
        dates: () => 'Dates',
        accessibility: () => 'Accessibility',
        media: () => 'Images',
      },
    },
    location: {
      title: {
        plural: () => 'Locations',
        singular: () => 'Location',
      },
      form: {
        create: () => 'Create new Location',
        address: () => 'Address data',
        name: () => 'Name',
        nameGerman: () => 'Name German',
        nameGermanSimple: () => 'Name German: simple Language',
        nameEnglish: () => 'Name English',
        nameEnglishSimple: () => 'Name English: simple Language',
        description: () => 'Description',
        descriptionExists: () => 'filled out',
        descriptionExistsNot: () => 'not filled out',
        descriptionGerman: () => 'German',
        descriptionGermanSimple: () => 'German: simple Language',
        descriptionEnglish: () => 'English',
        descriptionEnglishSimple: () => 'English: simple Language',
        street1: () => 'Street and house number',
        street2: () => 'Additional address',
        zipCode: () => 'Zip code',
        city: () => 'City',
        submit: () => 'create',
        save: () => 'save',
        edit: () => 'edit',
        editCancel: () => 'cancel',
        contact: () => 'Contact data',
        tel: () => 'Phone',
        district: () => 'District',
      },
    },
  },
  menu: {
    title: () => 'Kulturdaten.Berlin',
    main: () => 'Main Menu',
    button: {
      open: () => 'open menu',
      close: () => 'close menu',
    },
    start: {
      title: () => 'Start',
      items: {
        dashboard: () => 'Dashboard',
        notifications: () => 'Notifications',
        profile: () => 'Profile',
        team: () => 'Team',
        login: () => 'Login',
        registration: () => 'Registration',
        info: () => 'Info',
      },
    },
    organizer: {
      title: () => 'Organizers',
      items: {
        overview: () => 'Overview',
        create: () => 'create new',
      },
    },
    offer: {
      title: () => 'Offers',
      items: {
        overview: () => 'Overview',
        create: () => 'create new',
      },
    },
    location: {
      title: () => 'Locations',
      items: {
        overview: () => 'Overview',
        create: () => 'create new',
      },
    },
    user: {
      title: () => 'User',
      items: {
        profile: () => 'My Profile',
        settings: () => 'My Settings',
        logout: () => 'logout',
      },
    },
    localeSwitch: {
      label: () => 'Language / Sprache',
      description: () => 'Choose Language, Sprache wählen',
    },
    organizerBandShowAriaLabel: () => 'Show list of my Organizers',
    organizerBandCollapseAriaLabel: () => 'Hide list of my Organizers',
    createOrganizer: () => 'Create new Organizer',
  },
};
