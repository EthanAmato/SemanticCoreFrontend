// import '../assets/graphs/histograms/Histogram_simulated_Arabic_purities_w_real_lang'
function Histogram(props) {
    let imgURL = require(`../assets/graphs/histograms/Histogram_simulated_${props.language}_purities_w_real_lang.jpg`)

    return (
        <>
            <img src={imgURL} id="histogram"/>
        </>

    );
}

export default Histogram;
// src\assets\graphs\histograms\Histogram_simulated_Arabic_purities_w_real_lang.jpg