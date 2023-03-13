/* const ele = document.createElement("div");

const ele1 = document.createElement("p");
ele1.innerHTML="Hello World!";
ele1.setAttribute("id","main");

ele.append(ele1);

document.body.append(ele); */

/* ------------------------------------------------------------------------------------------ */

/* const ele = document.createElement("div");
ele.setAttribute("class","container");

const ele1 = document.createElement("div");
ele1.setAttribute("class","row");

const ele2 = document.createElement("div");
ele2.setAttribute("class","col-1");

ele1.append(ele2);
ele.append(ele1);

document.body.append(ele); */

/* ---------------------------------------------------------------------------------------------- */

const foo = ()=>{
    const firstname = document.getElementById("Firstname").value;
    console.log(firstname);

    const middlename = document.getElementById("Middlename").value;
    console.log(middlename);

    const lastname = document.getElementById("Lastname").value;
    console.log(lastname);

    const email = document.getElementById("email").value;
    console.log(email);

    const password = document.getElementById("password").value;
    console.log(password);

}