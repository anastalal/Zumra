import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
function LinkImg(props) {
  return (
   <Link to={props.url} >
   <img width={'30'} height={'30'} src={props.Icon} alt={`Link to ${props.label}`} />
   </Link>
  );
}

export default LinkImg;