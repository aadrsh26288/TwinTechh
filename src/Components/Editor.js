// // import React, { useState } from "react"
// // // import { CKEditor } from '@ckeditor/ckeditor5-react';
// // // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// // import parse from "html-react-parser"


// // const Editor=()=>{
// //     const [text, setText] = useState("")
// //     return (
// //         <div className="App" >
// //         {/* <div className="editor">
// //           <CKEditor
// //             editor={ClassicEditor}
// //             data={text}
// //             onChange={(event, editor) => {
// //               const data = editor.getData()
// //               setText(data)
// //             }}
// //           />
// //         </div>
// //         <div>
// //           <h2>Content</h2>
// //           <p>{parse(text)}</p>
// //         </div> */}




// //       </div>
// //     )
// // }

// // export default Editor


// import React, {useState} from 'react';
// import {Container} from "react-bootstrap";
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
// import parse from "html-react-parser"


// const Editor = () => {

//     const [show, setShow] = useState('')
// console.log(show)
//     return (
//         <>
//             <Container>
//                 <ReactQuill className="shadow-sm"
//                             theme="snow"
//                             style={{
//                                 height: 350,
//                                 marginTop: '1rem',
//                                 display: 'flex',
//                                 flexDirection: 'column'
//                             }}

//                             value={show}

//                             modules={{
//                                 toolbar: [
//                                     [{ 'header': '1'}, {'header': '2'}, { 'font': [] }], [{size: []}],
//                                     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//                                     [{'align': []}],
//                                     [{ 'color': [] }, { 'background': [] }],
//                                     [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
//                                     ['link', "video","image", "code-block"],
//                                     ['clean']
//                                 ],
//                             }}
//                             formats={[
//                                 'header', 'font', 'size',
//                                 'bold', 'italic', 'underline', 'strike', 'blockquote', 'color', 'background',
//                                 'list', 'bullet', 'indent', 'link', 'video', 'image', "code-block", "align"
//                             ]}
//                             onChange={(val) => {
//                                 setShow(val)
//                             }}
//                 />
//             </Container>

//             <div>
//                 <p>{parse(show)} </p>
//             </div>
//         </>
//     );
// };

// export default Editor;