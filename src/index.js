// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
  

// });

function handleDelete(clickEvent){
    clickEvent.target.parentElement.remove()
}

function handleSubmit(e){
  e.preventDefault()
  
  const userInput = e.target.children[1].value
  const myUl = document.getElementById("list")
  const myLi = document.createElement('li')

  const importanceLevel = e.target.children[2].value
  
  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'Mark as Completed'
  deleteBtn.addEventListener('click', handleDelete)
  
  myLi.textContent = userInput
  myLi.style.color = priorityColor(importanceLevel)
  myLi.append(deleteBtn)
  myUl.appendChild(myLi)
  e.target.reset()

}

function priorityColor(importance){
  if (importance === "High"){
    return "red"
  }
  else if (importance === "Medium"){
    return "orange"
  }
  else {
    return "green"
  }
}

const myForm = document.getElementById("create-task-form")
const dropDownSelect = document.createElement('select')

myForm.addEventListener('submit', handleSubmit)
myForm.children[1].insertAdjacentElement('afterend', dropDownSelect)
  
const highP = document.createElement('option')
highP.innerText = "High"
dropDownSelect.append(highP)

const mediumP = document.createElement('option')
mediumP.innerText = "Medium"
dropDownSelect.append(mediumP)

const lowP = document.createElement('option')
lowP.innerText = "Low"
dropDownSelect.append(lowP)