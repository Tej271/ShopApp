import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Products from "../Components/Products";

function Home() {
  const [prods, setProds] = useState([]);

  const config = {
    method: "get",
    url: "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
    headers: {},
  };

  const fetchProducts = async () => {
    await axios(config)
      .then((response) => {
        //success
        setProds(Object.values(response.data));
      })
      .catch((err) => {
        //error
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <Products data={prods} />
      <Footer />
    </div>
  );
}

export default Home;
