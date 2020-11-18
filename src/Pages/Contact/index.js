import React from 'react'
import Style from './style.css'
import ContactForm from '../../Components/ContactForm'
import ContactInfo from '../../Components/ContactInfo'

function Contact() {

    return (
        <div className="container">
            <ContactForm />
            <ContactInfo />
        </div>
    )

}

export default Contact;