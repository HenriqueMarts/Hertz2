import { CategoriasService } from './categorias.service';
import { Categoria } from './entities/categoria.entity';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    findAll(): Promise<Categoria[]>;
    findById(id: number): Promise<Categoria>;
    findByName(nome: string): Promise<Categoria[]>;
    create(categoria: Categoria): Promise<Categoria>;
    update(categoria: Categoria): Promise<Categoria>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
