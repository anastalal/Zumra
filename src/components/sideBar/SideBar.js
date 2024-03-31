import LinkIcon from "../Link_icon/linkIcon";
import LinkImg from "../Link_img/linkImg";
import 'bootstrap/dist/css/bootstrap.css';
import search from '../../images/search.svg';
import test from '../../images/test.png';
import home from '../../images/octicon_home-16.svg';
import './sidebar.css';
function SideBar(props) {
    return (
     <div>
        <aside className="d-flex align-items-center justify-content-center">
        <ul className="d-flex flex-column gap-5 nav w-100 align-items-center">
            <li className={`nav-item w-100 ${props.activeItem === 'healthicons' ? 'active' : ''}`}>
            <LinkImg Icon={test} label={'healthicons:medical-sample-outline'}/>
            </li>
            <li className={`nav-item w-100 ${props.activeItem === 'search' ? 'active' : ''}`}>
            <LinkImg Icon={search} label={'healthicons:medical-sample-outline'}/>
            </li>
            <li className={`nav-item w-100 ${props.activeItem === 'home' ? 'active' : ''}`}>
            <LinkImg Icon={home} label={'healthicons:medical-sample-outline'}/>
            </li>
        </ul>
        </aside>
     </div>
    );
  }
  
  export default SideBar;
  