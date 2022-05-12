## Custom App config based on development scope/phase

> Example directory layout

    .
    ├── app                   # App config directory
    │   │
    │   ├── default.js          # The default config object .
    │   └── index.js            # Entry export file for the folder
    │
    ├── theme                 # Theme object for Styled components theme provider
    ├── translation           # Translations
    │   │
    │   ├── entries             # JS object config for each locale
    │   ├── locales             # Json files for each locale containing keys and their translation
    │   └── index.js            # Entry export file for the folder
