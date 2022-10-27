import { DeleteResult, Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';
export declare class CategoriasService {
    private categoriasRepository;
    constructor(categoriasRepository: Repository<Categoria>);
    findAll(): Promise<Categoria[]>;
    findById(idCategoria: number): Promise<Categoria>;
    findByName(nome: string): Promise<Categoria[]>;
    create(categoria: Categoria): Promise<Categoria>;
    update(categoria: Categoria): Promise<Categoria>;
    delete(id: number): Promise<DeleteResult>;
}
