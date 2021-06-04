import React from "react";
import "./SingleItem.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = ({ current, addToCart }) => {
  return (
    <div className="singleItem">
      <img
        className="singleItem-image"
        src={current.image}
        alt={current.title}
      />
      <div className="singleItem-details">
        <p className="details-title">{current.title}</p>
        <p className="details-description">{current.description}</p>
        <p className="details-price">$ {current.price}</p>

        <button
          onClick={() => addToCart(current.id)}
          className="details-addBtn"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
