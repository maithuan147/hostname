import React from "react";
// import { history } from "../../utils/History";

const Page1 = () => {
  const list = [
    { id: 100, name: "thuan" },
    { id: 101, name: "huy" },
    { id: 102, name: "hoang" },
  ];
  const page3 = () => {
    // history.push("/page3");
  };
  const getId = (id) => {
    return () => {
      console.log(id);
    };
  };

  return (
    <div>
      {list.map((item) => (
        <div onClick={getId(item)} key={item.id}>
          Đây là {item.name}
        </div>
      ))}

      <button onClick={page3}>Page3</button>
    </div>
  );
};

export default Page1;
