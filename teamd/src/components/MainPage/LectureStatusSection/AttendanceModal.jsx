import React from "react";
import "./css/AttendanceModal.css";

const AttendanceModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content-wrapper">
          <div className="modal-content">
            <div className="modal-icon">⚠️</div>
            <p className="modal-message">
              현재는 출석 체크 시간이 아닙니다.
              <br />
              시간을 확인하시고 다시 출석해주세요.
            </p>
          </div>
        </div>
        <div className="modal-button-wrapper">
          <button onClick={onClose} className="modal-confirm-button">
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceModal;
