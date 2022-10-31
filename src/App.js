import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Help Me!!</h1>
      <Button text={"Hurry up"}/>
    </div>
  );
}

export default App;
