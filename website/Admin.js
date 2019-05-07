import React, { Component } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
} from 'grommet';
import AllPostsAdmin from "./AllPostsAdmin.js";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { FormClose, CircleQuestion } from 'grommet-icons';


const theme = {
  global: {
    
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const boxStyle = {
  margin: "20px",
};

const topPartStyle = {
 width: "100%",
}

const projectDescription = {
  fontSize: "24px",
}


const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    height="45vh"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class Admin extends Component {

  componentDidMount () {
    console.log("did mount admin");
  }

  state = {
    showSidebar: false,
  }
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box >
              <AppBar>

                <Box style={topPartStyle} className="topPart" direction="column"  align="center">
                <Heading level='1' align="center" margin='none'>Admin</Heading>
              
                </Box>
              
               
              </AppBar>
              
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}   >

              
                <Box flex align='center' justify='center' style={boxStyle}>    
        
            <AllPostsAdmin></AllPostsAdmin>

                </Box>



                {(!showSidebar || size !== 'small') ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width='medium'
                      background='light-2'
                      elevation='small'
                      align='center'
                      
                    >
                   
                      
                    </Box>
                  </Collapsible>
                ): (
                  <Layer>
                    <Box
                      background='light-2'
                      tag='header'
                      justify='end'
                      align='center'
                      direction='row'
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => this.setState({ showSidebar: false })}
                      />
                    </Box>
                    <Box
                      fill
                      background='light-2'
                      align='center'
                      justify='center'
                    >
                      sidebar

                      
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default Admin;
