type Direccion = {
    calle: string 
  pais: string
  estado: string
  }
  
  type AlumnoUTL = {
    nombre: string,
    edad: number,
    direccion: Direccion, 
    mostrarDireccion: () => void
  }
  
  
  
  const alumnoUTL: AlumnoUTL = {
   nombre: 'Carlos',
   edad: 23,
   direccion: {
    calle: 'Saturno 904',
    pais: 'MX',
    estado: 'Gto'
   },
   mostrarDireccion(){
    return `${this.nombre}, ${this.direccion.estado}, ${this.direccion.pais}`
   }
  }
  
  console.log('====================================');
  console.log(alumnoUTL.mostrarDireccion());
  console.log('====================================');