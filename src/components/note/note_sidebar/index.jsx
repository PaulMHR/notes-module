import React from 'react';

function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}

export default () => (
    <div className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{display: 'none'}} id="mySidebar">
        <button className="w3-bar-item w3-button w3-large"
                onClick={w3_close}>Close &times;</button>
        <a href="#" className="w3-bar-item w3-button">Link 1</a>
        <a href="#" className="w3-bar-item w3-button">Link 2</a>
        <a href="#" className="w3-bar-item w3-button">Link 3</a>
    </div>
);