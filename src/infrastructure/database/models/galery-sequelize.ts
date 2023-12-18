import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";
import { sequelize } from "../sequelize";

export class Galery extends Model<
    InferAttributes<Galery>,
    InferCreationAttributes<Galery>
> {
    declare id: CreationOptional<string>;
    declare imageUrl: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;
    declare deleted_at: CreationOptional<Date>;
}

Galery.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        imageUrl: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
    },
    {
        tableName: "galeries",
        underscored: true,
        paranoid: true,
        timestamps: true,
        sequelize,
    }
);
