import express from 'express';
import path    from 'path';

const PORT = process.env.PORT || 3000;

// This directory will be resolved from inside the lib directory so we need to
// navigate to the src directory. Similar requirment for bundles dir.
const PUBLIC_DIR  = path.resolve(`${__dirname}/../src/public`);
const BUNDLES_DIR = path.resolve(`${__dirname}/../bundles`);

const app = express();

app.get('/', (req, res, next) => {
  res.sendFile(`${PUBLIC_DIR}/index.html`);
});

app.get('/index.bundle.js', (req, res, next) => {
  res.sendFile(`${BUNDLES_DIR}/index.bundle.js`);
});

app.get('/sponsorship', (req, res, next) => {
  res.sendFile(`${PUBLIC_DIR}/assets/sponsorship.pdf`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

app.get('/favicon.ico', (req, res, next) => {
  res.sendFile(`${PUBLIC_DIR}/favicon.ico`);
});
