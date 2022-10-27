import { Categoria } from "../entities/categoria.entity";
import { CategoriasService } from "../services/categorias.service";
export declare class CategoriaController {
    private readonly categoriaService;
    constructor(categoriaService: CategoriasService);
    findAll(): Promise<Categoria[]>;
    findById(id: number): Promise<Categoria>;
    findBydescricao(descricao: string): Promise<Categoria[]>;
    create(categoria: Categoria): Promise<Categoria>;
    update(categoria: Categoria): Promise<Categoria>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
