const anim = lottie;

anim.loadAnimation({
    container: document.querySelector('#lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './js/Aviator_motion.json'
});


function redirectToLink() {
    window.location.href = "http://sloterra.com";
}

document.getElementById("registerButton").onclick = redirectToLink;
