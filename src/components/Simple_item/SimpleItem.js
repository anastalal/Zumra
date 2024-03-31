
import 'bootstrap/dist/css/bootstrap.css';
import './simpleitem.css';
import React, { useState } from 'react';
function SimpleItem(props) {
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
      setShowInfo(!showInfo);
      props.onInfoToggle && props.onInfoToggle(!showInfo, props.SimpleId); // تمرير البيانات SimpleId
    };
   
    return (
        <div className='d-flex align-items-center gap-3 my-4'>
        <div className='icon-box d-flex align-items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="44" viewBox="0 0 30 44" fill="none">
        <path d="M14.825 43.6216C11.9153 43.6216 9.4374 42.6334 7.39128 40.657C5.34517 38.679 4.32212 36.2678 4.32212 33.4234L4.32212 11.7395C3.21045 11.7395 2.26634 11.3636 1.48978 10.6119C0.713229 9.86021 0.324951 8.93412 0.324951 7.83364L0.324951 4.5728C0.324951 3.47391 0.713229 2.54066 1.48978 1.77303C2.26634 1.0054 3.21045 0.621582 4.32212 0.621582L25.2819 0.621582C26.3935 0.621582 27.3457 1.0054 28.1384 1.77303C28.9294 2.53906 29.325 3.47232 29.325 4.5728L29.325 7.83364C29.325 8.93253 28.9294 9.85862 28.1384 10.6119C27.3457 11.3636 26.3935 11.7395 25.2819 11.7395L25.2819 34.1114C25.0966 36.8029 23.9962 39.0612 21.9807 40.8863C19.9652 42.7098 17.58 43.6216 14.825 43.6216ZM4.32212 9.35058L25.2819 9.35058C25.7169 9.35058 26.0963 9.20486 26.4201 8.91342C26.744 8.62197 26.9067 8.26284 26.9083 7.83603L26.9083 4.5728C26.9083 4.1428 26.7456 3.77492 26.4201 3.46914C26.0947 3.16336 25.7153 3.01047 25.2819 3.01047L4.32212 3.01047C3.88712 3.01047 3.51495 3.16336 3.20562 3.46914C2.89628 3.77651 2.74162 4.1444 2.74162 4.5728L2.74162 7.83364C2.74162 8.26364 2.89628 8.62356 3.20562 8.91342C3.51656 9.20486 3.88873 9.35058 4.32212 9.35058ZM14.825 41.2327C17.0563 41.2327 18.9542 40.4826 20.5186 38.9824C22.0814 37.4805 22.8628 35.6276 22.8628 33.4234L22.8628 31.6317L15.1512 31.6317L15.1512 29.2429L22.8652 29.2429L22.8652 22.4441L15.1512 22.4441L15.1512 20.0552L22.8652 20.0552L22.8652 11.7395L6.73879 11.7395L6.73879 33.4234C6.73879 35.6276 7.52823 37.4805 9.10712 38.9824C10.6892 40.4826 12.5952 41.2327 14.825 41.2327Z" fill="#999999"/>
        </svg>
        </div>
        <div className='text-box'>
        <div className='d-flex align-items-center justify-content-between'>
        <div>
            <p className='mb-0'>{props.SimpleId}</p>
            <small>{props.date}</small>
        </div>
        <div>
            <button className='btn' id='show-info' onClick={toggleInfo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
            <path d="M1 8.96569L18 8.96569M18 8.96569L11.625 1.78271M18 8.96569L11.625 16.1487" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
        </div>

        </div>

        </div>

        </div>
    );
  }
  
  export default SimpleItem;
  