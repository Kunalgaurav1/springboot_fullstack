import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Button,
    Container
} from "reactstrap";
import base_url from "../api/bootapi";


const Course = ({course, update}) => {


    const deleteCourse = (id) =>{

        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{

                toast.success("course deleted")
                update(id);

                console.log("course deleted")

            },
            (error) =>{

                toast.error("course not deleted");
 
                console.log("not deleted ");

            }
        )



    }

    // const Course = ({ course, update }) => {
    //     const [updatedCourse, setUpdatedCourse] = useState({
    //       id: course.id,
    //       title: course.title,
    //       description: course.description,
    //     });


    // const updateCourse = (id) => {

    //     axios.put(`${base_url}/courses/${id}`).then (
    //         (response) => {
    //             toast.success("updated successfully");
    //         },
    //         (error) => {
    //             toast.error("something went wrong ");
    //         }
    //     )

    // }






    return (

        <Card className="text-center">
            <CardBody >
                <CardSubtitle className="font-weight-bold">{course.title} </CardSubtitle>
                <CardText>{course.description} </CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    {/* <Button color="warning ml-5" >update</Button> */}
                </Container>
            </CardBody>
        </Card>


    );

}

export default Course;