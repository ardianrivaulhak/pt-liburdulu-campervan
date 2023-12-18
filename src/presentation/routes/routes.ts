import { Router } from "express";
import { injectable } from "inversify";
import { CityRoutes } from "./city-routes";
import { DestinationRoutes } from "./destination-routes";
import { UnitRoutes } from "./unit-routes";
import { GaleryRoutes } from "./galery-routes";
import { TripRoutes } from "./trip-routes";
import { PickPointRoutes } from "./pickPoint-routes";
import { OrderRoutes } from "./order-routes";
import { CartOurderRoutes } from "./cartOrder-routes";
import { CarRoutes } from "./car-routes";
import { PaymentMethodRoutes } from "./paymentMethod-routes";
import { PaymentDetailRoutes } from "./paymentDetail-routes";
import { AttributeRoutes } from "./attribute-routes";
@injectable()
export class Routes {
    constructor(
        private CityRoutes: CityRoutes,
        private DestinationRoutes: DestinationRoutes,
        private UnitRoutes: UnitRoutes,
        private GaleryRoutes: GaleryRoutes,
        private TripRoutes: TripRoutes,
        private PickPointRoutes: PickPointRoutes,
        private OrderRoutes: OrderRoutes,
        private CartOurderRoutes: CartOurderRoutes,
        private CarRoutes: CarRoutes,
        private PaymentMethodRoutes: PaymentMethodRoutes,
        private PaymentDetailRoutes: PaymentDetailRoutes,
        private AttributeRoutes: AttributeRoutes
    ) {}

    public setRoutes(router: Router) {
        this.CityRoutes.setRoutes(router);
        this.DestinationRoutes.setRoutes(router);
        this.UnitRoutes.setRoutes(router);
        this.GaleryRoutes.setRoutes(router);
        this.TripRoutes.setRoutes(router);
        this.PickPointRoutes.setRoutes(router);
        this.OrderRoutes.setRoutes(router);
        this.CartOurderRoutes.setRoutes(router);
        this.CarRoutes.setRoutes(router);
        this.PaymentMethodRoutes.setRoutes(router);
        this.PaymentDetailRoutes.setRoutes(router);
        this.AttributeRoutes.setRoutes(router);
    }
}
