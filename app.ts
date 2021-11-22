import express from 'express';
import ApiModuleWrapper from './api-routes';

const app = express();
const port = 8080;

ApiModuleWrapper(app);

app.listen(port, () => {
  console.log(`Example app is listening at http://localhost:${port}`);
});
