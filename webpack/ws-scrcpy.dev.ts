import { frontend, backend } from './ws-scrcpy.common';

const devOpts = {
    mode: 'development',
};

const front = () => {
    return {
        ...frontend(),
        ...devOpts,
    };
};
const back = () => {
    return {
        ...backend(),
        ...devOpts,
    };
};

export default [front, back];