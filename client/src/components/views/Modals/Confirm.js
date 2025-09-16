import React from 'react';
import './Confirm.css';

const Confirm = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <div className="confirm-buttons">
          <button className="confirm-button" onClick={onConfirm}>확인</button>
          <button className="cancel-button" onClick={onCancel}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;