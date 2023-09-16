import styles from "../../style.tsx";
import {useEffect, useState} from "react";
import {Moon, Sun} from "../../assets/svg/SvgIcon.tsx";

const NavigationBar = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handelThemeSwitch = () => {
    console.log('theme switch')
    setTheme(theme==='dark' ? 'light' : 'dark');
  };

  return (
      <nav className={`${styles.NavBase}`}>

        <div className="">
          <button onClick={handelThemeSwitch} type="button" className="text-white">
            {theme !== 'light' ? <Moon/> : <Sun/>}
          </button>
        </div>

        <div className=" text-green-400 dark:text-white ">NavigationBar</div>
      </nav>
  );
};

export default NavigationBar;
