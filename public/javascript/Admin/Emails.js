let exit = document.querySelector('.Exit-Title');
let RedirectMail = document.querySelector('#Redirect-Mail');
let With = document.querySelector('.With');
let sidebar = document.querySelector('.sidebar')

exit.addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/';
});


function MailRedirect() {
    window.location.href = 'https://outlook.live.com/owa/';
}