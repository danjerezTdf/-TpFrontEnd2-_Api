let url = 'https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees'

let inputName = document.getElementById('name');
let inputCity = document.getElementById('city');
let inputMail = document.getElementById('mail');
let inputBirthday = document.getElementById('birthday');  
let labelId = document.getElementById('id');   

let containerEmployees = document.getElementById('container-employess');


fetch(url)
    .then (response => response.json())
    .then (data => {

        const employees = data;

        function chargeEmployees() {
            for (let index = 0; index < employees.length; index++) {
                const employee = employees[index];
    
                let divOne = document.createElement('div');
    
                divOne.className = 'employee';
    
                let pName = document.createElement('h2');
                let pCity = document.createElement('h4');
                let pBirthday = document.createElement('birthday')
                let pMail = document.createElement('p');
                let pLabel = document.createElement('label');
                let pID = document.createElement('p');
                let btnEdition = document.createElement('button');
                let btnDelete = document.createElement('button');
    
                btnEdition.className = 'btn btn-success m-1';
                btnEdition.type ='button';
                btnEdition.value = index;
                btnEdition.innerText = 'Editar';
                btnDelete.className = 'btn btn-danger m-1';
                btnDelete.innerText ='Eliminar'
                pLabel.innerText = 'ID';
                
    
                pName.innerText = employee.name;
                pCity.innerText = employee.city;
                pBirthday.innerText = employee.birthday;
                pMail.innerText = employee.email;
                pID.innerText = employee.id;
    
                divOne.appendChild(pName);
                divOne.appendChild(pCity);
                divOne.appendChild(pBirthday);
                divOne.appendChild(pMail);
                divOne.appendChild(pLabel)
                divOne.appendChild(pID);
                divOne.appendChild(btnEdition);
                divOne.appendChild(btnDelete);
                containerEmployees.appendChild(divOne);
            }
        }
        function editUser(){
            i=this.value;
            console.log(i)
            inputName.value = employees[i].name;
            inputCity.value = employees[i].city;
            inputMail.value = employees[i].email;
            inputBirthday.value = employees[i].birthday;
            labelId.innerText = employees[i].id;
            labelId.value = i;
        }
        function saveUser(){
            //console.log(labelId.value);
            i= labelId.value;
            employees[i].name = inputName.value;
            inputName.value = " ";
            employees[i].city = inputCity.value;
            inputCity.value = " ";
            employees[i].email = inputMail.value;
            inputMail.value = " ";
            employees[i].birthday = inputBirthday.value;
            inputBirthday.value = " ";

            containerEmployees.innerHTML =" ";
            chargeEmployees() 
        }
        function deleteUser(){
            i= labelId.value;
            employees.splice(i,1)
            containerEmployees.innerHTML =" ";
            chargeEmployees() 
        }
        function userAdd(){
            console.log(employees[2])
            let aux = {name: inputName.value , city: inputCity.value, birthday: inputBirthday.value, email: inputMail.value, id: (employees.length+1)}
            employees.push (aux)
            containerEmployees.innerHTML =" ";
            chargeEmployees() 

        }

        chargeEmployees();
        let btnEdit = document.querySelectorAll(".btn-success");
        btnEdit.forEach(botonE => {
            botonE.addEventListener("click", editUser);
        });

        let btnDelete = document.querySelectorAll(".btn-danger");
        btnDelete.forEach(botonD => {
            botonD.addEventListener("click", deleteUser);
        });

        let btnSave = document.getElementById('btnSave');
        btnSave.addEventListener('click', saveUser);
        
        let btnAdd = document.getElementById('btnAdd');
        btnAdd.addEventListener('click', userAdd);
    })
    .catch(err => console.log('Hubo un problema con la petición Fetch:' + err.message))



