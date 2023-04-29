const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.setAttribute('closing', '');

    modal.addEventListener(
        'animationend',
        () => {
            modal.removeAttribute('closing');
            modal.close();
        },
        { once: true }
    );
});

// Close modal when clicking outside of it
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal.click();
    }
});
