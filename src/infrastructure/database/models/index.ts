// Core Sequelize Model Import
import { User } from "./user-sequelize";
import { Galery } from "./galery-sequelize";
import { City } from "./city-sequelize";
import { Unit } from "./unit-sequelize";
import { Destination } from "./destination-sequelize";
import { PickPoint } from "./pickPoint-sequelize";
import { PaymentMethod } from "./paymentMethod-sequelize";

// Apps Sequelize Model Import

(async () => {
    // Core Model Synchronisation
    await User.sync({ alter: { drop: false } });
    await Galery.sync({ alter: { drop: true } });
    await City.sync({ alter: { drop: true } });
    await Unit.sync({ alter: { drop: true } });
    await Destination.sync({ alter: { drop: true } });
    await PickPoint.sync({ alter: { drop: true } });
    await PaymentMethod.sync({ alter: { drop: true } });

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
export * from "./galery-sequelize";
export * from "./city-sequelize";
export * from "./unit-sequelize";
export * from "./destination-sequelize";
export * from "./pickPoint-sequelize";
export * from "./paymentMethod-sequelize";

// Apps Model Export
