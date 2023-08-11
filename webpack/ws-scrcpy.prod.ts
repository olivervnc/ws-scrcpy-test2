import { backend, frontend } from './ws-scrcpy.common';

const prodOpts: webpack.Configuration = {
    mode: 'production',
};

const front = () => {
    return Object.assign({}, frontend(), prodOpts);
};
const back = () => {
    return Object.assign({}, backend(), prodOpts);
};

module.exports = [front, back];