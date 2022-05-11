import React from 'react';
import styles from './index.less';

function App() {
  if (!window.__POWERED_BY_QIANKUN__) {
    return '请通过主应用访问'
  }
  return (
    <div className={styles.app}>
      微应用-app1
    </div>
  );
}

export default App;
