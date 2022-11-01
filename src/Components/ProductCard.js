import React from "react";
import StarIcon from "../Assets/icons/StarIcon";

function ProductCard({ productName, oldPrice, newPrice, image }) {
  return (
    <div
      style={{
        width: "360px",
        // background: "white",
        display: "inline-block",
        borderRadius: "5px",
        boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.2)",
        padding: "8px",
        marginLeft: "65px",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <img
          src={image}
          alt="iphone"
          width={"360px"}
          style={{ margin: "-30px 0 -20px 0" }}
        ></img>
      </div>
      <div style={{ padding: "10px" }}>
        <span
          style={{
            fontFamily: "Montserrat",
            fontWeight: "600",
            fontSize: "16px",
          }}
        >
          {productName}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: "10px",
          alignItems: "center",
          padding: "4px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ float: "left" }}>
          {[1, 2, 3, 4, 5].map((ele) => (
            <StarIcon key={ele} />
          ))}
        </div>
        <div style={{ float: "right" }}>
          <span style={{ textDecoration: "line-through", fontSize: "16px" }}>
            {oldPrice}/-
          </span>

          <span
            style={{ marginLeft: "15px", fontSize: "24px", fontWeight: "600" }}
          >
            {newPrice}/-
          </span>
        </div>
      </div>

      <button
        type="submit"
        style={{
          padding: "8px",
          width: "90%",
          backgroundColor: "#23A6F0",
          borderRadius: "5px",
          color: "white",
          fontFamily: "Montserrat",
          fontWeight: "600",
          border: "none",
          margin: "10px 10px 10px 10px",
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default ProductCard;
