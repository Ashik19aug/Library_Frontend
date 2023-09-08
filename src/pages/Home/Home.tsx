import {RecentlyUpdated, SliderComponent, TopItems} from "../../containers/ash.tsx";
import styles from "../../style.tsx";
import ItemTypes from "../../containers/ItemTypes/ItemTypes.tsx";

const Home = () => {
  return (
      <div>
        {/*Slider*/}
        <div>
          <SliderComponent/>
        </div>
        {/*Items*/}
        <div className={`${styles.MultiComponentBg}`}>
          <RecentlyUpdated/>
          <TopItems/>
        </div>
        {/*Item Types*/}
        <div>
          <ItemTypes/>
        </div>
      </div>
  );
};

export default Home;
