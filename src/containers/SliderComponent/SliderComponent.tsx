import styles, {Size} from "../../style.tsx";

const SliderComponent = () => {
  return (
      <div className={`${styles.ComponentBase} mt-0 laptop:mt-24`}>
        <div className={`${styles.SliderBase} ${styles.ComponentBg} ${Size.Slider}`}>

        </div>
      </div>
  );
};

export default SliderComponent;
