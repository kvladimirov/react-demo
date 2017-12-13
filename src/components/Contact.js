import React, { Component } from 'react';
import Input from './forms/Input';
import ContactForm from './forms/ContactForm';


export class Contact extends Component {
    constructor(props){
        super(props);

        this.state = {
            message: {
                email: '',
                message: ''
            },
            error: ''
        }
        
    }

    handleChange (event) {
        const target = event.target;
        const field = target.name;
        const value = target.value;

        if(target.value.length < 10) {
            const error = 'Invalid input! Must be requared 10 symbols!';
            this.setState({error: error})
        } else {
            const error = '';
            this.setState({error: error})
        }

        const message = this.state.message;
        message[field] = value;

        this.setState({message});
    }
    
    handleForm (event) {
        event.preventDefault();
        console.log(this.state.message);
    } 

    render() {
        return (

            <div> 
                {/* <ContactForm
                  message={this.state.message}
                  onChange={this.handleChange.bind(this)}
                  onClick={this.handleForm.bind(this)}
                /> */}
                <form>
                    <input
                      name='email'
                      placeholder='Email:'
                      value={this.state.message.email}
                      onChange={this.handleChange.bind(this)} 
                      required/>
                      <h3>{this.state.error}</h3>
                
                    <input
                      name='message'
                      placeholder='Message:'
                      value={this.state.message.message}
                      onChange={this.handleChange.bind(this)} />
                      <h3>{this.state.error}</h3>
                
                    <input type='submit' value="Submit" onClick={this.handleForm.bind(this)} />
                </form>
            </div>
        )
    }
}