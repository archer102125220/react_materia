import React, { Component } from 'react';
import { Switch } from 'dva/router';
import { connect } from 'dva';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { enquireScreen } from 'enquire-js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import themCofing from './../../theme';
import Socket from './../utils/socket';
import GlobalLayout from './../layouts/GlobalLayout';

const theme = createMuiTheme(themCofing);


const mapStateToProps = (state) => ({
    users: _.get(state, 'userList.userList', []),
});

const mapDispatchToProps = (dispatch) => ({
    // SOCKET_UserList: (payload, callback, loading) => dispatch({ type: 'userList/SOCKET_UserList', payload, callback, loading }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    class LayoutSwitch extends Component {

        componentDidMount = () => {
            // const { SOCKET_UserList } = this.props;

            const socketEvents = [
                { name: 'clickEvent', event: (clickEvent) => console.log({ clickEvent }) }
            ];
            Socket.eventInit(socketEvents);

            this.enquireHandler = enquireScreen(mobile => {
                this.setState({
                    isMobile: mobile ? true : false,
                });
            }/*, '(max-width: 1024px)' */);
        }

        render() {
            const { props } = this;
            const { children/*, history*/ } = props;
            // const { location } = history;
            // const { pathname } = location;
            return (
                <ThemeProvider theme={theme}>
                    {
                        <GlobalLayout {...props}>
                            <Switch {...props}>{children}</Switch>
                        </GlobalLayout>
                    }
                </ThemeProvider>);
        }
        static propTypes = {
            children: PropTypes.any,
            history: PropTypes.any,
            SOCKET_UserList: PropTypes.func,
        };
    }
);
