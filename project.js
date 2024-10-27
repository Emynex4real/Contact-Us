const errorMessage = document.querySelectorAll('.error-message');
const form = document.getElementById('contact-form');
const inputs = document.querySelectorAll('.input');
const textArea = document.querySelector('.text-area');
const textAreaError = document.getElementById('message-error');
const checkBox = document.getElementById('consent');
const checkBoxError = document.getElementById('consent-error');
const radios = document.querySelectorAll('.radio');
const radioError = document.querySelector('.error-radio'); 
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const success = document.querySelector('.success');



form.addEventListener('submit', (e)=>{
    // e.preventDefault();

    let submit = true

    errorMessage.forEach(error =>{
        error.style.display = 'none'
    })
    
    inputs.forEach((input, index)=>{
        if(!input.value.trim()){
            errorMessage[index].style.display = 'block';
            submit = false;   
        }   
    })
    
    

    if(!textArea.value.trim()){
        textAreaError.style.display = 'block';
        submit = false;    
    }
    
    if(!checkBox.checked){
        checkBoxError.style.display = 'block';
        submit = false;
    }
 
    let isRadioChecked = false; 
    radios.forEach((radio) => {
        if (radio.checked) {
            isRadioChecked = true; 
        }
    });
    
    if (!isRadioChecked) {
        radioError.style.display = 'block';
        submit = false;
    } else {
        radioError.style.display = 'none';
    }
    
    
    if(!submit){
        e.preventDefault();
        removeSuccess('none', 0)
    } else {
        e.preventDefault();
        clearAll();
        removeSuccess();     
    }
    
    function clearAll(){
        if(submit){
            success.style.display = 'flex';
            
            inputs.forEach(input =>{
                input.value = '';
            })

            textArea.value = '';

            radios.forEach(radio=>{
                radio.checked = false;
            }) 
            checkBox.checked = false;   
        }  
    }
})

function removeSuccess(){
    setTimeout(() => {
        success.style.display = 'none';
    }, 3000);
}

