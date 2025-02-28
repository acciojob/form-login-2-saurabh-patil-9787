//your JS code here. If required.
let inputname = document.getElementById('fname')
let inputlname = document.getElementById('lname')
let inputPhone= document.getElementById('phone')
let inputMail = document.getElementById('email')
let inputBtn = document.querySelector('button')


inputBtn.addEventListener('click',()=>{
            alert(`First Name: ${inputname.value} last Name: ${inputlname.value} Phone Number:${inputPhone.value} Email ID:${inputMail.value}`)
})