import React, {useEffect} from 'react'
import ImgBanner from '../Img/banner.jpg'
import AOS from "aos"
import 'aos/dist/aos.css'; 
AOS.init();

var backgroundStyle = {
    backgroundImage: `url(${"https://source.unsplash.com/random/?productivity,meeting&w=1080"})`,
    height: '80vh',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

function Banner() {

  useEffect(() => {
    AOS.init({
      duration : 5000
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-image mt-5 p-5 d-flex flex-column lg:justify-content-center  justify-end lg:justify-center' data-aos={"fade-up"} style={backgroundStyle}>
        <div className="px-3">
          <h2 className="text-light md:text-5xl text-2xl " >Lorem ipsum <span className="text-info">dolor sit</span> amet,</h2>
          <div className=" px-6  inline-block rounded-full text-center border-2" style={{backgroundColor: '#37978B'}}><h4 className="text-center text-white ">Find out more</h4></div>
        </div>
    </div>
  )
}

export default Banner