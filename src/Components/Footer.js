import React from "react";
import FooterList from "./FooterList";

function Footer() {
  const [email, setEmail] = React.useState("");

  const PostData = async () => {
    console.log("posted");
  };

  const lists = [
    {
      id: 1,
      heading: "Company Info",
      listItems: ["About Us", "Career", "We Are Hiring", "Blog"],
    },
    {
      id: 2,
      heading: "Legal",
      listItems: ["About Us", "Career", "We Are Hiring", "Blog"],
    },
    {
      id: 3,
      heading: "Features",
      listItems: [
        "Business Marketing",
        "User Analytic",
        "Live chat",
        "Unlimited Support",
      ],
    },
    {
      id: 4,
      heading: "Resources",
      listItems: ["IOS & Android", "Watch a demo", "Customers", "API"],
    },
  ];

  return (
    <div style={{ marginTop: "10%" }}>
      <h3 style={{ marginLeft: "150px", fontSize: "30px", color: "#252B42" }}>
        Acciojob
      </h3>
      <div
        style={{
          display: "inline-block",
          width: "80%",
          height: "1px",
          backgroundColor: "grey",
          marginLeft: "150px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          float: "center",
          // alignItems: "space-around",
          // marginLeft: "5px",
          justifyContent: "space-evenly",
        }}
      >
        {lists.map((obj) => {
          return (
            <FooterList
              key={obj.id}
              heading={obj.heading}
              listItems={obj.listItems}
            />
          );
        })}

        <div>
          <ul
            style={{
              listStyle: "none",
              lineHeight: "30px",
            }}
          >
            <h4>Get In Touch</h4>
            <input
              type="email"
              placeholder="Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{ padding: "14px" }}
            />
            <button
              onClick={() => {
                PostData();
              }}
              style={{
                boxSizing: "border-box",
                position: "absolute",
                background: "#23A6F0",
                border: "1px solid #E6E6E6",
                borderRadius: "0px 5px 5px 0px",
                padding: "15px",
                color: "white",
                fontFamily: "Montserrat",
                fontWeight: "400",
              }}
            >
              Subscribe
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
