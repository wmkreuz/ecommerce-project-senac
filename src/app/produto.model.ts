
export class Produto {

    private id: number;
    private descricao: string;
    private valor: number;
    private foto: string;
  
    constructor(id: number, descricao: string, valor: number, foto: string) {
      this.id = id;
      this.descricao = descricao;
      this.valor = valor;
      this.foto = foto;
    }
  
    getId(): number {
      return this.id;
    }

    getDescricao(): string {
        return this.descricao;
    }
  
    getValor(): number {
      return this.valor;
    }

    getFoto(): string {
        return this.foto;
    }
    
}
