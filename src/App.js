import "./styles.css";
import data from "./data";
import {Route} from 'react-router-dom'
import Main from "./pages/Main";
import Stocks from "./pages/Stocks";
import About from "./pages/About";
import CompanyStock from "./pages/CompanyStock";
import Nav from "./components/Nav";

export default function App() {
	return (
		<>
			<Nav />
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/stocks'>
        <Stocks data={data}/>
      </Route>
      <Route path='/stocks/:symbol'>
        <CompanyStock />
      </Route>
		</>
	);
}
