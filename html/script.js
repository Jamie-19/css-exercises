function addition(){
    num1 = document.getElementById('num1');
    console.log(num1.value);
    num2 = document.getElementById('num2');
    console.log(num2.value);
    let result = Number(num1.value)+Number(num2.value);
    document.getElementById('addition-result').innerHTML = result;
}

function multiplication(){
    num3 = document.getElementById('num3');
    console.log(num1.value);
    num4 = document.getElementById('num4');
    console.log(num2.value);
    let result = Number(num3.value)*Number(num4.value);
    document.getElementById('multiplication-result').innerHTML = result;
}

function capitalizer(){
    let str = document.getElementById('text');
    console.log(str);
    console.log(str.value);
    console.log(typeof str);
    console.log(typeof str.value);
    let result = str.value[0].toUpperCase() + str.value.slice(1);
    console.log(result);
    document.getElementById('capitalize-result').innerHTML = result;
}

function lastletter(){
    let str = document.getElementById('text1');
    let result = str.value[str.value.length-1];
    console.log(result);
    document.getElementById('lastletter-result').innerHTML = result;
}