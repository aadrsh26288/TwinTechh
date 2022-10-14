import React from 'react'
import {
  Link,
  Outlet,
  useMatch,
  useResolvedPath
} from "react-router-dom";

function LoginSignup() {

  return (
    <>
    <div className='d-flex align-items-center justify-contenet-center md:mt-16 pt-2'  style={{background:'#D9D9D9'}}>
      <div className="mx-auto d-flex gap-2 m-3">
        <CustomLink to={'/register/login'} style={{ boxShadow: "4px 5px 10px 1px #9E9E9E" }} ><div>Log in</div></CustomLink>
        <CustomLink to={'/register/signup'} style={{ boxShadow: "4px 5px 10px 1px #9E9E9E"}} ><div>Sign Up</div></CustomLink>
        {/* <CustomLink to={'/register/users'} style={{ boxShadow: "4px 5px 10px 1px #9E9E9E"}} ><div>USers</div></CustomLink> */}

      </div>
    </div>
    <Outlet />
    </>
  )
}

 export function CustomLink ({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvePath.pathname, end: true })

  return(
    <Link className={(isActive)? 'text-decoration-none link-dark border-dark rounded px-5 py-1 mt-0 active' : 'text-decoration-none link-dark border-dark rounded px-5 py-1 mt-0'} to={to} {...props}>
      {children}
    </Link>
  )
} 

export default LoginSignup