
import React from 'react';
import ListItemsAdmin from "./ListItemsAdmin.js";

// load fire base
import * as firebase from 'firebase';


class AllPosts extends React.Component {

  constructor() {
    super();
    this.state = {
      // place holder values 
      items: ["first", "second", "third"],
      listToPost: ["Loading"],
      idsListToPost: ["first", "second", "third"],
      objectToPass: [],      

    }
  }

  // early in the React DOM life cycle
  componentDidMount() {


    // gets database
    const database = firebase.database();
    // putting it into new database
    var memories = database.ref();
    
    // get the data
    memories.on('value', (snapshot) => {

      // holds current snapshot of data 
        let items = snapshot.val();
        // creates newState array
        let newState = [];
        // for loop
        for (let item in items) {

          var isApproved = items[item].approved;

          
          if (isApproved === undefined){
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

        

        // array to holds only the texts

        var textsAndiDs = [];

        var textAndiDObject = {

            text: "",
            id: "",
        }

        //var textsToPost = [];

        //var idsToPost = [];

        for (var i = 0; i < this.state.items.length; i++) {
              

            textAndiDObject.text = this.state.items[i].postText;

            textAndiDObject.id = this.state.items[i].id;

            console.log(textAndiDObject.id);


            textsAndiDs[i] = textAndiDObject;

        }

        this.setState({
            objectToPass: textsAndiDs,
      });        


    })


}

  render(){

    return <div> <ListItemsAdmin  list={this.state.objectToPass} ></ListItemsAdmin>


</div>


  }
}

export default AllPosts;
