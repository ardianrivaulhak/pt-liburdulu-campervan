import { Router } from "express";
import { inject, injectable } from "inversify";
import asyncWrap from "../../libs/asyncWrapper";
import { container } from "../../container";
import TripController from "../controllers/trip-controller";
import { TYPES } from "../../types";

@injectable()
export class TripRoutes {
    public route = "_trip";
    TripControllerInstance = container.get<TripController>(TripController);

    constructor() {} // private _permissionMiddleware: PermissionMiddleware, // @inject(TYPES.PermissionMiddleware) // @inject(TYPES.AuthMiddleware) private _authMiddleware: AuthMiddleware,
    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            asyncWrap(
                this.TripControllerInstance.get.bind(
                    this.TripControllerInstance
                )
            )
        );
        router.get(
            `/${this.route}/:tripId`,
            asyncWrap(
                this.TripControllerInstance.show.bind(
                    this.TripControllerInstance
                )
            )
        );
        router.put(
            `/${this.route}/:tripId`,
            asyncWrap(
                this.TripControllerInstance.update.bind(
                    this.TripControllerInstance
                )
            )
        );

        router.post(
            `/${this.route}`,
            asyncWrap(
                this.TripControllerInstance.store.bind(
                    this.TripControllerInstance
                )
            )
        );
    }
}
