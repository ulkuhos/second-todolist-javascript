let addToDoButton = document.querySelector("#addToDo")
let toDoContainer = document.querySelector("#toDoContainer")
let inputText = document.querySelector("#inputText")
let clearToDoButton = document.querySelector("#clearToDo")
let ul = document = document.querySelector("#getUl")

addToDoButton.addEventListener('click', function(){
    let p  = document.createElement('p')
    p.classList.add("p-styling")
    toDoContainer.appendChild(p)
    p.innerHTML = inputText.value
    inputText.value = ""

    p.addEventListener('click', function(){
        p.style.textDecoration = 'line-through' /* yazi dekorasyonu ustu cizgili olsun*/
    })
    p.addEventListener('dblclick', function() {
        toDoContainer.removeChild(p)
    })   
    clearToDoButton.addEventListener('click', function(){
        // p.style.display = 'none'; bu yontemle silmiyor sadece yok ediyor, gorunmez hale getiriyor.
        p.remove() // bu kodla siliyoruz p leri.
    })

})


