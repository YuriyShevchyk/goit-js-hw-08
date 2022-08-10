import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
const STORAGE_KEY = "feedback-form-state";

processingTheForm();


const formData = {email:"", name:""};


function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  formData.email = refs.email.value;
  formData.message = refs.message.value;
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  
};

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
        
function processingTheForm() {
  const formValues = localStorage.getItem(STORAGE_KEY);
  const objectValues = JSON.parse(formValues);
   
  if (objectValues) {
    const saveEmail = objectValues.email;
    refs.email.value = saveEmail;
    const saveMessage = objectValues.message;
    refs.message.value = saveMessage;
   
  };
};
