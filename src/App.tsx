import styles from "./style";
import {useEffect, useState} from "react";

const App = () => {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme:dark)'),matches){

    }
  }, []);
  return (
      <div className={`${styles.PrimaryBgDark}`}>
        <button className="rounded-full">Save Changes</button>
        <p>Test</p>
      </div>
  );
};

export default App;
