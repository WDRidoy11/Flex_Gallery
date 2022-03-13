const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
};
panels.forEach(plane => plane.addEventListener('click', toggleOpen));
panels.forEach(plane => plane.addEventListener('transitionend', toggleActive));