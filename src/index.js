import gsap from 'gsap';
import './main.css';

const cover_img = document.querySelector('#cover_img');
const cover_img_filter = document.querySelector("#cover_img_filter");
const img = document.querySelector('#img');
const headerDiv = document.querySelector("header");
const headerUnderline = document.querySelector(".header-underline");
const content = document.querySelector("section.content");

const tl = gsap.timeline({
    paused:true,
    defaults: {
        ease: "power3.inOut",
    }});
tl.to(cover_img, {
    clipPath: 'circle(33% at 50% 50%)',
});
tl.to(img, {left: '5vw', duration: 2,}, "+=1");
tl.to(cover_img, {left: '5vw', duration: 2,}, "+1.5");
tl.to(cover_img, {backgroundColor: "pink", duration: 2,}, );
tl.to(cover_img_filter, {opacity: .95, duration: 2,}, "+.75");
tl.to(headerDiv, {right: "10vw", border: "0px solid rgb(25, 25, 25)", position: "fixed", background: "rgb(13,13,57, 0)", top: 0, duration: 2,}, "+1.5");
tl.to(headerUnderline, {width: "100vw", left: "0", position: "fixed", borderBottom: "5px solid pink", duration: 2}, "+2");
tl.to(content, {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.5 }, "+2.5");
img.addEventListener('mousedown', ()=>{
    tl.play();
})
