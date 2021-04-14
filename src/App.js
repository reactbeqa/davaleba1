import "./App.css";
import Greetings from "./components/greeting/Greetings";
import Count from "./components/count/Count";
import Theme from "./components/theme/Theme";
const styles = {};
function onclick(event) {
  styles.backgroundColor = "red";
}
function App() {
  return (
    <div>
      <Greetings />
      <Count />
      <Theme type="red" onClick={onclick} style={styles} />
      
    </div>
  );
}

export default App;
