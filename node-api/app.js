const { useMiddleware } = require('./helpers/useMiddleware');
const { useRouting } = require('./helpers/useRouting');
const { usePort } = require('./helpers/usePort');
const { useStorage } = require('./helpers/useStorage');

usePort();
useMiddleware();
useRouting();
useStorage();
