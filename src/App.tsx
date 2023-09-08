import styles from "./style";
import {Footer, NavigationBar} from "./containers/ash.tsx";
import NavigationBarBottom from "./containers/NavigationBar/NavigationBarBottom.tsx";
import Home from "./pages/Home/Home.tsx";

const App = () => {
  return (
      <div className={`${styles.PrimaryBg}`}>
        <NavigationBar/>
        <Home/>
        <Footer/>
        <NavigationBarBottom/>
      </div>
  );
};

export default App;
