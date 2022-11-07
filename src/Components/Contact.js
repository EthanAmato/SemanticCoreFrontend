import React, { useState } from "react";

import '../Css/home.css'
import '../Css/contact.css'
const FORM_ENDPOINT = "https://public.herotofu.com/v1/ac32f130-49a3-11ed-8970-6943e4ac8982";  

function Contact(props) {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className='wrapper'>
            <div className="background full" />
            <div className="foreground full" />
            <div className='intro-text'>
                <div className="form-container ">
                    <div className="container-fluid">
                    <div className="row contact-text">
                        <h1 className="title">Thank you!</h1>
                        <h2 className="subtitle">I will get back to you shortly</h2>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
            </>
        );
    }
    return (
        <div className='wrapper'>
            <div className="background full" />
            <div className="foreground full" />
            <div className='intro-text'>
                <div className="form-container ">
                    <div className="container-fluid">
                    <div className="row contact-text">
                        <h1 className="title contact">Contact Me</h1>
                    </div>
                    <div className="row form-div">
                        <form
                            action={FORM_ENDPOINT}
                            onSubmit={handleSubmit}
                            method="POST"
                            target="_blank"
                        >
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input
                                            type="text"
                                            placeholder="First name"
                                            name="name"
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            type="text"
                                            placeholder="Last name"
                                            name="name"
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 pt-0">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="formTextArea" class="form-label">Your Message Content:</label>
                                <textarea type = "text" class="form-control" name = "body" id="exampleFormControlTextarea1" rows="3" required></textarea>
                            </div>
                            <div className="mb-3">
                                <button
                                    className="btn"
                                    type="submit"
                                >
                                    Send me a message
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;