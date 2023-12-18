import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";

// Routes
import { Routes } from "@/presentation/routes/routes";
import { CityRoutes } from "./presentation/routes/city-routes";
import { DestinationRoutes } from "./presentation/routes/destination-routes";
import { UnitRoutes } from "./presentation/routes/unit-routes";
import { GaleryRoutes } from "./presentation/routes/galery-routes";
import { TripRoutes } from "./presentation/routes/trip-routes";
import { PickPointRoutes } from "./presentation/routes/pickPoint-routes";
import { OrderRoutes } from "./presentation/routes/order-routes";
import { CarRoutes } from "./presentation/routes/car-routes";
import { CartOurderRoutes } from "./presentation/routes/cartOrder-routes";
import { PaymentMethodRoutes } from "./presentation/routes/paymentMethod-routes";
import { PaymentDetailRoutes } from "./presentation/routes/paymentDetail-routes";
import { AttributeRoutes } from "./presentation/routes/attribute-routes";

// Domain Repository
import { UserRepository } from "@/domain/service/user-repository";
import { DataStockRepository } from "@/domain/service/data-stock-repository";
import { RawDataRepository } from "@/domain/service/raw-data-repository";
import { GeneralDashboardRepository } from "@/domain/service/general-dashboard-repository";
import { CityRepository } from "./domain/service/city-repository";
import { DestinationRepository } from "./domain/service/destination-repository";
import { UnitRepository } from "./domain/service/unit-repository";
import { GaleryRepository } from "./domain/service/galery-repository";
import { TripRepository } from "./domain/service/trip-repository";
import { PickPointRepository } from "./domain/service/pickPoint-repository";
import { OrderRepository } from "./domain/service/order-repository";
import { CarRepository } from "./domain/service/car-repository";
import { CartOrderRepository } from "./domain/service/cartOrder-repository";
import { PaymentMethodRepository } from "./domain/service/paymentMethod-repository";
import { PaymentDetailRepository } from "./domain/service/paymentDetail-repository";
import { AttributeRepository } from "./domain/service/attribute-repository";

// Domain Repository / Infrastructur implementation
import { UserSequelizeRepository } from "@/persistence/repository/user-sequelize-repository";
import { GeneralDashboardSequelizeRepository } from "@/persistence/repository/general-dashboard-sequelize-repository";
import { DataStockSequelizeRepository } from "@/persistence/repository/data-stock-sequelize-repository";
import { RawDataSequelizeRepository } from "@/persistence/repository/raw-data-sequelize-repository";
import { CitySequelizeRepository } from "./persistence/repository/city-sequelize-repository";
import { DestinationSequelizeRepository } from "./persistence/repository/destination-sequelize-repository";
import { UnitSequelizeRepository } from "./persistence/repository/unit-sequelize-repository";
import { GalerySequelizeRepository } from "./persistence/repository/galery-sequelize-repository";
import { TripSequelizeRepository } from "./persistence/repository/trip-sequelize-repository";
import { PickPointSequelizeRepository } from "./persistence/repository/pickPoint-sequelize-repository";
import { OrderSequelizeRepository } from "./persistence/repository/order-sequelize-repository";
import { CarSequelizeRepository } from "./persistence/repository/car-sequelize-repository";
import { CartOrderSequelizeRepository } from "./persistence/repository/cartOrder-sequelize-repository";
import { PaymentMethodSequelizeRepository } from "./persistence/repository/paymentMethod-sequelize-repository";
import { PaymentDetailSequelizeRepository } from "./persistence/repository/paymentDetail-sequelize-repository";
import { AttributeSequelizeRepository } from "./persistence/repository/attribute-sequelize-repository";

// Service Implementation
import { CityService } from "./services/city-service";
import { DestinationService } from "./services/destination-service";
import { UnitService } from "./services/unit-service";
import { GaleryService } from "./services/galery-service";
import { TripService } from "./services/trip-service";
import { PickPointService } from "./services/pickPoint-service";
import { OrderService } from "./services/order-service";
import { CarService } from "./services/car-service";
import { CartOrderService } from "./services/cartOrder-service";
import { PaymentMethodService } from "./services/paymentMethod-service";
import { PaymentDetailService } from "./services/paymentDetail-service";
import { AttributeService } from "./services/attribute-service";

// Controller
import CityController from "@/presentation/controllers/city-controller";
import DestinationController from "@/presentation/controllers/destination-controller";
import UnitController from "./presentation/controllers/unit-controller";
import GaleryController from "./presentation/controllers/galery-controller";
import TripController from "./presentation/controllers/trip-controller";
import PickPointController from "./presentation/controllers/pickPoint-controller";
import OrderController from "./presentation/controllers/order-controller";
import CarController from "./presentation/controllers/car-controller";
import CartOrderController from "./presentation/controllers/cartOrder-controller";
import PaymentMethodController from "./presentation/controllers/paymentMethod-controller";
import PaymentDetailController from "./presentation/controllers/paymentDetail-controller";
import AttributeController from "./presentation/controllers/attribute-controller";

//Middleware
// import { MobileAuthMiddleware } from "./presentation/middleware/auth-middleware";

// Bootstrap / kernel
import { IServer, Server } from "@/presentation/server";

const container = new Container();

// Kernel Bootstrap
container.bind<IServer>(TYPES.Server).to(Server).inSingletonScope();

// Router
container.bind<Routes>(Routes).toSelf().inSingletonScope();

container.bind<CityRoutes>(CityRoutes).toSelf().inSingletonScope();
container
    .bind<DestinationRoutes>(DestinationRoutes)
    .toSelf()
    .inSingletonScope();
container.bind<UnitRoutes>(UnitRoutes).toSelf().inSingletonScope();
container.bind<GaleryRoutes>(GaleryRoutes).toSelf().inSingletonScope();
container.bind<TripRoutes>(TripRoutes).toSelf().inSingletonScope();
container.bind<PickPointRoutes>(PickPointRoutes).toSelf().inSingletonScope();
container.bind<OrderRoutes>(OrderRoutes).toSelf().inSingletonScope();
container.bind<CarRoutes>(CarRoutes).toSelf().inSingletonScope();
container.bind<CartOurderRoutes>(CartOurderRoutes).toSelf().inSingletonScope();
container
    .bind<PaymentMethodRoutes>(PaymentMethodRoutes)
    .toSelf()
    .inSingletonScope();
container
    .bind<PaymentDetailRoutes>(PaymentDetailRoutes)
    .toSelf()
    .inSingletonScope();
container.bind<AttributeRoutes>(AttributeRoutes).toSelf().inSingletonScope();

// Service Layer
// Mobile Service

// Web Admin Service
container.bind(TYPES.CityService).to(CityService);
container.bind(TYPES.DestinationService).to(DestinationService);
container.bind(TYPES.UnitService).to(UnitService);
container.bind(TYPES.GaleryService).to(GaleryService);
container.bind(TYPES.TripService).to(TripService);
container.bind(TYPES.PickPointService).to(PickPointService);
container.bind(TYPES.OrderService).to(OrderService);
container.bind(TYPES.CarService).to(CarService);
container.bind(TYPES.CartOrderService).to(CartOrderService);
container.bind(TYPES.PaymentMethodService).to(PaymentMethodService);
container.bind(TYPES.PaymentDetailService).to(PaymentDetailService);
container.bind(TYPES.AttributeService).to(AttributeService);

// Controller
container.bind(CityController).toSelf();
container.bind(DestinationController).toSelf();
container.bind(UnitController).toSelf();
container.bind(GaleryController).toSelf();
container.bind(TripController).toSelf();
container.bind(PickPointController).toSelf();
container.bind(OrderController).toSelf();
container.bind(CarController).toSelf();
container.bind(CartOrderController).toSelf();
container.bind(PaymentDetailController).toSelf();
container.bind(PaymentMethodController).toSelf();
container.bind(AttributeController).toSelf();

// Middleware
// container.bind(MobileAuthMiddleware).toSelf();

// implement infrastructur
container
    .bind<UserRepository>(TYPES.UserRepository)
    .to(UserSequelizeRepository);
container
    .bind<RawDataRepository>(TYPES.RawDataRepository)
    .to(RawDataSequelizeRepository);
container
    .bind<GeneralDashboardRepository>(TYPES.GeneralDashboardRepository)
    .to(GeneralDashboardSequelizeRepository);
container
    .bind<DataStockRepository>(TYPES.DataStockRepository)
    .to(DataStockSequelizeRepository);
container
    .bind<RawDataRepository>(TYPES.RawDataRepository)
    .to(RawDataSequelizeRepository);
container
    .bind<CityRepository>(TYPES.CityRepository)
    .to(CitySequelizeRepository);
container
    .bind<DestinationRepository>(TYPES.DestinationRepository)
    .to(DestinationSequelizeRepository);
container
    .bind<UnitRepository>(TYPES.UnitRepository)
    .to(UnitSequelizeRepository);
container
    .bind<GaleryRepository>(TYPES.GaleryRepository)
    .to(GalerySequelizeRepository);
container
    .bind<TripRepository>(TYPES.TripRepository)
    .to(TripSequelizeRepository);
container
    .bind<PickPointRepository>(TYPES.PickPointRepository)
    .to(PickPointSequelizeRepository);
container
    .bind<OrderRepository>(TYPES.OrderRepository)
    .to(OrderSequelizeRepository);
container.bind<CarRepository>(TYPES.CarRepository).to(CarSequelizeRepository);
container
    .bind<CartOrderRepository>(TYPES.CartOrderRepository)
    .to(CartOrderSequelizeRepository);
container
    .bind<PaymentDetailRepository>(TYPES.PaymentDetailRepository)
    .to(PaymentDetailSequelizeRepository);
container
    .bind<PaymentMethodRepository>(TYPES.PaymentMethodRepository)
    .to(PaymentMethodSequelizeRepository);
container
    .bind<AttributeRepository>(TYPES.AttributeRepository)
    .to(AttributeSequelizeRepository);

export { container };
