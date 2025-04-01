import React from "react";
import "./popup.css"; 
const ConfirmPopup = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>{message}</p>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-success me-2" onClick={onConfirm}>
            Xác nhận
          </button>
          <button className="btn btn-secondary" onClick={onCancel}>
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;