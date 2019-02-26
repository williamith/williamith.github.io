(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-patients-patients-module"],{

/***/ "./src/app/pages/patients/create-patient/create-patient.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/patients/create-patient/create-patient.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/patients/create-patient/create-patient.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/patients/create-patient/create-patient.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-5 shadow rounded\">\n\n  <h1 class=\"bg-dark text-white font-weight-normal m-0 py-2 px-3 rounded-top\">\n    <i class=\"fa fa-user-plus\"></i>&nbsp;&nbsp;Add New Patient\n  </h1>\n\n  <form class=\"m-0 p-3\">\n    <div class=\"form-group row\">\n      <label for=\"firstName\" class=\"col-sm-2 col-form-label\">First Name</label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control\" type=\"text\"\n          placeholder=\"First Name\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"lastName\" class=\"col-sm-2 col-form-label\">Last Name</label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control\" type=\"text\"\n          placeholder=\"Last Name\">\n      </div>\n    </div>\n    <fieldset class=\"form-group\">\n      <div class=\"row\">\n        <legend class=\"col-form-label col-sm-2 pt-0\">Gender</legend>\n        <div class=\"col-sm-10\">\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"option1\" checked>\n            <label class=\"form-check-label\" for=\"gridRadios1\">\n              Male\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"option2\">\n            <label class=\"form-check-label\" for=\"gridRadios2\">\n              Female\n            </label>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n    <div class=\"form-group row\">\n      <label for=\"firstName\" class=\"col-sm-2 col-form-label\">First Name</label>\n      <div class=\"col-sm-10\">\n        <input class=\"form-control\" type=\"text\" placeholder=\"Phone\">\n      </div>\n    </div>\n    <div class=\"btn-group btn-block mt-4\">\n      <button type=\"submit\" class=\"btn btn-primary\">Add Patient</button>\n      <button type=\"submit\" class=\"btn btn-danger\" routerLink=\"../\">Cancel</button>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/patients/create-patient/create-patient.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/patients/create-patient/create-patient.component.ts ***!
  \***************************************************************************/
/*! exports provided: CreatePatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePatientComponent", function() { return CreatePatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreatePatientComponent = /** @class */ (function () {
    function CreatePatientComponent() {
    }
    CreatePatientComponent.prototype.ngOnInit = function () {
    };
    CreatePatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-patient',
            template: __webpack_require__(/*! ./create-patient.component.html */ "./src/app/pages/patients/create-patient/create-patient.component.html"),
            styles: [__webpack_require__(/*! ./create-patient.component.css */ "./src/app/pages/patients/create-patient/create-patient.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreatePatientComponent);
    return CreatePatientComponent;
}());



/***/ }),

/***/ "./src/app/pages/patients/patients-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/patients/patients-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PatientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsRoutingModule", function() { return PatientsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patients.component */ "./src/app/pages/patients/patients.component.ts");
/* harmony import */ var _create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-patient/create-patient.component */ "./src/app/pages/patients/create-patient/create-patient.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _patients_component__WEBPACK_IMPORTED_MODULE_2__["PatientsComponent"] },
    { path: 'new', component: _create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_3__["CreatePatientComponent"] }
];
var PatientsRoutingModule = /** @class */ (function () {
    function PatientsRoutingModule() {
    }
    PatientsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PatientsRoutingModule);
    return PatientsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/patients/patients.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/patients/patients.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-5 shadow rounded\">\n\n  <h1 class=\"bg-dark text-white font-weight-normal m-0 py-2 px-3 rounded-top\">\n    <i class=\"fa fa-id-card\"></i>&nbsp;&nbsp;Patients\n    <a class=\"btn btn-primary float-right border-0 my-1 py-2 px-3\" routerLink=\"new\"><i class=\"fa fa-user-plus\"></i> Add\n      New Patient</a>\n  </h1>\n\n  <table id=\"example\" class=\"table table-responsive-sm table-hover\">\n    <thead class=\"bg-secondary text-white \">\n      <tr>\n        <th class=\"border-0 py-2 px-3\">Last Name</th>\n        <th class=\"border-0 py-2 px-3\">First Name</th>\n        <th class=\"border-0 py-2 px-3\">Patient ID</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let patient of patients\" (click)=\"archivePatient(patient)\">\n        <td class=\"py-2 px-3\">{{patient.lastName}}</td>\n        <td class=\"py-2 px-3\">{{patient.firstName}}</td>\n        <td class=\"py-2 px-3\">{{patient.patientID}}</td>\n      </tr>\n    </tbody>\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/patients/patients.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/patients/patients.component.ts ***!
  \******************************************************/
/*! exports provided: PatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsComponent", function() { return PatientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientsComponent = /** @class */ (function () {
    function PatientsComponent(http) {
        var _this = this;
        this.http = http;
        this.url = 'https://localhost:44389/api/patients';
        http.get(this.url)
            .subscribe(function (response) {
            _this.patients = response.json();
        });
    }
    PatientsComponent.prototype.ngOnInit = function () {
    };
    PatientsComponent.prototype.createPatient = function (input) {
        var patient = {
            firstName: input.value,
            lastName: input.value
        };
        input.value = '';
        this.patients.splice(0, 0, patient);
    };
    PatientsComponent.prototype.archivePatient = function (patient) {
        this.http.patch(this.url + '/' + patient.socialSecurity, JSON.stringify({ IS_DELETED: true }))
            .subscribe(function (response) {
        });
    };
    PatientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patients',
            template: __webpack_require__(/*! ./patients.component.html */ "./src/app/pages/patients/patients.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PatientsComponent);
    return PatientsComponent;
}());



/***/ }),

/***/ "./src/app/pages/patients/patients.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/patients/patients.module.ts ***!
  \***************************************************/
/*! exports provided: PatientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsModule", function() { return PatientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _patients_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patients-routing.module */ "./src/app/pages/patients/patients-routing.module.ts");
/* harmony import */ var _patients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patients.component */ "./src/app/pages/patients/patients.component.ts");
/* harmony import */ var _create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-patient/create-patient.component */ "./src/app/pages/patients/create-patient/create-patient.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PatientsModule = /** @class */ (function () {
    function PatientsModule() {
    }
    PatientsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _patients_routing_module__WEBPACK_IMPORTED_MODULE_2__["PatientsRoutingModule"]
            ],
            declarations: [
                _patients_component__WEBPACK_IMPORTED_MODULE_3__["PatientsComponent"],
                _create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_4__["CreatePatientComponent"]
            ]
        })
    ], PatientsModule);
    return PatientsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-patients-patients-module.js.map