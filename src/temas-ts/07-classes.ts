
class Persona{
 private nombre: string; 
 private edad: number; 

 private imprimirPersona(){
  console.log(`nombre: ${this.nombre} edad: ${this.edad}`);
 
 }

 setNombre(nombre: string): void {
  this.nombre = nombre
 }

 metodoAlterno(){
  return this.imprimirPersona()
 }
  
 constructor(nombre:string, edad: number) {
  this.nombre = nombre;
  this.edad = edad
 }



}

let persona1: Persona

persona1= new Persona('carlos', 21)
let persona2= new Persona('armando', 28)

// persona1.nombre = 'carlos'
persona1.setNombre('Juan1')
persona2.setNombre('Oscar')

persona1.metodoAlterno()

// persona1.imprimirPersona()
// persona2.imprimirPersona()

class Dado{
  private valor: number 

  public tirar(){
    return this.generar()
  }

  private generar(){
    this.valor = Math.floor((Math.random()*10))
  }

  imprimir(){
    console.log(`Salio el valor ${this.valor}`);
    
  }
}

let dado1 = new Dado()
dado1.tirar()
dado1.imprimir()

