import "./styles.css";
import data from "./data";
import {Router} from 'react-router-dom'
import Main from "./pages/Main";
import Stocks from "./pages/Stocks";
import About from "./pages/About";
import CompanyStock from "./pages/CompanyStock";
import Nav from "./components/Nav";

export default function App() {
	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
		</div>
	);
}
