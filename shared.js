var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector(".main-nav__item--cta");

// console.log(backdrop);

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        backdrop.style.display = 'block';
        // modal.style.display = 'block';
        // modal.className = 'open'; This will overwrite the complete class list
        setTimeout(function() {
            backdrop.classList.add('open');
        }, 10);
        modal.classList.add('open');
    });
}

if (noButton) {
    noButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(function() {
        backdrop.style.display = "none";
    }, 200);
}

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
    setTimeout(function() {
        backdrop.classList.add('open');
    }, 10);
    mobileNav.classList.add('open');
});

ctaButton.addEventListener("animationstart", function() {
    console.log("Animation Started", event);
});

ctaButton.addEventListener("animationend", function() {
    console.log("Animation Ended", event);
});

ctaButton.addEventListener("animationiteration", function() {
    console.log("Animation Iteration", event);
});