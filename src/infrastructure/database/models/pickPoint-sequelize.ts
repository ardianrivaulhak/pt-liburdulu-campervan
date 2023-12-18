import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";
import { sequelize } from "../sequelize";

export class PickPoint extends Model<
    InferAttributes<PickPoint>,
    InferCreationAttributes<PickPoint>
> {
    declare id: CreationOptional<string>;
    declare name: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;
    declare deleted_at: CreationOptional<Date>;
}

PickPoint.init(
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
        tableName: "pickPoints",
        modelName: "pickPoints",
        underscored: true,
        paranoid: true,
        timestamps: true,
        sequelize,
    }
);
