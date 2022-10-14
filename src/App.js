import React,{ useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Advertisement from "./Components/Advertisement";
import WhyTwintech from "./Components/WhyTwintech";
import Footer from "./Components/Footer";
import ButtomCorousel from "./Components/ButtomCorousel";
import LoginSignup from "./Components/LoginSignup";
import aos from "aos"
import 'aos/dist/aos.css'; 
import Magazines from "./Components/Magazines";
import Magazine from "./Components/Magazine";
import AddBlog from "./Components/AddBlog";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Users from "./Components/Subcomponents";
import{Help} from "./Components/Subcomponents"
import{Feed} from "./Components/Subcomponents"
import Transform from './Components/Transform'
import{Dash} from "./Components/Subcomponents"
// import Editor from "./Components/Editor"
import Living from './Components/Living'
import Young from './Components/Young'
import Image from './Components/Image'
import Contact from './Components/ContactUs'
import Store from './Components/Store'
import Cart from './Components/Cart'
import data from '../src/Lib/data'
import Product from "./Components/Product";
import Blog from "./Components/Blog";
import Products from './Components/Products'
import Whis from './Components/WhisList'
import Admin from "./Components/Admin";
import CurrentOrder from "./Components/CurrentOrder";
import ProtectedRoutes from './ProtectedRoutes'
import ProductPreview from "./Components/ProductPreview";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./Lib/initFirebase";
import { v4 as uuid } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

aos.init();

function DisplayHome() {

  return (
    <div className="App">
       <Hero/>
    
      <About/>
      <Banner />
      <Advertisement/>
      <WhyTwintech />
      <Transform />
      <ButtomCorousel/> 
      {/* <Magazines/>  */}

    </div>
  )
}


function App() {
  const [use,setuser]=useState('')


  const [isLoading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    getBlogs()
}, [])

function getBlogs(){
    setLoading(true)
    const blogsCollectionRef = collection(db, "Products")
    getDocs(blogsCollectionRef)
        .then( response => {
            const blogResponse = response.docs.map( doc => ({
                data: doc.data(),
                id: doc.id
            }))
            setBlogs(blogResponse)
            // setBuy(blogResponse)
            setLoading(false)
        } )
        .catch( error => console.log(error.message) )
}

// cart 

const UniqueId = uuid();
const Orderid=UniqueId.slice(0,11)
const [cartItems, setCartItems] = useState([]);
const [WhisList,setWhisList] = useState([]);
const[id,setId] = useState()
const[user,setUser] = useState()
const[buy,setBuy]= useState([])
const[mobile,setMobile]=useState('')
const[address,setaddress]=useState('')
const[email,setemail]=useState('')
const[payment,setpayment]=useState('')


const orderDetails ={
  cartItems:cartItems,
 
}




function getData(data){
  console.log(data)
  setUser(data.username)
  setMobile(data.mobile)
  setaddress(data.address)
  setemail(data.email)
  setpayment(data.payment)
}


  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

const r = Math.floor(Math.random() * 20);
setId(r)

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
       

      );
     
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 ,Orderid:Orderid,CustomerName:user,address:address,mobile:mobile,payment:payment}]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };







  const deleteProd = (varietalCount) => {
    const newItems = cartItems.filter((item) => item.id !== varietalCount.id)
    setCartItems(newItems);
  };

  // whislist

  const onAdd2 = (product) => {
    const exist = WhisList.find((x) => x.id === product.id);
    if (exist) {
      setWhisList(
        WhisList.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setWhisList([...WhisList, { ...product, qty: 1 }]);
    }
  };


  const deleteWhis = (varietalCount) => {
    const newItems = WhisList.filter((item) => item.id !== varietalCount.id)
    setWhisList(newItems);
  };

  // console.log(cartItems[0])

  const onbuy = (product) => {
    const exist = buy.find((x) => x.id === product.id);

// const r = Math.floor(Math.random() * 20);
// setId(r)

    if (exist) {
      setBuy(
        buy.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
       

      );
      toast.success('Thank you for your purchase 😀', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
     
    } else {
      setBuy([...buy, { ...product, qty: 1 ,Orderid:Orderid,CustomerName:user,address:address,mobile:mobile,payment:payment,email:email}]);
 
      toast.success('Thank you for your purchase😀', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
     
    

    }
  };










  

  return (

   

    <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<DisplayHome />} />
          <Route exact path="/register" element={<LoginSignup />}>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
      
          </Route>


          <Route exact path="/magazines" element={<Magazines />} />
          <Route path="/blogs/:blogId" element={ <Blog />} />
          <Route path="/magazines/:blogId" element={ <Magazine />} />
          <Route path="/products/:productId" element={ <Product />} />
          <Route path="/WhisList" element={ <Whis onAdd2={onAdd2} WhisList={WhisList} deleteWhis={deleteWhis} />} />
          <Route path="/ProductPreview/:productId" element={ < ProductPreview data={blogs}  onAdd={onAdd} countCartItems={cartItems.length} onAdd2={onAdd2} ListLength={WhisList.length}/>} />
          {/* <Route path="/admin" element={ <Admin />} /> */}
         
         
         
          <Route path='/admin'  element={ <Admin />} >

          
            </Route> 
       
        
      
            <Route element={ <ProtectedRoutes/>} >
            <Route path="/admin/feed" element={ <Feed />} />
            <Route path='/admin/addblog' element={ <AddBlog /> } />
            <Route path="/admin/help" element={ <Help />} />
            <Route  path="/admin/users" element={ <Users />} />
             <Route path="/admin/CurrentUsers" element={ <Dash />} />
             <Route path="/admin/products" element={ <Products/>} />
            </Route>




          
          <Route path="/living" element={ <Living />} />
          <Route path="/young" element={ <Young />} />
          {/* <Route path="/img" element={ <Image/>} /> */}
          <Route path="/contact" element={ <Contact/>} />
  

         
          <Route path="/store" element={ <Store data={blogs}  onAdd={onAdd} getData={getData} countCartItems={cartItems.length} onbuy={onbuy}/> } />
          <Route path="/cart" element={ <Cart  cartItems={cartItems} onRemove={onRemove}   onAdd={onAdd} remove={deleteProd} orderDetails={orderDetails}/> } />
          <Route path='/currentorder' element={ <CurrentOrder orderDetails={buy}  />} />



        </Routes>
        <Footer />

      </Router>

  );
}

export default App;
