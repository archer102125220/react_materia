import React, { Component } from 'react';
import { Switch } from 'dva/router';
import { connect } from 'dva';
import _ from 'lodash';
import PropTypes from 'prop-types';
// import { enquireScreen } from 'enquire-js';
import Socket from './../utils/socket';
import GlobalLayout from './../layouts/GlobalLayout';


const mapStateToProps = (state) => ({
    users: _.get(state, 'userList.userList', []),
});

const mapDispatchToProps = (dispatch) => ({
    SOCKET_UserList: (payload, callback, loading) => dispatch({ type: 'userList/SOCKET_UserList', payload, callback, loading }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    class LayoutSwitch extends Component {

        componentDidMount = () => {
            const { SOCKET_UserList } = this.props;

            const socketEvents = [
                { name: 'testEvent', event: SOCKET_UserList },
                { name: 'clickEvent', event: (clickEvent) => console.log({ clickEvent }) }
            ];
            Socket.eventInit(socketEvents);

            // this.enquireHandler = enquireScreen(mobile => {
            //     this.setState({
            //         isMobile: mobile ? true : false,
            //     });
            // }/*, '(max-width: 1024px)' */);
        }

        render() {
            const { props } = this;
            const { children, history } = props;
            const { location } = history;
            const { pathname } = location;

            if (pathname.indexOf('/login') === 0) {
                return (
                    <Switch {...props}>
                        {children}
                    </Switch>
                );
            } else {
                return (
                    <GlobalLayout {...props}>
                        <Switch {...props}>{children}</Switch>
                    </GlobalLayout>
                );
            }
        }
        static propTypes = {
            children: PropTypes.any,
            history: PropTypes.any,
            SOCKET_UserList: PropTypes.func,
        };
    }
);
