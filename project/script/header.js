
let isOpen = false;

function onMenuClick() {
    const header = document.getElementById('header');

    if (header) {
        if (isOpen) {
            header.className = header.className.split('header--mobile-open').join('');
        } else {
            header.className = `${header.className} header--mobile-open`;
        }

        isOpen = !isOpen;
    }
}

function onResize() {
    if (isOpen && window.innerWidth > 768) {
        const header = document.getElementById('header');
        header.className = header.className.split('header--mobile-open').join('');
        isOpen = false;
    }
}


window.addEventListener('resize', onResize);

