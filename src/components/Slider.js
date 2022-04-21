import React from 'react';
import '../App.css';
import './Slider.css';

const $slider = document.querySelector(".slider");
const $scroller = document.querySelector(".scroller");
const $slides = document.querySelectorAll(".slide");
const $prev = document.querySelector(".prev");
const $next = document.querySelector(".next");

let pos = 0;

function nextPos(pos, dir) {
    const containerWidth = $slider.offsetWidth;
    const fullWidth = $scroller.scrollWidth;
    const newPos = pos + dir * containerWidth;

    if (newPos < 0) return 0;

    if (fullWidth >= containerWidth && newPos > fullWidth - containerWidth)
        return fullWidth - containerWidth;

    return newPos;
}

function nextSlidePos(pos, dir) {    
    const containerWidth = $slider.offsetWidth;
    const fullWidth = $scroller.scrollWidth;

    const $slide = [...$slides].find($s => $s.offsetLeft >= pos + containerWidth);
    if ($slide) return $slide.offsetLeft + $slide.offsetWidth - containerWidth;

    return fullWidth - containerWidth;
}

function prevSlidePos(pos, dir) {    
    const containerWidth = $slider.offsetWidth;
    const fullWidth = $scroller.scrollWidth;

    const $slide = [...$slides].reverse().find($s => $s.offsetLeft + $s.offsetWidth <= pos);
    if ($slide) return $slide.offsetLeft;

    return 0;
}

$scroller.addEventListener("scroll", () => {
    pos = $scroller.scrollLeft;
});
$prev.addEventListener("click", () => {
    const newPos = prevSlidePos(pos);
    if (pos === newPos) return;
    $scroller.scrollLeft = newPos;    
});
$next.addEventListener("click", () => {
    const newPos = nextSlidePos(pos);
    if (pos === newPos) return;
    $scroller.scrollLeft = newPos;
});