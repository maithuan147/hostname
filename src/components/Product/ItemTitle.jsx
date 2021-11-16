import React, { useState } from "react";

function ItemTitle({ product }) {
  const [test, setTest] = useState("1");
  const getApi = async () => {
    await ab();
  };
  const ab = async () => {
    const name = [{ a: "12" }];
    setTest(name);
  };
  console.log(test);

  return (
    <div>
      {product.id} + {product.title} + {product.price}
      <div onClick={getApi}>click</div>
    </div>
  );
}

export default ItemTitle;
