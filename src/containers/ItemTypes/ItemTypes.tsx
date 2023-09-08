import styles from "../../style.tsx";

const ItemTypes = () => {
  return (
      <div className={`${styles.NewItemGrid}`}>
        <div className={`${styles.ComponentBg} ${styles.NewItemSection}`}></div>
        <div className={`${styles.ComponentBg} ${styles.NewItemSection}`}></div>
        <div className={`${styles.ComponentBg} ${styles.NewItemSection}`}></div>
      </div>
  );
};

export default ItemTypes;
