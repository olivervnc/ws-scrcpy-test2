import { frontend, backend } from './ws-scrcpy.common';

const esbuildConfig = {
    sourcemap: 'inline',
    define: {
        'process.env.NODE_ENV': '"development"',
    },
};

const front = frontend();
const back = backend();

export default [front, back].map((config) => ({
    ...config,
    ...esbuildConfig,
}));