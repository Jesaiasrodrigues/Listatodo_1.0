const tasks = [
];

function renderElements(array){
  //Pegando o elemento pai do HTML
  const taskList = document.querySelector('ul')

  //zerando a lista no HTML
  taskList.innerHTML = ''
  for(let i = 0; i < array.length; i++){
    const taskLi = createTaskItem(array[i])
    taskList.append(taskLi);
  }

}
function createTaskItem(objeto){
  
    //Criando elementos
    const taskLi = document.createElement('li');
    const taskdiv = document.createElement('div');
    const taskspanType = document.createElement('span');
    const taskpTitle = document.createElement('p');
    const taskbutton = document.createElement('button');
    const taskicone = document.createElement('i')
    
    //Escrevendo elemento no HTML
    taskdiv.append(taskspanType, taskpTitle);
    taskLi.append(taskdiv, taskicone);
    
    
    //Copiando as classes do CSS
    taskLi.classList.add("task__item");
    taskdiv.classList.add("task-info__container");
    
    //Decidindo a cor da bolinha da prioridade
    if (objeto.type == "Urgente"){
      taskspanType.classList.add("task-type", "span-urgent")}
      else if (objeto.type  == "Importante"){
        taskspanType.classList.add("task-type", "span-important")}
        else {
          taskspanType.classList.add("task-type", "span-normal")
        }
        
    //Icone da lixeira
      taskicone.classList.add("fa-solid", "fa-trash");
        
    taskicone.addEventListener('click', function() {
      const i = tasks.indexOf(objeto)
      tasks.splice(i, 1)
      renderElements(tasks)
    })
    //Pegando a prioridade do arry e escrevendo na tela
    taskpTitle.innerText = objeto.title
    return taskLi
  }
  //criando um novo contato
     
    const form = document.querySelector('.form__container')
    form.addEventListener('submit', function(event){
      event.preventDefault()
      const inputTitle = document.querySelector('.form__input--text')
      const inputType = document.querySelector('.form__input--priority')
      
      const newTaskinput = {
        title: inputTitle.value,
        type: inputType.value
      }
      
      for (let i = 0;i < tasks.length; i++){
        
        if (inputTitle.value === tasks[i].title){    
          return alert('Tarefa já existe, favor digitar novamente')}
          
        }
        tasks.push(newTaskinput)
          renderElements(tasks) 

        })
        
       
       renderElements(tasks)   