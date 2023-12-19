import { Router } from "express";
import { inject, injectable } from "inversify";
import asyncWrap from "../../libs/asyncWrapper";
import { container } from "../../container";
import GaleryController from "../controllers/galery-controller";
import { TYPES } from "../../types";
import multer from "multer";
const destinationFolder = "tmp_uploaded_files/galery";

@injectable()
export class GaleryRoutes {
    private upload = multer({
        limits: {
            fileSize: 1024 * 1024 * 5,
        },

        dest: destinationFolder,
    });
    public route = "_galery";

    GaleryControllerInstance =
        container.get<GaleryController>(GaleryController);
    constructor() {}

    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            asyncWrap(
                this.GaleryControllerInstance.getDataTable.bind(
                    this.GaleryControllerInstance
                )
            )
        );
        router.get(
            `/${this.route}/:galeryId`,
            asyncWrap(
                this.GaleryControllerInstance.show.bind(
                    this.GaleryControllerInstance
                )
            )
        );
        router.put(
            `/${this.route}/:galeryId`,
            this.upload.single("imageUrl"),
            asyncWrap(
                this.GaleryControllerInstance.update.bind(
                    this.GaleryControllerInstance
                )
            )
        );

        router.post(
            `/${this.route}`,
            this.upload.single("imageUrl"),
            asyncWrap(
                this.GaleryControllerInstance.store.bind(
                    this.GaleryControllerInstance
                )
            )
        );

        router.delete(
            `/${this.route}/:galeryId`,
            asyncWrap(
                this.GaleryControllerInstance.destroy.bind(
                    this.GaleryControllerInstance
                )
            )
        );
    }
}
