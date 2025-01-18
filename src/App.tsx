import { ComingSoon } from "./components/ComingSoon";
import styles from "./styles/App.module.css";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <h1 className={styles.title}>Park Vaahan</h1>
      <Hero />
      <ComingSoon />
    </>
  );
}

export default App;
