import React from "react";
import { withStorageListener } from "./withStorageListener";
import "../styles/ChangeAlert.scss";

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className="changeAlert-bg">
                <div className="change-Alert-container">
                    <p>It looks like you changed your TODOs in another tab or window.</p>
                    <p>Do you want to synchronize your TODOs?</p>
                    <button
                        onClick={() => toggleShow(false)}
                    >
                        Yes!
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };