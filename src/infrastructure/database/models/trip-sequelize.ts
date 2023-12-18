import {
    Association,
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    NonAttribute,
} from "sequelize";
import { sequelize } from "../sequelize";
import { City } from "./city-sequelize";
import { Destination } from "./destination-sequelize";
import { Unit } from "./unit-sequelize";
import { PickPoint } from "./pickPoint-sequelize";

export class Trip extends Model<
    InferAttributes<Trip>,
    InferCreationAttributes<Trip>
> {
    declare id: CreationOptional<string>;
    declare cityId: string;
    declare destinationId: string;
    declare unitId: string;
    declare price: Date;
    declare starDate: Date;
    declare endDate: Date;
    declare clock: string;
    declare termsCondition: string;
    declare pickUpPointId: string;
    declare city: NonAttribute<City> | undefined;
    declare destination: NonAttribute<Destination> | undefined;
    declare unit: NonAttribute<Unit> | undefined;
    declare pickPoint: NonAttribute<PickPoint> | undefined;
    public declare static associations: {
        city: Association<City, Trip>;
        destination: Association<Destination, Trip>;
        unit: Association<Unit, Trip>;
        pickPoint: Association<PickPoint, Trip>;
    };
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;
    declare deleted_at: CreationOptional<Date>;
}

Trip.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        cityId: DataTypes.STRING,
        destinationId: DataTypes.STRING,
        unitId: DataTypes.STRING,
        price: DataTypes.STRING,
        starDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        clock: DataTypes.DATE,
        termsCondition: DataTypes.STRING,
        pickUpPointId: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
    },
    {
        tableName: "trips",
        modelName: "trips",
        underscored: true,
        paranoid: true,
        timestamps: true,
        sequelize,
    }
);
