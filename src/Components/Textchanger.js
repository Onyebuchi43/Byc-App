import React, { useEffect, useState } from 'react';
import Navbar from './Home';

const TextChanger = () => {
    const words = ["yourself", "Men", "Women", "Kids"];
let index = 0;

setInterval(() => {
  const textElement = document.getElementById("changingText");
  if (textElement) { 
    textElement.textContent = words[index];
    index = (index + 1) % words.length;
  }
}, 2000);

};

export default TextChanger;