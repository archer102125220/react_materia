
import Io from 'socket.io-client';
import api from './../apiConfig';

const { socket: socketURL } = api;
const NODE_ENV = process.env.NODE_ENV;

class Socket extends Io {
    constructor(props) {
        super(props);
        const log = (NODE_ENV !== 'production');
        if (log) {
            this.on('connect', () => console.log('Socket is connected'));
            this.on('disconnect', () => console.log('Socket is disconnected'));
        }
    }

    eventInit = (events = []) => {
        events.forEach(({ name, event }) => {
            this[name] = (data = null) => this.emit(name, data);
            this.on(name, (data) => event(data));
        });
    }
}


export default new Socket(socketURL);