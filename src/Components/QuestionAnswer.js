import Aos from "aos";
import { Accordion } from "reactstrap";

function QuestionAnswer(props) {
    let qId = "#question" + props.id;
    let qAccordion = "accordion"+qId;
    let qHeading = "heading" + props.id;
    let qCollapse = "collapse" + props.id;
    let qText = props.question;
    let aText = props.answer;
    let animation = props.animationDirection;
    let leanDirection = props.leanDirection;
    Aos.init();

    console.log(qId);
    return (
        <div className='row qa-row'>
            <div className='map-border2 faq-border' data-aos={animation} >
                <div className='map-border'>
                    <div className="accordion" id = {qAccordion}>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={qHeading}>
                                <button className="accordion-button question" type="button" data-bs-toggle="collapse" data-bs-target={"#" + qCollapse} aria-expanded="true" aria-controls={qCollapse}>
                                    {qText}
                                </button>
                            </h2>
                            <div id={qCollapse} className="accordion-collapse collapse show" 
                                                aria-labelledby={qHeading} 
                                                data-bs-parent={"#"+qAccordion}>
                                <div className="accordion-body">
                                    <p className="answer">{aText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

 
export default QuestionAnswer;