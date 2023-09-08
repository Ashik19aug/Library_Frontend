import styles from "../../style.tsx";

const RecentlyUpdated = () => {
  return (
      <div className={`${styles.ItemsLeftSection}`}>
        <div className={`${styles.ComponentBase} ${styles.SocialSection} ${styles.ComponentBg}`}></div>
        <div className={`${styles.ComponentBase} ${styles.SocialSection} ${styles.ComponentBg}`}></div>
        <div className={`${styles.ComponentBase} ${styles.ItemListSection} ${styles.ComponentBg}`}></div>
        <div className={`${styles.ComponentBase} ${styles.ItemListSection} ${styles.ComponentBg}`}></div>
      </div>
  );
};

export default RecentlyUpdated;
