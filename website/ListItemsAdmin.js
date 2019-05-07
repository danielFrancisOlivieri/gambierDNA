import React from 'react';
import OurBoxAdmin from "./OurBoxAdmin.js";

  function ListItemsAdmin(props) {
    return props.list.map((post) =>
    <OurBoxAdmin text={post.text} id={post.id}> </OurBoxAdmin>
    ); 
  }
  
  export default ListItemsAdmin;
