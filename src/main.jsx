import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import {Route,RouterProvider,createBrowserRouter} from 'react-router-dom'
// import Layout from './Layout';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import User from './components/User';
// import Github, { githubInfoLoader } from './components/Github';

//  method 1
 
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[{
//       path:"",
//       element:<Home/>
//     },{
//       path:"about",
//       element:<About/>
//     },
//    {
//       path:"contact",
//       element:<Contact/>
//     },]
//   }
// ]);
 // mehthod 2
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="" element={<Layout/>}>
//     <Route path="/" element={<Home/>} />
//     <Route path='about' element={<About/>} />
//     <Route path='contact' element={<Contact/>} />
//     <Route loader={githubInfoLoader} path='github' element={<Github/>} />
//     <Route path='user/:userid' element={<User/>} />

//     </Route>
//   )
// )


//i have tried for my learning only
// const router=()=>{
//    return (
//     <>
//     <BrowserRouter>
//     <Routes>
//     <Route path="" element={<Layout/>}>
//      <Route path="/" element={<Home/>} />
//      <Route path='about' element={<About/>} />
//    <Route path='contact' element={<Contact/>} />
//      <Route loader={githubInfoLoader} path='github' element={<Github/>} />
//     <Route path='user/:userid' element={<User/>} />
// </Route>
//     </Routes>
//   </BrowserRouter>
//   </>
//    )
// }



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <App/>
  </React.StrictMode>
)
