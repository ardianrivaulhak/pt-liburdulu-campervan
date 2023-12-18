// Core Sequelize Model Import
import { User } from "./user-sequelize";
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
Unit.belongsTo(Galery, {
    foreignKey: "galeryId",
    as: "galeries",
});

Galery.hasMany(Unit, {
    foreignKey: "galeryId",
});

Trip.belongsTo(City, {
    foreignKey: "cityId",
    as: "city",
});

City.hasMany(Trip, {
    foreignKey: "cityId",
});

Trip.belongsTo(Destination, {
    foreignKey: "destinationId",
    as: "destination",
});

Destination.hasMany(Trip, {
    foreignKey: "destinationId",
});

Trip.belongsTo(Unit, {
    foreignKey: "unitId",
    as: "unit",
});

Unit.hasMany(Trip, {
    foreignKey: "unitId",
});

Trip.belongsTo(PickPoint, {
    foreignKey: "pickPointId",
    as: "pickPoint",
});

PickPoint.hasMany(Trip, {
    foreignKey: "pickPointId",
});

// Apps Model Assosiation

// Core Model Export
export * from "./user-sequelize";
export * from "./data-stock-sequelize";
export * from "./galery-sequelize";
export * from "./city-sequelize";
export * from "./unit-sequelize";
export * from "./destination-sequelize";
export * from "./trip-sequelize";

// Apps Model Export
