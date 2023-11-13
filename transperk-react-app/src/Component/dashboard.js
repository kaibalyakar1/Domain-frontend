import { NavLink } from "react-router-dom";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

const dashboard = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-4">

                    <ListGroup>
                        <ListGroupItem active tag="button" Action>Cras justo odio</ListGroupItem>
                        <ListGroupItem tag="button" Action>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem tag="button" Action>Morbi leo risus</ListGroupItem>
                        <ListGroupItem tag="button" Action>Porta ac consectetur ac</ListGroupItem>
                        <ListGroupItem disabled tag="button" Action>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                </div>
                <div className="col-8 bg-warning">
                    <h1>hello</h1>
                </div>
            </div>
            <div className="row signbar">
                <ListGroup horizontal>
                    <ListGroupItem tag="a" href="#"><NavLink className="nav-link" exact to="/Editprofile">
                        <Button outline color="success">
                            Edit Profile
                        </Button>
                    </NavLink></ListGroupItem>
                    <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </div>

        </div>
    );
}

export default dashboard;