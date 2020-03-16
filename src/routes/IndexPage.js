import React from 'react';
import { connect } from 'dva';
import Button from '@material-ui/core/Button';
import Socket from './../utils/socket';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href='https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md'>Getting Started</a></li>
        <li><Button variant='contained' color='primary' onClick={() => {
          Socket.clickEvent({ id: 10 });
        }}>test</Button></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

// const onMessage = (message) => {
//   console.log({ message });
// };

// const onClickEvent = (clickEvent) => {
//   console.log('客戶端');
//   console.log({ clickEvent });
// };

export default connect()(IndexPage);
