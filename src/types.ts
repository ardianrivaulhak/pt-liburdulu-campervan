const TYPES = {
    Logger: Symbol.for("Logger"),
    Database: Symbol.for("Database"),
    Server: Symbol.for("Server"),
    HTTPRouter: Symbol.for("HTTPRouter"),

    // Impelementation Domain Service
    UserRepository: Symbol.for("UserRepository"),
    CityRepository: Symbol.for("CityRepository"),
    DestinationRepository: Symbol.for("DestinationRepository"),
    UnitRepository: Symbol.for("UnitRepository"),
    GaleryRepository: Symbol.for("GaleryRepository"),
    TripRepository: Symbol.for("TripRepository"),
    PickPointRepository: Symbol.for("PickPointRepository"),
    OrderRepository: Symbol.for("OrderRepository"),
    CarRepository: Symbol.for("CarRepository"),
    CartOrderRepository: Symbol.for("CartOrderRepository"),
    PaymentMethodRepository: Symbol.for("PaymentMethodRepository"),
    PaymentDetailRepository: Symbol.for("PaymentDetailRepository"),
    AttributeRepository: Symbol.for("AttributeRepository"),

    // Service Layer
    UserService: Symbol.for("UserService"),
    DataStockService: Symbol.for("DataStockService"),
    CityService: Symbol.for("CityService"),
    DestinationService: Symbol.for("DestinationService"),
    UnitService: Symbol.for("UnitService"),
    GaleryService: Symbol.for("GaleryService"),
    TripService: Symbol.for("TripService"),
    PickPointService: Symbol.for("PickPointService"),
    OrderService: Symbol.for("OrderService"),
    CarService: Symbol.for("CarService"),
    CartOrderService: Symbol.for("CartOrderService"),
    PaymentMethodService: Symbol.for("PaymentMethodService"),
    PaymentDetailService: Symbol.for("PaymentDetailService"),
    AttributeService: Symbol.for("AttributeService"),
};

export { TYPES };
