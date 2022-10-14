import React, {useEffect} from 'react'
import settings from '../Img/settings-gears.png'
import smartphone from '../Img/smartphone.png'
import shield from '../Img/shield.png'
import tap from '../Img/tap.png'
import AOS from "aos"
import 'aos/dist/aos.css'; 
AOS.init();

let parent = {
  marginLeft: "50px",
  marginRight: "50px",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridColumnGap: "0px",
  gridRowGap: "100px"
}

function WhyTwintech() {

  useEffect(() => {
    AOS.init({
      duration : 5000
    });
    AOS.refresh();
  }, []);

  return (
    <div data-aos={"fade-up"} style={{backgroundColor: "#ced1d6"}}>
        {/* <div fluid className="mt-5 text-dark p-5">
            <div className='  flex flex-col items-center'>
                <p className="md:text-5xl text-2xl text-center">WHY CHOOSE <span style={{ color: '#37978B' }}>TwinTech</span></p>
                <p className="fst-italic text-center" >Discover all the characteristics of TwinTech environment</p>
            </div>
        </div>
        <div className=" mx-8 text-white text-lg grid grid-cols-2 gap-4 lg:px-0 px-3 p-3 w-11/12">
          <div data-aos={"fade-right"} className="flex flex-col items-center gap-3 justify-center lg:p-12  lg:px-32 justify-self-center py-8" style={{backgroundColor: '#58AFA5',   borderRadius: "10px", border: "2px solid black"}}>
            <img src={smartphone} alt="Sample" style={{ width: "120px" }} />
            <div class="text-center ">Technological<br></br> innovation</div>
          </div>
          <div data-aos={"fade-left"} className="flex flex-col items-center justify-center gap-3 lg:p-12 lg:px-28 " style={{backgroundColor: '#58AFA5',  justifySelf: "center", borderRadius: "10px", border: "2px solid black"}}>
            <img src={settings} alt="Sample" style={{ width: "120px" }} />
            <div class="text-center">Functionality<br></br> and Design</div>
          </div>
          <div data-aos={"fade-right"} className="flex flex-col items-center gap-3 justify-center lg:p-12 lg:px-28 " style={{backgroundColor: '#58AFA5', justifySelf: "center", borderRadius: "10px", border: "2px solid black"}}>
            <img src={shield} alt="Sample" style={{ width: "120px" }} />
            <div class="text-center">Safety</div>
          </div>
          <div data-aos={"fade-left"} className="flex flex-col items-center justify-center lg:p-12 lg:px-32 py-8" style={{backgroundColor: '#58AFA5',justifySelf: "center", borderRadius: "10px", border: "2px solid black"}}>
            <img src={tap} alt="Sample" style={{ width: "80px" }} />
            <div class="text-center">Ease <br></br>of use</div>
          </div>
        </div> */}


     <div>
        <div className='  flex flex-col items-center p-3'>
                <p className="md:text-5xl text-2xl text-center">WHY CHOOSE <span style={{ color: '#37978B' }}>TwinTech</span></p>
                <p className="fst-italic text-center text-lg" >Discover all the characteristics of TwinTech environment</p>
            </div>

            <div className='grid grid-cols-2 gap-6 p-3 whychoose'>
              <div className='border-2 flex flex-col gap-4 justify-center items-center  py-14 px-9 'style={{backgroundColor: '#58AFA5', borderRadius: "10px", border: "2px solid white"}}>
              <img src={smartphone} alt="Sample" style={{ width: "120px" }} />
              <div className="text-xl text-white text-center">Technological<br></br> innovation</div>
              </div>

              <div className='border-2 flex flex-col gap-4 justify-center items-center  py-3 px-6 ' style={{backgroundColor: '#58AFA5', borderRadius: "10px", border: "2px solid white"}}>
              <img src={settings} alt="Sample" style={{ width: "120px" }} />
              <div className="text-xl text-white  text-center">Functionality and Design</div>
              </div>

              <div className='border-2 flex flex-col gap-4 justify-center items-center py-3 px-6 mt-3'style={{backgroundColor: '#58AFA5', borderRadius: "10px", border: "2px solid white"}}>
              <img src={shield} alt="Sample" style={{ width: "120px" }} />
              <div className="text-xl text-white  text-center">Safety</div>
              </div>

              <div className='border-2 flex flex-col gap-4 justify-center items-center py-3 px-6 mt-3'style={{backgroundColor: '#58AFA5', borderRadius: "10px", border: "2px solid white"}}>
              <img src={tap} alt="Sample" style={{ width: "120px" }} />
              <div className="text-xl text-white  text-center">Technological<br></br> innovation</div>
              </div>

            </div> 
        <a href="http://google.com"> <p className='text-2xl pb-3 text-center text-black'>Find out More</p></a> 
            {/* <div className='mx-auto w-2/6'></div> */}
       </div>

     
   
    </div>
  )
}

export default WhyTwintech