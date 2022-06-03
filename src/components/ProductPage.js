import { useNavigate, useParams } from "react-router-dom";

const ProductPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	return (
		<div>
			<button onClick={() => navigate(-1)}>이전화면</button>
			<h1>상품상세페이지</h1>
			<p>{ id } 번째 상품 상세 정보 입니다.</p>
		</div>
	);
};
export default ProductPage;
