/* eslint-disable react/display-name */
import { DashboardTileText, DashboardTileTextP } from '../components/Dasboard/DashboardTile';
import { InfoLi, InfoP, InfoUl } from '../components/info';
import { StatusFlag, StatusFlagVariant } from '../components/Status/StatusFlag';
import { TooltipP } from '../components/tooltip/TooltipContent';
import { PublishedStatus } from '../lib/api/types/general';
import { Localization } from '../lib/i18n';

export const deDE: Localization = {
  test: {
    content: () => 'Test Inhalt',
  },
  admin: {
    title: () => 'Administration',
    organizers: {
      subtitle: () => 'Anbieter:innen',
    },
  },
  dashboard: {
    info: {
      start: {
        title: () => 'So legst du los',
        organizer: {
          title: () => 'Anbieter:in-Profil erstellen',
          content: () => (
            <DashboardTileText>
              <DashboardTileTextP>
                Du willst Daten zu einer Kultureinrichtung, deinem Kollektiv oder dir als
                Solo-Künstler:in veröffentlichen? Leg dazu ein Anbieter:in-Profil an. Mit diesem
                Profil verbindest du später Orte und Angebote.
              </DashboardTileTextP>
            </DashboardTileText>
          ),
          button: () => 'Jetzt Profil erstellen',
          done: () => 'Anbieter:in wurde erstellt',
        },
        offer: {
          title: () => 'Angebot erstellen',
          content: () => (
            <DashboardTileText>
              <DashboardTileTextP>
                Ob Performance oder Tanzkurs, Online-Sammlung oder Recherche-Service - hier kannst
                du dein Kulturangebot in seiner ganzen Vielfalt beschreiben.
              </DashboardTileTextP>
            </DashboardTileText>
          ),
          button: () => 'Angebot erstellen',
          done: () => 'Angebot wurde erstellt',
        },
        location: {
          title: () => 'Orte anlegen',
          content: () => (
            <DashboardTileText>
              <DashboardTileTextP>
                Schluss mit Adressen-Copy-Paste! Gib Informationen zu deinem Veranstaltungsort nur
                einmal an und nutze sie dann immer wieder für deine Angebote. Du kannst beliebig
                viele Orte anlegen - oder auch einzelne Räume darstellen.
              </DashboardTileTextP>
            </DashboardTileText>
          ),
          button: () => 'Ort(e) erstellen',
          done: () => 'Ort wurde erstellt',
        },
      },
      offers: {
        title: () => 'Aktuelle Angebote',
        link: () => 'Angebot anschauen',
        datePlaceholder: () => 'Noch keine Termine vorhanden',
      },
      organizer: {
        title: () => 'Fülle deine Anbieter:in mit Leben',
        team: {
          title: () => 'Teammitglieder einladen',
          content: () => (
            <DashboardTileText>
              <DashboardTileTextP>
                Du kannst anderen registrierten Nutzer:innen Zugriff auf deine Einträge geben. Diese
                können dann die Daten der Anbieter:in einsehen und bearbeiten, Angebote und Orte für
                sie anlegen.
              </DashboardTileTextP>
            </DashboardTileText>
          ),
          link: () => 'Verwalte dein Team',
        },
        profile: {
          title: () => 'Das Profil ausfüllen',
          content: () => (
            <DashboardTileText>
              <DashboardTileTextP>
                Je mehr Informationen du in das Profil deiner Anbieter:in einträgst, desto
                aussagekräftiger und auffindbarer werden deine Daten.
              </DashboardTileTextP>
              <DashboardTileTextP>
                Auf der Profilseite kannst du allgemeine Informationen angeben, deine Anbieter:in
                kategorisieren und Bilder hochladen.
              </DashboardTileTextP>
            </DashboardTileText>
          ),
          link: () => 'Profil ausfüllen',
        },
      },
      data: {
        title: () => 'Daten (weiter-)nutzen',
        export: {
          title: () => 'Daten-Export',
          content: () => (
            <DashboardTileText>
              <DashboardTileTextP>
                Alle von dir bereitgestellten Daten kannst du über die entsprechenden
                Optionen-Buttons in Standardformaten exportieren.
              </DashboardTileTextP>
            </DashboardTileText>
          ),
        },
        api: {
          title: () => 'API-Nutzung für Entwickler:innen',
          content: () => (
            <DashboardTileText>
              <DashboardTileTextP>
                Nutze unsere API, um Zugang zu allen Angebots-, Orts- und Anbieter:innen-Daten auf
                kulturdaten.berlin zu erhalten oder um deine eigenen Daten in deine Website
                einzubinden.
              </DashboardTileTextP>
              <DashboardTileTextP>
                Für die Nutzung der Schnittstelle benötigst du nur ein API-Token.
              </DashboardTileTextP>
            </DashboardTileText>
          ),
          link: () => 'API-Token erstellen',
        },
      },
      linkList: {
        help: {
          title: () => 'Hilfe',
          text: () =>
            'Du hast Fragen oder benötigst Unterstützung bei der Nutzung der Plattform? Wir helfen dir gern:',
          links: {
            '1': {
              title: () => 'Hilfebereich',
              href: () => 'http://kulturdaten.berlin',
            },
            '2': {
              title: () => 'Das Projekt',
              href: () => 'http://kulturdaten.berlin',
            },
          },
        },
        openSource: {
          title: () => 'Werde kreativ',
          text: () =>
            'kulturdaten.berlin wird komplett Open Source, also quelloffen, entwickelt. Du hast Ideen für neue Funktionen? Hier findest du den Quellcode:',
          links: {
            '1': {
              title: () => 'Interface Code auf GitHub',
              href: () => 'https://github.com/technologiestiftung/kulturdaten-frontend',
            },
            '2': {
              title: () => 'Server Code auf GitHub',
              href: () => 'https://github.com/technologiestiftung/kulturdaten-api',
            },
          },
        },
        contact: {
          title: () => 'Kontakt',
          text: () =>
            'Du hast Fragen, Vorschläge oder Anmerkungen zur dieser Plattform? Melde dich bei uns via:',
          links: {
            '1': {
              title: () => 'hallo@kulturdaten.berlin',
              href: () => 'mailto:hallo@kulturdaten.berlin',
            },
          },
        },
      },
    },
  },
  language: {
    de: () => 'Deutsch',
    en: () => 'Englisch',
  },
  languageTags: {
    addButton: () => 'Sprache hinzufügen',
    addLabel: () => 'Neue Sprache hinzufügen',
    addPlaceholder: () => 'Tippe einfach drauf los, z.B. Deutsch',
    listDelete: () => 'Sprache entfernen',
    listLabel: () => 'Bereits hinzugefügte Sprachen',
    listPlaceholder: () => 'Noch keine Sprachen hinzugefügt',
    noMatch: () => 'Keine passende Sprache gefunden',
  },
  team: {
    list: {
      title: () => 'Teammitglieder',
      email: () => 'E-Mail',
      role: () => 'Rolle',
      pending: () => 'Einladung ausstehend',
      info: () =>
        'Es muss immer min. eine Besitzer:in geben. Es darf aber auch mehrere geben. Wenn du nicht mehr Besitzer:in sein möchtest, kannst du die Besitzer:innen Rolle jemand anderes zuweisen und dir eine andere Rolle zuweisen.',
    },
    roles: {
      owner: () => 'Besitzer:in',
      editor: () => 'Redakteur:in',
    },
    invite: {
      label: () => 'E-Mails von neuen Mitgliedern, die du einladen möchtest',
      title: () => 'Neue Teammitglieder einladen',
      loading: () => 'Lade neue Teammitglieder ein',
      pending: () => 'Einladung ausstehend',
      button: () => 'Einladen',
      hint: ({ max }) =>
        `Du kannst einzelne E-Mails hinzufügen, oder eine Liste mehrerer E-Mails (max. ${max}), getrennt mit "," (Komma).`,
      hint2: () => 'Bespiel: name@example.com, title@another-example.com',
      placeholder: () => 'name@example.com, title@another-example.com',
      invalid: () =>
        'Die Eingabe enthält Fehler. Prüfe bitte, dass du der Form "name@example.com, title@another-example.com" folgst.',
    },
  },
  greetings: {
    welcome: () => 'Willkommen.',
    hello: () => 'Hallo.',
    hey: () => 'Hey.',
    heyhey: () => 'Hey hey.',
  },
  dayPicker: {
    ariaLabel: () => 'Wochentage auswählen',
    minError: ({ min }) => `Bitte min. ${min} ${min === 1 ? 'Tag' : 'Tage'} auswählen`,
  },
  contacts: {
    add: () => 'Kontakt hinzufügen',
    remove: () => 'entfernen',
    placeholder: () => 'Noch keine Kontakte hinzugefügt',
  },
  hours: {
    weekday: () => 'Wochentag',
    from: () => 'von',
    to: () => 'bis',
    add: () => 'Neue Zeit hinzufügen',
    remove: () => 'entfernen',
    note: () => 'Anmerkung zu Zeiten',
  },
  openingHours: {
    add: () => 'Neue Öffnungszeit hinzufügen',
  },
  peakHours: {
    add: () => 'Neue Stoßzeit hinzufügen',
  },
  publish: {
    loadingTitle: ({ categoryName }) => `Veröffentliche ${categoryName}`,
  },
  days: {
    monday: {
      long: () => 'Montag',
      short: () => 'Mo',
    },
    tuesday: {
      long: () => 'Dienstag',
      short: () => 'Di',
    },
    wednesday: {
      long: () => 'Mittwoch',
      short: () => 'Mi',
    },
    thursday: {
      long: () => 'Donnerstag',
      short: () => 'Do',
    },
    friday: {
      long: () => 'Freitag',
      short: () => 'Fr',
    },
    saturday: {
      long: () => 'Samstag',
      short: () => 'Sa',
    },
    sunday: {
      long: () => 'Sonntag',
      short: () => 'So',
    },
  },
  dateCreate: {
    overlayTitle: ({ offerTitle }) => `Termin für ‚${offerTitle}‘ erstellen`,
    create: () => 'Termin erstellen',
    loading: () => ' Erstelle Termin',
  },
  accordion: {
    open: () => 'anzeigen',
    close: () => 'ausblenden',
  },
  userMenu: {
    loggedIn: () => 'Angemeldet',
    settings: () => 'Einstellungen',
    logOut: () => 'Abmelden',
    ariaLabelOpen: () => 'Nutzer:innen Menü anzeigen',
    ariaLabelClose: () => 'Nutzer:innen Menü ausblenden',
    admin: () => 'Administration',
  },
  settings: {
    title: () => 'Einstellungen',
    loading: () => 'Erstelle API Token',
    personal: {
      title: () => 'Persönliche Angaben',
      tooltip: () =>
        'Dein Name wird ausschließlich intern auf kulturdaten.berlin verwendet und ist nicht öffentlich einsehbar. Nur deine gemeinsamen Team-Mitglieder:innen können ihn sehen, wenn ihr gemeinsam die Daten eurer Anbieter:in hinterlegt.',
      firstname: () => 'Vorname',
      lastname: () => 'Nachname',
    },
    api: {
      titleCreate: () => 'API Token erstellen (für Entwickler:innen)',
      titleCreateTooltip: () =>
        'Du möchtest unsere API verwenden? Erzähl uns von deinem Projekt und gib bitte die Website URL bzw. den Projektname an.',
      projectTitle: () => 'Bezeichnung deiner Anwendung',
      projectTitlePlaceholder: () => 'Ein aussagekräftiger Name',
      projectUrl: () => 'URL deiner Anwendung',
      projectDescription: () => 'Projektbeschreibung',
      projectDescriptionPlaceholder: () =>
        'z.B. Smartphone-App zur Kontext-bezogenen Nutzung von Kulturdaten',
      titleList: () => 'Deine bestehenden API Token',
      tokenTitle: () => 'Token',
      tokenName: () => 'Bezeichnung',
      tokenUrl: () => 'URL',
      createButton: () => 'API Token erstellen',
      info: () => (
        <>
          Dies ist eine Funktion für Entwickler:innen. Um die kulturdaten.berlin API zu nutzen,
          benötigst du ein API Token. Dieses wird bei Anfragen an die API deinem Nutzer:innenkonto
          zugeordnet. Wie du das Token verwenden kannst, um Daten über die API zu erhalten, erfährst
          du in unserer{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://beta.api.kulturdaten-berlin.anyvent.cloud/docs/"
          >
            API-Dokumentation
          </a>
        </>
      ),
    },
    docs: {
      title: () => 'Links zur technischen Dokumentation',
      api: () => 'API Dokumenation',
      frontend: () => 'User Interface Dokumentation',
      backend: () => 'Server Dokumentation',
    },
    legal: {
      title: () => 'Weiterführende Links',
      legalNotice: () => 'Impressum',
      terms: () => 'AGB',
      mediaLicense: () => 'Informationen zu Bildlizenzen',
    },
  },
  forms: {
    optional: () => 'optional',
    required: () => 'Pflichtfeld',
    create: () => 'Neue Anbieter:in anlegen',
    baseInfo: () => 'Grundlagen',
    address: () => 'Adressdaten',
    arrival: () => 'Anreiseinformationen',
    name: () => 'Bezeichnung / Name',
    labelGerman: () => 'Deutsch',
    labelGermanEasy: () => 'Deutsch: einfache Sprache',
    labelEnglish: () => 'Englisch',
    labelEnglishEasy: () => 'Englisch: einfache Sprache',
    description: () => 'Beschreibung',
    teaser: () => 'Teaser',
    classification: () => ' Art der Anbieter:in / Arbeitsschwerpunkt (mind. 1)',
    type: () => 'Typ(en)',
    subjects: () => 'Eingrenzung (optional)',
    chooseTypeFirst: () => 'Bitte zunächst Typ auswählen',
    tags: () => 'Tags',
    street1: () => 'Straße und Hausnummer',
    street2: () => 'Adresszusatz',
    zipCode: () => 'Postleitzahl',
    city: () => 'Stadt',
    submit: () => 'anlegen',
    save: () => 'speichern',
    edit: () => 'bearbeiten',
    editCancel: () => 'abbrechen',
    contact: () => 'Kontaktdaten',
    tel: () => 'Telefon',
    email: () => 'E-Mail',
    website: () => 'Website',
    links: () => 'Relevante Links',
    urlPlaceholder: () => 'https://example.com',
    errors: {
      passwordConfirm: () => 'Die eingegebenen Passwörter stimmen nicht überein.',
    },
  },
  start: {
    login: () => 'Login',
    register: () => 'Registrierung',
    dashboard: () => 'App Dashboard',
    imprint: () => 'Impressum',
  },
  login: {
    email: () => 'E-Mail',
    emailPlaceholder: () => 'z.B. email@example.com',
    password: () => 'Passwort',
    passwordReset: () => 'Passwort vergessen?',
    remember: () => 'Eingeloggt bleiben',
    submit: () => 'einloggen',
    headline: () => 'Logge dich jetzt bei kulturdaten.berlin ein!',
    loading: () => 'Anmeldung läuft',
    error: () => 'Die eingegeben Login-Daten sind nicht korrekt.',
    registerReference: () => 'Du bis neu hier?',
    registerReferenceLinkText: () => 'Registriere dich jetzt.',
  },
  logout: {
    loading: () => 'Abmeldung läuft',
    loadingMessage: () => 'Tschüss!',
  },
  register: {
    email: () => 'E-Mail',
    emailPlaceholder: () => 'z.B. email@example.com',
    password: () => 'Passwort',
    passwordPlaceholder: () => 'mind. 8 Zeichen',
    confirmPassword: () => 'Passwort bestätigen',
    submit: () => 'registrieren',
    headline: () => 'Registriere dich jetzt!',
    subline: () =>
      'kulturdaten.berlin ist kostenlos - und macht deine Programminfos einfacher zugänglich!',
    passwordError: () => 'Die eingebeben Passwörter stimmen nicht überein.',
    loading: () => 'Deine Registrierung läuft',
    requestError: () =>
      'Es gibt leider ein Problem mit unserem Server. Bitte probiere es später noch einmal.',
    uniqueEmailError: () => 'Dieser Account existiert bereits.',
    successHeadline: () => 'Super, das hat geklappt!',
    successSubline: () =>
      'Wir haben dir eine E-Mail geschickt. Bitte bestätige deine Anmeldung mit dem Link in der E-Mail.',
    confirmationText: () => (
      <>
        Ich habe die{' '}
        <a target="_blank" rel="noreferrer" href="http://kulturdaten.berlin/agb/">
          Nutzungsbedingungen
        </a>{' '}
        und{' '}
        <a target="_blank" rel="noreferrer" href="http://kulturdaten.berlin/datenschutzerklaerung/">
          Datenschutzerklärung
        </a>{' '}
        von kulturdaten.berlin gelesen und stimme ihnen ausdrücklich zu.
      </>
    ),
    loginReference: () => 'Du hast bereits einen Account?',
    loginReferenceLinkText: () => 'Log dich hier ein.',
  },
  statusBar: {
    status: () => 'Status',
    draft: () => 'Entwurf',
    published: () => 'öffentlich',
    saved: () => 'Gespeichert',
    savedShort: () => 'Gesp.',
  },
  save: {
    issues: () => 'Es sind Fehler in den Eingaben vorhanden.',
    issuesShort: () => 'Fehlerhafte Felder',
    invalid: () => 'Fehler vorhanden',
    hint: () => 'Es gibt noch Felder, die ausgefüllt werden sollten.',
    hintShort: () => 'Leere Felder',
    confirmExit: () =>
      'Es gibt ungespeicherte Änderungen auf dieser Seite. Beim Verlassen gehen diese verloren. Willst du die Seite trotzdem verlassen?',
    alertSymbolAriaLabel: () => 'In diesen Eingabefeldern existieren Fehler.',
    infoSymbolAriaLabel: () => 'In diesen Eingabefeldern sollten Eingaben ergänzt werden.',
  },
  media: {
    title: () => 'Bilder',
    copyright: () => 'Bildnachweis / Urheber:in',
    copyrightPlaceholder: () => 'z.B. © Name Fotograf:in, Veröffentlichungsjahr',
    copyrightTooltip: () =>
      'Bitte gib immer einen Bildnachweis bzw. einen Hinweis auf den/die Urheber:in des Bildes an. Das Format des Bildnachweises hängt von den Vorgaben des/der Urheber:in ab, z.B. © Name des Fotografen od. Agentur, Jahr; Name einer Institution, Foto: © Name Fotograf:in',
    alt: () => 'Alt Text',
    altTooltip: () =>
      'Alt-Texte beschreiben das Bild möglichst eindeutig und in Kürze. Sie sind vor allem für blinde Personen wichtig, die einen Screenreader benutzen, um Website-Inhalte vorlesen zu lassen. Suchmaschinen finden Alt-Texte aber auch prima.',
    license: () => 'Lizenz',
    licenses: {
      '1': {
        name: () => 'mit Namensnennung nutzbar (CC BY)',
        href: () => 'https://creativecommons.org/licenses/by/4.0/deed.de',
      },
      '2': {
        name: () => 'ohne Namensnennung nutzbar (Public Domain)',
        href: () => 'https://creativecommons.org/publicdomain/zero/1.0/deed.de',
      },
      '3': {
        name: () => 'mit Namensnennung - Weitergabe unter gleichen Bedingungen (CC BY SA)',
        href: () => 'https://creativecommons.org/licenses/by-sa/4.0/deed.de',
      },
      '4': {
        name: () => 'nur im Zuge der aktuellen Berichtersattung nutzbar',
        href: () => 'https://kulturdaten.berlin/daten-bereitstellen/#lizenz',
      },
    },
    licenseEnd: () => 'Ablaufdatum Lizenz',
    imageProcessing: () => 'Das Bild wird verarbeitet und geladen',
    openImage: () => 'Original Bild in neuem Tab öffnen',
    url: () => 'URL',
    format: () => 'Format',
    size: () => 'Größe',
    mb: () => 'MB',
    delete: () => 'Bild löschen',
    deleteConfirm: () =>
      'Willst du das Bild wirklich löschen? Dies kann nicht rückgängig gemacht werden.',
    maxReached: ({ count }) => `Maximale Anzahl an Bildern (${count}) erreicht.`,
    hint: () => 'Bitte fülle die Pflichtfelder aus, damit das Bild öffentlich verfügbar ist.',
    dropZoneLabel: () => 'Bilder hochladen',
    usageInfo: () => (
      <>
        <InfoP>Bitte beachte, dass:</InfoP>
        <InfoUl>
          <InfoLi>
            du nur Bilder hochlädst, die von Dritten kostenlos in unveränderter oder veränderter
            Form verwendet werden dürfen - auch zu kommerziellen Zwecken und auf Social Media
            Kanälen.
          </InfoLi>
          <InfoLi>
            du keine Bilder ohne die Zustimmung der Rechteinhaber:innen verwendest. Sind auf den
            Bildern Personen abgebildet, so muss ihr Einverständnis zur Nutzung des Bildes durch
            Dritte vorliegen.
          </InfoLi>
          <InfoLi>
            Datennutzer:innen (z.B. Veranstaltungsportale oder App-Entwickler:innen) das Recht
            erhalten, die Bilddateien unter Nennung der Urheber:innen zur Promotion von Angeboten
            innerhalb der Grenzen des Urheberpersönlichkeitsrechts zu verwenden.
          </InfoLi>
        </InfoUl>
      </>
    ),
    acknowledgedUsageInfo: () => 'Zur Kenntnis genommen',
  },
  logo: {
    title: () => 'Profilbild / Logo',
    titleTooltip: () =>
      'Du kannst ein Logo oder Profilbild für Datennutzende (z.B. Online-Kalender) hochladen und festlegen, unter welcher Lizenz es verwendet werden kann. Ist die mit dem Logo verbundene Marke geschützt, bleibt sie natürlich geschützt, unabhängig von der gewählten Bildlizenz.',
    imageProcessing: () => 'Das Profilbild / Logo wird verarbeitet und geladen',
    openImage: () => 'Original Profilbild / Logo in neuem Tab öffnen',
    delete: () => 'Profilbild / Logo löschen',
    deleteConfirm: () =>
      'Willst du das Profilbild / Logo wirklich löschen? Dies kann nicht rückgängig gemacht werden.',
    hint: () =>
      'Damit das Profilbild / Logo öffentlich verfügbar ist, müssen die Pflichtfelder ausgefüllt werden.',
    dropZoneLabel: () => 'Profilbild / Logo hochladen',
  },
  dropZone: {
    allowedFileTypes: () => 'Erlaubte Dateitypen',
    uploading: ({ progress }) => `Dateien laden hoch: ${progress} geschafft`,
    success: ({ count }) => `Erfolreich ${count} ${count === 1 ? 'Datei' : 'Dateien'} hochgeladen`,
    pending: () => `Hochladen abgeschlossen. Dateien werden verarbeitet.`,
    ariaLabel: () => 'Dateien hochladen',
    maxFileSize: () => 'Maximale Dateigröße pro Upload',
    maxFileSizeExceeded: ({ fileSize, maxFileSize }) =>
      `Die ausgewählten Dateien sind zu groß für den Upload - ${fileSize}, max. ${maxFileSize} erlaubt. Bitte wähle weniger oder kleinere Dateien.`,
  },
  date: {
    from: () => 'Von',
    to: () => 'bis',
    time: () => 'Zeit',
    title: () => 'Titelzusatz',
    titleTooltip: () =>
      "Du kannst einzelnen Terminen dieses Angebots weitere Titelinformationen hinzufügen, z.B. 'Vernissage' oder 'Künstlerin ist anwesend'",
    status: () => 'Status',
    info: () => 'Informationen',
    checkboxAriaLabel: () => 'Termin auswählen',
    allCheckboxAriaLabel: () => 'Alle Termine auswählen',
    details: () => 'Details',
    detailsShowAriaLabel: () => 'Details anzeigen',
    detailsHideAriaLabel: () => 'Details ausblenden',
    scheduled: () => 'findet statt',
    scheduledArchived: () => 'fand statt',
    canceled: () => 'abgesagt',
    past: () => 'vergangen',
    allDay: () => 'ist ganztätig',
    clock: () => 'Uhrzeit',
    toDateInvalid: () => 'Das Enddatum muss später als das Startdatum sein.',
    toTimeInvalid: () => 'Die Endzeit muss später als die Startzeit sein.',
    titleInfoTitle: () => 'Der Titel des Termins wird mit dem Titel des Angebots kombiniert.',
    roomInfo: () => 'Zusatzangabe zum Raum',
    roomInfoPlaceholder: () => 'z.B. spezifischer Raum',
    additionalLinks: () => 'Weiterführende Links',
    ticketLink: () => 'Ticketlink',
    currentDates: () => 'Aktuelle Termine',
    archivedDates: () => 'Vergangene Termine',
    listPlaceholder: () => 'Noch keine Termine vorhanden',
    delete: () => 'Termin löschen',
    selectedCount: ({ count }) => `${count} ausgewählt`,
    selectedDelete: () => 'lösche ausgewählte Termine',
    sort: {
      startsAt: () => 'Startzeit',
      endsAt: () => 'Endzeit',
    },
    mode: {
      title: () => 'Zeitrahmen des Angebots',
      permanent: {
        label: () => 'Dauerangebot',
        description1: () =>
          'Angebote ohne Terminbindung, z.B. Dauerausstellung, Online-Recherche-Service',
        description2: () =>
          'Kulturangebote ohne Terminbegrenzung übernehmen die Öffnungszeiten des zugewiesenen Ortes.',
      },
      scheduled: {
        label: () => 'Angebot mit Terminen',
        description1: () => 'Zeitlich begrenzte Angebote, z.B. Konzert, Führung, Kurse',
        description2: () =>
          'Angebote mit Terminen können beliebig viele Einzel- und Serientermine enthalten, mit jeweils individuellen Zeiten.',
      },
    },
    recurrence: {
      title: () => 'Termin wiederholen',
      frequency: () => 'Häufigkeit',
      days: () => 'Tage',
      weeks: () => 'Wochen',
      months: () => 'Monate',
      never: () => 'nie wiederholen',
      daily: () => 'täglich',
      weekly: () => 'wöchentlich',
      monthly: () => 'monatlich',
      repeatEvery: () => 'Wiederholen alle',
      onWeekdays: () => 'An Wochentagen',
      ends: () => 'Endet am',
    },
  },
  general: {
    german: () => 'Deutsch',
    english: () => 'Englisch',
    deleting: {
      confirm: ({ name }) =>
        `Bist du sicher, dass du ${name} löschen möchtest? Dies kann nicht rückgängig gemacht werden.`,
      loading: () => 'Wird gelöscht',
      organizer: {
        singular: () => 'diese Anbieter:in',
        plural: () => 'diese Anbieter:innen',
      },
      offer: {
        singular: () => 'dieses Angebot',
        plural: () => 'diese Angebote',
      },
      location: {
        singular: () => 'diesen Ort',
        plural: () => 'diese Orte',
      },
      media: {
        singular: () => 'dieses Bild',
        plural: () => 'diese Bilder',
      },
      logo: {
        singular: () => 'dieses Logo',
        plural: () => 'diese Logos',
      },
      date: {
        singular: () => 'diesen Termin',
        plural: () => 'diese Termine',
      },
    },
    name: () => 'Bezeichnung',
    city: () => 'Stadt',
    created: () => 'erstellt',
    updated: () => 'geändert',
    create: () => 'erstelle',
    close: () => 'schließen',
    back: () => 'zurück',
    choose: () => 'Bitte auswählen',
    delete: () => 'löschen',
    add: () => 'hinzufügen',
    type: () => 'Typ',
    publish: () => 'veröffentlichen',
    filter: () => 'Filter',
    sort: () => 'Sortierung',
    ascending: () => 'aufsteigend',
    descending: () => 'absteigend',
    ascendingAriaLabel: () => 'Liste aufsteigend sortieren',
    descendingAriaLabel: () => 'Liste absteigend sortieren',
    show: (props) => `${props?.name ? `${props.name} ` : ''}anzeigen`,
    hide: (props) => `${props?.name ? `${props.name} ` : ''}ausblenden`,
    expandList: () => 'Listenansicht vergrößern',
    minimizeList: () => 'Listenansicht verkleinern',
    actions: () => 'Aktionen',
    actionsOpen: () => 'Aktionsmenü öffnen',
    actionsClose: () => 'Aktionsmenü schließen',
    save: () => 'speichern',
    saving: () => 'speichert',
    saved: () => 'gespeichert',
    loading: () => 'lädt',
    max: () => 'max.',
    topics: () => 'Stichworte (optional)',
    topicsPlaceholder: () => 'Tippe einfach drauflos, z.B. Bauhaus',
    takeAFewSeconds: () => 'Dies kann ein paar Sekunden dauern.',
    serverProblem: () =>
      'Es gibt leider ein Problem mit dem Server. Das tut uns leid. Versuche es bitte später noch einmal.',
    remove: () => 'entfernen',
    telPlaceholder: () => 'z.B. +49301234567',
  },
  tags: {
    boxLabel: () => 'Bereits hinzugefügte Stichworte',
    delete: () => 'Stichwort löschen',
    add: () => 'Stichwort hinzufügen',
    placeholder: () => 'Noch kein Stichwort hinzugefügt',
    autocompleteLabel: () => 'Neues Stichwort hinzufügen',
    noOptions: () => 'Kein passendes Stichwort gefunden',
  },
  tooltip: {
    open: () => 'Tooltip anzeigen',
    close: () => 'Tooltip schließen',
  },
  linkList: {
    placeholder: () => 'Noch keine Links hinzugefügt',
    inputPlaceholder: () => 'https://example.com',
    addNew: () => 'Neuen Link hinzufügen',
    maxLinks: ({ amount }) => `maximal ${amount} Links`,
    maxReached: ({ amount }) =>
      `Das Maximum von ${amount} Links ist erreicht. Mehr Links können nicht hinzugefügt werden. Bestehende Links können aber verändert oder gelöscht werden.`,
  },
  richText: {
    history: () => 'Verlauf',
    format: () => 'Überschrift',
    lists: () => 'Listen',
    style: () => 'Textstil',
    undo: () => 'Änderung rückgängig machen',
    redo: () => 'Änderung wiederherstellen',
    paragraph: () => 'Text',
    headingOne: () => 'Überschrift groß',
    headingTwo: () => 'Überschrift mittel',
    headingThree: () => 'Überschrift klein',
    listOrdered: () => 'Nummerierte Liste',
    listUnordered: () => 'Normale Liste',
    bold: () => 'Fett',
    italic: () => 'Kursiv',
    underline: () => 'Unterstrichen',
  },
  overlay: {
    ariaClose: () => 'Überlagerndes Fenster schließen',
  },
  pagination: {
    next: () => 'weiter',
    previous: () => 'zurück',
    currentPage: ({ currentPage, lastPage }) => `Seite ${currentPage} von ${lastPage}`,
  },
  requirements: {
    title: () => 'Veröffentlichung',
    label: () => 'Pflichtangaben',
    fulfilled: ({ count, total }) => `${count} von ${total} ausgefüllt`,
    notFulfilled: () => 'Pflichtangabe fehlt',
    isFulfilled: () => 'Pflichtangabe erfüllt',
    nameLabel: ({ fieldName }) => `Zum Feld '${fieldName}' gehen`,
  },
  categories: {
    organizer: {
      list: {
        loading: () => 'Lade Anbieter:innen',
        nothing: () => 'Es gibt noch keine Anbieter:innen. Lege gerne eine:n an.',
        nothingFilter: () => 'Keine Anbieter:innen für die aktive Filterung gefunden.',
      },
      filters: {
        status: {
          label: () => 'Status',
          all: () => 'alle',
          published: () => 'öffentlich',
          draft: () => 'Entwurf',
        },
        type: {
          label: () => 'Typ',
          all: () => 'alle',
        },
        subject: {
          label: () => 'Sparte',
          all: () => 'alle',
          typeFirst: () => 'erst Typ auswählen',
        },
        activeFilters: ({ activeFiltersCount }) => `${activeFiltersCount} ausgewählt`,
      },
      requirements: {
        name: () => 'Bezeichnung / Name',
        description: () => 'Beschreibung',
        categorization: () => 'Art der Anbieter:in',
        address: () => 'Kontakt intern',
      },
      title: {
        plural: () => 'Anbieter:innen',
        singular: () => 'Anbieter:in',
      },
      publishText: () => (
        <>
          Diese Anbieter:in ist ein{' '}
          <StatusFlag status={PublishedStatus.draft} variant={StatusFlagVariant.inline} />. Fülle
          die Pflichtangaben aus und veröffentliche sie. Erst dann sind ihre Daten, Angebote und
          Orte öffentlich verfügbar.
        </>
      ),
      form: {
        create: () => 'Neue Anbieter:in anlegen',
        baseInfo: () => 'Grundlagen',
        address: () => 'Kontakt intern - für unsere Rückfragen zu diesem Anbieter:in-Profil',
        addressTooltip: () =>
          'Diese Angaben sind für unseren internen Gebrauch und werden nicht veröffentlicht. Bitte gib hier Kontakt- und Adressdaten an, über die wir deine Institution / Gruppe / dich bei internen Rückfragen oder Problemen erreichen können.',
        name: () => 'Bezeichnung / Name',
        nameTooltip: () =>
          'Bitte gib hier den Namen deiner Institution, Gruppe oder auch die Bezeichnung ein, die du als Solo-Künstler:in nutzt. Die hier gewählte Bezeichnung erscheint dann automatisch als Veranstalter:/Anbieter:innen-Name, wenn du ein Angebot mit diesem Profil verknüpfst.',
        description: () => 'Über euch / dich - Beschreibung (max. 1500 Zeichen)',
        descriptionTooltip: () =>
          'Was macht deine Institution / Gruppe / deine eigene künstlerische Arbeit aus? Hier gibst du einen kurzen Überblick für euer / dein Publikum.',

        submit: () => 'anlegen',
        save: () => 'speichern',
        edit: () => 'bearbeiten',
        editCancel: () => 'abbrechen',
        contact: () => 'Kontaktdaten für Publikumsanfragen',
        tel: () => 'Telefon',
        email: () => 'E-Mail',
        website: () => 'Website',
        links: () => 'Weitere Links (z.B. Social Media Kanäle)',
        additionalContacts: () => 'Weitere öffentliche Kontakte (z.B. für Presse)',
        additionalContactsTooltip: () =>
          'Hier ist Platz für weitere Ansprechpersonen oder Servicestellen. Kontakte, die nur für einzelne Events / Kulturangebote relevant sind, gibst du direkt via Angebote beim betreffenden Event ein.',
        classification: () => 'Art der Anbieter:in / Arbeitsschwerpunkt (mind. 1)',
        topicsTooltip: () => (
          <>
            <TooltipP>
              Mit Stichworten kannst du diese:n Anbieter:in noch detaillierter beschreiben, z.B.
              über Stichwort-tags zum Sammlungsschwerpunkt oder der Kunstrichtung, in der ihr euch
              zu Hause fühlt.
            </TooltipP>
            <TooltipP>
              Diese Begriffe basieren auf der Gemeinsamen Normdatei (GND) der Deutschen
              Nationalbibliothek. Sollten Begriffe fehlen oder hier fehl am Platz sein, schreib uns
              unter <a href="mailto:hallo@kulturdaten.berlin">hallo@kulturdaten.berlin</a>!
            </TooltipP>
          </>
        ),
      },
      tabs: {
        info: () => 'Informationen',
        categorization: () => 'Kategorisierung',
        media: () => 'Bilder',
      },
      metaLinks: {
        rights: () => 'Zugriffsrechte',
        export: () => 'Export',
      },
      sort: {
        name: () => 'Bezeichnung',
        created: () => 'Erstellungsdatum',
        updated: () => 'Zuletzt geändert',
      },
      view: {
        label: () => 'Darstellung',
        cards: () => 'Karten',
        table: () => 'Tabelle',
      },
      table: {
        created: () => 'erstellt',
        updated: () => 'geändert',
      },
      options: {
        exportCsv: () => 'Export als CSV',
        exportXls: () => 'Export als Excel',
        delete: () => 'Anbieter:in löschen',
        deleteConfirm: () =>
          'Bist du sicher, dass du diese Anbieter:in löschen möchtest? Dies kann nicht rückgängig gemacht werden.',
        deleting: () => 'Lösche Anbieter:in',
      },
    },
    offer: {
      list: {
        loading: () => 'Lade Angebote',
        nothing: () => 'Es gibt noch keine Angebote. Lege gerne eines an.',
        nothingFilter: () => 'Keine Angebote für die aktive Filterung gefunden.',
      },
      requirements: {
        name: () => 'Angebotstitel',
        description: () => 'Beschreibung',
        categorization: () => 'Themen-Kategorie',
        mainType: () => 'Angebotsart',
      },
      title: {
        plural: () => 'Angebote',
        singular: () => 'Angebot',
      },
      publishText: () => (
        <>
          Dieses Angebot ist ein{' '}
          <StatusFlag status={PublishedStatus.draft} variant={StatusFlagVariant.inline} />. Fülle
          die Pflichtangaben aus und veröffentliche es. Erst dann sind seine Daten und Termine
          öffentlich verfügbar.
        </>
      ),
      form: {
        create: () => 'Neues Angebot anlegen',
        name: () => 'Angebotstitel',
        nameGerman: () => 'Deutsch',
        nameGermanSimple: () => 'Deutsch: einfache Sprache',
        nameEnglish: () => 'Englisch',
        nameEnglishSimple: () => 'Englisch: einfache Sprache',
        description: () => 'Beschreibung',
        submit: () => 'anlegen',
        save: () => 'speichern',
        edit: () => 'bearbeiten',
        editCancel: () => 'abbrechen',
        locationInfo: () => 'Hinweis zum Angebotsort',
        locationInfoPlaceholder: () => 'z.B. spezifischer Raum',
        peakHours: () => 'Stoßzeiten',
        mainType: {
          title: () => 'Angebotsart',
          choose: () => 'Um was handelt es sich? z.B. Ausstellung, Konzert, Führung...',
        },
        pricing: {
          title: () => 'Preise & Eintritt',
          feeLabel: () => 'Kosten',
          registrationLabel: () => 'Anmeldung',
          hasFee: () => 'Kostenpflichtig',
          noFee: () => 'Kostenlos',
          needsRegistration: () => 'Anmeldepflichtig',
          noRegistration: () => 'Nicht anmeldepflichtig',
          ticketUrl: () => 'Ticketlink / Ticketinformation',
          ticketUrlPlaceholder: () => 'https://example.com',
          registrationUrl: () => 'Anmeldelink / Anmeldungsinformation',
          registrationUrlPlaceholder: () => 'https://example.com',
        },
        organizer: {
          label: () => 'Angeboten von',
          choose: () => 'Anbieter:in auswählen',
          edit: () => 'Anbieter:in ändern',
          title: ({ name }) => `Anbieter:in für ‚${name}‘ wählen`,
        },
        location: {
          label: () => 'Veranstaltungsort',
          choose: () => 'Ort auswählen',
          edit: () => 'Ort ändern',
          title: ({ name }) => `Ort für ‚${name}‘ wählen`,
        },
        topics: () => 'Themen-Kategorie (Pflichtfeld)',
        topicsTooltip: () => (
          <>
            <TooltipP>
              Mit Themen-tags kannst du noch genauer kennzeichnen, um was es in deinem Angebot geht,
              z.B. bestimmte Musikarten oder Kunstepochen.
            </TooltipP>
            <TooltipP>
              Diese Begriffe basieren auf der Gemeinsamen Normdatei (GND) der Deutschen
              Nationalbibliothek. Sollten Begriffe fehlen oder hier fehl am Platz sein, schreib uns
              unter <a href="mailto:hallo@kulturdaten.berlin">hallo@kulturdaten.berlin</a>!
            </TooltipP>
          </>
        ),
      },
      tabs: {
        info: () => 'Informationen',
        categorization: () => 'Kategorisierung',
        dates: () => 'Termine',
        audience: () => 'Zielgruppe',
        accessibility: () => 'Barrierefreiheit',
        media: () => 'Bilder',
      },
      options: {
        exportCsv: () => 'Export als CSV',
        exportXls: () => 'Export als Excel',
        delete: () => 'Angebot löschen',
        deleteConfirm: () =>
          'Bist du sicher, dass du dieses Angebot löschen möchtest? Dies kann nicht rückgängig gemacht werden.',
        deleting: () => 'Lösche Angebot',
      },
    },
    location: {
      list: {
        loading: () => 'Lade Orte',
        nothing: () => 'Es gibt noch keine Orte. Lege gerne einen an.',
        nothingFilter: () => 'Keine Orte für die aktive Filterung gefunden.',
        allOrMy: () => 'Zeige Auswahl',
        allLocations: () => 'Alle öffentlichen Orte',
        myLocations: () => 'Nur meine Orte',
      },
      title: {
        plural: () => 'Orte',
        singular: () => 'Ort',
      },
      publishText: () => (
        <>
          Dieser Ort ist ein{' '}
          <StatusFlag status={PublishedStatus.draft} variant={StatusFlagVariant.inline} />. Fülle
          die Pflichtangaben aus und veröffentliche ihn. Erst dann sind seine Daten öffentlich
          verfügbar.
        </>
      ),
      requirements: {
        name: () => 'Bezeichnung des Ortes',
        description: () => 'Beschreibung',
      },
      form: {
        openingHours: () => 'Öffnungszeiten',
        create: () => 'Neuen Ort anlegen',
        address: () => 'Adressdaten',
        name: () => 'Bezeichnung des Ortes',
        namePlaceholder: () => "z.B. 'Kleines Theater' oder 'Galerie XY auf Youtube'",
        nameGerman: () => 'Bezeichnung Deutsch',
        nameGermanSimple: () => 'Bezeichnung Deutsch: einfache Sprache',
        nameEnglish: () => 'Bezeichnung Englisch',
        nameEnglishSimple: () => 'Bezeichnung Englisch: einfache Sprache',
        description: () => 'Beschreibung',
        street1: () => 'Straße und Hausnummer',
        street2: () => 'Adresszusatz',
        zipCode: () => 'Postleitzahl',
        city: () => 'Stadt',
        submit: () => 'anlegen',
        save: () => 'speichern',
        edit: () => 'bearbeiten',
        editCancel: () => 'abbrechen',
        contact: () => 'Kontaktdaten',
        tel: () => 'Telefon',
        district: () => 'Bezirk',
        districtPlaceholder: () => 'Bezirk auswählen',
        url: () => 'URL / Online-Informationen zum Ort',
        urlPlaceholder: () => 'z.B. https://theaterberlin.de/virtualstage',
        rent: {
          title: () => 'Vermietung',
          url: () => 'Vermietungslinks / Vermietungsinformation',
          urlPlaceholder: () => 'z.B. https://example.com',
        },
        type: {
          title: () => 'Typ des Ortes',
          physicalLabel: () => 'Physischer Ort',
          physicalText: () => 'Ein physisch existierender Ort mit Adresse, z.B. ein Gebäude.',
          virtualLabel: () => 'Virtueller Ort',
          virtualText: () =>
            'Du bietest Angebote auch online an - auf einer eigenen Plattform oder Social Media-Kanälen? Lege hier deine Webpräsenz einmal an und verknüpfe sie später bequem mit deinen Online-Angeboten.',
        },
      },
      tabs: {
        info: () => 'Informationen',
        service: () => 'Service',
        accessibility: () => 'Barrierefreiheit',
        media: () => 'Bilder',
      },
      options: {
        exportCsv: () => 'Export als CSV',
        exportXls: () => 'Export als Excel',
        delete: () => 'Ort löschen',
        deleteConfirm: () =>
          'Bist du sicher, dass du diesen Ort löschen möchtest? Dies kann nicht rückgängig gemacht werden.',
        deleting: () => 'Lösche Ort',
      },
    },
  },
  menu: {
    title: () => 'kulturdaten.berlin',
    main: () => 'Hauptmenü',
    button: {
      open: () => 'Menü öffnen',
      close: () => 'Menü schließen',
    },
    start: {
      title: () => 'Start',
      items: {
        back: () => 'zurück zum Dashboard',
        dashboard: () => 'Dashboard',
        notifications: () => 'Benachrichtigungen',
        profile: () => 'Profil',
        team: () => 'Team',
        login: () => 'Login',
        registration: () => 'Registrierung',
        info: () => 'Info',
      },
    },
    organizer: {
      title: () => 'Anbieter:innen',
      items: {
        overview: () => 'Übersicht',
        create: () => 'anlegen',
      },
    },
    offer: {
      title: () => 'Angebote',
      items: {
        overview: () => 'Übersicht',
        create: () => 'anlegen',
      },
    },
    location: {
      title: () => 'Orte',
      items: {
        overview: () => 'Übersicht',
        create: () => 'anlegen',
      },
    },
    user: {
      title: () => 'Nutzer:in',
      items: {
        profile: () => 'Mein Profil',
        settings: () => 'Meine Einstellungen',
        logout: () => 'Abmelden',
      },
    },
    localeSwitch: {
      label: () => 'Sprache / Language',
      description: () => 'Sprache wählen, choose Language',
    },
    organizerBandShowAriaLabel: () => 'Liste meiner Anbieter:innen ausklappen',
    organizerBandCollapseAriaLabel: () => 'Liste meiner Anbieter:innen einklappen',
    createOrganizer: () => 'Neue Anbieter:in erstellen',
  },
};
