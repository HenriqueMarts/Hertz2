"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const enums_1 = require("@nestjs/common/enums");
const exceptions_1 = require("@nestjs/common/exceptions");
const categoria_entity_1 = require("./entities/categoria.entity");
const typeorm_2 = require("@nestjs/typeorm");
let CategoriasService = class CategoriasService {
    constructor(categoriasRepository) {
        this.categoriasRepository = categoriasRepository;
    }
    async findAll() {
        return await this.categoriasRepository.find({
            relations: {
                produto: true
            }
        });
    }
    async findById(idCategoria) {
        let categoria = await this.categoriasRepository.findOne({
            where: {
                idCategoria
            },
            relations: {
                produto: true
            }
        });
        if (!categoria) {
            throw new exceptions_1.HttpException('Categoria não encontrado!', enums_1.HttpStatus.NOT_FOUND);
        }
        return categoria;
    }
    async findByName(nome) {
        return await this.categoriasRepository.find({
            where: {
                nome: (0, typeorm_1.ILike)(`%${nome}%`)
            },
            relations: {
                produto: true
            }
        });
    }
    async create(categoria) {
        return this.categoriasRepository.save(categoria);
    }
    async update(categoria) {
        let buscaCategoria = await this.findById(categoria.idCategoria);
        if (!buscaCategoria || !categoria.idCategoria) {
            throw new exceptions_1.HttpException('Categoria não encontrada!', enums_1.HttpStatus.NOT_FOUND);
        }
        return this.categoriasRepository.save(categoria);
    }
    async delete(id) {
        let buscaCategoria = await this.findById(id);
        if (!buscaCategoria) {
            throw new exceptions_1.HttpException('Categoria não encontrada!', enums_1.HttpStatus.NOT_FOUND);
        }
        return await this.categoriasRepository.delete(id);
    }
};
CategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(categoria_entity_1.Categoria)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CategoriasService);
exports.CategoriasService = CategoriasService;
//# sourceMappingURL=categorias.service.js.map