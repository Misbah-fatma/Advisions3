import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import './i18n.js';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import DashBoard from "./pages/DashBoard/Dashboard.js";
import Settings from "./pages/Settings/Settings.js";
import Messages from "./pages/Messages/Messages.js";
import Grades from "./pages/Grades/Grades.js";
import Profile from "./pages/Profile/Profile.js";
import Header from "./components/Header/Header.js";
import CourseInfo from "./pages/CourseInfo/CourseInfo.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import Training from "./pages/Training/Training.js";
import Courses from "./pages/Courses/Courses.js";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard/TeacherDashboard.js";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import StudentRoute from "./components/PrivateRoute/StudentRoute.js";
import TeacherRoute from "./components/PrivateRoute/TeacherRoute.js";
import AdminRoute from "./components/PrivateRoute/AdminRoute.js";
import AdminCourseInfo from "./pages/Admin/Course/AdminCourseInfo.js";
import StudentInfo from "./pages/Admin/Student/StudentInfo.js";
import TeacherInfo from "./pages/Admin/Teacher/TeacherInfo.js";
import AllCourses from "./pages/All-Courses/AllCourses.js";
import NotFound from "./pages/404NotFoud/NotFound.js";
import Libray from "./pages/Library/Libray.js";
import Ucam from "./pages/Ucam/Ucam.js";
import Home from "./pages/LandingPage/Land.js";
import Contact from "./pages/LandingPage/Contact.js";
import Services from "./pages/LandingPage/Services.js";
import About from "./pages/LandingPage/About.js";
import Courses1 from "./pages/LandingPage/Courses.js";
import Team from "./pages/LandingPage/Team.js";
import News from "./pages/LandingPage/News.js";
import CourseInfoTable from "./pages/Admin/Course/AddCourse/CourseInfoTable/CourseInfoTable.js";
import AddtoCart from "./pages/AddToCart/AddtoCart.js"
import NoticeToggle from "./pages/CourseInfo/NoticeToggle/NoticeToggle.js";
import CheckOut from "./pages/AddToCart/Checkout.js"
import Products from "./pages/LandingPage/Products.js"
import Navbar from "./pages/LandingPage/Navbar.js";
import Profile2 from "./pages/ProfilePage/profile.js";
import CourseInfo1 from "./pages/LandingPage/CourseInfo.js";



const Routing = () => {

  return (
    <Switch>
          <Route exact path="/">
        <Home />
      </Route>
       <StudentRoute exact path="/">
        <Home />
      </StudentRoute>
      <StudentRoute exact path="/Dashboard">
        <DashBoard />
      </StudentRoute>
      <StudentRoute exact path="/library">
        <Libray />
      </StudentRoute>
      <StudentRoute exact path="/ucam">
        <Ucam />
      </StudentRoute>
      <TeacherRoute exact path="/teacher-dashboard">
        <TeacherDashboard />
      </TeacherRoute>
      <AdminRoute exact path="/admin-dashboard">
        <AdminDashboard />
      </AdminRoute>
      <AdminRoute exact path="/admin/course-info">
        <AdminCourseInfo />
      </AdminRoute>
      <AdminRoute exact path="/admin/student-info">
        <StudentInfo />
      </AdminRoute>
      <AdminRoute exact path="/admin/teacher-info">
        <TeacherInfo />
      </AdminRoute>
    
      <StudentRoute exact path="/messages">
        <Messages />
      </StudentRoute>
      <Route exact path="/CourseInfoTable">
        <CourseInfoTable />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/training">
        <Training />
      </Route>
      <Route exact path="/courses">
        <Courses />
      </Route>
      <Route exact path="/profile2">
        <Profile2 />
      </Route>
      <Route exact path="/settings">
        <Settings />
      </Route>
      <Route exact path="/checkout">
        <CheckOut />
      </Route>
      <Route exact path="/grades">
        <Grades />
      </Route>
      <Route exact path="/cart">
            <AddtoCart  />
          </Route>
          <Route exact path="/NoticeToggle">
        <NoticeToggle />
      </Route>
      <Route exact path="/CourseInfo">
        <CourseInfo />
      </Route>
      <Route exact path="/product/:id">
        <Products />
        </Route>
         
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/all-courses">
        <AllCourses />
      </Route>
      <Route exact path="/courseInfo1">
        <CourseInfo1 />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/team">
          <Team/>
        </Route>
        <Route exact path="/product">
          <Courses1 />
          </Route> 
        <Route exact path="/About" > <About/></Route>
        <Route exact path="/Services" > <Services/> </Route>
        <Route exact path="/News" ><News/></Route>
        <Route exact path="/Courses1"> <Courses1 /></Route> 
        <Route exact path="/Contact" ><Contact/> </Route>
 
      <Route  path="*">
        <NotFound />
      </Route>
  
       
      
    </Switch>
  );
};

function App() {

  return (
    <div className="App">
      
      <Router>
      {/* <Header /> */}

        <Routing />
      </Router>
    </div>
  );
}

export default App;
