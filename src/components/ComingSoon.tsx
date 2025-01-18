import styles from "../styles/ComingSoon.module.css";

export const ComingSoon = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Coming Soon to Your Neighborhood</h2>
        <div className={styles.description}>
          {/* Product description will go here */}
        </div>
        <div className={styles.forms}>
          {/* Lead capture forms will go here */}
        </div>
        <div className={styles.contact}>
          {/* Contact information will go here */}
        </div>
      </div>
    </section>
  );
};
