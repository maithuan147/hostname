import React from "react";

const ItemImage = ({ product, name }) => {
  console.log(name);
  return (
    <div>
      <img src={product.image} alt="#" width="50px" />
      <span>{product.description}</span>
    </div>
  );
};

export default ItemImage;
