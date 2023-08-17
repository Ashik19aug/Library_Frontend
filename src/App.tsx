import React from 'react';
import styles from "./style";
const App = () => {
  return (
    <div className="bg-zinc-950 w-full overflow-hidden text-white">
      {/*NavigationBar*/}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <h1>NavigationBar </h1>
        </div>
      </div>
      <h1 className="text-3xl font-bold">App Library</h1>
    </div>
  );
};

export default App;
