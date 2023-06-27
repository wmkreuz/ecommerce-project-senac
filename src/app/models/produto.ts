export class Produto {
    id: number;
    nome: string;
    valor: number;
    url: string;
    destaque: number;
    novo: number;

    constructor(id: number, nome: string, valor: number, url: string, destaque: number, novo: number) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.url = url;
        this.destaque = destaque;
        this.novo = novo;
      }
  }