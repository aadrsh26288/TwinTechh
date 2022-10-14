
import React from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { Search, PersonCircle } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';
import logo from "../Img/LOGO.png";
import {BiSearch} from 'react-icons/bi'

function Header() {
  return (
    <>
    <Navbar key="md" expand="md" className="  md:mb-0" style={{backgroundColor: '#37978B'}}>
        <Navbar.Brand as={Link} to="/"><h4 className="md:flex items-center justify-center hidden ml-6 "><img style={{ width: "40px" }} className="pe-2 hidden md:flex" src={logo} alt=" ... "/><span>TwinTech</span></h4></Navbar.Brand>

      <Container fluid>

  <div className=" w-full flex items-center justify-between  md:hidden  mr-8 " style={{margin:'0',padding:'0'}}>
   <div className="  flex items-center justify-center h-16 ">
    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className="" size={10}/>
        <Navbar.Brand as={Link} to="/"><h4 className="flex items-center mt-2 justify-center"><img style={{ width: "35px" }} className="pl-2 lg:flex" src={logo} alt=" ... "/><span className="ml-2 ">TwinTech</span></h4></Navbar.Brand>

  </div>  

        <div className="flex md:hidden text-black items-center justify-center ">
        <Nav.Link href="#action2">
          <Search size={25}  className="lg:hidden flex text-black"/>
          </Nav.Link>
        {/* <input type="text"><Search size={20}  className="lg:hidden flex text-black"/></input> */}
       {/* <p className="lg:hidden flex text-black pt-2"> <Nav.Link  as={Link} to="/register/login "><span className='text-black font-bold '>Login</span></Nav.Link></p>  */}
        <Nav.Link  as={Link} to="/register/login"><PersonCircle size={25} className="lg:hidden block text-black " /></Nav.Link>
        </div>

</div>
  
      

        <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}> TwinTech </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 pt-1">
              {/* <Nav.Link className="text-light" href="#action1">TwinTech, 100% Original</Nav.Link> */}
              {/* <Nav.Link className="text-light" href="#action2">Transformable systems</Nav.Link>
              <Nav.Link className="text-light" href="#action2">Motorized Power</Nav.Link>
              <Nav.Link className="text-light" href="#action2">Catalogs</Nav.Link>
              <Nav.Link className="text-light" href="#action2">Sales network</Nav.Link>
              <Nav.Link className="text-light" href="#action2">Contract</Nav.Link>
              <Nav.Link className="text-light" href="#action2">Magazine</Nav.Link>
              <Nav.Link className="text-light" href="#action2">Contact</Nav.Link> */}
           <p  className="md:flex hidden text-white"><input type='text'  className='border-2 text-black rounded-3xl px-4 outline-none relative placeholder:text-slate-400' placeholder='Search...' style={{background:'#37978B',border:'2px solid black'}}></input> <BiSearch className="absolute right-20 top-5 text-black" size={25}/></p> 
        <p className="md:hidden block">  <Nav.Link className="text-dark " as={Link} to="/">Home</Nav.Link></p>
        <p className="md:hidden block">  <Nav.Link className="text-dark" as={Link} to="/magazines">Magazines</Nav.Link></p>
        <p className="md:hidden block">  <Nav.Link className="text-dark" as={Link} to="/young">Young</Nav.Link></p>
        <p className="md:hidden block">  <Nav.Link className="text-dark" as={Link} to="/living">Living</Nav.Link></p>
        <p className="md:hidden block">  <Nav.Link className="text-dark" as={Link} to="/register/signup">Signup</Nav.Link></p>
        <p className="md:hidden block">        <Nav.Link className="text-dark" as={Link} to='/contact'>Contact Us</Nav.Link></p>
        <p className="md:flex hidden"> <Nav.Link className="" as={Link} to="/register/login"><PersonCircle size={24} /></Nav.Link></p>   
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>

    </Navbar>
    <div className="  w-full md:block text-lg opacity-75 hidden  absolute border-2 top-30 z-40" style={{backgroundColor: '#C7C3C3'}}>
      <div className="flex gap-8 items-center justify-around w-full  px-6 pt-2 pb-3 auto " >
        <Link to='/' className="no-underline text-dark font-bold md:mt-2"> <p>Home</p></Link> 
        <Link to='/magazines' className="no-underline text-dark font-bold md:mt-2"> <p>Magazines</p></Link> 
        <Link to='/young' className="no-underline text-dark font-bold md:mt-2"> <p>Young</p></Link> 
        <Link to='/living' className="no-underline text-dark font-bold md:mt-2"> <p>Living</p></Link> 
        <Link to='/store' className="no-underline text-dark font-bold md:mt-2"> <p>Store</p></Link>
        {/* <Link to='/currentorder' className="no-underline text-dark font-bold md:mt-2"> <p>Orders</p></Link> */}

        <Link to='/register/signup' className="no-underline text-dark font-bold md:mt-2"> <p>Sign Up</p></Link> 
        <Link to='/contact' className="no-underline text-dark font-bold md:mt-2"> <p>Contact US</p></Link> 
      </div>
    </div>
 
</>
  );
}

export default Header;

