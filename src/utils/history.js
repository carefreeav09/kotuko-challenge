import { createHashHistory as createHistory } from 'history';

// a singleton history object
const history = createHistory({
    hashType: 'slash',
});
export default history;
