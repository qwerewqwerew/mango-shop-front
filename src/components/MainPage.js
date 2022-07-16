import React from "react";
import { Link,useHistory } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {API_URL} from '../config/constants.js';

dayjs.extend(relativeTime);

const MainPage = () => {
	const [products, setProducts] = React.useState([]);
	React.useEffect(() => {
		axios
			.get(`${API_URL}/products/`)
			.then(function (result) {
				const products = result.data.products;
				setProducts(products);
			})
			.catch(function (error) {
				console.log("에러발생:", error);
			});
	}, []);
	return (
		<>
			<div id="body">
				<div id="banner">
					<img src="images/banners/banner1.png" alt="" />
				</div>
				<h1 id="product-title">Products</h1>
				<div id="product-list">
					{products.map((product, idx) => {
						return (
							<div className="product-card" key={idx}>
								<Link className="product-link" to={`/ProductPage/${product.id}`}>
									<div>
										<img className="product-img" src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
									</div>
									<div className="product-contents">
										<span className="product-name">{product.name}</span>
										<span className="product-price">{product.price}원</span>
										<div className="product-footer">
											<div className="product-seller">
												<img className="product-avatar" src="images/icons/avatar.png" alt={product.seller} />
												<span>밥집</span>
											</div>
											<span className="product-date">{dayjs(product.createdAt).fromNow()}</span>
										</div>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
export default MainPage;
