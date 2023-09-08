import styles from "../../style.tsx";

const TopItems = () => {
  return (
      <div className={`${styles.NewItemGrid}`}>
        <div className={`${styles.ComponentBg} ${styles.NewItemSection}`}></div>
        <div className={`${styles.ComponentBg} ${styles.NewItemSection}`}></div>
        <div className={`${styles.ComponentBg} ${styles.NewItemSection}`}></div>
      </div>
  );
};

export default TopItems;
