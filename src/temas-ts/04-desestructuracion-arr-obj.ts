// desestructuración de objetos 

interface Detalles {
    autor: string,
    anio: number,
  }
  
  interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
  }
  
  const reproductor: Reproductor = {
    volumen:50,
    segundo: 0,
    cancion: 'Something about us',
    detalles: {
      autor: 'Daft punk',
      anio: 2004
    }
  }
  
  const {volumen, cancion, segundo, detalles: {autor}} = reproductor
  
  
  console.log(reproductor);
  console.log(`el voluemen es ${volumen}`);
  console.log(`la cancion es ${cancion}`);
  console.log(`el segundo es ${segundo}`);
  console.log(`el autor es ${autor}`);
  
  
  export const dbz: string [] = ['goku', 'gohan', 'vegeta', 'kakarato', 'yamcha', 'trunks']
  const [p1, p2, p3, p4] = dbz
  
  console.log(`personaje 1: ${dbz[0]}`);
  console.log(`personaje 2: ${dbz[1]}`);
  
  console.log('====================================');
  console.log(`vegeta: ${p3}`);
  console.log('====================================');
  