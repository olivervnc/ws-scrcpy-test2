import { backend, frontend } from './ws-scrcpy.common';

const front = () => {
    return frontend();
};
const back = () => {
    return backend();
};

module.exports = [front, back];