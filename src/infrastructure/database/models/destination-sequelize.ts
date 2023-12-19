import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";
import { sequelize } from "../sequelize";

export class Destination extends Model<
    InferAttributes<Destination>,
    InferCreationAttributes<Destination>
> {
    declare id: CreationOptional<string>;
    declare name: string;
    declare unitId: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;
    declare deleted_at: CreationOptional<Date>;
}

Destination.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        unitId: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
    },
    {
        tableName: "destinations",
        modelName: "destinations",
        underscored: true,
        paranoid: true,
        timestamps: true,
        sequelize,
    }
);
