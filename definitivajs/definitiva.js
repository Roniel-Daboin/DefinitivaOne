function sumar() {
    const numberOne = document.getElementById("number1").value;
    const numberTwo = document.getElementById("number2").value;
    let resultado = parseInt(numberOne) + parseInt(numberTwo);
    document.getElementById("resultado1").innerHTML = resultado;
    if (resultado) {
        console.log (resultado)    
    } else {
        console.log("no existe resultado")
    }
  };

  function resta() {
    const numberOne = document.getElementById("number1").value;
    const numberTwo = document.getElementById("number2").value;
    let resultado = parseInt(numberOne) - parseInt(numberTwo);
    document.getElementById("resultado1").innerHTML = resultado; 
    if (resultado) {
        console.log (resultado)    
    } else {
        console.log("no existe resultado")
    }
  }

  function multiplicacion() {
    const numberOne = document.getElementById("number1").value;
    const numberTwo = document.getElementById("number2").value;
    let resultado = parseInt(numberOne) * parseInt(numberTwo);
    document.getElementById("resultado1").innerHTML = resultado; 
    if (resultado) {
        console.log (resultado)    
    } else {
        console.log("no existe resultado")
    }
  }

  function division() {
    const numberOne = document.getElementById("number1").value;
    const numberTwo = document.getElementById("number2").value;
    let resultado = parseInt(numberOne) / parseInt(numberTwo); 
    document.getElementById("resultado1").innerHTML = resultado;
    if (resultado) {
        console.log (resultado)    
    } else {
        console.log("no existe resultado")
    }
  }