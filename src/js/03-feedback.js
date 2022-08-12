import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const inputRef = document.querySelector('input');
const textareaRef =document.querySelector('textarea');


const STORAGE_KEY = "feedback-form-state";


inputRef.addEventListener('input', throttle(onInputChange, 500))
textareaRef.addEventListener('input', throttle(onInputChange, 500))


updateInput();

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(form);
    formData.forEach((name, value) => {
        console.log(name, value);
    })          

    form.reset(); 
    localStorage.removeItem(STORAGE_KEY);   
});


function onInputChange (evt) {    
 const email = inputRef.value;
 const message = textareaRef.value;
 const formData = {
    email,
    message,
 };
 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
 }; 


function updateInput() {
    let inputListSaved = localStorage.getItem(STORAGE_KEY);
    inputListSaved= JSON.parse(inputListSaved);

      if(inputListSaved){
      
      inputRef.value = inputListSaved.email;
      textareaRef.value = inputListSaved.message;
    
    };
};