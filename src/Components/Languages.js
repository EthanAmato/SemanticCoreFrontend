import '../Css/languages.css'
import { Link } from 'react-router-dom';
function Languages(props) {
    let availableLanguages = props.langNames;

    let langUL = 
        (
            <ul className='language-ul'>
                {availableLanguages.map((lang) => {
                    return (
                            <Link to={`/languages/${lang}`}><li className='language-li'><button className='btn language-btn '>{lang}</button></li></Link>
                    );
                })}
            </ul>
        )
    return (
        <div className='wrapper'>
            <div className="background full" />
            <div className="foreground full" />
            <div className='intro-text'>
                <div className="container-fluid">
                    <div className="row languages-div">
                    <h1 className='title'>Languages</h1>
                    <h2 className='subtitle language-h2'>Click on a language to interact with it in 2D space!</h2>
                        {langUL}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Languages;