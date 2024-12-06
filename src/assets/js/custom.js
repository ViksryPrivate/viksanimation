/*
 * FUNGSI COPY BUTTON
 *=====================*/
document.querySelectorAll('.copy-btn').forEach(button => {
button.addEventListener('click', () => {
const code = button.parentElement.querySelector('code').textContent;
navigator.clipboard.writeText(code).then(() => {
const toastEl = document.querySelector('.toast');
const toast = new bootstrap.Toast(toastEl);
toast.show();
button.innerHTML = '<i class="fas fa-check"></i>';
setTimeout(() => {
button.innerHTML = '<i class="fas fa-copy"></i>';
}, 2000);
});
});
});



/*!
 * VIKS ANIMATION v1.0.0
 * MIT License Copyright (c) 27 Nov 2024 Vixsry
 * https://github.com/Vixsry/viks-animation/blob/main/LICENSE
 */
"use strict";const VIKS={init(){this.elements=document.querySelectorAll("[data-viks]"),this.windowHeight=window.innerHeight,this.config={thresholdTop:.1,thresholdBottom:.1},this.setupEventListeners(),this.initObserver()},setupEventListeners(){window.addEventListener("resize",()=>{this.windowHeight=window.innerHeight})},initObserver(){const t={root:null,threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]},e=new IntersectionObserver(t=>{t.forEach(t=>{const e=t.target,n="off"!==e.getAttribute("data-viks-animation-top"),i="off"!==e.getAttribute("data-viks-animation-bottom");if(t.isIntersecting)this.applyAnimation(e);else{const t=e.getBoundingClientRect(),s=t.top>this.windowHeight;(s&&n||!s&&i)&&this.removeAnimation(e)}})},t);this.elements.forEach(t=>e.observe(t))},applyAnimation(t){const e=this.getDelay(t),n=this.getDuration(t),i=this.getEasing(t);t.style.transitionDuration=`${n}ms`,t.style.transitionDelay=`${e}ms`,t.style.transitionTimingFunction=i,t.classList.add("viks-animate")},removeAnimation(t){t.classList.remove("viks-animate")},getDelay(t){return t.getAttribute("data-viks-delay")||this.getAttributeFromString(t.getAttribute("data-viks"),"delay-")||0},getDuration(t){return t.getAttribute("data-viks-duration")||this.getAttributeFromString(t.getAttribute("data-viks"),"duration-")||1e3},getEasing(t){return t.getAttribute("data-viks-easing")||this.getAttributeFromString(t.getAttribute("data-viks"),"easing-")||"ease"},getAttributeFromString(t,e){if(!t)return null;const n=new RegExp(`${e}(\\d+)`),i=t.match(n);return i?i[1]:null}};document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(t){t.preventDefault();const e=this.getAttribute("href").substring(1);document.getElementById(e).scrollIntoView({behavior:"smooth"})})})
