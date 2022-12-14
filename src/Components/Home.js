import React, { useEffect, useState } from 'react';
import 'animate.css';
import 'aos/dist/aos.css';
import '../Css/home.css'
import { Link } from 'react-router-dom';
function Home() {
    console.log(process.env.REACT_APP_BACKEND_BASE)

    return (
         
            <div className="wrapper">
                <header>
                    <div className="background" />
                    <div className="foreground" />
                    <div className='intro-text'>
                        <h1 className="title animate__animated animate__zoomInDown">Semantic Core</h1>
                        <h2 className="subtitle animate__animated animate__fadeInUp">A machine-learning approach to revealing <br />innate tendencies in human cognition</h2>
                        <Link to={"/languages"} className="language-button"><button className='btn btn-primary animate__animated animate__fadeInUp' id="lang-button">Click here to experience<br />
                            language in a new way</button></Link>
                    </div>
                    <div className='author-div'>
                        <h2 className='subtitle author animate__animated animate__fadeInUp author'>Developed by Ethan Amato</h2>
                    </div>
                </header>
                <section className='explanation'>
                    <div className='scroll-container first' >
                        <div className='explanation-div'>
                            <h1>What is it?</h1>
                            <p>
                                The Semantic Core Project is a National Science Foundation-funded project from the 
                                <span> <a href='http://l3atbc.org' target={"_blank"}>Language Learning Lab</a> </span>
                                at Boston College. Here, we attempt to apply modern quantitative methodology to settle a century-old debate on whether humans
                                will innately assign grammatical gender based on semantics
                            </p>
                        </div>
                        <div className='img-border2'>
                            <div className='img-border'>
                                <div id="bc" />
                            </div>
                        </div>
                    </div>

                </section>


                <section className='explanation'>
                    <div className='scroll-container first'>
                        <div className='explanation-div'>
                            <h1>What does that mean?</h1>
                            <p>
                                Essentially, we looked at ~380,000 nouns from 19 languages from all over the
                                world and calculated whether geographically distant languages with little
                                contact:</p> <span id="bold-span-red">1. Assign noun classes (masculine, feminine, etc.)
                                    based on semantics</span> and <span id="bold-span-blue">2. Whether this occurs
                                        consistently across many unrelated languages</span>
                            <p>
                                If
                                <span id="bold-span-red"> 1.</span> and <span id="bold-span-blue">2. </span>
                                are found to be true, we can provide evidence for innate tendencies
                                for humans to classify nouns based on their meaning (which is a surprisingly
                                iffy subject in linguistics).</p>
                        </div>
                    </div>
                    <div className='map-border2'>
                        <div className='map-border'>
                            <div>
                                <div id='map' />
                                <h2>Map of Countries Where Languages we Sampled from are Spoken Officially</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='credit'>
                    <div className='scroll-container first'>
                        <div className='explanation-div'>
                            <h1 className='subtitle'>Who put this together?</h1>
                            <div className='me-info-text'>
                                <p className='text'>
                                    My name is Ethan Amato. I led the Semantic Core computational project as part of my
                                    Undergratuate Psychology Honors thesis at BC. I facilitated the data collection, data manipulation,
                                    clustering, dimensionality reduction, visualization, analysis, and writeup of the project.

                                    <div className='me-border2'>
                                        <div className='me-border'>
                                            <div id='me' />
                                        </div>
                                    </div>

                                </p>
                                <p className='text-2'>Furthermore, this website is a fullstack web application that I built from the ground up.
                                    If you think my skills can help you or your company, <br></br> <Link to='/contact' id="contact-link"><span className='form-link'>Contact Me!</span></Link> </p>
                            </div>
                                <div className='myLinks'>
                                    <a href='https://drive.google.com/file/d/1KwQHHfZbS7CbmLfCunUlViOFNOV0YkH3/view?usp=share_link' target={"_blank"} download><span>Look at the Poster<br/><i className="fa fa-solid fa-image linkedin"></i></span></a><br/>
                                    <a href='https://www.linkedin.com/in/ethan-amato-a49044183/' target={"_blank"}><span>My LinkedIn<br/><i className="fa fa-linkedin-square linkedin"></i></span></a><br/>
                                    <a href='https://drive.google.com/file/d/1P1C3Litz-eytOy7GmiH6AV5tnZR7putm/view?usp=share_link' target={"_blank"} download><span>Read the Paper<br/><i className="fa fa-solid fa-book linkedin"></i></span></a>
                                </div>
                                <p></p>
                        </div>

                    </div>
                </section>
            </div>
        
    );
}

export default Home;
