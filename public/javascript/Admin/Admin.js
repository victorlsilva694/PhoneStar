let Table = document.querySelector('.table');
let Collaborator = document.querySelector('#Collaborator');
let FormNewUser = document.querySelector('.Form-NewUser');
let BudgetLink = document.querySelector('#Budget-Link');
let DeleteCollaboratorTable = document.querySelector('.Delete-Collaborator-Table');
let exit = document.querySelector('.Exit-Title');

Collaborator.addEventListener('click', () => {
    if(Table.style.display !== 'none'){
        Table.style.display = 'none';
        FormNewUser.style.display = 'block';
    }
});

BudgetLink.addEventListener('click', () => {
    if(Table.style.display !== 'block'){
        Table.style.display = 'block';
        FormNewUser.style.display = 'none';
    }
});


exit.addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/';
});
