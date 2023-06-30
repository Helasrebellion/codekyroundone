import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const ProgressWithImage = ({ value, imageUrl }) => {
    return (
        <div className="progress-with-image">
            <img
                className="image-placeholder"
                src={imageUrl}
                alt="Placeholder"
            />
            <div className="progress-bar">
                <div className="progress" style={{ width: `${value}%` }}></div>
            </div>
        </div>
    );
};

const App = () => {
    const presetValues = [100, 80, 100, 15, 100, 40, 30, 45, 50, 60];
    const imageUrls = [
        "Images\Logo\html.png",
        "Images\Logo\java-programming-language.png",
        "Images\Logo\css.png",
        "Images\Logo\c.png",
        "Images\Logo\javascript.png",
        "Images\Logo\python-programming-language.png",
        "Images\Logo\react-js.png",
        "Images\Logo\go-programming-language.png",
        "Images\Logo\php_PNG23.png",
        "Images\Logo\mysql_PNG23.png"
    ];

    return (
        <div>
            <h1>React Progress Bars</h1>
            <div className="progress-bars-container">
                {presetValues.map((value, index) => (
                    <ProgressWithImage
                        key={index}
                        value={value}
                        imageUrl={imageUrls[index]}
                    />
                ))}
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
