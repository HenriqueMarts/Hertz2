import { Produto } from "src/produtos/entities/produto.entity";
export declare class Categoria {
    idCategoria: number;
    nome: string;
    tipo: string;
    descricao: string;
    produto: Produto[];
}
