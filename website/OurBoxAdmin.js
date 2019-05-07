import React, {Component} from 'react';

import { Box, Button} from 'grommet';

import { Checkmark, Close } from 'grommet-icons';

import 'semantic-ui-css/semantic.min.css'

import { Grid } from 'semantic-ui-react'


import * as firebase from 'firebase'


const boxStyle = {
    margin: "70px",
    width: "900px"
  };

const buttonBox = {
    width: "90%",
}

  const textStyle = {
    fontSize: "2em",
    textIndent: "65px",
    width: "90%",
    lineHeight: "1.6",
  };




  
class OurBoxAdmin extends Component {

  constructor(props) {
    super();

    this.state = {
    text: props.text,
    id: props.id,
    }
   
    console.log(this.state);
  }


  testing(text) {
  console.log("Yunkai");
  console.log("button clicked " + text);
  }
  

    
     // for approving 
 approve(newText, newKey) {


        console.log("approve");
    
        firebase.database().ref( "/" + newKey).set({
            text: newText,
            approved: 1,
          });
    
       
    };

    
    
          // for disapproving 
        disapprove(newText, newKey) {
    
            console.log("disapprove");
    
            firebase.database().ref( "/" + newKey).set({
                text: newText,
                approved: 0,
              });        
           
        };
        

    render() {    

return <Box  alignContent="center" border={{ color: 'brand', size: 'large' }} style={boxStyle} pad='medium'>
    <div><p style={textStyle}> {this.props.text} </p></div>

<br/>

    <Grid>
    <Grid.Column floated='left' width={3}>
    <Button
   onClick={() => this.approve(this.state.text, this.state.id)}
alignSelf="start"
icon={<Checkmark />}
></Button>
    </Grid.Column>
    <Grid.Column floated='right' width={3}>
    <Button 
    onClick={() => this.disapprove(this.state.text, this.state.id)}
alignSelf="end"
icon={<Close />}
></Button>
    </Grid.Column>
  </Grid>
    </Box>    

    }


}


export default OurBoxAdmin;
