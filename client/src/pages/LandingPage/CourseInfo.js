import React, { useEffect } from 'react';
import Navbar from "./Navbar"

const CourseInfo = () => {
    const styles = {
        section: {
          fontSize: "18px",
          color: "#292b2c",
          backgroundColor: "#fff",
          padding: "0 20px"
        },
        wrapper: {
          textAlign: "center",
          margin: "0 auto",
          marginTop: "50px"
        }
        ,
        container1 : {
            display: 'grid',
            alignItems: 'center', 
            gridTemplateColumns: '.5fr 1fr 1fr',
            columnGap: '5px',
           
        }
      } 

  return (
    <div>
      <Navbar />

        <section>
            <div className='container'>

<div className='row'>
<div className ="col-8">
<div className="text">
<h2 style={{ paddingTop : 10, fontSize : 40}}>Full Stack Web Developer Masters Pro</h2> 
</div>

 <div className='row'>

    <div className ="col-6 mt-4">
       
    <img src="https://www.edureka.co/imgver.1711708434/img/co_preview_468_1563867702.png" className="course_img" alt="course image" width="365" height="203" />                            
                                
    </div>
    <div className ="col-6  mt-4 float-left">
        <h1 className='h5'>Extensive Program with 8 Courses</h1>
        <h1 className='h5'>200+ Hours of Interactive Learning</h1>
        <h1 className='h5'>Capstone Project</h1><i className="icon-lms_information"></i>
        </div>
    </div>
    <p className='mt-4'>Full Stack Web Developer course online will enable you to build interactive and responsive web applications using both front-end and back-end technologies. Full Stack Developer course syllabus starts with basics of Web Development, covers JavaScript and jQuery essentials, guides you to build remarkable user interface via Angular or React, helps you to build scalable backend applications using Express & Node.js plus manage data using MongoDB.
    </p>
 </div>
 <div className ="col-4 mt-4">
 <div className="card card shadow" style={{height : "400px", width : "400px"}}>

  <div className="card-body" >
    <h4 className="card-title text-center h4">The average salary for a full stack developer is $113,216 per year</h4>
    <p className="card card-text"> <span className="title">You Will Learn</span>
    <p>HTML5, CSS3, JavaScript, Bootstrap, Ajax, Google APIs, jQuery Forms, jQuery Events, jQuery Plugins, jQuery Mobile & 18 More Skills. </p>
   
        <a href="#Enroll_move">View Curriculum</a>
         </p>
    <a href="#" className="btn btn-primary mt-4">Go somewhere</a>
  </div>
</div>
    </div>
   </div>
 
            </div>
        </section>
    </div>
  )
}

export default CourseInfo


