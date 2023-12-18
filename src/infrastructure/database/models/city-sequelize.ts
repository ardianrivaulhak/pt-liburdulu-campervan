import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";
import { sequelize } from "../sequelize";

export class City extends Model<
    InferAttributes<City>,
    InferCreationAttributes<City>
> {
    declare id: CreationOptional<string>;
    declare name: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;
    declare deleted_at: CreationOptional<Date>;
}

City.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
    },
    {
        tableName: "cities",
        modelName: "cities",
        underscored: true,
        paranoid: true,
        timestamps: true,
        sequelize,
    }
);
