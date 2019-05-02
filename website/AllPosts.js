
import React from 'react';
import OurBox from "./OurBox.js";


import * as firebase from 'firebase'


// set up firebase
function setup() {
  var config = {
    apiKey: "AIzaSyCNWTiYkNyqgSIR0bs5z9LsL3LB67h4MCE",
    authDomain: "stalgia-167017.firebaseapp.com",
    databaseURL: "https://stalgia-167017.firebaseio.com",
    projectId: "stalgia-167017",
    storageBucket: "stalgia-167017.appspot.com",
    messagingSenderId: "586804764653"
  };

  firebase.initializeApp(config);
  
}

setup(); // sets up the firebase

var database = firebase.database();

var memories = database.ref();

console.log(memories);

var listItems;

var textsToPost = [];


// triggers get data function
function queryData(data) {
 
memories.on("value", gotData, errData);
}

// error message
function errData(error) {
  console.log("Something went wrong.");
  console.log(error);
}


// retrieve data 
function gotData(data) {
  console.log("inside gotData");
  var memories = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(memories);

  for (var i = 0; i < keys.length; i++) {
    console.log("looping");
    var key = keys[i];
    // Look at each fruit object!
    var memory = memories[key];    

    if (memory.approved === 1) {
      textsToPost.push(memory.text);
    } 
    
    
  }
  console.log("mapping");
  listItems = textsToPost.map((post) =>
  <OurBox text={post}> </OurBox>
);


}
 

class AllPosts extends React.Component {
  componentDidMount () {
    queryData();
    console.log("allPosts will mount");
    this.forceUpdate();
  }

  render(){

    return <div>{listItems}</div>

  }
}

export default AllPosts;