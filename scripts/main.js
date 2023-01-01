



const inputText = document.getElementById('add');
const addBtn = document.getElementById('submit')
const trash = document.querySelector('.trash');
const edit = document.querySelector('.edit');



addBtn.addEventListener('click', (e) => {
    const text = inputText.value;
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    document.body.append(ul);
    ul.classList.add('items')
    ul.append(li);
    li.innerText = text;
    inputText.value = '';
    const span = document.createElement('span');
    li.append(span);
    li.classList.add('ls');
    span.classList.add('icons');
    const trashBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    trashBtn.classList.add('trash');
    editBtn.classList.add('edit')
   
    trashBtn.innerHTML = '<i class="fa fa-trash trash" aria-hidden="true"></i>'
    editBtn.innerHTML = '<i class="fas fa-edit edit"></i>'
    span.append(trashBtn, editBtn);

})



document.body.addEventListener('click', (e) => {
 
    if (e.target.matches('.trash')) {
        e.target.parentElement.parentElement.parentElement.remove()
    }
    else if (e.target.matches('.edit')) {
        inputText.value = e.target.parentElement.parentElement.textContent;
        e.target.parentElement.parentElement.parentElement.remove()
        
    }



})






