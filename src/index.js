import gsap from 'gsap';

const cover_img = document.querySelector('#cover_img')
const img = document.querySelector('#img')

const tl = gsap.timeline({paused:true});
tl.to(cover_img, {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
    ease: "circ:inOut"
});
tl.to(img, {
    left: '0',
    ease: "circ:inOut",
}, "+=1");

img.addEventListener('mousedown', ()=>{
    tl.play();
})