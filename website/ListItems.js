import React from 'react';
import OurBox from "./OurBox.js";


  function ListItems(props) {
    return props.list.map((post) =>
    <OurBox text={post}> </OurBox>
    ); 
  }
  
  export default ListItems;
