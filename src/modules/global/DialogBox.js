import React from 'react';

export default function DialogBox(props) {
  const { showDialog, handleToggle } = props;
  return (
    <>
      <div
        aria-modal="true"
        style={{ display: showDialog ? 'block' : 'none' }}
        className={`modal fade dialogbox ${showDialog ? 'show' : ''}`}
        id="DialogBasic"
        data-backdrop="static"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Dialog title</h5>
            </div>
            <div className="modal-body">This is a dialog message</div>
            <div className="modal-footer">
              <div className="btn-inline">
                <a
                  href="#close"
                  onClick={handleToggle}
                  className="btn btn-text-secondary"
                >
                  CLOSE
                </a>
                <a
                  href="#ok"
                  onClick={handleToggle}
                  className="btn btn-text-primary"
                >
                  OK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
