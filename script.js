// Obtener elementos del DOM
const searchInput = document.getElementById("search-input");
const taskList = document.getElementById("task-list");
// Lista de tareas para buscar
const tasks = [
  "Comprar pan",
  "Estudiar programación",
  "Limpiar la casa",
  "Hacer ejercicio",
  "Leer un libro",
  "Programar un proyecto",
];
// Función para mostrar tareas en la lista
function displayTasks(filteredTasks) {
  taskList.innerHTML = "";
  filteredTasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.textContent = task;
    taskList.appendChild(listItem);
  });
}
// Función para filtrar tareas
function filterTasks(query) {
  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(query.toLowerCase())
  );
  displayTasks(filteredTasks);
}
// Crear un observable para el evento de entrada
const { fromEvent } = rxjs;
const { debounceTime, map } = rxjs.operators;
fromEvent(searchInput, "input")
  .pipe(
    debounceTime(300), // Esperar 300 ms antes de procesar la

    map((event) => event.target.value) // Obtener el valor del
  )
  .subscribe((query) => {
    filterTasks(query);
  });
// Mostrar todas las tareas al inicio
displayTasks(tasks);
