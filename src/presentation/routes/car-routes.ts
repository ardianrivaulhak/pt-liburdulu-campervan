import { Router } from "express";
import { inject, injectable } from "inversify";
import asyncWrap from "../../libs/asyncWrapper";
import { container } from "../../container";
import CarController from "../controllers/car-controller";
import { TYPES } from "../../types";

@injectable()
export class CarRoutes {
    public route = "_car";
    CarControllerInstance = container.get<CarController>(CarController);

    constructor() {} // private _permissionMiddleware: PermissionMiddleware, // @inject(TYPES.PermissionMiddleware) // @inject(TYPES.AuthMiddleware) private _authMiddleware: AuthMiddleware,
    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            asyncWrap(
                this.CarControllerInstance.get.bind(this.CarControllerInstance)
            )
        );
        router.get(
            `/${this.route}/:carId`,
            asyncWrap(
                this.CarControllerInstance.show.bind(this.CarControllerInstance)
            )
        );
        router.put(
            `/${this.route}/:carId`,
            asyncWrap(
                this.CarControllerInstance.update.bind(
                    this.CarControllerInstance
                )
            )
        );

        router.post(
            `/${this.route}`,
            asyncWrap(
                this.CarControllerInstance.store.bind(
                    this.CarControllerInstance
                )
            )
        );
    }
}
