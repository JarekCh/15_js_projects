// ****** SELECT ITEMS **********

const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option

let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);


// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    // long version 
    // if(value !== '' && editFlag === false){
    //     console.log('add item to the list')
    // }
    // else if(value !== '' && editFlag === true){
    //     console.log('editing')
    // }
    // else{
    //     console.log('empty value')
    // }
    // console.log(id);

    // short version value return true or false 
    if(value && !editFlag){
        const element = document.createElement('article');
        //add class
        element.classList.add('grocery-item');
        //add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>
        `
        //append child
        list.appendChild(element);
        displayAlert('item added to the list', 'success');
        //show container
        container.classList.add('show-container');

    }
    else if(!value && editFlag){
        console.log('editing')
    }
    else{
        displayAlert('please enter the value', 'danger');
    }
    console.log(id);
}

// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);       

    //remove alert
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);  
    }, 1000);
}


// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
