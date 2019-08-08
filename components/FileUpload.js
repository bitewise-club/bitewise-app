import React from 'react';

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
            <div>
                <input type="file" ref={this.fileInput} />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default FileUpload;