import React, { useEffect } from 'react'
import { Container } from "react-bootstrap";
import AOS from "aos"
import 'aos/dist/aos.css'; 
AOS.init();

function About() {

  useEffect(() => {
    AOS.init({
      duration : 5000
    });
    AOS.refresh();
  }, []);

  return (
    <div className=" md:p-8  p-4" data-aos={"fade-up"} style={{backgroundColor: '#37978B'}}>
        <div className=' mt-2 '>
            <h2 className="md:text-5xl text-2xl text-white" >Lorem ipsum <span className="text-dark">dolor sit</span> amet,</h2>
            <p className="fst-italic text-lg " style={{fontSize: "20px", color: "#D9D9D9"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p className="font-weight-bolder text-lg font-semibold text-justify" style={{fontSize: "18px", color: "#eff2f5"}}> 

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida, elit non varius ultrices, nunc lorem faucibus mauris, id iaculis orci orci at est. Duis tincidunt mauris pretium quam aliquet venenatis. Pellentesque rutrum sit amet urna aliquet vestibulum. Morbi dictum, ipsum at interdum aliquet, felis massa pellentesque mi, ac porta magna felis quis augue. Praesent vitae metus tempus, aliquet nisl sit amet, consequat neque. Duis laoreet lectus non orci congue, in eleifend ipsum commodo. Nunc luctus massa sit amet lobortis viverra. Sed vestibulum maximus lacus, ut ultrices quam tempor eget.
              <br/>
              <br/>
              Morbi dignissim ante at tellus viverra, dictum pharetra ipsum tempus. Integer purus arcu, aliquet lobortis commodo sit amet, tristique vel est. Pellentesque auctor erat arcu, vel tincidunt nulla pulvinar id. Vivamus interdum sapien a diam cursus, vitae pharetra velit tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur porta pellentesque fringilla. Nam eget lectus.  </p>
        </div>
    </div>
  )
}

export default About