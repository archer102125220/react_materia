import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { withStyles } from '@material-ui/core/styles';
import Button from './../lib/components/Button';
import Socket from './../utils/socket';
import yay from '../assets/yay.jpg';

//https://www.sipios.com/blog-tech/how-to-use-styled-components-with-material-ui-in-a-react-app
const styles = {
  normal: {
    fontFamily: 'Georgia, sans-serif',
    marginTop: '3em',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'normal',
    letterSpacing: '-1px',
  },
  welcome: {
    height: '328px',
    background: `url(${yay}) no-repeat center 0`,
    backgroundSize: '388px 328px',
  },
  list: {
    fontSize: '1.2em',
    marginTop: '1.8em',
    listStyle: 'none',
    lineHeight: '1.5em',
    '& code': {
      background: '#f7f7f7',
    }
  },
};

class IndexPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.normal}>
        <h1 className={classes.title}>Yay! Welcome to dva!</h1>
        <div className={classes.welcome} />
        <ul className={classes.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href='https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md'>Getting Started</a></li>
          <li><Button buttons={[{
            element: 'test', event: () => {
              Socket.clickEventSender({ id: 10 });
            }
          }, {
            element: 'test2', event: () => {
              Socket.clickEventSender({ id: 10 });
            }
          }]} /></li>
        </ul>
      </div>
    );
  }
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }
}

export default withStyles(styles)(connect()(IndexPage));
