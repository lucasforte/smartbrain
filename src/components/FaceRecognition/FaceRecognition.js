import React from 'react';

const FaceRecognition = ({ imgUrl }) => {
    return (
        <div className='center'>
            <img src={imgUrl} alt=''/>
        </div>
       
    );
}

export default FaceRecognition;