"use strict";
const logo = document.querySelector(".logo");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const overlay = document.querySelector(".overlay");
const navList = document.querySelector(".nav__list");

// tab component
const tabControls = document.querySelector(".tab__controls");
// accordion
const accordion = document.querySelector(".accordion");
const accordionPanel = document.querySelectorAll(".accordion__panel");
const btnIcon = document.querySelectorAll(".accordion__btn img");
//form
const form = document.querySelector("form");
const email = document.querySelector(".email");
const formGroup = document.querySelector(".form__group");
const formErrMsg = document.querySelector(".form__err__msg");
const formErrIcon = document.querySelector(".form__err__icon");



const openSeseme = () => {
	openMenu.classList.add("hide");
	logo.classList.add("logo-alt");
	overlay.classList.remove("hide");
	navList.classList.remove("hide");
	closeMenu.classList.remove("hide");
};
const closeSeseme = () => {
	openMenu.classList.remove("hide");
	logo.classList.remove("logo-alt");
	overlay.classList.add("hide");
	navList.classList.add("hide");
	closeMenu.classList.add("hide");
};
// const tabComponent = document.querySelectorAll('.tab__component');

const openTabSeseme = (e) => {
	const tabControlBtn = document.querySelectorAll(".tab__control__btn");
	const span = document.querySelectorAll(".tab__controls span");
	const tabComponent = document.querySelectorAll(".tab__component");
	let clicked = e.target.closest(".tab__control__btn");
	if (!clicked) return;

	tabControlBtn.forEach((b) => {
		b.classList.remove("tab__control__btn--active");
	});
	span.forEach((s) => {
		s.classList.remove("tab__control--active");
	});
	tabComponent.forEach((t) => {
		t.classList.add("is--hidden");
	});
	tabControlBtn[clicked.dataset.tab].classList.add("tab__control__btn--active");
	span[clicked.dataset.tab].classList.add("tab__control--active");
	tabComponent[clicked.dataset.tab].classList.remove("is--hidden");
};

// accordion
const hideAllAnswers = () => {
	accordionPanel.forEach((p) => {
		// p.style.display = 'none';
		p.classList.add("is--hidden");
	});
};
hideAllAnswers();

const toggleFaq = (e) => {
	let clicked = e.target.closest(".accordion__btn");
	let clickedImg = e.target.querySelector(".accordion__btn__icon img");
	// console.log(clicked);
	// console.log(clicked.dataset.accordionbtn);
	// console.log(clickedImg);
	if (!clicked) return;
	let panelState = clicked.classList.contains("open");
	hideAllAnswers();
	if (!panelState) {
		clicked.nextElementSibling.classList.remove("is--hidden");
		clicked.classList.add("open");
		// clickedImg.classList.add("accordion__icon--active");
		btnIcon[clicked.dataset.accordionbtn].classList.add(
			"accordion__icon--active"
		);
	} else {
		clicked.classList.remove("open");
		clicked.nextElementSibling.classList.add("is--hidden");
		// clickedImg.classList.remove("accordion__icon--active");
		btnIcon[clicked.dataset.accordionbtn].classList.remove(
			"accordion__icon--active"
		);
	}
};
const validate = (e) => {
	const emailPattern =
		/^([a-zA-Z0-9\.-]+)@([a-z]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
	if (email.value.match(emailPattern)) {
		formGroup.classList.remove("form__group--err");
		formErrIcon.classList.add("is--hidden");
		formErrMsg.classList.add("is--hidden");
    email.value = '';
	} else {
		e.preventDefault();
		formGroup.classList.add("form__group--err");
		formErrIcon.classList.remove("is--hidden");
		formErrMsg.classList.remove("is--hidden");
	}
};

openMenu.addEventListener("click", openSeseme);
closeMenu.addEventListener("click", closeSeseme);
tabControls.addEventListener("click", openTabSeseme);
accordion.addEventListener("click", toggleFaq);
form.addEventListener("submit", validate);




// ! section--container animation
// gsap.registerPlugin(ScrollTrigger); 
// let sections = gsap.utils.toArray(".section--container");
// sections.forEach(section => {
// 	ScrollTrigger.create({
// 		trigger: section,
// 		start: "top top",
// 		pin: true,
// 		pinSpacing: false
// 	});
// })

const tl = gsap.timeline({
	defaults: {
		ease: "none"
	}
});

tl
	.from(".hero__graphic", {
		x: "100%",
		autoAlpha: 0,
	})
	.from([".heading--main", ".isDescription--main"], {
		y: 100,
		autoAlpha: 0,
		stagger: .2,
		ease: "expo",
		duration: 1.5,
	})
	.from([" .isCta__wrapper", ".isCta--prim"], {
		// x: 50,
		autoAlpha: 0,
		stagger: .2
	})
	.from([".isHeading__features",".isDescription__features"], {
		y: 10,
		autoAlpha: 0,
		stagger: .2
	})
	.from([".tab__controls"], {
		x: 40,
		autoAlpha: 0,
		// stagger: .2
	})
	.from([".tab__control__btn"], {
		y: 10,
		autoAlpha: 0,
		stagger: .2
	})
	.from([".tab__control--active"], {
		// x: 40,
		autoAlpha: 0,
		
	})
	.from([".tab__component__graphic"], {
		x: -40,
		autoAlpha: 0,
	})
	.from([".isHeading__tab__component", ".isDescription__tab", ".isCta__tab"], {
		y: 40,
		autoAlpha: 0,
		stagger: .2
	})


