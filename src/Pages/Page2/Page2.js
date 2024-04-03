
import 'bootstrap/dist/css/bootstrap.css';
import './page2.css';
import logo from '../../images/image zumra 4.svg';
import result from '../../images/Rectangle 40.png';
import SideBar from '../../components/sideBar/SideBar';
import res1 from '../../images/res1.png';
import React, { useState } from "react";
import SimpleItem from '../../components/Simple_item/SimpleItem';
import { Icon } from '@iconify/react';
function Page2() {
    const [selectedSimpleId, setSelectedSimpleId] = useState(null);

    const handleInfoToggle = (isVisible, SimpleId) => {
      if (isVisible) {
        setSelectedSimpleId(SimpleId);
        document.getElementById("preview").style.display = "none"; 
        document.getElementById("loading").style.display = "block";
      let res =  document.getElementById("result");
      if(res) res.style.display = "none";
        

        var timeout = setTimeout(function(){
            document.getElementById("loading").style.display = "none";
            document.getElementById("result").style.display = "block";
          },2000);
        // تحديث ال SimpleId المحدد
      } else {
        setSelectedSimpleId(null); // إذا تم إخفاء البيانات، قم بتفريغ ال SimpleId المحدد
      }
    };
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
        <SideBar activeItem={'search'}/>
       </div>
       <div className='col-md-10 '>
       <div className='content'>
       <div className='d-flex justify-content-end align-items-center'>
        <img src={logo} height={100} width={100} />
       </div>
       <div className='row  mb-5'>
       <div className='col-md-6'>
       <div class="group mb-3">
       <svg xmlns="http://www.w3.org/2000/svg" className='icon' width="37" height="38" viewBox="0 0 37 38" fill="none">
        <path d="M35.75 36.4769L26 26.6808M16.25 31.5788C14.3294 31.5788 12.4276 31.1988 10.6533 30.4603C8.87887 29.7219 7.26662 28.6395 5.90856 27.275C4.55051 25.9105 3.47324 24.2906 2.73826 22.5079C2.00329 20.7251 1.625 18.8143 1.625 16.8846C1.625 14.955 2.00329 13.0442 2.73826 11.2614C3.47324 9.47862 4.55051 7.85875 5.90856 6.49426C7.26662 5.12978 8.87887 4.04741 10.6533 3.30896C12.4276 2.57051 14.3294 2.19043 16.25 2.19043C20.1288 2.19043 23.8487 3.73856 26.5914 6.49426C29.3342 9.24996 30.875 12.9875 30.875 16.8846C30.875 20.7818 29.3342 24.5193 26.5914 27.275C23.8487 30.0307 20.1288 31.5788 16.25 31.5788Z" stroke="#D50009" stroke-width="3"/>
        </svg>
        <input class="input" type="search" placeholder="Search for samples using ID..." />
        </div>
       <div className='simple-container'>
       <SimpleItem SimpleId={'Simple: 1232332'} date={'Uploaded on: 12/9/2021'} onInfoToggle={handleInfoToggle}/>
       <SimpleItem SimpleId={'Simple: 3332873'} date={'Uploaded on: 12/9/2021'} onInfoToggle={handleInfoToggle}/>
       <SimpleItem SimpleId={'Simple: 3334242'} date={'Uploaded on: 12/9/2021'} onInfoToggle={handleInfoToggle}/>
       <SimpleItem SimpleId={'Simple: 5553345'} date={'Uploaded on: 12/9/2021'} onInfoToggle={handleInfoToggle}/>
       <SimpleItem SimpleId={'Simple: 1232332'} date={'Uploaded on: 12/9/2021'} onInfoToggle={handleInfoToggle}/>
       <SimpleItem SimpleId={'Simple: 1232332'} date={'Uploaded on: 12/9/2021'} onInfoToggle={handleInfoToggle}/>
       <SimpleItem SimpleId={'Simple: 1232332'} date={'Uploaded on: 12/9/2021'} onInfoToggle={handleInfoToggle}/>
       </div>
       </div>
       <div className='col-md-6'>
       <div className='d-flex flex-column big-dashed align-items-center justify-content-center'>
       <div id='preview' className='text-center'>
       <p>The information of the searched sample <br/> will appear here...</p>
       <svg xmlns="http://www.w3.org/2000/svg" width="62" height="78" viewBox="0 0 62 78" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7083 6.2915C12.7083 4.66705 13.3536 3.10914 14.5022 1.96048C15.6509 0.811815 17.2088 0.166504 18.8333 0.166504H35.1666C36.791 0.166504 38.349 0.811815 39.4976 1.96048C40.6463 3.10914 41.2916 4.66705 41.2916 6.2915H47.4166C49.041 6.2915 50.599 6.93681 51.7476 8.08548C52.8963 9.23414 53.5416 10.7921 53.5416 12.4165V45.0832H49.4583V12.4165C49.4583 11.875 49.2432 11.3557 48.8603 10.9728C48.4774 10.5899 47.9581 10.3748 47.4166 10.3748H41.2916C41.2916 11.9993 40.6463 13.5572 39.4976 14.7059C38.349 15.8545 36.791 16.4998 35.1666 16.4998H18.8333C17.2088 16.4998 15.6509 15.8545 14.5022 14.7059C13.3536 13.5572 12.7083 11.9993 12.7083 10.3748H6.58325C6.04177 10.3748 5.52246 10.5899 5.13958 10.9728C4.75669 11.3557 4.54159 11.875 4.54159 12.4165V69.5832C4.54159 70.1247 4.75669 70.644 5.13958 71.0268C5.52246 71.4097 6.04177 71.6248 6.58325 71.6248H26.9999V75.7082H6.58325C4.9588 75.7082 3.40088 75.0629 2.25222 73.9142C1.10356 72.7655 0.458252 71.2076 0.458252 69.5832V12.4165C0.458252 10.7921 1.10356 9.23414 2.25222 8.08548C3.40088 6.93681 4.9588 6.2915 6.58325 6.2915H12.7083ZM18.8333 4.24984C18.2918 4.24984 17.7725 4.46494 17.3896 4.84783C17.0067 5.23071 16.7916 5.75002 16.7916 6.2915V10.3748C16.7916 10.9163 17.0067 11.4356 17.3896 11.8185C17.7725 12.2014 18.2918 12.4165 18.8333 12.4165H35.1666C35.7081 12.4165 36.2274 12.2014 36.6103 11.8185C36.9932 11.4356 37.2083 10.9163 37.2083 10.3748V6.2915C37.2083 5.75002 36.9932 5.23071 36.6103 4.84783C36.2274 4.46494 35.7081 4.24984 35.1666 4.24984H18.8333ZM24.9583 24.6665V30.7915H18.8333V34.8748H24.9583V40.9998H29.0416V34.8748H35.1666V30.7915H29.0416V24.6665H24.9583ZM26.9999 52.5659V60.7326C26.9999 61.274 27.215 61.7933 27.5979 62.1762C27.9808 62.5591 28.5001 62.7742 29.0416 62.7742H37.2083V58.6909H34.1968L36.755 56.2858C37.9702 55.0543 39.4785 54.1518 41.1383 53.6631C42.798 53.1745 44.5547 53.1157 46.2434 53.4923C47.9321 53.8689 49.4973 54.6685 50.7922 55.8161C52.087 56.9637 53.0689 58.4215 53.6457 60.0527L57.4943 58.6909C56.6894 56.4182 55.3226 54.386 53.5213 52.7834C51.7199 51.1809 49.5425 50.06 47.1915 49.5252C44.8406 48.9903 42.3925 49.0588 40.0751 49.7243C37.7578 50.3898 35.6464 51.6307 33.9375 53.3315L31.0833 56.0122V52.5659H26.9999ZM50.82 64.136H58.9867C59.5282 64.136 60.0475 64.3511 60.4304 64.734C60.8133 65.1169 61.0284 65.6362 61.0284 66.1777V74.3443H56.945V70.898L54.0908 73.5787C52.3821 75.28 50.2708 76.5214 47.9533 77.1872C45.6358 77.853 43.1875 77.9217 40.8364 77.3868C38.4852 76.8519 36.3076 75.7308 34.5063 74.1279C32.705 72.525 31.3385 70.4924 30.534 68.2193L34.3826 66.8576C34.9594 68.4887 35.9413 69.9466 37.2361 71.0941C38.531 72.2417 40.0962 73.0413 41.7849 73.4179C43.4736 73.7945 45.2303 73.7357 46.89 73.2471C48.5498 72.7584 50.0581 71.856 51.2733 70.6244L53.8315 68.2193H50.82V64.136Z" fill="#D50009"/>
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
        <div className='resultd'>
        {selectedSimpleId && (
        <div>
        <div className='result text-center ' id='result'>
                <img width={'200'} height={'200'} src={result}/>
               <div className='mt-3 item row'>
                <img width={'24'} className='col-md-2'  height={'24px'} src={res1}/>
               <p  className='  col-md-10'> {selectedSimpleId}</p>
               </div>

               <div className='mt-2 item row'>
               <Icon icon={'ic:outline-date-range'}  className='col-md-2'  style={{ fontSize: '40px', color:'#DBA35E' }}/>
               <p className='  col-md-10'>Uploaded on: 12/9/2021</p>
               </div>

               <div className='mt-2 item row'>
               <Icon icon={'carbon:result'} className='col-md-2'    style={{ fontSize: '40px', color:'#DBA35E' }}/>
               <p className=' m col-md-10'>Diagnosis Result:</p>
               </div>
               <div className='text-center mt-3'>
              <p className='text-center'>  Nagative <br/> Normal Blood Simple</p>
               </div>

               
        </div>
        </div>
      )}
        </div>
       
       </div>
       </div>

       </div>

       </div>

       </div>
     </div>
    );
  }
  
  export default Page2;
  