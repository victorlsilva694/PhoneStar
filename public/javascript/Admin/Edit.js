let Update = document.querySelector('.btn-secondary');
let Edit = document.querySelector('#Editar');

function UpdateRedirect(){
    window.location.href = 'http://localhost:3000/Admin/Update/Form';
}
Edit.addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/Admin/Update';
});