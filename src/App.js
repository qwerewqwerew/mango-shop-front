import "./App.css";
import "antd/dist/antd.css";
import { DownloadOutlined } from "@ant-design/icons";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import MainPage from "./components/MainPage";
import UploadPage from "./components/UploadPage";
import ProductPage from "./components/ProductPage";

function App() {
	let navigate = useNavigate();
	return (
		<div>
			<div id="header">
				<div id="header-area">
					<Link to="/">
						<img src="images/icons/logo.png" alt="" />
					</Link>
					<Button size="large" onClick={ () =>navigate('/UploadPage')} icon={<DownloadOutlined />}>
						상품 업로드
					</Button>
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
