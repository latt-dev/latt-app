const { writeFile } = require('fs');
const { argv } = require('yargs');
require('dotenv').config();

const environment = argv.environment;

const isProduction = environment === 'prod';

const targetPath = `./src/environments/environment.ts`;

const envFileContent = `
export const environment = {
  production: ${isProduction},
  apiURL: "${isProduction ? process.env.LATT_PROD_API_URL : process.env.LATT_DEV_API_URL}",
  firebase: {
    apiKey: "${process.env.FB_API_KEY}",
    authDomain: "${process.env.FB_AUTH_DOMAIN}",
    databaseURL: "${process.env.FB_DATABASE_URL}",
    projectId: "${process.env.FB_PROJECT_ID}",
    storageBucket: "${process.env.FB_STORAGE_BUCKET}",
    messagingSenderId: "${process.env.FB_MESSAGING_SENDER_ID}",
    appId: "${process.env.FB_APP_ID}"
  }
};
`;

writeFile(targetPath, envFileContent, function(err) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
