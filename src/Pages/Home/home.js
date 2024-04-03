import 'bootstrap/dist/css/bootstrap.css';
import './home.css';
import blood from '../../images/Blood Cells.png';
import logo from '../../images/image zumra 4.svg';
import LinkIcon from '../../components/Link_icon/linkIcon';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="container">
      <header >
       <div>
        <img src={blood} height={100} width={100} />
       </div>

      </header>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='content'>
        <img src={logo} />
        <h3 className='text-center'>Welcome To Zumra! </h3>
        <div className='d-flex justify-content-center align-items-center gap-2 my-3'>
        <LinkIcon Icon={'healthicons:medical-sample-outline'} label={'healthicons:medical-sample-outline'}/>
        <div className="vr"></div>
        <LinkIcon Icon={'healthicons:microscope-outline'} label={'healthicons:medical-sample-outline'}/>
        <div className="vr"></div>
        <LinkIcon Icon={'carbon:result'} label={'healthicons:medical-sample-outline'}/>
        </div>
        <div className='text-center'>
        <Link to={'page1'} className='btn mybtn'>Start</Link>
        </div>
        </div>
      </div>
      <footer>
      <div className='d-flex justify-content-end align-items-center'>
        <img src={blood} height={100} width={100} />
       </div>
      </footer>
    </div>

  );
}

export default Home;