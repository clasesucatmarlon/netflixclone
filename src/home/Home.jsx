import React from 'react';
import Featured from '../components/features/Featured';
import Navbar from '../components/navbar/Navbar';
import List from '../components/list/List';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <img width="100%" src="http://www.marketersbyadlatina.com/uploads/-2877-Netflix-O.jpg" alt="" /> */}
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home;
