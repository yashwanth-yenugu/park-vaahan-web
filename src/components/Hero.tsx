import styles from '../styles/Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Transforming Parking in Urban Communities
        </h1>
        <p className={styles.subtitle}>
          Connect with nearby apartment complexes and gated communities to secure 
          your monthly parking space. Say goodbye to daily parking hassles.
        </p>
        <div className={styles.cta}>
          <button className={styles.primary}>Find Parking Space</button>
          <button className={styles.secondary}>List Your Property</button>
        </div>
      </div>
    </section>
  );
};
