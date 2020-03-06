import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

const mapStateToProps = () => ({
});


const mapDispatchToProps = dispatch => ({
    goToRoute: (path, callback) => {
        dispatch(routerRedux.push(path));
        if (callback) { callback(); }
    },
    SET_Store: (payload, callback, loading) => {
        dispatch({ type: 'global/SET_Store', payload, callback, loading });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(
    class GlobalLayout extends Component {
        state = {
        }

        render() {
            const { children } = this.props;
            return (
                <div className='layout'>
                    {children}
                </div>
            );
        }

        static propTypes = {
            children: PropTypes.any
        }
    }
);
