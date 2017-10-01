import express from 'express';
import path    from 'path';

const PORT = process.env.PORT || 3000;

// This directory will be resolved from inside the lib directory so we need to
// navigate to the src directory.
const PUBLIC_DIR = path.resolve(`${__dirname}/../src/public`);

const app = express();

app.get('/', (req, res, next) => {
  res.sendFile(`${PUBLIC_DIR}/index.html`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
