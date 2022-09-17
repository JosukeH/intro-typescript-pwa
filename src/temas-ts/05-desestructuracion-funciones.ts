export interface Producto { 
    desc: string,
    precio: number, 
  }
  
  
  export const telefono: Producto = {
    desc: 'Nokia 2004 flip',
    precio: 2999.49
  }
  
  export const tablet: Producto = {
    desc: 'tablet lenovo thinkpad',
    precio: 21999.40
  }
  
  function calcularIva(productos: Producto[]): number {
    let total: number = 0; 
  
    productos.forEach(producto => {
      total += producto.precio
    })
    
    return total*0.16
  
  }
  
  
  const iva = calcularIva([tablet, telefono])
  console.log('====================================');
  console.log(iva);
  console.log('====================================');
  
  export function calcularIva2(productos: Producto[]): [number, number] {
    let total: number = 0
    
    productos.forEach(({precio}) => {
      total += precio
    })
  return [total, total*0.16]
  }
  
  const ivas = calcularIva2([tablet, telefono])
  const [total, iva2] = ivas
  
  
  console.log(`total: ${total}`);
  console.log(`iva:  ${iva2}`);
  
  
  