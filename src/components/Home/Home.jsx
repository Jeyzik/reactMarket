import React from "react";
import { useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Banner from "../Banner/Banner";

const Home = () => {
  const { products, categories } = useSelector((state) => state);

  return (
    <>
      <Poster />
      <Products products={products.list} amount={5} title="Trending" />
      <Categories products={categories.list} amount={5} title="Worth seeing" />
      <Banner />
    </>
  );
};

export default Home;
