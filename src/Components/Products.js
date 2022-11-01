import React from "react";
import ProductCard from "./ProductCard";

function Products({ data }) {
  return (
    <div>
      <h3 style={{ marginLeft: "65px", fontSize: "40px" }}>Products</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "scroll",
        }}
      >
        {data.map((obj) => {
          return (
            <ProductCard
              productName={obj.productName}
              oldPrice={obj.oldPrice}
              newPrice={obj.newPrice}
              image={obj.productImage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
