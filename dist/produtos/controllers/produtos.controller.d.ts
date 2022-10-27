import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../entities/produto.entity';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    findAll(): Promise<Produto[]>;
    findById(id: number): Promise<Produto>;
    findByName(nome: string): Promise<Produto[]>;
    create(produto: Produto): Promise<Produto>;
    update(produto: Produto): Promise<Produto>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
