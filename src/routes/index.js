import React from 'react';
import { APP_CONTAINER } from '../constants/config';
import styles from './index.less';

const App = () => {
  return (
    <div className={styles.app}>
      <div id={APP_CONTAINER} />
    </div>
  );
}

export default App;
