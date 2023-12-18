import { Router } from "express";
import { inject, injectable } from "inversify";
import asyncWrap from "../../libs/asyncWrapper";
import { container } from "../../container";
import CityController from "../controllers/city-controller";
import { TYPES } from "../../types";

@injectable()
export class CityRoutes {
    public route = "_city";
    CityControllerInstance = container.get<CityController>(CityController);

    constructor() {} // private _permissionMiddleware: PermissionMiddleware, // @inject(TYPES.PermissionMiddleware) // @inject(TYPES.AuthMiddleware) private _authMiddleware: AuthMiddleware,
    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            asyncWrap(
                this.CityControllerInstance.get.bind(
                    this.CityControllerInstance
                )
            )
        );
        router.get(
            `/${this.route}/:id`,
            asyncWrap(
                this.CityControllerInstance.show.bind(
                    this.CityControllerInstance
                )
            )
        );
        router.put(
            `/${this.route}/:id`,
            asyncWrap(
                this.CityControllerInstance.update.bind(
                    this.CityControllerInstance
                )
            )
        );

        router.post(
            `/${this.route}`,
            asyncWrap(
                this.CityControllerInstance.store.bind(
                    this.CityControllerInstance
                )
            )
        );
    }
}
