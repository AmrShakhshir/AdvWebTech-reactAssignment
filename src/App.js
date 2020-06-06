import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header';
import Card from './components/Card';
import Chart from './components/Chart';
import Footer from './components/Footer';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChart: null,
      AssignmentHidden: true,
      ResourcesHidden: true
    };
    this.toggleChart = this.toggleChart.bind(this);
  }
  toggleChart (chart) {
    console.log(chart)
    this.setState({
      activeChart: chart      
    })
    switch(chart) {
      case "chart1":
        console.log("entered" + chart)
        this.setState({AssignmentHidden:!this.state.AssignmentHidden})
        console.log("closed" + chart)
        break;
        case "chart2":
          console.log("entered" + chart)
          this.setState({ResourcesHidden:!this.state.ResourcesHidden})
          console.log("closed" + chart)
          break;
          default:     
          console.log("entered" + chart)
          this.setState({AssignmentHidden:true})
          this.setState({ResourcesHidden:false})
          console.log("closed" + chart)
     }
  }
  // renderSwitch(activeChart) {
  //         switch(activeChart) {
  //           case "chart1":
  //             this.setState.AssignmentHidden=true
  //             this.setState.ResourceHidden=false
  //             break
  //             case "chart2":
  //               this.setState.AssignmentHidden=true
  //               this.setState.ResourceHidden=true
  //               break
  //           default:     
  //           this.setState.AssignmentHidden=true
  //           this.setState.ResourceHidden=false;
  //          }
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
render(){
  return (
    <React.Fragment>
      <Header 
              activeChart={this.state.activeChart}
              AssignmentHidden={this.state.AssignmentHidden}
              ResourcesHidden={this.state.ResourcesHidden}
              //  isHidden={this.state.isHidden}

              // isHiddenAssignment={this.state.isHiddenAssignment}
              // isHiddenResources={this.state.isHiddenResources}

              clickMe={(chart)=> this.toggleChart(chart)}
              // clickMe={this.toggleHidden}
              // onClick={this.toggleHiddenAssignment}
              // onClick={this.props.toggleHiddenResources}
              // onClick={this.props.toggleHiddenResources.bind()}

      />
       <Card />
     {/* <Switch>
        <Route path="/Assignment Progress" component={Chart} />
     </Switch>*/}
     <Chart 

            activeChart={this.state.activeChart}
            AssignmentHidden={this.state.AssignmentHidden}
            ResourcesHidden={this.state.ResourcesHidden}
            // isHidden={this.state.isHidden}
            
            // isHiddenAssignment={this.state.isHiddenAssignment}
            // isHiddenResources={this.state.isHiddenResources}

     />
      <Footer />
    </React.Fragment>
     
    
  );
}
}

// export default App;