import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Navbar from './Navbar';
const About = () => {
  return (
    <div>
   
 <Navbar />




     <div className="page-nav no-margin row bg-light">
       <div className="container">
           <div className="row">
               <h2>About Imagination</h2>
               <ul>
                   <li> <a href="#"><i className="fas fa-home"></i> Home</a></li>
                   <li><i className="fas fa-angle-double-right"></i> About Us</li>
               </ul>
           </div>
       </div>
   </div>

    
       

         <div id="about" className="about-company">
          <div className="container">
              <div className="row">
                 <div className="col-md-6">
                   <div className="detail">
                       <h3>About Company</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit mi, sed convallis nisi eleifend eget. Morbi vel magna odio. Lorem ipsum dolor consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est  consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est ipsum dolor sit arcu.</p>
                       <p>Ut ullamcorper ac eros nec molestie. Curabitur luctus dui fringilla magna laoreet lacinia. Pellentesque velit ante, convallis quis justo vel, condimentum tempus diam. Donec vitae pretium lectus. Nullam faucibus nulla sit amet tincidunt gravida. Maecenas posuere pharetra tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent molestie lectus in arcu pharetra pulvinar. Donec cursus diam id quam accumsan maximus. Morbi ac tincidunt quam, quis cursus urna. Pellentesque in consectetur ante, a efficitur nisi.</p>
                   </div>
               </div>
               <div className="col-md-6">
                   <div className="imag">
                       <img src="assets/images/about.jpg" alt=""/>
                   </div>
               </div> 
              </div>
          </div>
           
       </div>

    


       <div id="why" className="our-capablit container-fluid" style={{backgroundColor : "#2b6cb0"}}>
           <div className="layy">
               <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                       <div className="cap-det">
                    
                            <div className="progress mx-auto" data-value='80'>
                              <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <span className="progress-right">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h2 font-weight-bold">80<sup className="small">%</sup></div>
                              </div>
                            </div>
                       
                           <h6>Web Design</h6>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. </p>
                       </div>
                   </div>
                   <div className="col-md-3">
                       <div className="cap-det">
                       
                            <div className="progress mx-auto" data-value='80'>
                              <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <span className="progress-right">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h2 font-weight-bold">70<sup className="small">%</sup></div>
                              </div>
                            </div>
                        
                           <h6>Android Development</h6>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. </p>
                       </div>
                   </div>
                   <div className="col-md-3">
                       <div className="cap-det">
                     
                            <div className="progress mx-auto" data-value='80'>
                              <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <span className="progress-right">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h2 font-weight-bold">90<sup className="small">%</sup></div>
                              </div>
                            </div>
                         
                           <h6>Frontend Developer</h6>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                       </div>
                   </div>
                   
                   <div className="col-md-3">
                       <div className="cap-det">
                       
                            <div className="progress mx-auto" data-value='80'>
                              <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <span className="progress-right">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h2 font-weight-bold">60<sup className="small">%</sup></div>
                              </div>
                            </div>
                         
                           <h6>SEO & Digital Marketing</h6>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                       </div>
                   </div>
                  </div>
               </div>
           </div>
       </div>



    <section className="our-team team-11">
        <div className="container">
            <div className="session-title row">
                  <h2>Take a look at Our Team</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit</p>
            </div>
            <div className="row team-row">
                <div className="col-md-3 col-sm-6" >
                    <div className="single-usr" >
                        <img src="assets/images/team/team-memb1.jpg" alt=""/>
                        <div className="det-o" style={{backgroundColor : "#2b6cb0"}}>
                            <h4>David Kanuel</h4>
                            <i>CEO</i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb2.jpg" alt=""/>
                        <div className="det-o" style={{backgroundColor : "#2b6cb0"}}>
                            <h4>David Kanuel</h4>
                            <i>Business Analsist</i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb3.jpg" alt=""/>
                        <div className="det-o" style={{backgroundColor : "#2b6cb0"}}>
                            <h4>David Kanuel</h4>
                            <i>Project Manager</i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb4.jpg" alt=""/>
                        <div className="det-o" style={{backgroundColor : "#2b6cb0"}}>
                            <h4>David Kanuel</h4>
                            <i>Team Leader</i>
                        </div>
                    </div>
                </div>
                
                 
            </div>
        </div>


    </section>


  
    

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

export default About
