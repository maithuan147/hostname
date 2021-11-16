import React, { useEffect, useState } from "react";

const withProduct = (WrapItemProduct) => {
  return function ListProduct(props) {
    const [products, setProduct] = useState();
    useEffect(() => {
      const getApi = async () => {
        const products = await fetch("https://fakestoreapi.com/products").then(
          (res) => res.json()
        );
        setProduct(products);
      };
      getApi();
    }, []);

    if (!products) return <div>Loading...</div>;
    return (
      <div>
        {Array.isArray(products) &&
          products.map((product) => (
            <div key={product.id}>
              <WrapItemProduct {...{ product }} {...props} />
            </div>
          ))}
      </div>
    );
  };
};

export default withProduct;
