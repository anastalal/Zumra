import { Icon } from '@iconify/react';
function LinkImg(props) {
  return (
   <a href={props.url} target="_blank">
   <img width={'30'} height={'30'} src={props.Icon} alt={`Link to ${props.label}`} />
   </a>
  );
}

export default LinkImg;