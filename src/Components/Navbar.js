import React from "react";
import UserIcon from "../Assets/icons/UserIcon";
import SearchIcon from "../Assets/icons/SearchIcon";
import CartIcon from "../Assets/icons/CartIcon";
import HeartIcon from "../Assets/icons/HeartIcon";

function Navbar() {
  const [count, setCount] = React.useState(1);

  const IconComponents = [
    { id: 1, component: <SearchIcon /> },

    {
      id: 2,
      component: <CartIcon />,
      count: count,
    },
    { id: 3, component: <HeartIcon />, count: count },
  ];

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: "2%",
        paddingRight: "2%",
      }}
    >
      <div
        className="brand"
        style={{
          padding: "10px",
          fontFamily: "Montserrat",
          fontWeight: "700",
          fontSize: "24px",

          width: "fit-content",
        }}
      >
        <span style={{ color: "#252B42" }}>Acciojobs</span>
      </div>

      <div className="page" style={{ width: "fit-content" }}>
        <span
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            fontFamily: "Montserrat",
            fontWeight: "700",
            fontSize: "14px",
          }}
        >
          {["Home", "Shop", "About", "Blog", "Contact", "Pages"].map((item) => {
            return (
              <a key={item} style={{ margin: "15px", color: "#737373" }}>
                {item}
              </a>
            );
          })}
        </span>
      </div>

      <div
        className="log"
        style={{
          display: "flex",
          flexDirection: "row",

          width: "fit-content",
        }}
      >
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <UserIcon />
          <a
            style={{
              color: "skyblue",
              margin: "15px",
              marginLeft: "2px",
              fontWeight: "700",
            }}
          >
            Login/Register
          </a>
        </span>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {IconComponents.map((obj) => {
            return (
              <div
                key={obj.id}
                style={{
                  margin: "8px",
                  display: "flex",
                  flexDirection: "row",
                  color: "skyblue",
                }}
              >
                {obj.component} <span>{obj.count ? obj.count : null}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
