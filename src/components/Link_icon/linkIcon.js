import { Icon } from '@iconify/react';
function LinkIcon(props) {
  return (
   <a href={props.url} target="_blank">
   <Icon icon={props.Icon}  style={{ fontSize: '36px', color:'#C13E32' }}/>
   </a>
   
  );
}

export default LinkIcon;