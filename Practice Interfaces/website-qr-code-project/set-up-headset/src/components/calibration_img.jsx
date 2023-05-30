import React from 'react';

import '../css_componets/card_css.css';

import calibration from '../images/calibration-complete.png';

const CalibrationImg = () => {
    return (
        <img
            src={calibration}
            alt="Calibration Complete"
            class="calibrateImage"

        />
    )
}
export default CalibrationImg