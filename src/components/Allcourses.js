import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {



 //toastify
  useEffect(() => {
    document.title = "All Courses";
  }, []);



  const [courses, setCourses] = useState([]);






  const updateCourses = (id)=>{

    setCourses(courses.filter((c) =>
    c.id !== id
    ))

  }





  // Function to call the server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        // Update the state with the courses received from the server
        setCourses(response.data);
       // console.log(response.data);
        //toast.success("course has been loaded");
     
      },
      (error) => {
        // Handle errors
        //console.log("Error fetching courses from the server:", error);
        toast.error("something went wrong");
      }
    );
  };






  // Calling loading course function
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);






  return (





    <div className="text-center">
      <h1>All Courses</h1>
      <p>List of Courses are as follows:</p>







    {/* logic to retrive data */}
      {courses.length > 0
        ? courses.map((item, index) => <Course key={index} course={item}  update={updateCourses}/>)
        : "No Courses"}




    </div>
  );
};

export default AllCourses;
