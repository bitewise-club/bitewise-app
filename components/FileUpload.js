import React from 'react';
import './fileupload.css';

class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = props.onSubmit;

        this.handleSubmit = this.handleSubmit.bind(this);

        this.fileInput = React.createRef();
    }

    handleSubmit() {
        let file = this.fileInput.current.files[0];
        this.onSubmit(file);
    }

    render() {
        return (
            <div className="file_input_div">
                <div className="file_input">
                    <label onChange={this.handleSubmit}>
                        <div className="flexbox">
                            <div className="rectangle"><img src="../static/photo-camera.png" alt="camera"/></div>
                            <input id="file_input_file" className="none" type="file" ref={this.fileInput}/>
                            <div className="item">Upload Your Bite.</div>
                        </div>
                    </label>
                </div>
            </div>
        );
    }
}

export default FileUpload;