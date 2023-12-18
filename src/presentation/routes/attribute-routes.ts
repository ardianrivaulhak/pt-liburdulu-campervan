import { Router } from "express";
import { inject, injectable } from "inversify";
import asyncWrap from "../../libs/asyncWrapper";
import { container } from "../../container";
import AttributeController from "../controllers/attribute-controller";
import { TYPES } from "../../types";

@injectable()
export class AttributeRoutes {
    public route = "_attribute";
    AttributeControllerInstance =
        container.get<AttributeController>(AttributeController);

    constructor() {} // private _permissionMiddleware: PermissionMiddleware, // @inject(TYPES.PermissionMiddleware) // @inject(TYPES.AuthMiddleware) private _authMiddleware: AuthMiddleware,
    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            asyncWrap(
                this.AttributeControllerInstance.get.bind(
                    this.AttributeControllerInstance
                )
            )
        );
        router.get(
            `/${this.route}/:attributeId`,
            asyncWrap(
                this.AttributeControllerInstance.show.bind(
                    this.AttributeControllerInstance
                )
            )
        );
        router.put(
            `/${this.route}/:attributeId`,
            asyncWrap(
                this.AttributeControllerInstance.update.bind(
                    this.AttributeControllerInstance
                )
            )
        );

        router.post(
            `/${this.route}`,
            asyncWrap(
                this.AttributeControllerInstance.store.bind(
                    this.AttributeControllerInstance
                )
            )
        );
    }
}
