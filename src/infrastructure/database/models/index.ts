// Core Sequelize Model Import
import { rawData } from "./raw-data-sequelize";
import { User } from "./user-sequelize";
import { Machine } from "./machine-sequelize";
import { QrTag } from "./qr-tag-sequelize";
import { MaterialDescription } from "./material-description-sequelize";
import { ProData } from "./pro-data-sequelize";
import { DataStock } from "./data-stock-sequelize";
import { Galery } from "./galery-sequelize";
import { City } from "./city-sequelize";
import { Unit } from "./unit-sequelize";
import { Destination } from "./destination-sequelize";
import { PickPoint } from "./pickPoint-sequelize";
import { Trip } from "./trip-sequelize";

// Apps Sequelize Model Import

(async () => {
    // Core Model Synchronisation
    await User.sync({ alter: { drop: false } });
    await rawData.sync({ alter: { drop: false } });
    await DataStock.sync({ alter: true });
    await Galery.sync({ alter: { drop: true } });
    await City.sync({ alter: { drop: true } });
    await Unit.sync({ alter: { drop: true } });
    await Destination.sync({ alter: { drop: true } });
    await PickPoint.sync({ alter: { drop: true } });
    await Trip.sync({ alter: { drop: true } });

    // Apps Model Synchronisation
})();

// Core Model Assosiation
// User.belongsToMany(Role, {
//   through: UserRole,
//   foreignKey: 'user_id',
//   otherKey: 'role_id',
// })

// Apps Model Assosiation

// Core Model Export
export * from "./user-sequelize";
export * from "./raw-data-sequelize";
export * from "./pro-data-sequelize";
export * from "./machine-sequelize";
export * from "./qr-tag-sequelize";
export * from "./material-description-sequelize";
export * from "./data-stock-sequelize";
export * from "./galery-sequelize";
export * from "./city-sequelize";
export * from "./unit-sequelize";
export * from "./destination-sequelize";
export * from "./trip-sequelize";
// Apps Model Export
