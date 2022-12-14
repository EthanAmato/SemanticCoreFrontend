import React from 'react';
import ReactDOM from 'react-dom/client'; 
import CustomRouter from './Components/CustomRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
const currentLangs =  ['Arabic',
                       'Bulgarian',
                       'Dutch',
                       'French',
                       'German',
                       'Hebrew',
                       'Hindi',
                       'Icelandic',
                       'Italian',
                       'Maltese',
                       'Polish',
                       'Portuguese',
                       'Russian',
                       'Serbo-Croatian',
                       'Slovak',
                       'Sanskrit',
                       'Spanish',
                       'Swahili',
                       'Urdu']



root.render(
    <CustomRouter langNames = {currentLangs} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
