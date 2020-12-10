const createTask = document.querySelector("#createTask")



function addTask(){
    let task = document.querySelector("#tarefa")
    let taskValue = task.value
    let days = document.querySelector("#dias-semana")
    let day = days.value
    let local = document.getElementById(`${day}`)


    if(task.value === ''){
        alert("Você precisa preencher a tarefa")
    } else {
    
        local.innerHTML += `<li>${taskValue}</li>`
    
        task.value = ''
    }
}


createTask.addEventListener("click", addTask)


