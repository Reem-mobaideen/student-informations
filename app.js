'use strict'

function PersonalInfo(id,name,email,mobile,age,tuition){
    this.id=id;
    this.name=name;
    this.email=email;
    this.mobile=mobile;
    this.tuition=tuition;
    getAge=(this.push)
    total=0;

    
}
function getAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function StudentForm(studentEmail,studentMobile,tuition){
    this.studentEmail=studentEmail;
    this.studentMobile=studentMobile;
    this.tuition=tuition;

    function settingItem(){
        let object=JSON.stringify()
        localStorage.setItem(StudentForm.studentEmail,StudentForm.studentMobile,StudentForm.tuition)
    }
    settingItem();
    
    function gettingItem(){
      let data= localStorage.getItem(PersonalInfo())
    let normalObject= JSON.parse(data);

    }
    gettingItem();
}

function clicking(event){
    event.preventDefault();
    let info=(event.target.id.value,event.target.name.value,
        event.target.email.value,event.target.mobile.value,
        event.target.tuition.value);
}



let parent=document.getElementById('parent');
let table=document.createElement('table');
parent.appendchild(table);

let tableRow=document.createElement('tr');
table.appendChild(tableRow);

let tableHeader=document.createElement('th');
tableRow.appendChild(tableHeader);
tableHeader.textContent(PersonalInfo());

for(let i=0; i<PersonalInfo.length; i++){

let personDataRow=document.createElement('tr');
table.appendChild(personDataRow);

let personalData=document.createElement('td');
personDataRow.appendChild(personalData);
personalData.textContent(PersonalInfo());
}

clicking();