const users = [
    {
        name: 'name 1',
        username: 'username_1',
        password: 'password_1',
        email: 'email_1'
    },
    {
        name: 'name 2',
        username: 'username_2',
        password: 'password_2',
        email: 'email_2'
    },
    {
        name: 'name 3',
        username: 'username_3',
        password: 'password_3',
        email: 'email_3'
    },
];

const userStr = localStorage.getItem('currentUser');
const currentUser = JSON.parse(userStr);
const nav = document.getElementById('nav');
if (currentUser) {
    nav.innerHTML = `${nav.innerHTML} <a class = "nav__link" href="#">Моя корзина</a>
    <a class = "nav__link" href="#">Выйти</a>`;
} else {
    nav.innerHTML = `${nav.innerHTML} <a class = "nav__link nav__link_bordered" href="/sign-up.html" id = "signUp">Регистрация</a>
    <a class = "nav__link nav__link_bordered" href="/login.html">Войти</a>`;
}


function onSubmitClick () {
    const form = document.getElementById('form');
    const inputs = form.getElementsByTagName('input');

    const user = {};

    for (let i = 0; i < inputs.length; i++) {
        user[inputs[i].name] = inputs[i].value;
    }

    delete user.repeatPassword;

    localStorage.setItem('currentUser', JSON.stringify(user));
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = `http://localhost:5500`;
    console.log(user);
}


