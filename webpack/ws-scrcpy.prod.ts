import { backend, frontend } from './ws-scrcpy.common';
import { Configuration } from 'esbuild';

const prodOpts: Configuration = {
    mode: 'production',
};

const front = () => {
    return Object.assign({}, frontend(), prodOpts);
};
const back = () => {
    return Object.assign({}, backend(), prodOpts);
};

module.exports = [front, back];