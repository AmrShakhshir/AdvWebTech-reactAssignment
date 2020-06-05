import React, { Component } from 'react'
import classnames from 'classnames';


export default class Card0 extends Component {
    render() {
        return (
            <React.Fragment>
                 {/* <!-- Next Assignment Card -->*/}
              <div className="col-xl-3 col-md-6 order-md-1 order-xl-1 mb-4">
                <div className={classnames('card',this.props.Border, 'shadow' ,this.props.BorderRadius)}>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col">
        <div className={classnames('font-weight-bold',this.props.Stylename, 'text-uppercase')}>{this.props.name}</div>
        <div className="h5 mb-0">{this.props.Subname}</div>
                      </div>
                      <div className="col-auto">
                        <i className={classnames(this.props.Icon)}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
        )
    }
}


