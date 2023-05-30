import React from 'react';

import '../css/quizContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import EveryDayObjSquare from '../graphics/everyday-obj/everyDayObjSquare.jpg';
import square from '../graphics/shapes/square-resize.png';

import EveryDayObjTriangle from '../graphics/everyday-obj/everyDayObjTriangle.jpg';
import triangle from '../graphics/shapes/triangle-resize.png';

import EveryDayObjCircle from '../graphics/everyday-obj/everyDayObjCircle.jpg';
import circle from '../graphics/shapes/circle-resize.png';

import EveryDayObjHeart from '../graphics/everyday-obj/everyDayObjHeart.jpg';
import heart from '../graphics/shapes/heart-resize.png';

import EveryDayObjRectangle from '../graphics/everyday-obj/everyDayObjRectangle.jpg';
import rectangle from '../graphics/shapes/rectangle-resize-turned.png';

import EveryDayObjStar from '../graphics/everyday-obj/everyDayObjStar.jpg';
import star from '../graphics/shapes/star-resize.png';
/**
 * QuizContainer is a practice tool for my users to learn which shapes are which.
 * 
 * @returns a question and multiple choice answers.
 */
const QuizContainer = () => {
    const [selectImage, setSelectImage] = React.useState(0);
    const [correctAnswer, setCorrectAnswer] = React.useState(0);

    const everyDayObjectImages = [EveryDayObjSquare, EveryDayObjTriangle, EveryDayObjCircle, EveryDayObjHeart, EveryDayObjRectangle, EveryDayObjStar];
    const shapes = [square, triangle, circle, heart, rectangle, star];
    console.log();

    var answerOne = Math.floor(Math.random() * shapes.length);
    var answerTwo = Math.floor(Math.random() * shapes.length);
    var answerThree = Math.floor(Math.random() * shapes.length);

    var wrongOrRight = Math.floor(Math.random() * 2);
    console.log(answerOne);

    //allows a random user to be placed in any of the three radio boxes
    if (wrongOrRight === 1) {
        answerOne = correctAnswer;
        answerTwo = Math.floor(Math.random() * shapes.length);
        answerThree = Math.floor(Math.random() * shapes.length);
    } else {
        answerOne = Math.floor(Math.random() * shapes.length);
        wrongOrRight = Math.floor(Math.random() * 1);
        if (wrongOrRight === 1) {
            answerTwo = correctAnswer;
            answerThree = Math.floor(Math.random() * shapes.length);
        } else {
            answerTwo = Math.floor(Math.random() * shapes.length);
            answerThree = correctAnswer;
        }
    }

    //checks which radio button has been selected and if that shape is the right correct answer
    function CheckAnswer() {
        if (document.getElementById("radioButton1").checked) {
            if (answerOne === correctAnswer) {
                alert("Correct!");
            } else {
                alert("Try Again!");
            }
        } else if (document.getElementById("radioButton2").checked) {
            if (answerTwo === correctAnswer) {
                alert("Correct!");
            } else {
                alert("Try Again!");
            }
        } else {
            if (answerThree === correctAnswer) {
                alert("Correct!");
            } else {
                alert("Try Again!");
            }
        }


    }

    if (selectImage === 6 & correctAnswer === 6) { //reset to square
        setSelectImage(0);
    }

    return (
        <>
            <div class="QuizContainer">

                <div class="row">
                    <div className="QuestionTextContainer">
                        <div class="row">
                            <h1><b>Welcome to the quiz</b></h1>
                            <p>Pick the shape that you can see in this image</p>
                        </div>
                    </div>
                </div>

                <br />
                <br />

                <div class="row">
                    <div class="col-sm">
                        <div className="QuestionContainer">
                            <img
                                src={everyDayObjectImages[selectImage]}
                                alt="everyDayObject"
                                className="QuestionImage"
                            />
                        </div>
                    </div>

                    <div class="col-sm">
                        <div className="InfoQuizContainer">
                            <div class="btn-group-vertical">
                                <button class='btn' onClick={() => { setSelectImage(selectImage + 1); setCorrectAnswer(selectImage + 1); }}>
                                    Next Question
                                </button>

                                <button class='btn' onClick={() => { CheckAnswer() }}>
                                    Check My Answer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />

                <div class="row">
                    <div class="col-sm">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radioShapeAnswer" id='radioButton1' />
                            <img
                                src={shapes[answerOne]}
                                alt="shape"
                                className="ShapeAnswerOne"
                            />
                            <label for="flexRadioDefault1"></label>
                        </div>
                    </div>

                    <br />

                    <div class="col-sm">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radioShapeAnswer" id='radioButton2' />
                            <img
                                src={shapes[answerTwo]}
                                alt="shape"
                                className="ShapeAnswerTwo"
                            />
                        </div>
                    </div>

                    <br />

                    <div class="col-sm">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radioShapeAnswer" id='radioButton3' />
                            <img
                                src={shapes[answerThree]}
                                alt="shape"
                                className="ShapeAnswerThree"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default QuizContainer