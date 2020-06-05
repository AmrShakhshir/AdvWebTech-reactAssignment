import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
             <div class="container-fluid"/>

      <div className="container-fluid">
        <div className="row">
          <div className="col-6 text-muted">
            Bootstrap documentation can be found <a href="https://getbootstrap.com/">here</a>.
          </div>
		  
		  <div className="col-6">
			<div className="row justify-content-end">
			  <div className="col-auto">
				<a href="#">Facebook</a>
				<a class="mx-3" href="#">Twitter</a>
				<a href="#">GitHub</a>
			  </div>
			</div>
			<div className="row justify-content-end"> 
			  <div className="col-auto">
				<p className="copyright text-muted">Copyright &copy; SoCo 2020</p>
			  </div>
			</div>
          </div>
        </div>
      </div>
    </footer>
        )
    }
}
