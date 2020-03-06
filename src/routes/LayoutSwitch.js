import React, { Component } from 'react';
import { Switch } from 'dva/router';
import { connect } from 'dva';
import _ from 'lodash';
import PropTypes from 'prop-types';
import GlobalLayout from './../layouts/GlobalLayout';

const mapStateToProps = (state) => ({
    users: _.get(state, 'users.users', []),
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(
    class LayoutSwitch extends Component {
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
            history: PropTypes.any
        };
    }
);
