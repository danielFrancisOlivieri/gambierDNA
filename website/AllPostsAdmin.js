import React from 'react';
import OurBoxAdmin from "./OurBoxAdmin.js";

import * as firebase from 'firebase'


var database = firebase.database();

var memories = database.ref();


var listItems;

var textsToPost = [];

var toMapArray = [];


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

    var memories = data.val();
    // Grab the keys to iterate over the object
    var keys = Object.keys(memories);

    for (var i = 0; i < keys.length; i++) {

        var key = keys[i];
        // Look at each memory object!
        var memory = memories[key];


        if (typeof memory.approved === 'undefined') {

            if (typeof memory.text === "string") {

                var memoryToMap = {
                    text: memory.text,
                    key: key,
                }

                // holds object of both
                toMapArray.push(memoryToMap);

                console.log("key: " + memoryToMap.key);

                // on its way out
                textsToPost.push(memory.text);

            }

        }


    }

    console.log(toMapArray.text);


    // understand how to fill two variables with the map function
    listItems = toMapArray.map(post =>
        <OurBoxAdmin text = {post.text} ourKey = {post.key}></OurBoxAdmin>
    );

    console.log(listItems);

}

class AllPostsAdmin extends React.Component {
  componentDidMount () {
    queryData();
   }

  render(){

    return <div>{listItems}</div>

  }
}

export default AllPostsAdmin;