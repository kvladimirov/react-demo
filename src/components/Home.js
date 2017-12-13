import React, { Component } from 'react';


export class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: 'My Home Page'
        }
        
    }
    render() {
        const title = this.state.title;
        return ( 
        <div>
            <h1>{title}</h1>
        </div>
        )
    }
}