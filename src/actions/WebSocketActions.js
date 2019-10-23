// @flow
import {
    CONNECTING,
    CONNECTED,
    DISCONNECTED,
    SOCKETIDS,
    CREATE_ROOM,
    MESSAGE,
    DATACHAN_STAT,
    ROOM_JOIN,
    SET_MY_ID
} from './types';

export const connecting = (dispatch) => {
    dispatch({
        type: CONNECTING
    });
}

export const connected = (dispatch) => {
    dispatch({
        type: CONNECTED
    });
}

export const disconnected = (dispatch) => {
    dispatch({
        type: DISCONNECTED
    });
}

export const createRoom = () => {
    return {
        type: CREATE_ROOM
    }
}

export const roomJoin = (dispatch) => {
    dispatch({
        type: ROOM_JOIN
    });
}
export function roomMembers(socketIds) {
    return {
        type: SOCKETIDS,
        payload: socketIds
    }
}

export function roomMember(socketId) {
    /*AsyncStorage.getItem(MEMBERS_KEY, (err, data) => {
        console.log(data);
        const socketIds = JSON.parse(data);
        socketIds.push(socketId);
    })*/
    return {
        type: SOCKETIDS,
        payload: socketId
    }
}

export function incommingMessage(from, message) {
    return {
        type: MESSAGE,
        payload: {
            from,
            message
        }
    }
}

export function datachannelOpened() {
    return {
        type: DATACHAN_STAT,
        payload: true
    }
}

export function setMySocketID(id) {
    return {
        type: SET_MY_ID,
        payload: id
    }
}


