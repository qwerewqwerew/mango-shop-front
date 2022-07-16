import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";
import { API_URL } from "../config/constants.js";
import dayjs from 'dayjs';

const ProductPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [product, setProuct] = useState(null);
	useEffect(() => {
		axios
			.get(`${API_URL}/products/${id}`)
			.then(function (result) {
				setProuct(result.data.product);
				console.log(result);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);
	console.log(product);
	if (product === null) {
		return <h1>상품정보를 받고 있습니다...</h1>;
	}
	return (
		<div>
			<button onClick={() => navigate(-1)} id="back-btn">
				이전화면
			</button>
			<div id="image-box">
				<img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
			</div>
			<div id="profile-box">
				<img src="/images/icons/avatar.png" alt={product.seller} />
				<span className="product-seller">{product.seller}</span>
			</div>
			<div id="contents-box">
				<div id="name">{product.name}</div>
				<div id="price">{product.price}원</div>
				<div id="createAt">{dayjs(product.createdAt).format('YYYY년 MM월 DD일')}</div>
				<pre id="description">{product.description}</pre>
			</div>
		</div>
	);
};
export default ProductPage;
