import configPro from './pro';
import configTest from './test';
import configDev from './dev';
const env = process.env.NODE_ENV;
let config: any;
if (env === 'production') {
  config = configPro;
} else if (env === 'test') {
  config = configTest;
} else {
  config = configDev;
}
export default config;
