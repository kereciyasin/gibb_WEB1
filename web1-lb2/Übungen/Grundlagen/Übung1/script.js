// Görevlerin saklanacağı array
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Sayfadaki gerekli elemanları seç
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");
const toggleCompleted = document.getElementById("toggleCompleted");

// Görevleri ekrana yazdıran fonksiyon
function renderTodos() {
  todoList.innerHTML = ""; // Listeyi temizle
  todos.forEach((todo, index) => {
    // Görev sadece tamamlanmamışsa listelensin, toggleCompleted işaretliyse
    if (toggleCompleted.checked && todo.completed) return;

    const li = document.createElement("li");
    li.className = todo.completed ? "completed" : "";
    li.innerHTML = `
      <span>${todo.text}</span>
      <span class="date">${todo.date}</span>
      <div>
        <button class="btn-complete">${todo.completed ? "Tamamlandı" : "Tamamla"}</button>
        <button class="btn-delete">Sil</button>
      </div>
    `;
    // Tamamla düğmesi işlevi
    li.querySelector(".btn-complete").addEventListener("click", () => toggleComplete(index));
    // Sil düğmesi işlevi
    li.querySelector(".btn-delete").addEventListener("click", () => deleteTodo(index));
    todoList.appendChild(li);
  });
}

// Görev ekleme fonksiyonu
function addTodo() {
  const text = todoInput.value.trim();
  if (!text) {
    alert("Boş bir görev ekleyemezsiniz!");
    return;
  }
  // Aynı görev eklenmiş mi kontrol et
  if (todos.some(todo => todo.text === text)) {
    alert("Bu görev zaten mevcut!");
    return;
  }

  // Tarih ve saat ekle
  const date = new Date().toLocaleString();

  todos.push({ text, completed: false, date }); // Yeni görevi ekle
  todoInput.value = ""; // Giriş alanını temizle
  saveTodos(); // LocalStorage'a kaydet
  renderTodos(); // Güncel listeyi göster
}

// Görev tamamlama durumu değiştirme
function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}

// Görev silme fonksiyonu
function deleteTodo(index) {
  todos.splice(index, 1); // Görevi listeden kaldır
  saveTodos();
  renderTodos();
}

// LocalStorage'a görevleri kaydetme
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Ekle düğmesine tıklama
addButton.addEventListener("click", addTodo);

// Toggle tamamlanmış görevleri göster/gizle
toggleCompleted.addEventListener("change", renderTodos);

// Sayfa yüklenirken mevcut görevleri göster
renderTodos();
