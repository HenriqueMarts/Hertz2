import { Categoria } from "src/categorias/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
export declare class Produto {
    idProduto: number;
    nome: string;
    descricao: string;
    preco: number;
    foto_produto: string;
    categoria: Categoria;
    usuario: Usuario;
}
