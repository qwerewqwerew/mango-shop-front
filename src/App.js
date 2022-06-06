import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./components/MainPage";
import UploadPage from "./components/UploadPage";
import ProductPage from "./components/ProductPage";
function App() {
	return (
		<div>
			<div id="header">
				<div id="header-area">
					<Link to="/"><img src="images/icons/logo.png" alt="" /></Link>
				</div>
			</div>
			<Routes>
				<Route path="/" element={<MainPage />}></Route>
				<Route path="/UploadPage" element={<UploadPage />}></Route>
				<Route path="/ProductPage/:id" element={<ProductPage />}></Route>
			</Routes>
			<div id="footer">
				<a href="">회사소개</a>
				<a href="">이용약관</a>
				<a href="">통신판매업:123-1234</a>
				<a href="">사업자등록번호:456-56-78951</a>
			</div>
		</div>
	);
}

export default App;
