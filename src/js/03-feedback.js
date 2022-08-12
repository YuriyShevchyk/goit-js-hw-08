import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onFormInput, 500));
refs.message.addEventListener('input', throttle(onFormInput, 500));
const Storage_KEY = "feedback-form-state";

updateInput();



function onFormSubmit(evt) {
  evt.preventDefault();
const formData = new FormData(refs.form);
    formData.forEach((name, value) => {
        console.log(name, value);
    })          

    refs.form.reset(); 
    localStorage.removeItem(Storage_KEY);   
  
};

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(Storage_KEY, JSON.stringify(formData));
};
        
function updateInput() {
    let inputListSaved = localStorage.getItem(Storage_KEY);
    inputListSaved= JSON.parse(inputListSaved);

      if(inputListSaved){
      
      refs.email.value = inputListSaved.email;
      refs.message.value = inputListSaved.message;
    
    };
};
