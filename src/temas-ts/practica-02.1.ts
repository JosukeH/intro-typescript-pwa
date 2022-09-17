export class Sumatoria{
    private base : number; 
    private multiplo: number; 
  
    setNumeros(base : number, multiplo: number){
      this.base = base
      this.multiplo = multiplo
    }
  
    private sumar(): number {
      let total  = 0
      for(let i = 1; i <= this.multiplo; i++ ){
        total += this.base 
      }
      return total
    }
  
    getValor(): void {
      console.log(this.sumar());
      
    } 
  
  }