import { ICity, City } from "@/domain/models/city";
import { CityRepository } from "@/domain/service/city-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class CityService {
    constructor(
        @inject(TYPES.CityRepository) private _repository: CityRepository
    ) {}

    public async get(): Promise<ICity[]> {
        const data = await this._repository.get();

        const cityDto = data.map((el) => el.unmarshal());
        return cityDto;
    }

    public async show(id: string): Promise<ICity> {
        const data = await this._repository.show(id);

        return data.unmarshal();
    }

    public async store(_city: ICity): Promise<ICity> {
        const data = await this._repository.store(
            City.create({
                name: _city.name,
            })
        );
        return data.unmarshal();
    }

    public async update(cityId: string, _city: ICity): Promise<ICity> {
        const toUpdateCity = City.create({
            id: _city.id,
            name: _city.name,
        });
        const city = await this._repository.update(cityId, toUpdateCity);
        return city.unmarshal();
    }

    public async destroy(cityId: string): Promise<boolean> {
        const data = await this._repository.show(cityId);
        await this._repository.destroy(cityId);
        return true;
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<ICity>> {
        const data = await this._repository.getDataTable(param);
        return data.unmarshal();
    }
}
