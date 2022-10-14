import React from 'react'

const ContactUs = () => {
    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.16373859014!2d76.81305682633776!3d28.647279936279944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1662105824262!5m2!1sen!2sin"
  return (
    <div className='mt-16 pb-3'>
        <div className='grid md:grid-cols-2 items-center p-3' style={{background:'#D9D9D9'}}>
            <div className='md:px-5 '>
               <p className="md:text-5xl text-2xl ">Contact Us</p>
               <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut quis iure. Aliquam ab dignissimos autem iusto soluta alias, aut vel laborum culpa doloremque doloribus.</p>
            </div>


            <div>
                <p className='text-md text-justify'>Fill out the form, one of our staff will contact you as soon as possible.</p>
                <form className=" px-2  ">
                    <div className="">
                    <div className="flex gap-3 ">
                        <div className="flex flex-col">
                        <label>First Name : * </label>
                        <input type="text" name="firstName" className='rounded-lg md:p-1 md:px-2 outline-none px-1 w-full '  style={{border:'2px solid #37978B',background:'#D9D9D9'}} ></input> 
                        </div>

                        <div  className="flex flex-col">
                        <label>Last Name : *  </label>
                        <input type="text" name="lastName" className='rounded-lg md:p-1 md:px-2 outline-none px-1 w-full ' style={{border:'2px solid #37978B',background:'#D9D9D9'}}></input> 
                        </div>
                      
                    </div>

                    <div className="flex gap-3 mt-3">
                        <div className="flex flex-col">
                        <label>Postal code : *</label>
                        <input type="text" name="firstName" className='rounded-lg md:p-1 md:px-2 outline-none px-1 w-full ' style={{border:'2px solid #37978B',background:'#D9D9D9'}}></input> 
                        </div>

                        <div  className="flex flex-col">
                        <label>Object : *</label>
                        <input type="text" name="lastName" className='rounded-lg md:p-1 md:px-2 outline-none px-1 w-full ' style={{border:'2px solid #37978B',background:'#D9D9D9'}}></input> 
                        </div>
                      
                    </div>

                    <div className="flex flex-col">
                        <label>Email : *</label>
                        <input type="email" name="email" className='rounded-lg md:p-1 md:px-2 outline-none px-1 md:w-full ' style={{border:'2px solid #37978B',background:'#D9D9D9'}}></input>
                    </div>

                    <div className="flex flex-col">
                        <label>Message : *</label>
                        <textarea name="email" className='border-2 p-2 h-48 rounded-lg md:p-1 md:px-2 outline-none px-1 md:w-full' style={{border:'2px solid #37978B',background:'#D9D9D9'}}/>
                    </div>

                    <div className='my-3 flex justify-center md:block'>
                    <button className='py-2 px-5 rounded-lg text-lg text-white' style={{background:'#37978B'}}>Submit</button>
                    </div>
               
                    </div>

                

                </form>

            </div>
        </div>

{/* Address section */}

<div className='md:grid md:grid-cols-2  w-full items-center mt-5'>
<div className='w-full' >
    {/* <iframe src={map} width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    <iframe width="auto" height="400" className='w-full flex' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=delhi%20delhi+(delhi)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 

    </div>
    <div className='flex flex-col pl-3 w-full  md:pl-40 '> 
        <p className='text-xl font-medium' style={{borderBottom:'2px solid #29726A', width:'130px'}}>Department 1</p>
        <p className='text-xl text-justify' >Lorem ipsum dolor sit <br></br>amet consectetur</p>
        <p className='text-xl font-semibold' >Ph : +91 89520 98560</p>
        <p className='text-xl font-semibold' >Ph : +91 89520 98560</p>
        <p className='text-xl font-semibold'>yourmailid@gmail.com</p>
        <p className='text-xl font-semibold'>yourmailid@gmail.com</p>
    </div>

    
</div>


<div className='flex  md:grid md:grid-cols-2 flex-col-reverse w-full items-center mt-5 '>

    <div className='flex flex-col  w-full  md:pl-56 pl-3 pt-3 '> 
        <p className='text-xl font-medium' style={{borderBottom:'2px solid #29726A', width:'130px'}}>Department 2</p>
        <p className='text-xl text-justify' >Lorem ipsum dolor sit <br></br>amet consectetur</p>
        <p className='text-xl font-semibold' >Ph : +91 89520 98560</p>
        <p className='text-xl font-semibold' >Ph : +91 89520 98560</p>
        <p className='text-xl font-semibold'>yourmailid@gmail.com</p>
        <p className='text-xl font-semibold'>yourmailid@gmail.com</p>
    </div>
    <div className=' w-full' >
    {/* <iframe src={map} width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    <iframe width="auto" className='w-full flex' height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=delhi%20delhi+(delhi)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
    </div>

 
</div>



    </div>
  )
}

export default ContactUs