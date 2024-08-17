import React from 'react';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './components/home';

import FShop from './components/fshop.jsx';
import Shop1 from './pages/shop/shop1.jsx';
import Shop2 from './pages/shop/shop2.jsx';
import Shop3 from './pages/shop/shop3.jsx';
import Blog from './components/blog.jsx';
import About from './components/about';
import Contact from './components/contact.jsx';
import Signin from './components/userData/sign_in.jsx';
import Forgate from './components/userData/forgate.jsx';
import Issue from './components/issue';
import Footer from './components/footer';

// Products items
import Products1 from './pages/products/product1/img/img1.jsx'
import Products2 from './pages/products/product1/img/img2.jsx'
import Products3 from './pages/products/product1/img/img3.jsx'
import Products4 from './pages/products/product1/img/img4.jsx'

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sign-in"element={<Signin />}/>
          <Route path="/forgate"element={<Forgate />}/>
          <Route path="/fshop" element={<FShop/>} />
          <Route path="/shop1" element={<Shop1/>} />
          <Route path="/shop2" element={<Shop2/>} />
          <Route path="/shop3" element={<Shop3/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/issue"element={<Issue />}/>

          {/* Products 1 */}
          <Route path="/img1"element={<Products1/>}/>
          <Route path="/img2"element={<Products2 />}/>
          <Route path="/img3"element={<Products3/>}/>
          <Route path="/img4"element={<Products4 />}/>

        </Routes>
      <Footer/> 
    </Router>
  );
}

export default App;
