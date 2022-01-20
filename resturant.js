function checkname() {
    var str = document.getElementById("name").value;
    var msg;
    var ptr = /^[a-zA-Z ]+$/;
    var chck = ptr.test(str);
    if (!chck) {
        msg1 = "Please Enter a valid Name";
        document.getElementById("nameerror").innerText = msg1;
        flag = false;
    }
    if (str == null || str == "") {
        msg = "* Username is required";
        document.getElementById("nameerror").innerText = msg;
        flag = false;
    }
    return false;
}

function myFunction() {
    prompt("Enter New Rate", "");

}

function saveButton1() {
    var divButtoni = (document.all) ? document.all['myButton1'] : document.getElementById('Button1');
    divButtoni.innerHTML = "Menu Updated Successfullly";
}

function createButton1() {
    var divi = (document.all) ? document.all['myDiv1'] : document.getElementById('Div1');
    divi.innerHTML = "Item Removed";
}

function createButton2() {

    var divx = (document.all) ? document.all['myDiv2'] : document.getElementById('Div2');
    divx.innerHTML = "Item Removed";
}

function createButton3() {
    var diviii = (document.all) ? document.all['myDiv3'] : document.getElementById('Div3');
    diviii.innerHTML = "Item Removed";
}

function createButton4() {
    var diviv = (document.all) ? document.all['myDiv4'] : document.getElementById('Div4');
    diviv.innerHTML = "Item Removed";
}

function createButton5() {
    var divv = (document.all) ? document.all['myDiv5'] : document.getElementById('Div5');
    divv.innerHTML = "Item Removed";
}

function checkemail() {
    var str = document.getElementById("email").value;
    var msg;
    var ptr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var chck = ptr.test(str);
    if (!chck) {
        msg1 = "Please Enter a valid Email ID";
        document.getElementById("emailerror").innerText = msg1;
        flag = false;

    }
    if (str == null || str == "") {
        msg = "* Email Id is required";
        document.getElementById("emailerror").innerText = msg;
        flag = false;
    }
    return false;

}


function checkMobile() {
    var str = document.getElementById("mobile").value;
    var msg;
    var ptr = /^[0-9]/;
    var chck = ptr.test(str);
    if (!chck) {
        msg1 = "Please Enter a valid mobile number";
        document.getElementById("mobileerror").innerText = msg1;
        flag = false;
    }
    if (str == null || str == "") {
        msg = "mobile number is required";
        document.getElementById("mobileerror").innerText = msg;
        flag = false;
    }
    return false;
}

function checkuser() {
    var str = document.getElementById("user").value;
    var msg;
    var ptr = /^[0-9]/;
    var chck = ptr.test(str);
    if (!chck) {
        msg1 = "Please Enter a valid user id";

        document.getElementById("usererror").innerText = msg1;
        flag = false;
    }
    if (str == null || str == "") {
        msg = "user id is required";
        document.getElementById("usererror").innerText = msg;
        flag = false;
    }
    return false;
}

function checkpassword() {
    var str = document.getElementById("password").value;
    var msg;
    var ptr = /^[0-9]/;
    var chck = ptr.test(str);
    if (!chck) {
        msg1 = "Please Enter a valid password";
        document.getElementById("passworderror").innerText = msg1;
        flag = false;
    }
    if (str == null || str == "") {
        msg = "password is required";
        document.getElementById("passworderror").innerText = msg;
        flag = false;
    }
    return false;
}