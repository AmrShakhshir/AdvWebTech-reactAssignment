import React, { Component } from 'react'
import AssignmentsChart from './AssignmentsChart.js'
import ResourcesChart from './ResourcesChart.js'

export default class Chart extends Component {
  // constructor (props) {
  //   super(props)
  //   // this.state = {
  //   //   isHiddenAssignment: false,
  //   //   isHiddenResources: true
  //   // }
  // }
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
    render() {
        return (
            <React.Fragment>
            {/* <button onClick={this.toggleHiddenResources.bind(this)}> Click me</button>
            <button onClick={this.toggleHiddenAssignment.bind(this)}> Click me</button> */}
            <div className="container-fluid" id="Myassignment"/>
            <div className="row">
               {/* <!-- Assignments Chart -->*/}
                <div className="col">
                  <div className="card shadow">
                    <div className="card-header">
                      <h6 className="m-0 font-weight-bold text-primary">My Assignments Progress</h6>

                    </div>
                    <div className="card-body">
                    {!this.props.isHidden && <AssignmentsChart />}
                    {/* {!this.props.isHiddenAssignment && <AssignmentsChart />} */}
                    {/* <AssignmentsChart /> */}
                    </div>
                  </div>
                </div>
            </div>

            <div className="container-fluid" id="resources"/>
            <div className="row">
                {/*<!-- Resources Chart -->*/}
                <div className="col mt-4 mt-md-0">
                  <div className="card shadow">
                    <div className="card-header">
                      <h6 className="m-0 font-weight-bold text-primary">My Learning Resources Usage</h6>
                    </div>
                    <div className="card-body">
                    {this.props.isHidden && <ResourcesChart />}
                 
                    {/* <ResourcesChart /> */}
                    </div>
                  </div>
                </div>
            </div>
            <hr/>

            </React.Fragment>
        )
    }
}
