import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
    return (
     
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/home">Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="add-course">Add Courses</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="view-course">View Courses</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#">About</Link>
        </ListGroup>

    )
}


export default Menus;