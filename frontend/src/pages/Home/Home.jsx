import React from 'react';
import Header from '../../components/Header/Header';
import './Home.css';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import { useState } from 'react';
import FoodList from '../../components/FoodList/FoodList';
const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodList/>
    </div>
  );
};

export default Home;
