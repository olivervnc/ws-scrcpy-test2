import { backend, frontend } from './ws-scrcpy.common';

const esbuildConfig = {
    define: {
        'process.env.NODE_ENV': '"production"',
    },
};

const front = frontend();
const back = backend();

export default [front, back].map((config) => ({
    ...config,
    ...esbuildConfig,
}));