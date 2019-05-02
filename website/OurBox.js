import React from 'react';

import { Box } from 'grommet';

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

const OurBox = (props) => (
    <Box alignContent="center" border={{ color: 'brand', size: 'large' }} style={boxStyle} pad='medium'>
    <div><p style={textStyle}> {props.text} </p></div>
    
    </Box>
);

export default OurBox;
