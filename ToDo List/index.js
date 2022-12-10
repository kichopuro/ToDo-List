
// Agarrar informacion del input
const inp_info = document.querySelector('#inp_info');

// Boton de agregar
const btn_agree = document.querySelector('#btn_agree');

// Lugar donde se alamacena 
const deposit_tasks = document.querySelector('#deposit_tasks');

let arr_task = [];

btn_agree.addEventListener('click', e => {

  e.preventDefault();

  if (inp_info.value == '') {

    alert('Por favor escriba una tarea');

  }

  else {

    // En esta variable se guarda la info de input
    let inf = inp_info.value;
    save_task(inf);
    view_task();  
    zero_tasks ();

  }

});

function save_task(inf) {

  // ID generado unicamente por obj
  _id = Math.floor(Math.random() * 999999);

  // Creando el obj y pasandole los datos
  let obj = {
    id: _id,
    content: inf
  }

  // Agregamos el obj al arreglo de tareas de obj
  arr_task.push(obj);

}

function view_task() {

  let div;

  for (let i = 0; i < arr_task.length; i++) {

    div = document.createElement('div');
    div.classList.add('p-3');
    div.classList.add('bg-dark');
    div.classList.add('mb-3');
    div.style.color = '#fff';
    div.textContent = arr_task[i].content;

  }

  deposit_tasks.appendChild(div);

}

function zero_tasks () {

  let zero_task = document.createElement('div');

  if (arr_task.length < 0) {

    deposit_tasks.removeChild(deposit_tasks.firstChild);  

  }

  else if (arr_task.length > -1) {

    zero_task.classList.add('alert');
    zero_task.classList.add('alert-dismissible');
    zero_task.classList.add('alert-danger');
    zero_task.classList.add('text-center');
    zero_task.textContent = 'No hay tareas';

    deposit_tasks.appendChild(zero_task);

  }

}

zero_tasks();
