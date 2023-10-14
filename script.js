//main container
let container=row("div","class","container-fluid")

//create a card to hold the label,input any Tags.
let card=row("div","class","card")
card.setAttribute("id","bg")

//
let form=document.createElement("form")
form.setAttribute("id","form")
card.append(form)
//creating h1 tag for heading.
let heading=document.createElement("h1")
heading.setAttribute("id","title")

let disc=document.createElement("p")
disc.setAttribute("id","description")
disc.innerHTML="This task completed using Dom"

//content of h1 tag
heading.innerHTML="Register";

//appending the heading into the card.
container.append(heading,disc,card);
container.append()

//appending the card to the body and it is very importent line.
document.body.append(container);


// FirstName lapbel and input create. 
let div1=row("div","class","row form-group")

let first=createlabel("label","for","form-text","class","col-form-label","First Name")
let firstinput=createinput("input","type","text","id","first-name","placeholder","Enter first name")
firstinput.setAttribute("required","true")


// FirstName lapbel and input append.

// label1.append()
// input1.append()

// lastName lapbel and input create. 
let last=createlabel("label","for","text","class","lab","Last Name")
let lastinput=createinput("input","type","text","id","last-name","placeholder","Enter last name")
lastinput.setAttribute("required","true")

// gender lapbel and input create. 
let gender=createlabel("label","for","gender","class","genlab","Gender")
let mlabel=createlabel("label","for","gender","class","lab1","Male")
let male=createinput("input","type","radio","id","male","value","Male")
male.setAttribute("name","gender")
let flabel=createlabel("label","for","gender","class","lab1","Female")
let female=createinput("input","type","radio","id","female","value","Female")
female.setAttribute("name","gender")

gender.append(male,mlabel,female,flabel)

// address lapbel and input create. 
let add=createlabel("label","for","number","class","lab","Address")
let addinput=createinput("textarea","type","text","id","address","placeholder","Enter address")
addinput.setAttribute("required","true")

// pincode lapbel and input create. 
let pin=createlabel("label","id","recs","class","lab","Pincode")
let pininput=createinput("input","type","text","id","pincode","placeholder","Enter area pincode")
pininput.setAttribute("required","true")

//
let submit=createinput("input","type","button","id","submit","value","Submit")
submit.setAttribute("class","btn btn-primary")
submit.setAttribute("onclick","check()")
let reset=createinput("input","type","reset","id","reset","value","Reset")

form.append(div1);
div1.append(first,firstinput,last,lastinput,gender
                   ,add,addinput,pin,pininput,submit,reset)

let Fvalue=document.getElementById("first-name")
let Lvalue=document.getElementById("last-name")
let Gvalue=document.getElementById("gender")
let Avalue=document.getElementById("address")
let Pvalue=document.getElementById("pincode")

// let display=document.getElementsByTagName("td1")
submit.addEventListener("click",send)

function send (){
    td1.innerHTML=Fvalue.value;
    td2.innerHTML=Lvalue.value;
    td4.innerHTML=Avalue.value;
    td5.innerHTML=Pvalue.value;
}

//radio button check function

function check(){
    let boy=document.getElementById("male")
    let girl=document.getElementById("female")
    if(boy.checked==true){
        td3.innerHTML=boy.value;
    }else if(girl.checked==true){
        td3.innerHTML=girl.value;
    }
    else{
        alert("plese select one")
    }
}


// function for create label tagname,attribute,attribute value,content.
function createlabel(tagname,attrname,attrvalue,pl,vl,content){
    let label=document.createElement(tagname)
    label.innerHTML=content;
    label.setAttribute(attrname,attrvalue);
    label.setAttribute(pl,vl);
    return label;
}

// function for create input tagname,attribute,attribute value,content.
function createinput(tagname,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    let label=document.createElement(tagname)
    label.setAttribute(attrname1,attrvalue1);
    label.setAttribute(attrname2,attrvalue2);
    label.setAttribute(attrname3,attrvalue3);
    return label;
}

//function for create div tag extra...you can add any tagname and any attribute name.
function row(tagnames,names,values){
    let car=document.createElement(tagnames);
    car.setAttribute(names,values);
    return car;
}
//End Of form Coding......................................................................

//Start table..............................................................................

//function for creating tags for table.
function element(tagname){
    let tab=document.createElement(tagname)
    return tab;
}

//creating table head.
let container2=row("div","class","container-fluid")
let table=element("table")
table.setAttribute("required","true")
table.setAttribute("class","table")

let thead=element("thead")
let rows=element("tr")

let th1=element("th")
th1.innerHTML="First Name"

let th2=element("th")
th2.innerHTML="Last Name"

let th3=element("th")
th3.innerHTML="Gender"

let th4=element("th")
th4.innerHTML="Address"

let th5=element("th")
th5.innerHTML="Pincode"

//append table head
table.append(thead)
thead.append(rows)
rows.append(th1,th2,th3,th4,th5)
container2.append(table)
document.body.append(container2)

//create table body.
let tbody=element("tbody")
let rows2=element("tr")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

let td1=element("td")
let td2=element("td")
let td3=element("td")
let td4=element("td")
let td5=element("td")


table.append(tbody)
tbody.append(rows2)
rows2.append(td1,td2,td3,td4,td5)
document.body.append(table)



