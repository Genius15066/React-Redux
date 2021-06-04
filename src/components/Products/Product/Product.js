import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Product.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="product">
      <img
        className="product-image"
        src={product.image}
        alt={product.title}
      />

      <div className="product-details">
        <p className="details-title">{product.title}</p>
        <p className="details-desc">{product.description}</p>
        <p className="details-price">$ {product.price}</p>
      </div>

      <div className="product-buttons">
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            className="buttons-btn buttons-view"
          >
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToCart(product.id)}
          className="buttons-btn buttons-add"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
