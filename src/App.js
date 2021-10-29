import { UseHelmet } from "./hooks/UseHelmet";
import { HeaderComponent } from './components/header/HeaderComponent';
import { UseApiCaller } from './hooks/UseApiCaller';
import { GET } from "./constants/Constants";
import { TableComponent } from './components/table/TableComponent';
import { SearchbarComponent } from './components/searchbar/SearchbarComponent';

const App = () => {
  UseHelmet("Diet Planner for You");
  const getFoodData = UseApiCaller('food', GET);
  const leafyVegetables = getFoodData?.response?.vegetables?.leafy;
  const rootVegetables = getFoodData?.response?.vegetables?.roots;
  const treeVegetables = getFoodData?.response?.vegetables?.trees;

  

  return (
    <div >
      <HeaderComponent />

      <SearchbarComponent />
      <main>
        <label>Leafy Vegetables</label>
        <TableComponent data={leafyVegetables} /> <br/>

        <label>Root Vegetables</label>
        <TableComponent data={rootVegetables} /> <br/>

        <label>Vegetables from Trees</label>
        <TableComponent data={treeVegetables}/> <br/>
      
      </main>
      <footer>Footer here</footer>
    </div>
  );
}

export default App;
