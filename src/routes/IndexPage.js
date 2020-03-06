import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
// import { Event } from 'react-socket-io';

function IndexPage() {
  return (
    <div className={styles.normal}>
      {/* <Event event='message' handler={onMessage} /> */}
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href='https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md'>Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

// const onMessage = (message) => {
//   console.log(message);
// };

export default connect()(IndexPage);
