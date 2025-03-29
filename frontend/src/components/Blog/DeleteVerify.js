import React from "react";

const DeleteVerify = ({ blogToDelete, isOpen, onClose, onConfirm }) => {
  return (
    <div
      className={`modal ${isOpen ? "show d-block" : "d-none"}`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm delete</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete? {blogToDelete.title} </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onConfirm}
            >
              Xoá
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={onClose}
            >
              Huỷ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteVerify;
