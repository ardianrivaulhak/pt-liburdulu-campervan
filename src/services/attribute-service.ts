import { IAttribute, Attribute } from "@/domain/models/attribute";
import { AttributeRepository } from "@/domain/service/attribute-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class AttributeService {
    constructor(
        @inject(TYPES.AttributeRepository)
        private _repository: AttributeRepository
    ) {}

    public async get(): Promise<IAttribute[]> {
        throw new Error("This data import from repository");
    }

    public async show(attributeId: string): Promise<IAttribute> {
        throw new Error("This data import from repository");
    }

    public async store(_attribute: IAttribute): Promise<IAttribute> {
        // create need unmarshal ( return Attribute.unmarshal)
        throw new Error("This data import from repository");
    }

    public async update(
        attributeId: string,
        _attribute: IAttribute
    ): Promise<IAttribute> {
        // update need unmarshal ( return Attribute.unmarshal)
        throw new Error("This data import from repository");
    }

    public async destroy(attributeId: string): Promise<boolean> {
        throw new Error("This data import from repository");
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<IAttribute>> {
        throw new Error("This data import from repository");
    }
}
