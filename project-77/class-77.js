function click()
{
    var bignumber = document.getElementById("big").value;
    var smallnumber = document.getElementById("small").value;
    var firstname = document.getElementById("first").value;
    var lastname = document.getElementById("last").value;
    var fullname = firstname + " " + lastname;
    var plus = bignumber + smallnumber
    var minus = bignumber - smallnumber;
    var times = bignumber * smallnumber;
    var divide = bignumber / smallnumber;
    array = plus, minus, times, divide;
    
    console.log(firstname);
    console.log(lastname);
    console.log(fullname);
    console.log(bignumber);
    console.log(smallnumber);
    console.log(plus);
    console.log(minus);
    console.log(multiply);
    console.log(divide);
    console.log(array);
}


    