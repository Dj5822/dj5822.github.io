import React from 'react';
import './StatusPanel.scss';

const StatusPanel = () => {
    return (
        <div class="container" id="status-section">
            <h2>Status</h2>
            <p><b>Name: </b><var id="name"> ??? </var></p>
            <p><b>Age: </b><var id="age"> ??? </var></p>
            <p><b>Birth date: </b><var id="birth-date"> ??/??/???? </var></p>
            <h2>Play Record</h2>
            <p><b>Current date: </b><var id="current-date"> ??/??/???? </var></p>
            <p><b>Current time: </b><var id="current-time"> ??? </var></p>
            <p><b>Play time: </b> <var id="play-time"> ?? days ?? hours ?? min ?? sec </var></p>
        </div>
    );
}

export default StatusPanel;