const runScript = (e) => {
    const empleados =  [
        {nombre:"pedro", salario:5000000, profesión: "Abogado"} ,
        {nombre:"Angie", salario:3900000, profesión: "Odontóloga"} ,
        {nombre:"Luis", salario:2500000, profesión: "Asesor Bancario"},
        {nombre:"Lina", salario:4500000, profesión: "Psicóloga"}
    ];
    let cupones = {
        1: {cupon:"semana10", descuento:"20%", fecha_caducidad:"29-07-2023"},
        2: {cupon:"comprasmayores100", descuento:"10%", fecha_caducidad:"25-07-2023"},
        3: {cupon:"viernesloco", descuento:"15%", fecha_caducidad:"27-07-2023"}
    };
    switch (parseInt(e.target.value)) {
        case 1:
            const frutas = ['Mango', 'Pera', 'Manzana', 'Kiwi', 'Banano', 'Tomate']
            for (let i = 0; i < frutas.length; i++) {
                let esImpar = i % 2 !== 0 ? 'impar' : 'par';
                console.log(`La fruta ${frutas[i]} es ${esImpar} en la posición ${i}`)
            }
            break;
        case 2:
            const numbers = [];
            let highest = 0;
            let lowest = 0;
            let acc = 0;
            for (let i = 1; i <= 5; i++) {
                const numero = parseInt(prompt("Número"));
                numbers.push(numero);
                acc += numero;
                lowest = numero;
            }
            numbers.forEach((numero) => {
                if (numero > highest) {
                    highest = numero;
                } 
                if (numero < lowest) {
                    lowest = numero;
                }
            })
            console.log(`Highest: ${highest} | Lowest: ${lowest} | Average: ${acc/5}`)
            break;
        case 3:
            let arreglo = ['zanahoria','banano','manzana','pera','cebolla','papa','fresas','Ajo','Sandía'];
            console.log(arreglo);
            let frutas2 = [];
            let targetIndexes = [1, 2, 3, 6, 8];
            for (let i = 0; i < arreglo.length; i++) {
                if (targetIndexes.indexOf(i) !== -1) {
                    frutas2.push(arreglo[i])
                }
            }
            console.log(frutas2);
            break;
        case 4:
            let surnames = ['Lopez', 'Rodriguez', 'Henao', 'Palacio'];
            console.log(empleados.reduce((acc, el, i) => {
                empleados[i]['nombre'] += ` ${surnames[i]}`;
                if (i == 3) {
                    empleados[i]['profesión'] = 'Estoy más loca que mis pacientes';
                }
                return acc += el.salario;
            }, 0));
            console.log(empleados)
            break;
        case 5:
            console.log(empleados.sort(({ salario: salarioA }, { salario: salarioB }) => salarioB - salarioA));
            break;
        case 6:
            let object = {};
            for (let i = 1; i <= 3; i++) {
                let producto = prompt('Producto nombre');
                let precio = parseInt(prompt('Precio'));
                let cantidad = parseInt(prompt('Cantidad'));
                object[i] = { producto, precio, cantidad }
            }
            console.log(object)
            break;
        case 7:
            let object2 = {};
            for (let i = 1; i <= 3; i++) {
                let producto = prompt('Producto nombre');
                let precio = parseInt(prompt('Precio'));
                let cantidad = parseInt(prompt('Cantidad'));
                let totalAPagar = cantidad * precio;
                object2[i] = { producto, precio, cantidad, totalAPagar }
            }
            console.log(object2)
            break;
        case 8:
            let object3 = {};
            let totalSale = 0;
            for (let i = 1; i <= 3; i++) {
                let producto = prompt('Producto nombre');
                let precio = parseInt(prompt('Precio'));
                let cantidad = parseInt(prompt('Cantidad'));
                let totalAPagar = cantidad * precio;
                totalSale += totalAPagar;
                object3[i] = { producto, precio, cantidad, totalAPagar };
            }
            totalWithIVA = totalSale * 1.19;
            console.log(totalWithIVA);
            console.log(object3);
            break;
        case 9:
            Object.keys(cupones).forEach((key) => {
                cupones[key]['name'] = cupones[key]['cupon'];
                delete cupones[key]['cupon'];
            })
            console.log(cupones);
            break;
        case 10:
            let dateNow = new Date();
            Object.keys(cupones).forEach((key) => {
                let caducidad = cupones[key]['fecha_caducidad'];
                let split = caducidad.split('-');
                let fixedDate = `${split[2]}-${split[1]}-${split[0]}`;
                console.log(fixedDate);
                console.log(new Date(fixedDate));
                console.log(dateNow);
                let days = (new Date(fixedDate) - dateNow) / (1000 * 60 * 60 * 24);
                console.log(`Faltan ${Math.round(days)} días para caducar.`);
            })
            break;

        default:
            break;
    }
}

addEventListener("click", runScript)


