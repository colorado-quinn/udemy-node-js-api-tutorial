const { useMiddleware } = require('./helpers/useMiddleware');
const { usePort } = require('./helpers/usePort');
const { useRouting } = require('./helpers/useRouting');
const { useStorage } = require('./helpers/useStorage');

usePort();
useMiddleware();
useRouting();
useStorage();
