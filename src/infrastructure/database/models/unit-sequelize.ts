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
import { Galery } from "./galery-sequelize";
import { Destination } from "./destination-sequelize";

export class Unit extends Model<
    InferAttributes<Unit>,
    InferCreationAttributes<Unit>
> {
    declare id: CreationOptional<string>;
    declare name: string;
    declare description: string;
    declare galeries?: NonAttribute<Galery[]>;
    declare destinations?: NonAttribute<Destination[]>;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;
    declare deleted_at: CreationOptional<Date>;
    declare static associations: {
        galeries: Association<Unit, Galery>;
        destinations: Association<Unit, Destination>;
    };
}

Unit.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
    },
    {
        tableName: "units",
        underscored: true,
        paranoid: true,
        timestamps: true,
        sequelize,
    }
);
