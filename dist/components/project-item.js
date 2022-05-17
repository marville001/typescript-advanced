var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autobind } from "../decorators/autobind.js";
import { Component } from "./base-component.js";
export class ProjectItem extends Component {
    constructor(hostId, project) {
        super("single-project", hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    get persons() {
        if (this.project.people === 1) {
            return "1 person";
        }
        else {
            return `${this.project.people} people`;
        }
    }
    drapStartHandler(event) {
        var _a;
        (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text/plain", this.project.id);
        event.dataTransfer.effectAllowed = "move";
    }
    drapEndHandler(event) {
        console.log(event);
    }
    configure() {
        this.element.addEventListener("dragstart", this.drapStartHandler);
        this.element.addEventListener("dragend", this.drapEndHandler);
    }
    renderContent() {
        this.element.querySelector("h2").textContent = this.project.title;
        this.element.querySelector("h3").textContent =
            this.persons + " assigned";
        this.element.querySelector("p").textContent = this.project.description;
    }
}
__decorate([
    autobind
], ProjectItem.prototype, "drapStartHandler", null);
__decorate([
    autobind
], ProjectItem.prototype, "drapEndHandler", null);
__decorate([
    autobind
], ProjectItem.prototype, "configure", null);
//# sourceMappingURL=project-item.js.map