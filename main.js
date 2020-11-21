(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _list_manager_list_manager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-manager/list-manager.component */ "./src/app/list-manager/list-manager.component.ts");



class AppComponent {
    constructor() {
        this.title = 'My To Do List APP';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[1, "app-title"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-list-manager");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome to ", ctx.title, "!\n");
    } }, directives: [_list_manager_list_manager_component__WEBPACK_IMPORTED_MODULE_1__["ListManagerComponent"]], styles: ["h1[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_todo_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/todo-list.service */ "./src/app/services/todo-list.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _input_button_unit_input_button_unit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-button-unit/input-button-unit.component */ "./src/app/input-button-unit/input-button-unit.component.ts");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-item/todo-item.component */ "./src/app/todo-item/todo-item.component.ts");
/* harmony import */ var _list_manager_list_manager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-manager/list-manager.component */ "./src/app/list-manager/list-manager.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_todo_list_service__WEBPACK_IMPORTED_MODULE_2__["TodoListService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _input_button_unit_input_button_unit_component__WEBPACK_IMPORTED_MODULE_4__["InputButtonUnitComponent"],
        _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__["TodoItemComponent"],
        _list_manager_list_manager_component__WEBPACK_IMPORTED_MODULE_6__["ListManagerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _input_button_unit_input_button_unit_component__WEBPACK_IMPORTED_MODULE_4__["InputButtonUnitComponent"],
                    _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__["TodoItemComponent"],
                    _list_manager_list_manager_component__WEBPACK_IMPORTED_MODULE_6__["ListManagerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [_services_todo_list_service__WEBPACK_IMPORTED_MODULE_2__["TodoListService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/input-button-unit/input-button-unit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/input-button-unit/input-button-unit.component.ts ***!
  \******************************************************************/
/*! exports provided: InputButtonUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputButtonUnitComponent", function() { return InputButtonUnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InputButtonUnitComponent {
    constructor() {
        this.title = 'Hello World';
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    changeTitle(newTitle) {
        this.submit.emit(newTitle);
    }
}
InputButtonUnitComponent.ɵfac = function InputButtonUnitComponent_Factory(t) { return new (t || InputButtonUnitComponent)(); };
InputButtonUnitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputButtonUnitComponent, selectors: [["app-input-button-unit"]], outputs: { submit: "submit" }, decls: 4, vars: 1, consts: [[1, "todo-input", 3, "value", "keyup.enter"], ["inputElementRef", ""], [1, "btn", 3, "click"]], template: function InputButtonUnitComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function InputButtonUnitComponent_Template_input_keyup_enter_0_listener($event) { return ctx.changeTitle($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputButtonUnitComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.changeTitle(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.title);
    } }, styles: [".todo-input[_ngcontent-%COMP%] {\n  padding: 4px 10px 4px;\n  font-size: 16px;\n  font-family: \"Lucida Grande\", Verdana, sans-serif;\n  line-height: 20px;\n  border: solid 1px #dddddd;\n  border-radius: 5px;\n  flex-grow: 1;\n}\n\n[_nghost-%COMP%]:not([hidden]) {\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQtYnV0dG9uLXVuaXQvaW5wdXQtYnV0dG9uLXVuaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LWJ1dHRvbi11bml0L2lucHV0LWJ1dHRvbi11bml0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8taW5wdXQge1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHggNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgR3JhbmRlJywgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2RkZGRkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QoOm5vdChbaGlkZGVuXSkpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputButtonUnitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-button-unit',
                templateUrl: './input-button-unit.component.html',
                styleUrls: ['./input-button-unit.component.scss']
            }]
    }], function () { return []; }, { submit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/list-manager/list-manager.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-manager/list-manager.component.ts ***!
  \********************************************************/
/*! exports provided: ListManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListManagerComponent", function() { return ListManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_todo_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/todo-list.service */ "./src/app/services/todo-list.service.ts");
/* harmony import */ var _input_button_unit_input_button_unit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-button-unit/input-button-unit.component */ "./src/app/input-button-unit/input-button-unit.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todo-item/todo-item.component */ "./src/app/todo-item/todo-item.component.ts");






function ListManagerComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-todo-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function ListManagerComponent_li_3_Template_app_todo_item_remove_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeItem($event); })("update", function ListManagerComponent_li_3_Template_app_todo_item_update_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateItem($event.item, $event.changes); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todoItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", todoItem_r1);
} }
class ListManagerComponent {
    constructor(todoListService) {
        this.todoListService = todoListService;
        todoListService.getTodoList();
    }
    ngOnInit() {
        this.todoList = this.todoListService.getTodoList();
    }
    addItem(title) {
        this.todoListService.addItem({ title });
    }
    removeItem(item) {
        this.todoListService.deleteItem(item);
    }
    updateItem(item, changes) {
        this.todoListService.updateItem(item, changes);
    }
}
ListManagerComponent.ɵfac = function ListManagerComponent_Factory(t) { return new (t || ListManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_todo_list_service__WEBPACK_IMPORTED_MODULE_1__["TodoListService"])); };
ListManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListManagerComponent, selectors: [["app-list-manager"]], decls: 4, vars: 1, consts: [[1, "todo-app"], [3, "submit"], [4, "ngFor", "ngForOf"], [3, "item", "remove", "update"]], template: function ListManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-input-button-unit", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ListManagerComponent_Template_app_input_button_unit_submit_1_listener($event) { return ctx.addItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListManagerComponent_li_3_Template, 2, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todoList);
    } }, directives: [_input_button_unit_input_button_unit_component__WEBPACK_IMPORTED_MODULE_2__["InputButtonUnitComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_4__["TodoItemComponent"]], styles: [".todo-app[_ngcontent-%COMP%] {\n  position: relative;\n  width: 400px;\n  padding: 30px 30px 15px;\n  background: white;\n  border: 1px solid;\n  border-color: #dfdcdc #d9d6d6 #ccc;\n  border-radius: 2px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  margin: 20px auto;\n}\n\n.todo-app[_ngcontent-%COMP%]::before, .todo-app[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  height: 4px;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n}\n\n.todo-app[_ngcontent-%COMP%]::after {\n  bottom: -3px;\n  left: 0;\n  right: 0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.todo-app[_ngcontent-%COMP%]::before {\n  bottom: -5px;\n  left: 2px;\n  right: 2px;\n  border-color: #c4c4c4;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1tYW5hZ2VyL2xpc3QtbWFuYWdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFFQSx3Q0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsd0NBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBRUEseUNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtbWFuYWdlci9saXN0LW1hbmFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kby1hcHAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgcGFkZGluZzogMzBweCAzMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGZkY2RjICNkOWQ2ZDYgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnRvZG8tYXBwOjpiZWZvcmUsIC50b2RvLWFwcDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuICBcclxuICAudG9kby1hcHA6OmFmdGVyIHtcclxuICAgIGJvdHRvbTogLTNweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC50b2RvLWFwcDo6YmVmb3JlIHtcclxuICAgIGJvdHRvbTogLTVweDtcclxuICAgIGxlZnQ6IDJweDtcclxuICAgIHJpZ2h0OiAycHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNjNGM0YzQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-manager',
                templateUrl: './list-manager.component.html',
                styleUrls: ['./list-manager.component.scss']
            }]
    }], function () { return [{ type: _services_todo_list_service__WEBPACK_IMPORTED_MODULE_1__["TodoListService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StorageService {
    constructor() { }
    getData(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    setData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/todo-list.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/todo-list.service.ts ***!
  \***********************************************/
/*! exports provided: TodoListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListService", function() { return TodoListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");



const todoListStorageKey = 'Todo_List';
const defaultTodoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
];
class TodoListService {
    constructor(storageService) {
        this.storageService = storageService;
        this.todoList =
            storageService.getData(todoListStorageKey) || defaultTodoList;
    }
    getTodoList() {
        return this.todoList;
    }
    addItem(item) {
        this.todoList.push(item);
        this.saveList();
    }
    updateItem(item, changes) {
        const index = this.todoList.indexOf(item);
        console.log('item', item);
        console.log('changes', changes);
        this.todoList[index] = Object.assign(Object.assign({}, item), changes);
        console.log('this.todoList[index]', this.todoList[index]);
        this.saveList();
    }
    saveList() {
        this.storageService.setData(todoListStorageKey, this.todoList);
    }
    deleteItem(item) {
        const index = this.todoList.indexOf(item);
        this.todoList.splice(index, 1);
        this.saveList();
    }
}
TodoListService.ɵfac = function TodoListService_Factory(t) { return new (t || TodoListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
TodoListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoListService, factory: TodoListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/todo-item/todo-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-item/todo-item.component.ts ***!
  \**************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "todo-complete": a0 }; };
class TodoItemComponent {
    constructor() {
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    completeItem() {
        this.update.emit({
            item: this.item,
            changes: { completed: !this.item.completed }
        });
    }
    removeItem() {
        this.remove.emit(this.item);
    }
}
TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) { return new (t || TodoItemComponent)(); };
TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoItemComponent, selectors: [["app-todo-item"]], inputs: { item: "item" }, outputs: { remove: "remove", update: "update" }, decls: 6, vars: 4, consts: [[1, "todo-item"], ["type", "checkbox", 1, "todo-checkbox", 3, "click"], [1, "todo-title", 3, "ngClass"], [1, "btn", "btn-red", 3, "click"]], template: function TodoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_input_click_1_listener() { return ctx.completeItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_4_listener() { return ctx.removeItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " remove\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.item.completed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.title, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".todo-item[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border-top: solid 1px #ddd;\n  min-height: 30px;\n  line-height: 30px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.todo-checkbox[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin: auto 1ex auto 0;\n}\n\n.todo-title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding-left: 11px;\n}\n\n.todo-complete[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0UsOEJBQUE7QUFDSjs7QUFHQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDSSw2QkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2RkZDtcclxuICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9kby1jaGVja2JveCB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbWFyZ2luOiBhdXRvIDFleCBhdXRvIDA7XHJcbn1cclxuXHJcbi50b2RvLXRpdGxlIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMXB4O1xyXG59XHJcblxyXG4udG9kby1jb21wbGV0ZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-item',
                templateUrl: './todo-item.component.html',
                styleUrls: ['./todo-item.component.scss']
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], remove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ngGirls\todo-list\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map