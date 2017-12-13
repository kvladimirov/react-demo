import React from 'react'
import Input from './Input'

const ContactForm = (props) => ( 
    <form>
        <Input
          name='email'
          type='text'
          placeholder='Email'
          value={props.message.email}
          onChange={props.onChange} />
          {props.message.email}
    
        <textarea
          name='message'
          placeholder='Message'
          value={props.message.message}
          onChange={props.onChange} />
          {props.message.message}
    
        <input type='submit' value="Submit" onClick={props.onClick} />
    </form>
)

export default ContactForm;