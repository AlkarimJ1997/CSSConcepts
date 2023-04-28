const modal = document.querySelector('.modal');
const modalToggle = document.querySelector('button');

modalToggle.addEventListener('click', _ => {
	modal.classList.add('is-open');
});

modal.addEventListener('click', _ => {
	modal.classList.remove('is-open');
});
