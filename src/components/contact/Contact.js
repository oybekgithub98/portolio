import React from 'react';
import classes from './Contact.module.css';
import contactImage from '../../assets/contact-image.png';

const Contact = () => {
    return (
        <div className={classes.contact}>
            <h3>Contact</h3>
            <div className={classes.contact_wrapper}>
                <div className={classes.contact_image}>
                    <img src={contactImage} alt="" />
                </div>
                <div className={classes.contact_form}>
                    <form>
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <textarea placeholder="Message"></textarea>
                    </form>
                    <button type="submit">Send Massage</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
