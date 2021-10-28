import { UseHelmet } from "./hooks/UseHelmet";
import { HeaderComponent } from './components/header/HeaderComponent';
import { UseApiCaller } from './hooks/UseApiCaller';
import { GET } from "./constants/Constants";

const App = () => {
  UseHelmet("Diet Planner for You");
  const getFoodData = UseApiCaller('food', GET);

  console.log(getFoodData, "from app");
  return (
    <div >
      <HeaderComponent />
      <main>Main here</main>
      <footer>Footer here</footer>
    </div>
  );
}

export default App;
