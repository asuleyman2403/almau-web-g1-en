let isModalOpen = false;

function openModal() {
    const modal = document.getElementById('contact-form-modal');
    modal.className = `${modal.className} contact-form-modal--open`;
    isModalOpen = true;
}

function closeModal(event) {
    const target = event.target;

    if (!target.className.includes('modal__content')) {
        const modal = document.getElementById('contact-form-modal');
        modal.className = modal.className.split('contact-form-modal--open').join('');
        isModalOpen = false;
    }
}

