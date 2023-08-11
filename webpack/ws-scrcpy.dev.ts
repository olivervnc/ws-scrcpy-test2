import { frontend, backend } from './ws-scrcpy.common';
import { Configuration } from 'esbuild';

const devOpts: Configuration = {
    devtool: 'inline-source-map',
    mode: 'development',
};

const front = () => {
    return Object.assign({}, frontend(), devOpts);
};
const back = () => {
    return Object.assign({}, backend(), devOpts);
};

module.exports = [front, back];