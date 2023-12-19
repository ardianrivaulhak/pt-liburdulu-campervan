import { IUnit, Unit } from "@/domain/models/unit";
import { UnitRepository } from "@/domain/service/unit-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class UnitService {
    constructor(
        @inject(TYPES.UnitRepository) private _repository: UnitRepository
    ) {}

    public async get(): Promise<IUnit[]> {
        const data = await this._repository.get();

        const dto = data.map((el) => el.unmarshal());
        return dto;
    }

    public async show(unitId: string): Promise<IUnit> {
        const data = await this._repository.show(unitId);

        return data.unmarshal();
    }

    public async store(_unit: IUnit): Promise<IUnit> {
        const data = await this._repository.store({
            id: _unit.id,
            name: _unit.name,
            description: _unit.description,
        });

        return data.unmarshal();
    }

    public async update(unitId: string, _unit: IUnit): Promise<IUnit> {
        const _update = Unit.create({
            id: _unit.id,
            name: _unit.name,
            description: _unit.description,
        });
        const city = await this._repository.update(unitId, _update);
        return city.unmarshal();
    }

    public async destroy(unitId: string): Promise<boolean> {
        const data = await this._repository.show(unitId);
        await this._repository.destroy(unitId);
        return true;
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<IUnit>> {
        const data = await this._repository.getDataTable(param);
        return data.unmarshal();
    }
}
