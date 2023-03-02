print = console.log

let addBtn = document.getElementById("addBtn")

let notebook = document.getElementById("notebook")

addBtn.addEventListener("click", () => {
    let new_note = document.createElement("li") 
    new_note.classList.add('note', 'list-group-item', 'text-white')
    new_note.innerText = "added"
    notebook.appendChild(new_note)
})