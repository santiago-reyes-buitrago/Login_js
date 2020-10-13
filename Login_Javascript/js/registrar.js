let nombre = document.getElementById('name');
let usuario = document.getElementById('nick');
let contrasena = document.getElementById('pass');
let formulario = document.getElementById('form');

const alert = document.getElementById('alert');

let val = 0;

let userList = [];

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(userList));
} else {
    userList = JSON.parse(localStorage.getItem('users'));
}

function addUser(nombre, usuario, contrasena) {
    userList.push({ 'name': nombre, 'usuario': usuario, 'pass': contrasena });
}

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    for (let i = 0; i < JSON.parse(localStorage.getItem('users')).length; i++){
        if (JSON.parse(localStorage.getItem('users'))[i].usuario === usuario.value) {
            val += 1;
        }
    }

    if (val > 0) {
        val = 0;
        alert.className = 'alert alert-warning';
        alert.style.display = 'block';
        alert.innerText = 'Ya existe un registro con este nombre de usuario';
        setTimeout(function () { alert.style.display = 'none'; alert.className = ''; }, 2500);
    } else {
        val = 0;
        addUser(nombre.value, usuario.value, contrasena.value)
        localStorage.setItem('users', JSON.stringify(userList));
        alert.className = 'alert alert-success';
        alert.style.display = 'block';
        alert.innerText = 'Te has registrado correctamente, ya puedes ingresar';
        formulario.reset();
        setTimeout(function () { alert.style.display = 'none'; alert.className = ''; }, 2500);
        
    }
})




