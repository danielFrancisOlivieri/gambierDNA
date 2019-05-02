import React, {Component} from 'react';

import { Box, Button } from 'grommet';

import { Checkmark, Close } from 'grommet-icons';


import * as firebase from 'firebase'


const boxStyle = {
    margin: "70px",
    width: "900px"
  };

  const textStyle = {
    fontSize: "2em",
    textIndent: "65px",
    width: "90%",
    lineHeight: "1.6",
  };

  const cancelStyle = {
      float: "right",
  }



class OurBoxAdmin extends Component {

    

      // for approving 
approve(newText, newKey) {



    firebase.database().ref( "/" + newKey).set({
        text: newText,
        approved: 1,
      });

   
};

      // for disapproving 
      disapprove(newText, newKey) {



        firebase.database().ref( "/" + newKey).set({
            text: newText,
            approved: 0,
          });
    
       
    };
    


    render() {


return <Box  alignContent="center" border={{ color: 'brand', size: 'large' }} style={boxStyle} pad='medium'>
    <div><p style={textStyle}> {this.props.text} </p></div>
    <Box  direction="row"  align="center">
<Button
onClick={this.approve(this.props.text, this.props.ourKey)}

icon={<Checkmark />}
></Button>
<Button 

onClick={this.disapprove(this.props.text, this.props.ourKey)}

align="right"
icon={<Close />}
></Button>
    </Box>
    </Box>

    }


}


export default OurBoxAdmin;
