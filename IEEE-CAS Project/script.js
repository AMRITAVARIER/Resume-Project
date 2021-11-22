//alert("Loading");
function addNewWEField() {
    
    //console. Log("Adding new field");

    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', "Enter your Work Experience");

    let weOb = document.getElementById("we");
    let weAddButtonOb= document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter your Academic Qualifications");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb= document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}



//Generating CV
function generateCV()
{
    // Name, Contact, Social Media Links
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
    document.getElementById('nameT2').innerHTML=nameField;


    let contactField=document.getElementById('contactField').value;
    let contactT=document.getElementById('contactT');
    contactT.innerHTML=contactField;

    let addressField=document.getElementById('addressField').value;
    let addressT=document.getElementById('addressT');
    addressT.innerHTML=addressField;

    let linkedField=document.getElementById('linkedField').value;
    let linkedT=document.getElementById('linkedT');
    linkedT.innerHTML=linkedField;

    let fbField=document.getElementById('fbField').value;
    let fbT=document.getElementById('fbT');
    fbT.innerHTML=fbField;

    let instaField=document.getElementById('instaField').value;
    let instaT=document.getElementById('instaT');
    instaT.innerHTML=instaField;


    //Objective
    let objectiveField=document.getElementById('objectiveField').value;
    let objectiveT=document.getElementById('objectiveT');
    objectiveT.innerHTML=objectiveField;

    // Work Experience
    let wes=document.getElementsByClassName('weField');
    let str='';
    for(let e of wes)
    {
        str+= `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    // Academic Qualification

    let aqs=document.getElementsByClassName('eqField');
    let str1='';
    for(let e of aqs)
    {
        str1+= `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1; 
    
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}


//Print CV

function printCV()
{
    window.print();
}