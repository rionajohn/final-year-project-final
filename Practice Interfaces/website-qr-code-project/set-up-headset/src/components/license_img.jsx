import React from 'react';

import '../css_componets/card_css.css';

import windowsLisence from '../images/windows-license-agreement.png';

const LicenseImg = () => {
    return (
        <img
            src={windowsLisence}
            alt="Liscence Complete"
            class="LicenseImage"

        />
    )
}
export default LicenseImg