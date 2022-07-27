"use strict";
function displayNavBar() {
	const navLink = document.querySelector(".nav-links");
	const openMenu = document.querySelector(".fa-bars");
	const closeMenu = document.querySelector(".fa-times");
	const siteLogo = document.querySelector(".site-logo img");
	const hamburger = document.querySelector(".hamburger");
	const overlay = document.querySelector(".overlay");
	const socialMediaContact = document.querySelector(".socialMediaContact");

	function showMenu() {
		openMenu.classList.add("is-hidden");
		siteLogo.classList.add("img-alt");
		hamburger.classList.add("color");
		closeMenu.classList.remove("is-hidden");
		navLink.classList.remove("is-hidden");
		overlay.classList.remove("is-hidden");
		socialMediaContact.classList.remove("is-hidden");
	}
	function hideMenu() {
		closeMenu.classList.add("is-hidden");
		navLink.classList.add("is-hidden");
		overlay.classList.add("is-hidden");
		socialMediaContact.classList.add("is-hidden");
		openMenu.classList.remove("is-hidden");
		siteLogo.classList.remove("img-alt");
		hamburger.classList.remove("color");
	}
	openMenu.addEventListener("click", showMenu);
	closeMenu.addEventListener("click", hideMenu);
}
// displayNavBar();

// !TAB-MENU
// -------=====================-----
// const tabMenu = document.querySelector('.tab-menu');
// const btn = document.querySelectorAll('button');

// let count = 0;

// function displayComponent(e) {
//  removeActive();
//  let activeBtn = e.target;
//  console.log(e.target);
//  activeBtn.classList.add('is-active');
// }
// tabMenu.addEventListener('click', displayComponent);

// function removeActive() {
//  btn.forEach(item => item.classList.remove('is-active'));
// }

//!ACCORDION
const accordion = document.querySelector(".accordion");

function displayFaq(e) {
	const btns = document.querySelectorAll("button");
 const panels = document.querySelectorAll(".panel");
 //updated angle-down to chevron-down
	const angleDowns = document.querySelectorAll(".fa-chevron-down");
	const angleUps = document.querySelectorAll(".fa-chevron-up");
 const btn = e.target.closest("button");
 let panel = btn.nextElementSibling;
// show current faq
 function showFaq() {
		panel.classList.remove("faq-hidden");
 }
 // hide current faq
 function hideFaq() {
  panel.classList.add("faq-hidden");
 }
 // hide all FAQs and display the appropriate arrow indicator.
 function hideAllFaq() {
  panels.forEach(p => p.classList.add('faq-hidden'));
  angleUps.forEach(a => a.classList.add('faq-hidden'));
  angleDowns.forEach(a => a.classList.remove('faq-hidden'));
 }
 if (panel.classList.contains('faq-hidden')) {
  hideAllFaq();
  showFaq();
  // console.log(panels);
 } else {
  hideFaq();
 }
	for (let i = 0; i < btns.length; i++) {
  if (btns[i] === btn) {
			angleDowns[i].classList.toggle("faq-hidden");
			angleUps[i].classList.toggle("faq-hidden");
		}
	}
}
accordion.addEventListener('click', displayFaq);

//! FORM VALIDATION
