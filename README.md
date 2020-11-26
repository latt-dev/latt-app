# Latt

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

**Latt** is Ionic/Angular PWA generated with Ionic CLI. It aims to provide a clear and concise way for aspiring web developers to gain knowledge necessary to thrive in particular set of technologies.

## Quick Start

1. `npm install`
1. `npm start`<sup>1</sup>

*<sup>1</sup> You will need to add `.env` file with necessary [environment variables](#obfuscated-environment-variables) to the root folder when working with the app locally*

## Project Structure

* `e2e` - End-To-End tests folder
* `scripts` - environment scripts
* `src` - application source code
    * `_redirects` - file with configs required for correct routing at Netlify server
* `www` - git-ignored production build folder
* `.env` - mandatory git-ignored file with environment variables (request repository owner)
* `.prettierrc` - code formatting configuration 

## Custom Schematics

* Component schematics are set to generate a [single-file component](https://egghead.io/lessons/angular-use-single-file-components-by-default-in-angular) (with inline styles and template) with `ChangeDetectionStrategy.OnPush` by default. `flat` modifier is set to `true` to enforce using [SCAM pattern](https://indepth.dev/emulating-tree-shakable-components-using-single-component-angular-modules/) (single component Angular modules)

## Obfuscated Environment Variables

You need to create a `.env` file with the main environment variables required to run this project before starting to work with it:

```
FB_API_KEY=FireBaseApiKey
FB_AUTH_DOMAIN=FireBaseAuthenticationDomain
FB_DATABASE_URL=FireStoreDataBaseUrl
FB_PROJECT_ID=FireBaseProjectId
FB_STORAGE_BUCKET=FireBaseStorageBucket
FB_MESSAGING_SENDER_ID=FireBaseMessagingSenderId
FB_APP_ID=FireBaseAppId
LATT_DEV_API_URL=LocalBackEndAPIServerUrl
LATT_PROD_API_URL=ProductionBackEndAPIServerUrl
```

## Deployment

The `master` branch of this repository is automatically deployed [to Netlify](https://latt.to). 

## Contributing

Thank you for your interest in contributing to Latt! There are many ways to contribute to this project. Get started [here](https://github.com/latt-dev/latt-app/blob/master/.github/CONTRIBUTING.md).
