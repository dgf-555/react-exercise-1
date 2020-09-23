import React from 'react';
import './Greeting.scss';
import imgURL from '../../assets/avatar.jpg';

const Greeting = () => (
  <body className="greeting">
    <img src={imgURL} />
    <p className="hello">HELLO,</p>
    <p className="nihao">MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</p>
  </body>
);
export default Greeting;
