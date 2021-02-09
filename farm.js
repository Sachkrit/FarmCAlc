function calculate(){
    var number_1 = Number(document.getElementById("number").value);

    var area = number_1 * number_1;

    var perimiter = 4 * number_1;

    document.getElementById("num1").innerHTML = "Area is:" + area;
    document.getElementById("num2").innerHTML = "Perimeter:" + perimiter;

    

}

