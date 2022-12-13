import React, { createRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Histogram from './Histogram';


function Language() {
  const [translations, setTranslations] = useState([]);
  const [graph, setGraph] = useState(<h2 className='subtitle'>Loading...</h2>);
  const [selector, setSelector] = useState();
  const currentSearchTerm = createRef();
  const [loading, setLoading] = useState(false);
  let paramObject = useParams();
  let language = paramObject.language;

  function search() {
    fetch(`${process.env.REACT_APP_BACKEND_BASE}/api/translations/${language}?keyword=${currentSearchTerm.current.value}`)
      .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson ? await response.json() : null;

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        return data;
      })
      .then(data => {
        selector.value = data[0].cluster_labels;
        selector.dispatchEvent(new Event("change"));
        setTranslations(data);
      }).catch(e => {
        if (e === 404) {
          currentSearchTerm.current.value = "";
          let errorSpan = document.getElementById("error");
          errorSpan.innerText = "Search term not found, please try another";
          setTimeout(() => { errorSpan.innerText = ""; }, 2000)
        }
      });
  }

  function ensureNounClass(nounClass) {
    switch (nounClass) {
      case "0":
      case "0.0":
        return "Masculine";
        break;
      case "1":
      case "1.0":
        return "Feminine";
        break;
      case "2":
      case "2.0":
        return "Neuter";
        break;
      default:
        return nounClass;
    }
  }

  useEffect(() => {
    let eventListener;
    setLoading(true);

    const handleChange = (e) => {
      console.log(e.target.value)
      fetch(`${process.env.REACT_APP_BACKEND_BASE}/api/translations/${language}/${e.target.value}`)
        .then(response => response.json())
        .then(data => {
          setTranslations(data);
        });
    }

    fetch(`${process.env.REACT_APP_BACKEND_BASE}/api/translations/${language}/0`)
      .then(response => response.json())
      .then(data => {
        setTranslations(data);
      }).then(
        response => {
          let langGraphModel = require(`../assets/graphs/bokeh/Translated${language}GoogleCloud.html`);
          setGraph(<iframe id='graph' type="text/html" srcDoc={langGraphModel.default} title={`${language} Graph`} />);
          eventListener = document.getElementById("graph").contentDocument.querySelector("select.bk.bk-input");
          setSelector(eventListener);
          eventListener.addEventListener('change', handleChange);


          setLoading(false);
          return () => {
            eventListener.removeEventListener('change', handleChange); //prevent memory leak - essentially a componentWillUnmount
          }
        });

  }, []);
  return (
    <div className='wrapper'>
      <section className='language'>
        <div className='intro-text'>
          <div className="container-fluid">
            <div className="row languages-div language">

              <div className="background full" />
              <div className="foreground full" />
              <div className='scroll-container first'>
                <div className='explanation-div language'>
                  <h2 className='subtitle'>UMAP of {language} Word Embeddings from FastText Clustered by HDBSCAN</h2>
                  <p style={{ color: "white", fontSize: "25px", padding: "10px" }}>
                    To get a better understanding of the relationship between Noun Class and Lexical semantics in {language},
                    choose a cluster of nouns from the drop-down menu and use the tools on the side to zoom in on the dots
                    colored by their gender and hover over them to get their translations.</p>
                </div>
              </div>
              <div className='row'>
                <div class="d-flex search-bar">
                  <input class="form-control me-2" ref={currentSearchTerm} type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit" onClick={search}>Search</button>
                </div>
                <span id="error"></span>
              </div>
              <div className='row'>
                {graph}
                {
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th className='col'>Noun</th>
                        <th className='col'>Translation</th>
                        <th className='col'>Noun Class</th>
                      </tr>
                    </thead>
                    <tbody className='table-body'>
                      {translations.map(entry => {
                        return (
                          <tr key={entry.index}>
                            <td>{entry.label}</td>
                            <td>{entry.translated}</td>
                            <td>{ensureNounClass(entry.noun_class)}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='explanation'>
        <div className='map-border2'>
          <div className='map-border'>
            <div>
              <Histogram language={language} />
              <h2>Histogram of our calculation of cluster purity scores where <span style={{ color: "rgb(63, 112, 173)", textShadow: "none" }}>blue depicts
                arbitrary noun class assignment</span> and <span style={{ color: "rgb(164, 53, 53)", textShadow: "none" }}>red depicts the ACTUAL cumulative purity of {language}</span></h2>
              <p>Essentially, we simulated 1,000 artificial '{language}s' where noun class was arbitrarily assigned in regards to semantics
                and then compared that to the actual distribution of noun class by semantics</p>
            </div>
          </div>
        </div>
      </section>



      <section className='explanation' />
    </div>

  );
}



export default Language;
