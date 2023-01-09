import React, {Component} from 'react';
import EmployeeServices from "../services/EmployeeServices";
import withNavigateHook from "./withNavigateHook";

class ViewEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id:-1,
            employee:{}
        }
    }

    componentDidMount() {

        EmployeeServices.getEmployeeById(this.props.params.id).then(res => {
            this.setState({
                id:this.props.params.id,
                employee:res.data
            })
        })
    }


    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Employee Details </h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Employee First Name: </label>
                            <div>{this.state.employee.firstName}</div>
                        </div>

                        <div className="row">
                            <label> Employee Last Name: </label>
                            <div>{this.state.employee.lastName}</div>
                        </div>

                        <div className="row">
                            <label> Employee Email Name: </label>
                            <div>{this.state.employee.emailId}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withNavigateHook(ViewEmployee);