function Insert(number) {
    document.myForm.insertTable.value = document.myForm.insertTable.value + number;
}

function Erase() {
    document.myForm.insertTable.value = "";   
}

function Eqval() {
    var expr = document.myForm.insertTable.value;
    if (expr) {
        document.myForm.insertTable.value = eval(expr);
    }
}
function Inversion() {
    let sign = (document.myForm.insertTable.value).substring(0, 1);
    if (sign == "-") {
        let num = (document.myForm.insertTable.value).length;
        document.myForm.insertTable.value = (document.myForm.insertTable.value).substring(1, num);
    }
    else {document.myForm.insertTable.value = "-" + document.myForm.insertTable.value;}
    }

function BackSpace() {
    let num = (document.myForm.insertTable.value).length;
    document.myForm.insertTable.value = (document.myForm.insertTable.value).substring(0, num-1);
}