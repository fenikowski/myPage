import React from "react";
import Product from "../Components/product";
import { Link } from "react-router-dom";

const ProductPage = props => {
  return (
    <>
      <div>Strona produktu</div>
      <Product id={props.match.params.id} />
      <Link to="/products">Powrot do listy produktow</Link>
    </>
  );
};

export default ProductPage;
