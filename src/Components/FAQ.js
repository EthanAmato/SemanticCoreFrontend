import '../Css/faq.css'
import { useState } from 'react';
import QuestionAnswer from './QuestionAnswer';





function FAQ(props) {

    return (
        <>
            <div className='wrapper-faq'>
                <section className='faq'>
                    <div className='scroll-container first'>
                        <div className='explanation-div language faq-title'>
                            <h2 className='title' >Frequently Asked Questions</h2>
                        </div>
                    </div>
                </section>
                <section className='qa'>
                    <div className='container-fluid question-container'>
                        <QuestionAnswer 
                            id = "1"
                            question="How should I interpret the X and Y axes?"
                            answer="To be completely honest, you shouldn't. The axes are a compression of 300 dimensional 
                                    space down to 2 dimensions and just serve to be an intuitive way to place the points (words) 
                                    in context with each other such that if two points are close in space, they're close in meaning. 
                                    If you wanted to try to interpret the axes, the best answer would be 'a 2D representation of semantics.'"
                            animationDirection="fade-right"
                        />
                        <QuestionAnswer
                            id = "2"
                            question="What are the clusters in the drop down menu?"
                            answer="They are groups of words that the HDBSCAN algorithm found and were decided upon based on
                                    being really close together in 300 dimension space. The clusters found should, therefore,
                                    follow some semantic rule."
                            animationDirection="fade-right"
                        />
                        <QuestionAnswer
                            id = "3"
                            question="If words close in meaning are close together in the graph and HDBSCAN
                                    only puts words close in meaning together, why does my
                                    cluster seem to be broken into chunks?"
                            answer="Don’t worry, all points in a cluster are indeed close in semantic space. Reducing dimensions can
                                    be very hard and there’s no good way to represent a super high dimensional space like
                                    ours in a way that humans can realistically interpret. The UMAP analysis was done to find
                                    overarching global structure in our data (which it excels at) and preserving local structures
                                    of the smaller clusters is nigh impossible."
                            animationDirection="fade-right"
                        />
                        <QuestionAnswer
                            id = "4"
                            question="How should I interpret the order of clusters?"
                            answer="There is no ordering to the clusters."
                            animationDirection="fade-right"
                        />
                        <QuestionAnswer
                            id = "5"
                            question="What is the best way to experience this site?"
                            answer="Choose a language you’re interested in, select a random cluster from the top down
                                    menu, look at the distribution of noun classes for that cluster, use the box zoom or
                                    scroll zoom on the right to zoom in and inspect each concept in the cluster to see
                                    what semantic rule it appears to represent, and repeat!"
                            animationDirection="zoom-in-up"
                        />
                    </div>
                </section>

                <section className='explanation' />
            </div>
        </>
    );
}

export default FAQ