import React from 'react';
import styles from "./style";
import {NavigationBar} from "./containers/index";
const App = () => {
  return (
      <div className={`${styles.PrimaryBackground}`}>
      {/*NavigationBar*/}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavigationBar />
        </div>
      </div>
      <h1 className="text-3xl font-bold">App Library</h1>
      <h1 className="">Test</h1>
    </div>
  );
};

export default App;
