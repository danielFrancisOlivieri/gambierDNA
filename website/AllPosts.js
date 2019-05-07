
import React from 'react';
import OurBox from "./OurBox.js";
import ListItems from "./ListItems.js";

// load fire base
import * as firebase from 'firebase'

// set up firebase with keys
function setup() {
    var config = {
      apiKey: "AIzaSyCNWTiYkNyqgSIR0bs5z9LsL3LB67h4MCE",
      authDomain: "stalgia-167017.firebaseapp.com",
      databaseURL: "https://stalgia-167017.firebaseio.com",
      projectId: "stalgia-167017",
      storageBucket: "stalgia-167017.appspot.com",
      messagingSenderId: "586804764653"
    };
  
      // initialize it 
    firebase.initializeApp(config);
    
  }
  
  // sets up the firebase
  setup(); 


class AllPosts extends React.Component {

  constructor() {
    super();
    this.state = {
      // place holder values 
      items: ["first", "second", "third"],
      listToPost: ["Loading"],

    }
  }

  // early in the React DOM life cycle
  componentDidMount() {


    // gets database
    const database = firebase.database();
    // putting it into new database
    var memories = database.ref();

    console.log(memories);

    // get the data
    memories.on('value', (snapshot) => {

      // holds current snapshot of data 
        let items = snapshot.val();
        // creates newState array
        let newState = [];
        // for loop
        for (let item in items) {

          var isApproved = items[item].approved;

          console.log(isApproved);

          if (isApproved === 1){
            newState.push({
              id: item,
              postText: items[item].text,
          });
          }
            

        }
      
        // sets the state
        this.setState({
            items: newState,        
        });

        console.log(this.state);

        // array to holds only the texts
        var textsToPost = [];

        for (var i = 0; i < this.state.items.length; i++) {

          console.log(this.state.items[i].postText);

            textsToPost[i] = this.state.items[i].postText;

        }

        this.setState({
          listToPost: textsToPost,        
      });

        console.log(this.state.listToPost);


    })


}

  render(){

    return <div> <ListItems list={this.state.listToPost} ></ListItems>


</div>


  }
}

export default AllPosts;
