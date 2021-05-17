window.addEventListener('load', fadeOut(), false);

function fadeOut() {
    setTimeout(() => {
        var body = document.getElementById('load');
        body.classList.add('loaded');
    }, 2500)
}


function start() {
    var element = document.getElementById('begin');

    element.classList.add('start')
}