
export function sumarVoid(a:number,b:number, c:number =0) :void {
    // return a+b+c
    console.log(a+b+c);
    
  }
  
  function sumar (a:number,b:number, c:number =0) :number {
    return a+b+c
    
  }
  
  console.log(sumar(1,2,3));
  
  export function multiplicar (numero: number, otronumero?: number, base: number = 10): number{
   console.log('====================================');
   console.log(otronumero);
   console.log('===================================='); 
    return numero* base
  }
  
  const resultado = multiplicar(10,0,2)
  
  console.log(resultado);
  
  interface Alumno {
    nombre: string,
    edad: number,
    mostrarEdad: () => void 
  }
  
  export function cursar(alumno:Alumno, nuevaEdad: number):void {
    alumno.edad+= nuevaEdad
    console.log(alumno)
  }
  
  const nuevoAlumno: Alumno = {
    nombre: 'Carlos',
    edad: 23,
    mostrarEdad(){
      console.log('====================================');
      console.log(`edad:${this.edad}`);
      console.log('====================================');
    }
  }
  
  console.log(cursar(nuevoAlumno, 10));
  
  // console.log('====================================');
  // console.log(nuevoAlumno.mostrarEdad);
  // console.log('====================================');
  
  
  