import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/imageGalleryContainer.css';

import avanadeHome from '../graphics/project-pictures/avanade-1-home.png';
import avanadeStepByStep from '../graphics/project-pictures/avanade-3-step-by-step.png';

/**
 * Image gallery showing project example pictures.
 * 
 * @returns Image gallery.
 */
const ImageGalleryContainer = () => {
    return (
        <div className="imageGalleryContainer">
            <div id="projectCarousel" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src={avanadeHome}
                            class="image"
                            alt="HomePage" />
                        <div class="caption">
                            <h3><b>First slide label</b></h3>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src={avanadeStepByStep}
                            class="image"
                            alt="StepByStep" />
                        <div class="caption">
                            <h3><b>Second slide label</b></h3>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            src="{avanadeAboutMe}"
                            class="image"
                            alt="..." />
                        <div class="caption">
                            <h3><b>Third slide label</b></h3>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default ImageGalleryContainer