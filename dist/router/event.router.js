"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRouter = void 0;
const express_1 = require("express");
const event_controller_1 = require("../controller/event.controller");
class EventRouter {
    constructor() {
        this.eventController = new event_controller_1.EventController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.eventController.getEvents);
        this.router.get("/all", this.eventController.getAllEvents);
        this.router.get("/:slug", this.eventController.getEventSlug);
    }
    getRouter() {
        return this.router;
    }
}
exports.EventRouter = EventRouter;
