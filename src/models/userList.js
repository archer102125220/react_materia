
import { GET_userList, /*SOCKET_UserList*/ } from './../services/userList';
import Socket from './../utils/socket';

export default {

  namespace: 'userList',

  state: {
    userList: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      const socketEvents = [
        { name: 'testEvent', event: (payload) => dispatch({ type: 'set_user_list', payload: payload }) },
      ];
      Socket.eventInit(socketEvents);
    },
  },

  effects: {
    *GET_UserList({ payload }, { call, put }) {  // eslint-disable-line
      const data = yield call(GET_userList);
      yield put({ type: 'set_user_list', payload: data });
    },
    *SOCKET_UserList({ payload, callback, loading, token }, { call, put }) {  // eslint-disable-line
      // const data = yield call(GET_userList, 'testEvent', payload, token);
      // console.log(call.toString());
      // console.log(put.toString());
      yield put({ type: 'set_user_list', payload: payload });
    },
  },

  reducers: {
    set_user_list(state, { payload }) {
      return { ...state, userList: payload };
    },
  },

};
