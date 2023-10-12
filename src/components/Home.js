import React , {useEffect} from "react";
import { Button } from "reactstrap";


const Home = () => {


    useEffect(() => {
        document.title=("Home");
     },[])


    return (

        <div className="text-center">

            <Button color="primary" outline>Start Learning </Button>
            

        </div>
    )
}

export default Home;

