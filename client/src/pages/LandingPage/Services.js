import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Navbar from './Navbar';
const Services = () => {
  return (
    <div>
 
 {/* <div className="header-container container-fluid bg-light">
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <img src="assets/images/logo.png" alt=""/>
                        <button className="navbar-toggler d-lg-none d-md-block " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className="col-lg-9 d-none d-lg-block ">
                        <ul>
                            <li className='text-dark'><i className="far fa-envelope"></i> misbah7370@gmail.com</li>
                            <li className='text-dark'><i className="fas fa-headphones-alt"></i> +189 8162 9287</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="menu-jk" className="header-bottom contaienr-fluid">
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">



                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/About">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Courses1">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/News">Latest News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Contact">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cart">Cart</a>
                            </li>
                            <li className="nav-item ">
                            <Sidebar Icon={ExitToAppIcon} title={('Logout')}/>
                            </li>
                            <li className="nav-item">
                            <Sidebar Icon={ExitToAppIcon} title={('LogIn')}/>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    </div> */}
<Navbar />


     <div className="page-nav no-margin row bg-light">
       <div className="container">
           <div className="row">
               <h2>Our Services</h2>
               <ul>
                   <li> <a href="#"><i className="fas fa-home"></i> Home</a></li>
                   <li><i className="fas fa-angle-double-right"></i> Services</li>
               </ul>
           </div>
       </div>
   </div>

    
       

    <div className="services container-fluid">
       <div className="container">
           
            <div className="service-row row">
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="far fa-lightbulb"></i> UI Designing</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fab fa-android"></i> Android Development</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fas fa-fill-drip"></i> Graphic Design</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fas fa-ad"></i> Website Design</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fas fa-seedling"></i> SEO</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fas fa-at"></i> Digital Marketing</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="far fa-address-card"></i> ERP  Applications</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fab fa-app-store"></i> App Development</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
            </div>
       </div>
        
    </div>
   
    


  
    

    <footer id="contact" style={{backgroundColor : "#2b6cb0"}}>
    <div className="container" >
        <div className="row">
            <div className="col-md-3 about">
                <h2>About Us</h2>
                <p>Phasellus scelerisque ornare nisl sit amet pulvinar. Nunc non scelerisque augue. Proin et sollicitudin velit. </p>
                
                <div className="foot-address">
                    <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="addet">
                        BlueDart
                        Marthandam (K.K District)
                        Tamil Nadu, IND 
                    </div>
                </div>
                <div className="foot-address">
                    <div className="icon">
                        <i className="far fa-envelope-open"></i>
                    </div>
                    <div className="addet">
                        info@smarteyeapps.com <br/>
                        sales@smarteyeapps.com
                    </div>
                </div>
                <div className="foot-address">
                    <div className="icon">
                         <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="addet">
                        +23 323 43434 <br />
                        +1 3232 434 55
                    </div>
                </div>
            </div>
            <div className="col-md-3 fotblog">
                <h2>From latest Blog</h2>
                <div className="blohjb">
                    <p>dignissim. Integer tempor facilisis malesuada. Proin ac varius velit, tincidunt condimentum</p>
                    <span>22-1-2019</span>
                </div>
                <div className="blohjb">
                    <p>dignissim. Integer tempor facilisis malesuada. Proin ac varius velit, tincidunt condimentum</p>
                    <span>22-1-2019</span>
                </div>
                <div className="blohjb">
                    <p>dignissim. Integer tempor facilisis malesuada. Proin ac varius velit, tincidunt condimentum</p>
                    <span>22-1-2019</span>
                </div>
            </div>
            <div className="col-md-3 glink">
                <ul>
                    <li><a href="index.html"><i className="fas fa-angle-double-right"></i>Home</a></li>
                    <li><a href="about_us.html"><i className="fas fa-angle-double-right"></i>About Us</a></li>
                    <li><a href="services.html"><i className="fas fa-angle-double-right"></i>Services</a></li>
                    <li><a href="blog.html"><i className="fas fa-angle-double-right"></i>Blog</a></li>
                    <li><a href="pricing.html"><i className="fas fa-angle-double-right"></i>Gallery</a></li>
                    <li><a href="contact_us.html"><i className="fas fa-angle-double-right"></i>Contact Us</a></li>
                </ul>
            </div>
            <div className="col-md-3 tags">
                <h2>Easy Tags</h2>
                <ul>
                    <li>Finance</li>
                    <li>Web Design</li>
                    <li>Internet Pro</li>
                    <li>Node Js</li>
                    <li>Java Swing</li>
                    <li>Angular Js</li>
                    <li>Vue Js</li>
                </ul>
            </div>
        </div>
    </div>
</footer>
<div className="copy" style={{backgroundColor : "#2b6cb0"}}>
            <div className="container">
                <a href="https://www.smarteyeapps.com/">2015 &copy; All Rights Reserved | Designed and Developed by Misbah Fatma</a>
                
                <span>
                <a><i className="fab fa-github"></i></a>
                <a><i className="fab fa-google-plus-g"></i></a>
                <a><i className="fab fa-pinterest-p"></i></a>
                <a><i className="fab fa-twitter"></i></a>
                <a><i className="fab fa-facebook-f"></i></a>
        </span>
            </div>

        </div>
    </div>
  )
}

export default Services
