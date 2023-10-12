import React , {Fragment, useEffect, useState} from "react";
import { Button, Container, Form, FormGroup , Input} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
//import Toast from "reactstrap";
import { toast } from "react-toastify";

const Addcourse = () => {
    
    useEffect(() => {
        document.title=("Addcourse");
     },[])


     const [course, setCourse] = useState({});


    //form handle function
    const handleForm =(e) =>{
        console.log(course)
        postDatatoServer(course);
        e.preventDefault();
    }



    //creating function to post data on server 

    const postDatatoServer = (data)=>{

        axios.post(`${base_url}/courses`,data).then(
            (response)=>{

                console.log(response);
               // console.log("success")
                toast.success("course added Successfully");



            },(error)=>{

                console.log(error);
               // console.log("error")
                toast.error("something went wrong ");



            }
        )

    }









    return <Fragment>
        <h1 className="text-center my-3">Fill Course Details</h1>



        <Form  onSubmit={handleForm}>

            <FormGroup>

                <label for="userId">Course Id</label>
                <Input
                type="text"
                placeholder="Enter Here"
                name="userId"
                id="userId"

                onChange={(e)=>{
                    setCourse({...course, id:e.target.value})
                }}
                />
            </FormGroup>

            <FormGroup>
                <label for="title">Course title </label>
                <Input type="text" placeholder="Enter CourseName here" id="title" 
                onChange={(e) =>{
                    setCourse({...course, title:e.target.value});
                }}/>
            </FormGroup>

            <FormGroup>
                <label for="Description" >Description</label>
                <Input type="textarea" placeholder="Enter description here " id="description" style={{height:100}}
                onChange={(e)=>{
                    setCourse({...course, description:e.target.value});

                }}/>
            </FormGroup>


            <Container className="text-center">
                <Button type="submit"  color="success" >Add Course</Button>
                <Button type ="reset" color="warning ml-3" >Clear</Button>
            </Container>


        </Form>


    </Fragment>;
}

export default Addcourse;