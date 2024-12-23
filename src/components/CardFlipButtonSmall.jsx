import React from 'react';

const CardFlipButtonSmall = ({ handleFlip }) => {
  return (
    <div className="button-container-2">
      <button
        onClick={() => handleFlip(0)}
      >
        <img 
          src="https://borders-records.s3.ap-northeast-1.amazonaws.com/button-icons/title.png"
          alt="Title"
          className="card-flid-button-2"
        />
      </button>
      <button
        onClick={() => handleFlip(1)}
      >
        <img 
          src="https://borders-records.s3.ap-northeast-1.amazonaws.com/button-icons/status.png"
          alt="Status"
          className="card-flid-button-2"
        />
      </button>
      <button
        onClick={() => handleFlip(2)}
      >
        <img 
          src="https://borders-records.s3.ap-northeast-1.amazonaws.com/button-icons/trigger.png"
          alt="Trigger"
          className="card-flid-button-2"
        />
      </button>
      <button
        onClick={() => handleFlip(3)}
      >
        <img 
          src="https://borders-records.s3.ap-northeast-1.amazonaws.com/button-icons/detail.png"
          alt="Detail"
          className="card-flid-button-2"
        />
      </button>
    </div>
  );
};

export default CardFlipButtonSmall;
