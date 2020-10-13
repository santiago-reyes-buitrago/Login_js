let usuario = document.getElementById('nick');
let contrasena = document.getElementById('pass');

let formulario = document.getElementById('form');

let alert = document.getElementById('alert');

let val = 0;


let users = JSON.parse(localStorage.getItem('users'));

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    for (let i = 0; i < users.length; i++){
        if (usuario.value === users[i].usuario && contrasena.value === users[i].pass) {
            val += 1;
            localStorage.setItem('userIndex', i);
        }
    }

    if (val === 1) {
        val = 0;
        window.location = "perfil.html";
    } else {
        formulario.reset();
        val = 0;
        alert.className = 'alert alert-warning';
        alert.style.display = 'block';
        alert.innerText = 'Nombre de usuario o contraseña incorrectas';
        setTimeout(function () { alert.style.display = 'none'; alert.className = ''; }, 2500);
    }
})
