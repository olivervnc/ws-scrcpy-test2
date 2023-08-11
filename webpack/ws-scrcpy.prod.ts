import { backend, frontend } from './ws-scrcpy.common';

const prodOpts = {
    mode: 'production',
};

const front = () => {
    return {
        ...frontend(),
        ...prodOpts,
    };
};
const back = () => {
    return {
        ...backend(),
        ...prodOpts,
    };
};

export default [front, back];