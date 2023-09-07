import styles from "./style";
import {NavigationBar} from "./containers/ash.tsx";
import NavigationBarBottom from "./containers/NavigationBar/NavigationBarBottom.tsx";

const App = () => {
  return (
      <div className={`${styles.PrimaryBg}`}>
        {/*Nav*/}
        <NavigationBar/>
        {/*Slider*/}
        <div className={`${styles.ComponentBase} mt-0 laptop:mt-24`}>
          <div className={`${styles.SliderBase} ${styles.ComponentBg}`}></div>
        </div>
        {/*Items*/}
        <div className={`${styles.MultiComponentBg}`}>
          <div className={`${styles.ItemsLeftSection}`}>
            <div className={`${styles.ComponentBase} ${styles.SocialSection} ${styles.ComponentBg}`}></div>
            <div className={`${styles.ComponentBase} ${styles.SocialSection} ${styles.ComponentBg}`}></div>
            <div className={`${styles.ComponentBase} ${styles.ItemListSection} ${styles.ComponentBg}`}></div>
            <div className={`${styles.ComponentBase} ${styles.ItemListSection} ${styles.ComponentBg}`}></div>
          </div>
          <div className={`${styles.ComponentBg} ${styles.ItemsRightSection}`}></div>
        </div>
        {/*New Items*/}
        <div className={`${styles.NewItemGrid}`}>
          <div className={`${styles.ComponentBg} ${styles.NewItemSection}`}></div>
          <div className={`${styles.ComponentBg} ${styles.NewItemSection}`}></div>
          <div className={`${styles.ComponentBg} ${styles.NewItemSection}`}></div>
        </div>
        {/*Footer*/}
        <div className={`${styles.ComponentBg} mb-24 laptop:mb-0`}>
          <div className={`${styles.FooterSection}}`}></div>
        </div>
        {/*Footer*/}
        <NavigationBarBottom/>
      </div>
  );
};

export default App;
