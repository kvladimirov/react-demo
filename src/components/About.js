import React, { Component } from 'react';


export class About extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: 'About Page'
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