
function ImageComponent({ url, htext }) {

    const styles = {
        backgroundImage: `url(${url})`,
    }

    return (
        <div className="image-component" style={styles}>
            <div className="image-component-content">
                <h5> {htext} </h5>
                <p> AI Powered personalization Engine dedicated to understand human taste. </p>
            </div>

        </div>
    );

}

export default ImageComponent;