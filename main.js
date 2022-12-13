//Ejercicio 1
// let sumar=0;numeros=0;numero=0;cont=0;
// numeros=+prompt('ingrese la cantidad de numeros')
// while(numeros>0){
//     cont+=1
//     numero=+prompt('ingrese el numero')
//     sumar+=numero
//     console.log(':',{sumar})
//     if(cont==numeros){
//         break
//     }if(numero==0){
//         alert('has ingresado el 0 se acabo el ciclo')
//         break
//     }
// }

//EJERCICIO 2
// let a=1;numeros=0;
// while(a>0){
//     numeros=Math.floor(Math.random() * 10)
//     if(numeros==0){
//         break
//     }
//     console.log(numeros)
// }

//EJERCICIO 3
// let numeros=0;
// for (let index = 0; index <20 ;index++) {
//     numeros=Math.floor(Math.random() * 1000)
//     console.log(numeros)
// }

//EJERCICIO 4

// let numero=0;

// numero=+prompt('ingrese un numero')
// while(numero<1){
//     numero=+prompt('ingrese un numero valido')
// }

// for (let index = 1; index < numero; index++) {
 
//     if(index%2==1){
//         console.log(index)
//     }
// }

//EJERCICIO 5

// let niños=0;niñosPeso=0;jovenes=0;jovenesPeso=0;adultos=0;adultosPeso=0;viejos=0;viejosPeso=0;edad=0;peso=0; 

// for (let index = 0; index < 20; index++) {
//     edad=+prompt('ingrese su edad:')
//     while(edad<0){
//         alert('valor invalido')
//         edad=+prompt('ingrese su edad:')
//     }
//     peso=+prompt('ingrese su peso:')
//     while(peso<=0){
//         alert('valor invalido')
//         peso=+prompt('ingrese su peso:')
//     }
//     if(edad>=0 && edad<=12){
//         niños+=1
//         niñosPeso+=peso
//     }if(edad>=13 && edad<=29){
//         jovenes+=1
//         jovenesPeso+=peso
//     }if(edad>=30 && edad<=59){
//         adultos+=1
//         adultosPeso+=peso
//     }else{
//         viejos+=1
//         viejosPeso+=peso
//     }
// }
// console.log(`el promedio de peso en niños:${niñosPeso/niños} jovenes:${jovenesPeso/jovenes} adultos:${adultosPeso/adultos} viejos:${viejosPeso/viejos}`)

//EJERCICIO 6

// for (let index = 1; index <=5; index++) {
//     for (let i = 1; i <=4; i++) {
//         if(i>0 && i<4)
//         document.write(`1.${index}.${i}-`)
//         if(i==4){
//             document.write(`1.${index}.${i}<br>`) 
//         }
//     }
// }



//EJERCICIO 7

let animal='';menu=1;edad=0;sumaElefantes=0;sumaJirafas=0;sumaDeChimpanses=0;promedio=0;categoria1=0;categoria2=0;categoria3=0;porcentaje=0;

while(menu>0){
    menu=+prompt(`INGRESE EL ANIMAL QUE DESEA ESTUDIAR
    0.SALIR
    1.ELEFANTES
    2.JIRAFAS
    3.CHIMPANCES
    INGRESE LA OPCION:
    `)
    if(menu==1){
        for (let index = 0; index <20; index++) {
            edad=+prompt('ingrese la edad del elefante:')
            while(edad<0){
                alert('edad incorrecta')
                edad=+prompt('ingrese la edad del chimpance:') 
            } 
            animal='elefantes'
            if(edad>0 && edad<=1){
                categoria1+=1
  
            }if(edad>1 && edad<3){
                categoria2+=1
                
            }if(edad>=3){
                categoria3+=1
               
            }
        }
        porcentaje=20

    }if(menu==2){
    for (let index = 0; index <15; index++) {
        edad=+prompt('ingrese la edad de la jirafa:') 
        while(edad<0){
            alert('edad incorrecta')
            edad=+prompt('ingrese la edad del chimpance:') 
        }
        animal='jirafas'
        if(edad>0 && edad<=1){
            categoria1+=1
            
        }if(edad>1 && edad<3){
            categoria2+=1
           
        } if(edad>=3){
            categoria3+=1
        }
    }
    porcentaje=15
    }if(menu==3){
        for (let index = 0; index <40; index++) {
            edad=+prompt('ingrese la edad del chimpance:') 
            animal='chimpances'
            while(edad<0){
                alert('edad incorrecta')
                edad=+prompt('ingrese la edad del chimpance:') 
            }
            if(edad>0 && edad<=1){
                categoria1+=1
                
            }if(edad>1 && edad<3){
                categoria2+=1
                
            }if(edad>=3){
                categoria3+=1
                
            }
        }
        porcentaje=40
    }

console.log(`el promedio de ${animal} de  la categoria 1(de 0 a 1 año) es:${Math.floor((categoria1*100)/porcentaje)}%, categoria 2(de más de 1 año y menos de 3) es: ${Math.floor((categoria2*100)/porcentaje)}%,categoria 3(de 3 o más años) es: ${Math.floor((categoria3*100)/porcentaje)}%`)
}
alert('finalisaste el menu')

//EJERCICIO 8

// let vendedores=0;sueldoBase=0;venta1=0;venta2=0;venta3=0;total=0;ventas=0

// vendedores=+prompt('ingrese la cantidad de vendedores')
// sueldoBase=+prompt('ingrese el sueldo base de los vendedores')

// for (let index = 1; index <=vendedores; index++) {
//      venta1=+prompt(`ingrese la venta 1 del vendedor ${index}`)
//      venta2=+prompt(`ingrese la venta 2 del vendedor ${index}`)
//      venta3=+prompt(`ingrese la venta 3 del vendedor ${index}`)
//      total=sueldoBase+((venta1+venta2+venta3)*0.1)
//      ventas=((venta1+venta2+venta3)*0.1)
//     console.log(`el sueldo total del empleado ${index} es: ${total}, sus comisiones fueron: ${ventas}`)
// }

//EJERCICIO 9

// let suma=0;salario=950000;comision=170000;extra=0.05;numeroDeVehiculos=0;valorAutomovil=0

// numeroDeVehiculos=+prompt('ingrese el numero de vehiculos vendidos')
// while(numeroDeVehiculos<0){
//     alert('el numero de vehiculos ingresado es incorrecto')
//     numeroDeVehiculos=+prompt('ingrese el numero de vehiculos vendidos')

// }
// for (let index = 1; index <=numeroDeVehiculos; index++) {
//     valorAutomovil=+prompt(`ingrese el valor del automovil N°${index}`)
//     suma+=valorAutomovil
// }
// console.log(`el sueldo del vendedor total es : ${(comision*numeroDeVehiculos)+(suma*extra)+salario}`)


//EJERCICIO 10

// let nombre='';nota1=0;nota2=0;suma1=0;suma2=0;

// nombre=prompt('ingrese el nombre')
// for (let index = 0; index <= 1; index++) {
//       nota1=parseFloat(prompt(`ingrese las notas del 40%`))
//       while(nota1<0){
//         alert('valor ingresado incorrecto')
//         nota1=parseFloat(prompt(`ingrese las notas del 40%`))
//       }
//     suma1+=nota1
//     suma1=suma1*0.4
//     }
// for (let i = 0; i <=2; i++) {
//     nota2=parseFloat(prompt(`ingrese las notas del 60%`))
//     while(nota2<0){
//         alert('valor ingresado incorrecto')
//         nota2=parseFloat(prompt(`ingrese las notas del 60%`))
//       }
//     suma2+=nota2
//     suma2=suma2*0.6
// } 
// console.log(`el promedio final de ${nombre} es : ${suma1+suma2}`)


