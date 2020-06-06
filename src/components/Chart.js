import React, { Component } from 'react'
import AssignmentsChart from './AssignmentsChart.js'
import ResourcesChart from './ResourcesChart.js'

export default class Chart extends Component { 
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid" id="Myassignment"/>
          <div className="row">
            {/* <!-- Assignments Chart -->*/}
            <div className="col">
              <div className="card shadow">
                <div className="card-header">
                  <h6 className="m-0 font-weight-bold text-primary">My Assignments Progress</h6>
                </div>
                <div className="card-body">
                  {this.props.AssignmentHidden && <AssignmentsChart />}
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
                  {this.props.ResourcesHidden && <ResourcesChart />}
                </div>
              </div>
            </div>
          </div>
          <hr/>
        </React.Fragment>
        )
    }
}
