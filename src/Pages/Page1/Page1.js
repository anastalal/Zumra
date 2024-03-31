
import 'bootstrap/dist/css/bootstrap.css';
import './page1.css';
import logo from '../../images/image zumra 4.svg';
import search from '../../images/searchIcon.png';
import group from '../../images/Group.png';
import result from '../../images/Rectangle 37.png';
import SideBar from '../../components/sideBar/SideBar';
import React, { useState } from "react";
function Page1() {
    const [selectedImage, setSelectedImage] = useState(null);
    let getSelectedImage  = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setSelectedImage(file);
          document.getElementById("hide").style.display = "none";
          document.getElementById("preview").style.display = "none";
          document.getElementById("loading").style.display = "block";
          var timeout = setTimeout(function(){
            document.getElementById("loading").style.display = "none";
            document.getElementById("result").style.display = "block";
          },10000);
        }
      };
    return (
     <div className='row'>
       <div className='col-md-2'>
        <SideBar activeItem={'healthicons'}/>
       </div>
       <div className='col-md-10 '>
       <div className='content'>
       <div className='d-flex justify-content-end align-items-center'>
        <img src={logo} height={100} width={100} />
       </div>
       <div className='row  mb-5'>
       <div className='col-md-6'>
        <p>
        <img src={search}/>
        Upload samples to get diagnosis
        </p>
        <div className='d-flex flex-column small-dashed align-items-center justify-content-center'>
        <form className="file-upload-form">
        <label for="file" className="file-upload-label">
            <div className="file-upload-design" id='hide'>
            <small>PNG, JPG, JPEG and TIF files are allowed</small>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <g clip-path="url(#clip0_58_4)">
            <path d="M56 4C57.0609 4 58.0783 4.42143 58.8284 5.17157C59.5786 5.92172 60 6.93913 60 8V56C60 57.0609 59.5786 58.0783 58.8284 58.8284C58.0783 59.5786 57.0609 60 56 60H8C6.93913 60 5.92172 59.5786 5.17157 58.8284C4.42143 58.0783 4 57.0609 4 56V8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H56ZM8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8L0 56C0 58.1217 0.842855 60.1566 2.34315 61.6569C3.84344 63.1571 5.87827 64 8 64H56C58.1217 64 60.1566 63.1571 61.6569 61.6569C63.1571 60.1566 64 58.1217 64 56V8C64 5.87827 63.1571 3.84344 61.6569 2.34315C60.1566 0.842855 58.1217 0 56 0L8 0Z" fill="black" fill-opacity="0.69"/>
            <path d="M32 16C32.5304 16 33.0391 16.2107 33.4142 16.5858C33.7893 16.9609 34 17.4696 34 18V30H46C46.5304 30 47.0391 30.2107 47.4142 30.5858C47.7893 30.9609 48 31.4696 48 32C48 32.5304 47.7893 33.0391 47.4142 33.4142C47.0391 33.7893 46.5304 34 46 34H34V46C34 46.5304 33.7893 47.0391 33.4142 47.4142C33.0391 47.7893 32.5304 48 32 48C31.4696 48 30.9609 47.7893 30.5858 47.4142C30.2107 47.0391 30 46.5304 30 46V34H18C17.4696 34 16.9609 33.7893 16.5858 33.4142C16.2107 33.0391 16 32.5304 16 32C16 31.4696 16.2107 30.9609 16.5858 30.5858C16.9609 30.2107 17.4696 30 18 30H30V18C30 17.4696 30.2107 16.9609 30.5858 16.5858C30.9609 16.2107 31.4696 16 32 16Z" fill="black" fill-opacity="0.69"/>
            </g>
            <defs>
            <clipPath id="clip0_58_4">
            <rect width="64" height="64" fill="white"/>
            </clipPath>
            </defs>
            </svg>
           
            </div>
            {selectedImage && (
                <div className='d-flex flex-column align-items-center justify-content-cente'>
            <div className='rect d-flex flex-column align-items-center justify-content-center'>
            <img alt="not fount"  src={group} />
            <br />
            {/* <button className='btn' onClick={()=>setSelectedImage(null)}></button> */}
            </div>
            <span className='text-center'>{selectedImage.name}</span>
            </div>
        )}
            <input id="file" onChange={handleImageChange} type="file" />
        </label>
        <div className='form-group mt-4'>
        <label className='form-label'>
        Please, enter the uploaded sample ID:
        </label>
        <input type='text' className='form-control'/>
        </div>
        </form>

        </div>
       </div>
       <div className='col-md-6'>
       <div className='d-flex flex-column big-dashed align-items-center justify-content-center'>
       <div id='preview' className='text-center'>
       <p>Possible diagnosis results will appear here....</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="73" height="95" viewBox="0 0 73 95" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9 0C17.8682 0 14.6 3.27177 14.6 7.30769H7.3C3.26821 7.30769 0 10.5795 0 14.6154V82.8204C0 86.8565 3.26821 90.1281 7.3 90.1281H36.5V85.2563H7.3C5.95607 85.2563 4.86667 84.1658 4.86667 82.8204V14.6154C4.86667 13.2701 5.95607 12.1795 7.3 12.1795H14.6C14.6 16.2155 17.8682 19.4872 21.9 19.4872H41.3667C45.3985 19.4872 48.6667 16.2155 48.6667 12.1795H55.9667C57.3106 12.1795 58.4 13.2701 58.4 14.6154V51.1538H63.2667V14.6154C63.2667 10.5795 59.9985 7.30769 55.9667 7.30769H48.6667C48.6667 3.27177 45.3985 0 41.3667 0H21.9ZM19.4667 7.30769C19.4667 5.96239 20.5561 4.87179 21.9 4.87179H41.3667C42.7106 4.87179 43.8 5.96239 43.8 7.30769V12.1795C43.8 13.5248 42.7106 14.6154 41.3667 14.6154H21.9C20.5561 14.6154 19.4667 13.5248 19.4667 12.1795V7.30769ZM29.2 36.5384V29.2307H34.0667V36.5384H41.3667V41.4102H34.0667V48.7179H29.2V41.4102H21.9V36.5384H29.2ZM38.9333 58.4615C38.9333 57.1161 40.0227 56.0256 41.3667 56.0256H70.5667C71.9106 56.0256 73 57.1161 73 58.4615V74.9985C73 80.6998 70.1537 86.0237 65.4151 89.1862L57.3164 94.5909C56.4991 95.1363 55.4343 95.1363 54.6169 94.5909L46.5183 89.1862C41.7796 86.0237 38.9333 80.6998 38.9333 74.9985V58.4615ZM43.8 60.8974V74.9985C43.8 79.0709 45.833 82.8736 49.2178 85.1326L55.9667 89.6363L62.7155 85.1326C66.1003 82.8736 68.1333 79.0709 68.1333 74.9985V60.8974H43.8ZM55.2539 79.6713L64.9873 69.9277L61.5458 66.4829L53.5333 74.5041L50.3873 71.3547L46.9458 74.7995L51.8125 79.6713C52.7629 80.6225 54.3035 80.6225 55.2539 79.6713Z" fill="#D50009" fill-opacity="0.77"/>
        </svg>
       </div>
        <div className='loading d-nones position-relative' id='loading'>
        <div class="heartbeatloader">
            <svg class="svgdraw" width="100%" height="100%" viewBox="0 0 150 400" xmlns="http://www.w3.org/2000/svg">
                <path class="path" d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0" fill="transparent" stroke-width="4" stroke="black"></path>
            </svg>
            <div class="innercircle"></div>
            <div class="outercircle"></div>
        </div>
        <p>Uploading the diagnosis....</p>
        </div>
        <div className='result text-center' id='result'>
                <img width={'200'} height={'200'} src={result}/>
                <p>Sample ID: 36281945</p>
                <h4>Diagnosis Result:</h4>
                <div className='test-dashed'>
                <p>
                Positive, <br/>
               ALL is detected. 

                </p>

                </div>
        </div>
       </div>
       </div>

       </div>

       </div>

       </div>
     </div>
    );
  }
  
  export default Page1;
  