import './styles/main.css'
import { calcularIva2, Producto } from './05-desestructuracion-funciones'
// import './temas-ts/declaracion_variables'


const tiendaProductos: Producto[] =[
  {
    desc: 'Telefono 1',
    precio: 1234
   },
   {
    desc: 'Telefono 2',
    precio: 1235
   },
   {
    desc: 'Tablet 1',
    precio: 2123
   },
   {
    desc: 'Tablet 2',
    precio: 2123
   },
]

const totalIva = calcularIva2(tiendaProductos)
console.log('====================================');
console.log(totalIva);
console.log('====================================');