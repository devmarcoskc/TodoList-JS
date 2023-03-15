// FUNÇÃO DE ADICIONAR TAREFA
function addTask() {
    const tasktitle = document.querySelector("#task-title").value;
    if (tasktitle) {

        //clonar template
        const template = document.querySelector(".template");
        const newtask = template.cloneNode(true);

        // adiciona titulo
        newtask.querySelector(".task-title").textContent = tasktitle;

        //remover as classses desnecessárias
        newtask.classList.remove("hide");
        newtask.classList.remove("template");

        //adicionar tarefa na lista
        const list = document.querySelector("#task-to-do");
        list.appendChild(newtask);

        //adicioanr evento de remover
        const removeBtn = newtask.querySelector(".remove-btn").addEventListener("click", function(){
            removetask(this);
        })

        //adicionar evento de completar tarefa
        const doneBtn = newtask.querySelector(".done-btn").addEventListener("click", function() {
            completetask(this);
        })

        //limpar texto
        document.querySelector("#task-title").value = "";
    }
}
//função de remover tarefa
function removetask(task) {
    task.parentNode.remove(true);
}

//função completar tarefa

function completetask(task) {
    const tasktocomplete = task.parentNode;
    tasktocomplete.classList.toggle("done");
}


// EVENTO DE ADICIONAR TAREFA
const addbtn = document.querySelector("#add-btn");
addbtn.addEventListener("click", function(e){
    e.preventDefault()

    addTask();
});
