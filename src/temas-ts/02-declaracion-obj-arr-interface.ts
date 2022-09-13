
  let nombres: string[] = ['Mario', 'Luigi', 'Peach']
  
  nombres.push('Toad')
  // nombres.push(100) -> error type
  console.log(nombres);

  let datos:(string | boolean | number)[]= ['Mario',23,true,'Lopez']
  datos.push(200)
  datos.push('Carlos')
  datos.unshift(false)
  console.log(datos);
  
  // otra forma de declarar arreglos 
  let arreglo: Array<number>=[1,2,3,4]

  // type Alumno = {
    interface Alumno {
    matricula: string,
    nombre: string,
    edad: number,
    mail: string,
    materias ?: string[]
  }

  const alumno: Alumno = {
    matricula :  '19002340',
    nombre: 'Carlos',
    edad: 22,
    mail: 'carlos@.com'
  }

  alumno.nombre = 'juan'
  console.log(alumno);
  

  