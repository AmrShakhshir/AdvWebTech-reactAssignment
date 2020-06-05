import React, { Component } from 'react'
import Card0 from './Card0.js'

export default class Card extends Component {
    render() {
        return (
          <div className="container-fluid mt-4 text-muted">
        <div className="row">
      
            <Card0 name={"Current Assignment"} Subname={"React"} Stylename={"text-warning"} Border={"border-warning"} BorderRadius={"rounded-pill"} Icon={"fas fa-calendar fa-2x"}/>
            <Card0 name={"Last Assignment"} Subname={"MongoDB"} Stylename={"text-success"} Border={"border-success"} BorderRadius={"rounded-pill"} Icon={"fas fa-calendar fa-2x"}/>
            <Card0 name={"My task"} Subname={"Task 4.2"} Stylename={"text-primary"}  Border={"border-primary"} BorderRadius={""} Icon={"fas fa-clipboard-list fa-2x"}/>
            <Card0 name={"Unread Messages"} Subname={"15"} Stylename={"text-danger"} Border={"border-danger"} BorderRadius={""} Icon={"fas fa-comments fa-2x"}/>

              
           
      
    
            </div>
        </div>
          
        )
    }
}
