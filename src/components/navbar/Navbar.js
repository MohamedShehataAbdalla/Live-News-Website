import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Contact from '../../pages/contact/Contact';
import PostDetails from "../../pages/home/postDetails";
import PostAdd from "../../pages/home/postAdd";
import PostUpdate from "../../pages/home/postUpdate";
import Search from "../../pages/home/search";

// import logo from '../../src/images/Logo/logo.png'

const Navbar = () => {

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand mb-0 h1" href="index.html">
                        <img src="%PUBLIC_URL%/../../src/images/Logo/logo.png" alt="" width="30" height="24" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Latest News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contct">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link border-1" to="/add">Create Article</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link border-1" to="/search">Search</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/post/:id" element={<PostDetails />}> </Route>
                <Route path="/add" element={<PostAdd />}> </Route>
                <Route path="/search" element={<Search />}> </Route>
                <Route path="/update/:id" element={<PostUpdate />}> </Route>
                <Route path="/about" element={<About />}> </Route>
                <Route path="/contct" element={<Contact />}> </Route>
            </Routes>
            
        </BrowserRouter>
    );

};

export default Navbar;