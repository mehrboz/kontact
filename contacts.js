const container = document.getElementById('container');
const contacts = [
    { name: 'salom,', telNumber: '+8900999,', adress: 'konibodom' },
    { name: 'aslam,', telNumber: '+12211221,', adress: 'panjakent' },
    { name: 'ahmad,', telNumber: '+6454537,', adress: 'khujand' }
];

drawIntoContainer(contacts);

function addNew() {
    const obj = {};
    obj.name = window.prompt('name');
    obj.telNumber = window.prompt('number');
    obj.adress = window.prompt('adress')
    contacts.push(obj);
    drawIntoContainer(contacts);
}

function findContacts(str) {
    if (!str || contacts.length === 0) {
        drawIntoContainer(contacts);
        return;
    }
    const result = contacts.filter(function (contact) {
        return contact.name.startsWith(str) || contact.telNumber.includes(str);
    });
    drawIntoContainer(result);
}




drawIntoContainer(contacts);



function updateContact(contact) {
    contacts.splice(index, 1, contact);
}


function drawIntoContainer(items) {
    container.innerHTML = '';
    items.forEach(function (item, i) {
        const div = document.createElement('p');
        div.innerHTML = `${item.name}${item.telNumber} ${item.adress}`;
        const btn = document.createElement('button');
        btn.innerHTML = 'delete';
        btn.setAttribute('data-id', i);
        btn.onclick = function (evt) {
            const el = evt.currentTarget;
            const id = +el.getAttribute('data-id');
            contacts.splice(i, 1);
            drawIntoContainer(contacts);
        }


        const butn = document.createElement('button');
        butn.innerHTML = 'edit';
        butn.setAttribute('data-id', i);
        butn.onclick = function (evt) {
            const el = evt.currentTarget;
            const id2 = +el.getAttribute('data-id');

            const obj = {};
            obj.name = window.prompt('name')
            obj.telNumber = window.prompt('number');
            obj.adress = window.prompt('adress')
            contacts.splice(i, 1, obj);
            drawIntoContainer(contacts);
        }
        div.appendChild(btn)
        div.appendChild(butn);
        container.appendChild(div);
    }); 

}
