import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,Link
} from "react-router-dom";
import person from '../person.png';
import socoLogo from '../socoLogo.png';
import Chart from './Chart';
// import AssignmentsChart from './AssignmentsChart';



export default class Header extends Component {


  constructor (props) {
    super(props)

    this.state = {
      name : "Tannaz",
      age : "25",
      gender : "Female",
      group : "FlaskPro"
    }

    // this.state = {
    //   isHiddenAssignment: true,
    //   isHiddenResources: true
    // }
  }
  // toggleHiddenAssignment () {
  //   this.setState({
  //     isHiddenAssignment: !this.state.isHiddenAssignment
  //   })
  // }
  // toggleHiddenResources () {
  //   this.setState({
  //     isHiddenResources: !this.state.isHiddenResources
  //   })
  // }

toggled = (ev) =>{
this.props.clickMe()
}


    render() {
        return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light shadow-sm" id="mainNav">
          <div className="navbar-brand d-flex">
            <img src={socoLogo} height="35"/>
            <h4 className="text-muted ml-2 mt-1">React-based User Dashboard</h4>
          </div>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navCollapse">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse align-middle" id="navCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mt-1">
                  <Link to="#" onClick={this.toggled}>
                  {/* <Link to="#" onClick={()  => this.props.toggleHiddenAssignment}> */}
                  {/* <Link to="/Myassignment"> */}

                    <h6 id="myassignment" className="text-muted mt-3 mx-2">   Assignment Progress </h6>
                  </Link>

                </li>
                <li className="nav-item mt-1">
                  {/* <button  onClick={this.toggled}>toggle</button> */}
                  <Link to="resources" onClick={this.toggled}>
                  {/* <Link to="resources" onClick={this.props.toggleHiddenResources}> */}
                  {/* <Chart isHiddenResources={this.state.isHiddenResources} /> */}
                  {/* <Link to="resources"> */}
                    <h6 id="myresource" className="text-muted mt-3 mx-2"> Resources Usage</h6>
                  </Link>
                </li>
                <Switch>
                  <Route exact path="/Myassignment">


                  </Route>
                </Switch>




                <li className="nav-item dropdown ml-4">

                  <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown">
                    <span>{this.state.name}</span>
                    <img className="rounded-circle" height="35" src={person}/>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right shadow bg-light">
                    <div className="dropdown-item text-secondary">
                      <p>Age: {this.state.age}  <br/>Gender: {this.state.gender} <br/> Group: {this.state.group}</p>
                    </div>
                  <div className="dropdown-divider"></div>
                    <a className="dropdown-item text-secondary" href="#" data-toggle="modal" data-target="#changeModal">
                      <i className="fas fa-exchange-alt mr-2"></i>Change User
                    </a>
                  </div>
                </li>



              </ul>
            </div>
        </nav>


      <div className="modal fade" id="changeModal" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
		      <div className="modal-content">
		        <div className="modal-header">
			        <h5 className="modal-title">New User Details</h5>
			        <button type="button" className="close" data-dismiss="modal">
			          <span>&times;</span>
			        </button>
		        </div>
			      <form>
			        <div className="modal-body">
                <div className="form-group">
					        <label for="newName">Name</label>
					        <input type="text" className="form-control" id="name" name="name" onChange={this.change} placeholder={this.state.name}></input>
				        </div>
                <div className="form-group">
					        <label for="newAge">Age</label>
					        <input type="text" className="form-control" id="age" name="age" onChange={this.change}  placeholder={this.state.age}></input>
				        </div>
				        <div className="form-group">
					        <label for="newGender">Gender</label>
					        <input type="text" className="form-control" id="gender" name="gender" onChange={this.change}  placeholder={this.state.gender}></input>
				        </div>
				        <div className="form-group">
					        <label for="newGroup">Study Group</label>
					        <input type="text" className="form-control" id="group" name="group" onChange={this.change}  placeholder={this.state.group}></input>
				        </div>
              </div>
              <div class="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" >Change</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              </div>
			      </form>
		      </div>
	      </div>
	    </div>





      </React.Fragment>


        )
    }

    change= e=>{
      this.setState({
        [e.target.name]:e.target.value
         })
        };

        

      }




