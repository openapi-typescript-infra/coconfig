import { config } from './src/index';

// During the initial creation of tsconfig. sythentic default imports are not allowed.
// This is here so we can handle both pre and post initial creation
const tsconfig = config['tsconfig.json'] || (config as any).default['tsconfig.json'];

tsconfig.configuration.compilerOptions.target = 'ES2019';

export default config;
