import './MessageForm.css'
import React, { useState } from 'react';


const MessageForm = () =>{
    const [formData, updateFormData] = useState();

    const handleChange = (e) => {
        updateFormData({
          ...formData,
    
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
        });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        // ... submit to API or something
      };

    return (
        <>
        <form
            method='POST'
            name='contactform'
            className='contactForm'>

            <input
                type='text'
                name='recipient'
                placeholder='To' 
                onChange={handleChange}/>

            <input
                type='text'
                name='subject'
                placeholder='Subject' 
                onChange={handleChange}/>

            <textarea
                name='message'
                placeholder='Message'
                onChange={handleChange}></textarea>

            <button type='submit' onClick={handleSubmit}>Send</button>

        </form>
        </>
    );
}

export default MessageForm
