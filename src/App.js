import React, {Component} from 'react';
// import {Switch,Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header';
import Card from './components/Card';
import Chart from './components/Chart';
import Footer from './components/Footer';



export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isHidden: false,
      // isHiddenAssignment: false,
      // isHiddenResources: true
    }
    this.toggleHidden = this.toggleHidden.bind(this)
    // this.toggleHiddenAssignment = this.toggleHiddenAssignment.bind(this)
  }
  toggleHidden () {
    console.log('I have been clicked')
    this.setState({
      isHidden: !this.state.isHidden
    }, () => console.log(this.state.isClicked))
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
render(){
  return (
    <React.Fragment>
      <Header 
              isHidden={this.state.isHidden}
              // isHiddenAssignment={this.state.isHiddenAssignment}
              // isHiddenResources={this.state.isHiddenResources}
              clickMe={this.toggleHidden}
              // onClick={this.toggleHiddenAssignment}
              // onClick={this.props.toggleHiddenResources}
              // onClick={this.props.toggleHiddenResources.bind()}

      />
       <Card />
     {/* <Switch>
        <Route path="/Assignment Progress" component={Chart} />
     </Switch>*/}
     <Chart 
            isHidden={this.state.isHidden}
            // isHiddenAssignment={this.state.isHiddenAssignment}
            // isHiddenResources={this.state.isHiddenResources}

     />
      <Footer />
    </React.Fragment>
     
    
  );
}
}
// export default App;
