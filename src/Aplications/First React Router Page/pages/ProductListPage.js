import React from "react";
import { Link } from "react-router-dom";
import "../styles/product.css";

const products = ["car", "bike", "motorcycle"];

const ProductListPage = props => {
  const list = products.map(product => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));

  return (
    <div className="products">
      <h2>Lista produtkow</h2>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default ProductListPage;
