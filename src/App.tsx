import { ComingSoon } from "./components/ComingSoon";
import { Hero } from "./components/Hero";
import styles from "./styles/App.module.css";

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
