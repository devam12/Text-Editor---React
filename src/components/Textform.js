import React, { useState } from 'react'

export default function Textform() {
    const [text, setText] = useState('Enter text');
    const handleUpperClick = (event) => {
        setText(text.toUpperCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowerClick = ()=>{
        setText(text.toLowerCase());
    }

    const handleClearText = ()=>{
        setText('');
    }

    // setText("Devam");
    return (
        <>
            <div className="container mb-4">
                <div className="form-group my-4">
                    <h1>Enter text</h1>
                    <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" onChange={handleOnChange} rows="3" value={text} />
                </div>
                <button type="submit" className="btn btn-primary mx-3" onClick={handleUpperClick}>Uppercase</button>
                <button type="submit" className="btn btn-primary mx-3" onClick={handleLowerClick}>Lowercase</button>
                <button type="submit" className="btn btn-primary" onClick={handleClearText}>Clear Text</button>
            </div>

            <div className="container my-4">
                <h2>Your text summary</h2>
                Word : {text.split(" ").length} & 
                Character : {text.length}
            </div>
        </>
    )
}
