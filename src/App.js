import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import UploadPage from "./components/UploadPage";
import ProductPage from "./components/ProductPage";
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<MainPage />}></Route>
				<Route path="/UploadPage" element={<UploadPage />}></Route>
				<Route path="/ProductPage/:id" element={<ProductPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
