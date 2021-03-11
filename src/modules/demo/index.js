import React, { useState } from 'react';

import DialogBox from '../global/DialogBox';

export default function Index() {
  const [showToast, setShowToast] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const toggleToast = () => setShowToast(!showToast);

  const toggleDialog = () => setShowDialog(!showDialog);

  return (
    <>
      <div id="appCapsule">
        <DialogBox showDialog={showDialog} handleToggle={toggleDialog} />
        <div style={{ marginTop: 70, marginBottom: 50 }}>
          <button type="button" onClick={toggleToast}>
            Toggle Toast
          </button>
        </div>
        <div style={{ marginTop: 70, marginBottom: 50 }}>
          <button type="button" onClick={toggleDialog}>
            Toggle Dialog
          </button>
        </div>
        <div
          id="toast-3"
          className={`toast-box toast-top ${showToast ? 'show' : ''}`}
        >
          <div className="in">
            <ion-icon name="checkmark-circle" className="text-success" />
            <div className="text">Saved</div>
          </div>
          <button
            onClick={toggleToast}
            type="button"
            className="btn btn-sm btn-text-success close-button"
          >
            CLOSE
          </button>
        </div>
      </div>
    </>
  );
}
