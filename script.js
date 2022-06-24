let names = ['Erica Mustermann', 'John Doe'];
let phoneNumbers = ['015765465445', '015765487652'];
load();


function render() {

    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `<h1>My Contacts</h1>`;
    content.innerHTML += /*html*/ `
    
    <div class="inputs-box">

        <input placeholder="Name" id="name" >
        <input placeholder="Telefon" id="phone"> 
        <button onclick="addContact()" class="add-btn">+</button>

    </div>
    `;

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phoneNumber = phoneNumbers[i];

        content.innerHTML += /*html*/ `
        <div class= "container">
            <div class="card">
            <b>Name: </b> ${name} <br>
            <b>Telefon: </b> ${phoneNumber} <br>
            <button onclick="deleteContact(${i})" class="delete-btn">Delete</button>
            </div>
        
        </div>
        
        `;

    }

    content.innerHTML += /*html*/ `
    <div class="info">
        <span>*For Add a new contact press on + Button</span>
        <br>
        <span>*For Delete a contact press on Delete Button</span>
    </div>
    
    `;
}


function addContact() {

    let name = document.getElementById('name');
    let phone = document.getElementById('phone');

    if (name.value === '') {
        alert('Please Fill in the empty fields!')
    } else {

        names.push(name.value);
        phoneNumbers.push(phone.value);

        render();
        save();

    }

}


function deleteContact(i) {

    names.splice(i, 1);
    phoneNumbers.splice(i, 1);

    render();
    save();
}


function save() {

    let namesAsText = JSON.stringify(names);
    localStorage.setItem('names', namesAsText);

    let phoneAsText = JSON.stringify(phoneNumbers);
    localStorage.setItem('phoneNumbers', phoneAsText);
}


function load() {

    let namesAsText = localStorage.getItem('names');
    let phoneAsText = localStorage.getItem('phoneNumbers')

    if (namesAsText && phoneAsText) {

        names = JSON.parse(namesAsText);
        phoneNumbers = JSON.parse(phoneAsText);

    }
}