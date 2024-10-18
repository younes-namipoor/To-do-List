const open1 = document.querySelector('.bi-plus')
const open2 = document.querySelector('.second')
const open3 = document.querySelector('.third>ul')
const open4 = document.querySelector('.second-3>button')
const inp = document.querySelectorAll('.second>div>input')
const opt = document.querySelectorAll('.second>div>select>option')
const selec = document.querySelectorAll('.second>div>select')









open1.addEventListener('click' , ()=>{
    open1.classList.toggle('add2')
    open2.classList.toggle('add1')
})

open4.addEventListener('click' , ()=>{ 
        if(inp[0,1].value != '' ){            
        inp[0].style.background = 'white'
        inp[1].style.background = 'white'
        let li = document.createElement('li')
        li.innerHTML = `

        <h3>${inp[0].value}</h3>
        <input class="add5 div22"></input>
        <div class=div1>${inp[1].value}</div>
        <input class="add5 div22"></input>
        <div class= div2>
        <span onclick = mDel(this)>delete</span>
        <span onclick=mEdit(this)>edit</span>
        <i class="bi bi-check"onclick="myCh(this)" ></i>
        </div>
        `
        open3.appendChild(li)
        inp[0].value = null   
        inp[1].value= null
            
        } else{
            inp[0].style.background = 'red'
            inp[1].style.background = 'red'
        }
})


function mDel(s) {
    s.parentElement.parentElement.classList.add('add3')
    setTimeout(() => {
        s.parentElement.parentElement.remove()  
    }, 400);
}


function myCh(s) {
    s.parentElement.parentElement.classList.toggle('add4')
    
}
let flag = 1
function mEdit(s) {
   if(flag%2){
    let text = s.parentElement.parentElement.children[0].innerHTML
    let text2 = s.parentElement.parentElement.children[2].innerHTML
    s.parentElement.parentElement.children[0].innerHTML=''
    s.parentElement.parentElement.children[1].value = text
    s.parentElement.parentElement.children[0].classList.add('add5')
    s.parentElement.parentElement.children[1].classList.remove('add5')
    s.parentElement.parentElement.children[2].innerHTML=''
    s.parentElement.parentElement.children[3].value = text2
    s.parentElement.parentElement.children[2].classList.add('add5')
    s.parentElement.parentElement.children[3].classList.remove('add5')
    s.innerHTML = 'Ok'
   }else{
    let text1 = s.parentElement.parentElement.children[1].value
    let text3 = s.parentElement.parentElement.children[3].value       
    s.parentElement.parentElement.children[0].classList.remove('add5')
    s.parentElement.parentElement.children[2].classList.remove('add5')
    if(text1 != ''){
        s.parentElement.parentElement.children[0].innerHTML = text1
        s.parentElement.parentElement.children[2].innerHTML = text3
        s.parentElement.parentElement.children[1].classList.add('add5')
        s.parentElement.parentElement.children[3].classList.add('add5')
        s.innerHTML = 'Edit'
    }else{
        s.parentElement.parentElement.classList.add('add3')
        setTimeout(() => {
            s.parentElement.parentElement.remove()
        }, 400);
    }
   }
   flag++
}
