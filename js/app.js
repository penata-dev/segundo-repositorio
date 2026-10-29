const num1 = document.getElementById ("num1");
const num2 =  document.getElementById ("num2");
const operaciones = document.getElementById ("operaciones");
const boton = document.getElementById ("respuesta");
const resultado = document.getElementById ("resultado");
const imagen = document.getElementById ("img")


boton.addEventListener ("click", function () {
    const valor1 = Number(num1.value);
    const valor2 = Number(num2.value);

    if (operaciones.value === "suma") {
        let total = valor1 + valor2;
        resultado.textContent = "La suma es: " + total;
        imagen.src = "https://tse3.mm.bing.net/th/id/OIP.9BCDkIL88UjhErG28-5eQwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
    } else if (operaciones.value === "resta") {
        total = valor1 - valor2;
        resultado.textContent = "La resta es: " + total;
        imagen.src = "https://c0.klipartz.com/pngpicture/391/354/gratis-png-matematica-basica-signos-mas-y-menos-restas-meno-matematicas.png";
    } else if (operaciones.value === "division") {
        if (valor2 == 0) {
            resultado.textContent ="No se puede dividir en cero";
        } else {
            total = valor1 / valor2;
        resultado.textContent = "La division es: " + total;
        imagen.src = "https://th.bing.com/th/id/R.ec86b3d186e16513c19a2469dd6f6b54?rik=LZVjZqCYUSYgng&pid=ImgRaw&r=0";
        }
        
    } else {
        total = valor1 * valor2;
        resultado.textContent = "La multiplicacion es: " + total;
        imagen.src = "https://th.bing.com/th/id/R.fa818da6854aa7bf36f85a11af90a30a?rik=3AJYrJhw6%2fzPOQ&pid=ImgRaw&r=0";
    }
});