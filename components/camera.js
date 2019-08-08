//Takes the picture
import React, { Component } from 'react';
import Cam from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

 
class Camera extends Component {
  onTakePhoto (dataUri) {
    // ON TAKE PHOTO, DATAURI IS THE BASE64 STRING REPRESENTATION OF THE PHOTO
    console.log(dataUri);
  }
 
  render () {
    return (
      <div className="Camera">
        <Cam
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
        />
      </div>
    );
  }
}
 
export default Camera;