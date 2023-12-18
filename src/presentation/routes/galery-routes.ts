import { Router } from "express";
import { inject, injectable } from "inversify";
import asyncWrap from "../../libs/asyncWrapper";
import { container } from "../../container";
import GaleryController from "../controllers/galery-controller";
import { TYPES } from "../../types";

@injectable()
export class GaleryRoutes {
    public route = "_galery";
    GaleryControllerInstance =
        container.get<GaleryController>(GaleryController);

    constructor() {} // private _permissionMiddleware: PermissionMiddleware, // @inject(TYPES.PermissionMiddleware) // @inject(TYPES.AuthMiddleware) private _authMiddleware: AuthMiddleware,
    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            asyncWrap(
                this.GaleryControllerInstance.get.bind(
                    this.GaleryControllerInstance
                )
            )
        );
        router.get(
            `/${this.route}/:id`,
            asyncWrap(
                this.GaleryControllerInstance.show.bind(
                    this.GaleryControllerInstance
                )
            )
        );
        router.put(
            `/${this.route}/:id`,
            asyncWrap(
                this.GaleryControllerInstance.update.bind(
                    this.GaleryControllerInstance
                )
            )
        );

        router.post(
            `/${this.route}`,
            asyncWrap(
                this.GaleryControllerInstance.store.bind(
                    this.GaleryControllerInstance
                )
            )
        );
    }
}
