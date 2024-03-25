import React from 'react';
import ReactDOM from 'react-dom';
import Plans from './Plans';
import './output.css';

const app = document.getElementById('app');

ReactDOM.render(<Plans />, app);

function handleKeyDown(e) {
    if(e.key === 'ArrowLeft') {
        const els = document.querySelectorAll('[tabindex]');
        let current = els.length;
        for(let i = els.length - 1; i >= 0; --i) {
            if(els[i] === document.activeElement) {
                current = i;
                break;
            }
        }
        if(current < els.length) {
            els[(current + els.length - 1) % els.length].focus();
        }
        else {
            els[current - 1].focus();
        }
    }
    if(e.key === 'ArrowRight') {
        const els = document.querySelectorAll('[tabindex]');
        let current = -1;
        for(let i = 0; i < els.length; ++i) {
            if(els[i] === document.activeElement) {
                current = i;
                break;
            }
        }
        if(current > -1) {
            els[(current + 1) % els.length].focus();
        }
        else {
            els[current + 1].focus();
        }
    }
}

window.addEventListener('keydown', handleKeyDown);
