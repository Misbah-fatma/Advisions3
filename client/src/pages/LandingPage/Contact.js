import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Navbar from './Navbar';
const Contact = () => {
  return (
    <div>
      
<Navbar />


     <div className="page-nav no-margin row bg-light">
       <div className="container">
           <div className="row">
               <h2>Location</h2>
               <ul>
                   <li> <a href="#"><i className="fas fa-home"></i> Home</a></li>
                   <li><i className="fas fa-angle-double-right"></i> Contact US HERE</li>
               </ul>
           </div>
       </div>
   </div> 

    
       
    

       <div style={{ marginTop : '0 px'}} className="row no-margin">
        
        <iframe style= {{width : "100%"}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.19784092825!2d79.10145254589841!3d12.009924873581818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1448883859107"  height="450" frameborder="0" allowfullscreen></iframe>


      </div>
      <br />
      <div className="row contact-rooo no-margin">
        <div className="container">
           <div className="row">
               
          
            <div className="col-sm-6">
            <h2 >Contact Form</h2>
                <div className="row cont-row">
                    <div  className="col-sm-3"><label>Enter Name </label><span>:</span></div>
                    <div className="col-sm-8">
                        <input type="text" placeholder="Enter Name" name="name" className="form-control input-sm" /></div>
                </div>
                <div  className="row cont-row">
                    <div  className="col-sm-3"><label>Email Address </label><span>:</span></div>
                    <div className="col-sm-8">
                        <input type="text" name="name" placeholder="Enter Email Address" className="form-control input-sm" /></div>
                </div>
                 <div  className="row cont-row">
                    <div  className="col-sm-3"><label>Mobile Number</label><span>:</span></div>
                    <div className="col-sm-8">
                        <input type="text" name="name" placeholder="Enter Mobile Number" className="form-control input-sm"/></div>
                </div>
                 <div  className="row cont-row">
                    <div  className="col-sm-3"><label>Enter Message</label><span>:</span></div>
                    <div className="col-sm-8">
                      <textarea rows="5" placeholder="Enter Your Message" className="form-control input-sm"></textarea>
                    </div>
                </div>
                 <div style={{ marginTop : '0px'}} className="row">
                    <div style={{ paddingTop : '10px'}} className="col-sm-3"><label></label></div>
                    <div className="col-sm-8">
                     <button className="btn btn-success btn-sm">Send Message</button>
                    </div>
                </div>
            </div>
             <div className="col-sm-6">
                    
                  <div style={{ margin : '50px'}} className="serv"> 
                
               
             
                              
              
          <h2 style={{ marginTop : '10px'}}>Address</h2>

    Smart Hospital <br/>
    Daman Street<br/>
    K.K District<br/>
    Phone:+91 9159669599<br/>
    Email:info@smart-eye.in<br/>
    Website:www.smart-eye.com<br/>

 
       
            
                
                
              
           </div>    
                
             
         </div>

            </div>
        </div>
        
      </div><br /><br />


  
    

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

export default Contact
