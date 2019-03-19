(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-patients-patients-module"],{

/***/ "./src/app/pages/patients/patients-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/patients/patients-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PatientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsRoutingModule", function() { return PatientsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_all_patients_view_all_patients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-all-patients/view-all-patients.component */ "./src/app/pages/patients/view-all-patients/view-all-patients.component.ts");
/* harmony import */ var _view_all_patients_create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-all-patients/create-patient/create-patient.component */ "./src/app/pages/patients/view-all-patients/create-patient/create-patient.component.ts");
/* harmony import */ var _view_all_patients_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-all-patients/patient-profile/patient-profile.component */ "./src/app/pages/patients/view-all-patients/patient-profile/patient-profile.component.ts");
/* harmony import */ var _view_all_patients_patient_profile_create_patient_lab_create_patient_lab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-all-patients/patient-profile/create-patient-lab/create-patient-lab.component */ "./src/app/pages/patients/view-all-patients/patient-profile/create-patient-lab/create-patient-lab.component.ts");







var routes = [
    { path: '', component: _view_all_patients_view_all_patients_component__WEBPACK_IMPORTED_MODULE_3__["ViewAllPatientsComponent"] },
    { path: 'new', component: _view_all_patients_create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_4__["CreatePatientComponent"] },
    { path: 'profile/lab', component: _view_all_patients_patient_profile_create_patient_lab_create_patient_lab_component__WEBPACK_IMPORTED_MODULE_6__["CreatePatientLabComponent"] },
    { path: 'profile', component: _view_all_patients_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_5__["PatientProfileComponent"] }
];
var PatientsRoutingModule = /** @class */ (function () {
    function PatientsRoutingModule() {
    }
    PatientsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PatientsRoutingModule);
    return PatientsRoutingModule;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _patients_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patients-routing.module */ "./src/app/pages/patients/patients-routing.module.ts");
/* harmony import */ var _view_all_patients_view_all_patients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-all-patients/view-all-patients.component */ "./src/app/pages/patients/view-all-patients/view-all-patients.component.ts");
/* harmony import */ var _view_all_patients_create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-all-patients/create-patient/create-patient.component */ "./src/app/pages/patients/view-all-patients/create-patient/create-patient.component.ts");
/* harmony import */ var _view_all_patients_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-all-patients/patient-profile/patient-profile.component */ "./src/app/pages/patients/view-all-patients/patient-profile/patient-profile.component.ts");
/* harmony import */ var _view_all_patients_patient_profile_create_patient_lab_create_patient_lab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-all-patients/patient-profile/create-patient-lab/create-patient-lab.component */ "./src/app/pages/patients/view-all-patients/patient-profile/create-patient-lab/create-patient-lab.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var PatientsModule = /** @class */ (function () {
    function PatientsModule() {
    }
    PatientsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _patients_routing_module__WEBPACK_IMPORTED_MODULE_4__["PatientsRoutingModule"],
                _shared_material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            declarations: [
                _view_all_patients_view_all_patients_component__WEBPACK_IMPORTED_MODULE_5__["ViewAllPatientsComponent"],
                _view_all_patients_create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_6__["CreatePatientComponent"],
                _view_all_patients_patient_profile_patient_profile_component__WEBPACK_IMPORTED_MODULE_7__["PatientProfileComponent"],
                _view_all_patients_patient_profile_create_patient_lab_create_patient_lab_component__WEBPACK_IMPORTED_MODULE_8__["CreatePatientLabComponent"]
            ]
        })
    ], PatientsModule);
    return PatientsModule;
}());



/***/ }),

/***/ "./src/app/pages/patients/view-all-patients/create-patient/create-patient.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/patients/view-all-patients/create-patient/create-patient.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    font-size: 0.9em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudHMvdmlldy1hbGwtcGF0aWVudHMvY3JlYXRlLXBhdGllbnQvY3JlYXRlLXBhdGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnRzL3ZpZXctYWxsLXBhdGllbnRzL2NyZWF0ZS1wYXRpZW50L2NyZWF0ZS1wYXRpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/patients/view-all-patients/create-patient/create-patient.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/patients/view-all-patients/create-patient/create-patient.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  <i class=\"fas fa-users d-inline-block mr-3\"></i>New Patient\n  <div class=\"d-inline-block float-right\">\n    <button mat-raised-button routerLink=\"../\">\n      <i class=\"fas fa-arrow-left mr-3\"></i>Patients</button>\n  </div>\n</h1>\n\n\n<form #input=\"ngForm\" (ngSubmit)=\"createPatient()\">\n  <mat-form-field appearance=\"outline\" class=\"mr-3\">\n    <mat-label>First Name</mat-label>\n    <input matInput class=\"mr-3\" type=\"text\" name=\"firstName\" [(ngModel)]=\"patient.firstName\">\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\" class=\"mr-3\">\n    <mat-label>Last Name</mat-label>\n    <input matInput class=\"mr-3\" type=\"text\" name=\"lastName\" [(ngModel)]=\"patient.lastName\">\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\" class=\"mr-3\">\n    <mat-label>Patient ID</mat-label>\n    <input matInput class=\"mr-3\" type=\"text\" name=\"patientId\" [(ngModel)]=\"patient.patientId\">\n  </mat-form-field>\n  <button class=\"btn-block\" type=\"submit\" mat-raised-button color=\"primary\">\n    <i class=\"fas fa-user-plus mr-3\"></i>Create Patient</button>\n</form>"

/***/ }),

/***/ "./src/app/pages/patients/view-all-patients/create-patient/create-patient.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/patients/view-all-patients/create-patient/create-patient.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreatePatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePatientComponent", function() { return CreatePatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var CreatePatientComponent = /** @class */ (function () {
    function CreatePatientComponent(http) {
        this.http = http;
        this.patient = {
            patientId: '',
            firstName: '',
            lastName: '',
            isHidden: false
        };
        this.url = 'http://localhost:44300/api/patients';
    }
    CreatePatientComponent.prototype.ngOnInit = function () {
    };
    CreatePatientComponent.prototype.createPatient = function () {
        this.http.post(this.url, this.patient)
            .subscribe(function (response) {
            console.log(response.json());
        });
    };
    CreatePatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-patient',
            template: __webpack_require__(/*! ./create-patient.component.html */ "./src/app/pages/patients/view-all-patients/create-patient/create-patient.component.html"),
            styles: [__webpack_require__(/*! ./create-patient.component.css */ "./src/app/pages/patients/view-all-patients/create-patient/create-patient.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], CreatePatientComponent);
    return CreatePatientComponent;
}());



/***/ }),

/***/ "./src/app/pages/patients/view-all-patients/patient-profile/create-patient-lab/create-patient-lab.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/patients/view-all-patients/patient-profile/create-patient-lab/create-patient-lab.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    font-size: 0.9em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudHMvdmlldy1hbGwtcGF0aWVudHMvcGF0aWVudC1wcm9maWxlL2NyZWF0ZS1wYXRpZW50LWxhYi9jcmVhdGUtcGF0aWVudC1sYWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnRzL3ZpZXctYWxsLXBhdGllbnRzL3BhdGllbnQtcHJvZmlsZS9jcmVhdGUtcGF0aWVudC1sYWIvY3JlYXRlLXBhdGllbnQtbGFiLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/patients/view-all-patients/patient-profile/create-patient-lab/create-patient-lab.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/patients/view-all-patients/patient-profile/create-patient-lab/create-patient-lab.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  <i class=\"fas fa-user mr-3\"></i>{{patient.lastName}}, {{patient.firstName}}\n  <button mat-raised-button class=\"float-right\" routerLink=\"../\">\n    <i class=\"fas fa-arrow-left mr-3\"></i>Patient Profile</button>\n</h1>\n\n\n<table class=\"table table-hover\">\n  <thead>\n    <tr>\n      <th class=\"mat-subheading-2\">Type</th>\n      <th class=\"mat-subheading-2\">Value</th>\n      <th class=\"mat-subheading-2\">History</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let labType of labTypes; let i = index\">\n      <td>{{labType.labType}}</td>\n      <td>\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Enter Lab Value</mat-label>\n          <input matInput type=\"number\" name=\"labValue\" (click)=\"initializeLabs()\" (keyup)=\"onValueChanged(i, $event)\">\n        </mat-form-field>\n      </td>\n      <td>View Lab History</td>\n    </tr>\n  </tbody>\n</table>\n\n<p>\n  <button mat-raised-button color=\"primary\" class=\"btn-block\" (click)=\"postLabs()\">\n    <i class=\"fas fa-clipboard-check mr-3\"></i>Create Labs</button>\n</p>"

/***/ }),

/***/ "./src/app/pages/patients/view-all-patients/patient-profile/create-patient-lab/create-patient-lab.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/patients/view-all-patients/patient-profile/create-patient-lab/create-patient-lab.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: CreatePatientLabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePatientLabComponent", function() { return CreatePatientLabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_current_patient_current_patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../shared/services/current-patient/current-patient.service */ "./src/app/shared/services/current-patient/current-patient.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_get_all_lab_types_get_all_lab_types_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/get-all-lab-types/get-all-lab-types.service */ "./src/app/shared/services/get-all-lab-types/get-all-lab-types.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");





var CreatePatientLabComponent = /** @class */ (function () {
    function CreatePatientLabComponent(http, currentPatientService, getAllLabTypesService) {
        this.http = http;
        this.currentPatientService = currentPatientService;
        this.getAllLabTypesService = getAllLabTypesService;
        this.labTypes = [];
        this.labs = [];
        this.labsInitialized = false;
        this.url = 'http://localhost:44400/api/labscollection';
    }
    CreatePatientLabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patient = this.currentPatientService.getCurrentPatient();
        this.getAllLabTypesService.getAllLabTypes()
            .subscribe(function (response) {
            _this.labTypes = response.json();
        });
    };
    CreatePatientLabComponent.prototype.initializeLabs = function () {
        var todayDate = new Date();
        var todayDateISO = todayDate.toISOString();
        if (this.labsInitialized === false) {
            for (var index = 0; index < this.labTypes.length; index++) {
                this.labs[index] = {
                    patientId: this.patient.patientId,
                    labType: this.labTypes[index].labType,
                    labValue: 0,
                    date: todayDateISO,
                    isHidden: false
                };
            }
            ;
            this.labsInitialized = true;
        }
    };
    CreatePatientLabComponent.prototype.onValueChanged = function (index, event) {
        this.labs[index].labValue = parseFloat(event.target.value);
    };
    CreatePatientLabComponent.prototype.postLabs = function () {
        for (var index = 0; index < this.labs.length; index++) {
            if (this.labs[index].labValue > 0) {
                this.http.post(this.url, this.labs[index])
                    .subscribe(function (response) {
                    console.log(response.json());
                });
            }
        }
    };
    CreatePatientLabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'create-patient-lab',
            template: __webpack_require__(/*! ./create-patient-lab.component.html */ "./src/app/pages/patients/view-all-patients/patient-profile/create-patient-lab/create-patient-lab.component.html"),
            styles: [__webpack_require__(/*! ./create-patient-lab.component.css */ "./src/app/pages/patients/view-all-patients/patient-profile/create-patient-lab/create-patient-lab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _shared_services_current_patient_current_patient_service__WEBPACK_IMPORTED_MODULE_1__["CurrentPatientService"],
            src_app_shared_services_get_all_lab_types_get_all_lab_types_service__WEBPACK_IMPORTED_MODULE_3__["GetAllLabTypesService"]])
    ], CreatePatientLabComponent);
    return CreatePatientLabComponent;
}());



/***/ }),

/***/ "./src/app/pages/patients/view-all-patients/patient-profile/patient-profile.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/patients/view-all-patients/patient-profile/patient-profile.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnRzL3ZpZXctYWxsLXBhdGllbnRzL3BhdGllbnQtcHJvZmlsZS9wYXRpZW50LXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/patients/view-all-patients/patient-profile/patient-profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/patients/view-all-patients/patient-profile/patient-profile.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  <i class=\"fas fa-user mr-3\"></i>{{patient.lastName}}, {{patient.firstName}}\r\n  <div class=\"btn-group float-right\">\r\n    <button mat-raised-button class=\"mr-3\" routerLink=\"../\">\r\n      <i class=\"fas fa-arrow-left mr-3\"></i>Patients</button>\r\n    <button *ngIf=\"isVisible\" mat-raised-button class=\"mr-3\" (click)=\"isVisible = !isVisible\">\r\n      <i class=\"fas fa-edit mr-3\"></i>Edit Past Labs<Label></Label></button>\r\n    <button *ngIf=\"!isVisible\" mat-raised-button class=\"mr-3\" (click)=\"isVisible = !isVisible\">\r\n      <i class=\"fas fa-user mr-3\"></i>Patient Profile<Label></Label></button>\r\n    <button mat-raised-button color=\"primary\" routerLink=\"lab\">\r\n      <i class=\"fas fa-vial mr-3\"></i>Add Labs<Label></Label></button>\r\n  </div>\r\n</h1>\r\n\r\n<table *ngIf=\"isVisible\" class=\"table table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th class=\"mat-subheading-2\">Type</th>\r\n      <th class=\"mat-subheading-2\">Value</th>\r\n      <th class=\"mat-subheading-2\">Date</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let lab of labs\">\r\n      <td>{{lab.labType}}</td>\r\n      <td>{{lab.labValue}}</td>\r\n      <td>{{lab.date | date: 'MM/dd/yyyy'}}<br>{{lab.date | date: 'hh:mm aa'}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<table *ngIf=\"!isVisible\" class=\"table table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th class=\"mat-subheading-2\">Type</th>\r\n      <th class=\"mat-subheading-2\">Value</th>\r\n      <th class=\"mat-subheading-2\">Date</th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let lab of labs; let i = index\">\r\n      <td>{{lab.labType}}</td>\r\n      <td>{{lab.labValue}}</td>\r\n      <td>{{lab.date | date: 'MM/dd/yyyy'}}<br>{{lab.date | date: 'hh:mm aa'}}</td>\r\n      <td>\r\n        <button mat-raised-button color=\"warn\" (click)=\"softDeleteLab(i)\">\r\n          <i class=\"fas fa-times\"></i><Label></Label></button></td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/pages/patients/view-all-patients/patient-profile/patient-profile.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/patients/view-all-patients/patient-profile/patient-profile.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PatientProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientProfileComponent", function() { return PatientProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_get_patient_labs_get_patient_labs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/get-patient-labs/get-patient-labs.service */ "./src/app/shared/services/get-patient-labs/get-patient-labs.service.ts");
/* harmony import */ var src_app_shared_services_current_patient_current_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/current-patient/current-patient.service */ "./src/app/shared/services/current-patient/current-patient.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");





var PatientProfileComponent = /** @class */ (function () {
    function PatientProfileComponent(currentPatientService, getPatientLabsService, http) {
        this.currentPatientService = currentPatientService;
        this.getPatientLabsService = getPatientLabsService;
        this.http = http;
        this.isVisible = true;
        this.url = 'http://localhost:44400/api/labscollection';
    }
    PatientProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patient = this.currentPatientService.getCurrentPatient();
        this.getPatientLabsService.getPatientLabs(this.patient.patientId)
            .subscribe(function (response) {
            _this.labs = response.json();
        });
    };
    PatientProfileComponent.prototype.softDeleteLab = function (index) {
        this.labs[index].labValue = 123;
        this.http.put(this.url + '/' + this.labs[index].id, this.labs[index])
            .subscribe(function (response) {
            console.log(response.json());
        });
    };
    PatientProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'patient-profile',
            template: __webpack_require__(/*! ./patient-profile.component.html */ "./src/app/pages/patients/view-all-patients/patient-profile/patient-profile.component.html"),
            styles: [__webpack_require__(/*! ./patient-profile.component.css */ "./src/app/pages/patients/view-all-patients/patient-profile/patient-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_current_patient_current_patient_service__WEBPACK_IMPORTED_MODULE_3__["CurrentPatientService"],
            src_app_shared_services_get_patient_labs_get_patient_labs_service__WEBPACK_IMPORTED_MODULE_2__["GetPatientLabsService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], PatientProfileComponent);
    return PatientProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/patients/view-all-patients/view-all-patients.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/patients/view-all-patients/view-all-patients.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnRzL3ZpZXctYWxsLXBhdGllbnRzL3ZpZXctYWxsLXBhdGllbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/patients/view-all-patients/view-all-patients.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/patients/view-all-patients/view-all-patients.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  <i class=\"fas fa-users d-inline-block mr-3\"></i>Patients\r\n  <div class=\"d-inline-block float-right\">\r\n    <button mat-raised-button routerLink=\"../\" class=\"mr-3\">\r\n      <i class=\"fas fa-arrow-left mr-3\"></i>Overview</button>\r\n    <button mat-raised-button color=\"primary\" routerLink=\"new\">\r\n      <i class=\"fas fa-user-plus mr-3\"></i>New Patient</button>\r\n  </div>\r\n</h1>\r\n\r\n<table class=\"table table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th class=\"mat-subheading-2\">Last Name</th>\r\n      <th class=\"mat-subheading-2\">First Name</th>\r\n      <th class=\"mat-subheading-2\">Patient Id</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let patient of patients\" routerLink=\"profile\" (click)=\"patientSelected(patient)\">\r\n      <td>{{patient.lastName}}</td>\r\n      <td>{{patient.firstName}}</td>\r\n      <td>{{patient.patientId}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/pages/patients/view-all-patients/view-all-patients.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/patients/view-all-patients/view-all-patients.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewAllPatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllPatientsComponent", function() { return ViewAllPatientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_current_patient_current_patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/current-patient/current-patient.service */ "./src/app/shared/services/current-patient/current-patient.service.ts");
/* harmony import */ var _shared_services_view_all_patients_view_all_patients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/view-all-patients/view-all-patients.service */ "./src/app/shared/services/view-all-patients/view-all-patients.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ViewAllPatientsComponent = /** @class */ (function () {
    function ViewAllPatientsComponent(viewAllPatientsService, currentPatientService) {
        this.viewAllPatientsService = viewAllPatientsService;
        this.currentPatientService = currentPatientService;
    }
    ViewAllPatientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewAllPatientsService.getAllPatients()
            .subscribe(function (response) {
            _this.patients = response.json();
        });
    };
    ViewAllPatientsComponent.prototype.patientSelected = function (patient) {
        this.currentPatientService.setCurrentPatient(patient);
    };
    ViewAllPatientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'view-all-patients',
            template: __webpack_require__(/*! ./view-all-patients.component.html */ "./src/app/pages/patients/view-all-patients/view-all-patients.component.html"),
            styles: [__webpack_require__(/*! ./view-all-patients.component.css */ "./src/app/pages/patients/view-all-patients/view-all-patients.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_view_all_patients_view_all_patients_service__WEBPACK_IMPORTED_MODULE_2__["ViewAllPatientsService"],
            _shared_services_current_patient_current_patient_service__WEBPACK_IMPORTED_MODULE_1__["CurrentPatientService"]])
    ], ViewAllPatientsComponent);
    return ViewAllPatientsComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/current-patient/current-patient.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/services/current-patient/current-patient.service.ts ***!
  \****************************************************************************/
/*! exports provided: CurrentPatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentPatientService", function() { return CurrentPatientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CurrentPatientService = /** @class */ (function () {
    function CurrentPatientService() {
        this.currentPatient = {};
    }
    CurrentPatientService.prototype.setCurrentPatient = function (patient) {
        this.currentPatient = patient;
    };
    CurrentPatientService.prototype.getCurrentPatient = function () {
        return this.currentPatient;
    };
    CurrentPatientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CurrentPatientService);
    return CurrentPatientService;
}());



/***/ }),

/***/ "./src/app/shared/services/get-all-lab-types/get-all-lab-types.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/services/get-all-lab-types/get-all-lab-types.service.ts ***!
  \********************************************************************************/
/*! exports provided: GetAllLabTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllLabTypesService", function() { return GetAllLabTypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var GetAllLabTypesService = /** @class */ (function () {
    function GetAllLabTypesService(http) {
        this.http = http;
        this.url = 'http://localhost:44400/api/labstype';
    }
    GetAllLabTypesService.prototype.getAllLabTypes = function () {
        return this.http.get(this.url);
    };
    GetAllLabTypesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GetAllLabTypesService);
    return GetAllLabTypesService;
}());



/***/ }),

/***/ "./src/app/shared/services/get-patient-labs/get-patient-labs.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/services/get-patient-labs/get-patient-labs.service.ts ***!
  \******************************************************************************/
/*! exports provided: GetPatientLabsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPatientLabsService", function() { return GetPatientLabsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _current_patient_current_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current-patient/current-patient.service */ "./src/app/shared/services/current-patient/current-patient.service.ts");




var GetPatientLabsService = /** @class */ (function () {
    function GetPatientLabsService(http, currentPatientService) {
        this.http = http;
        this.currentPatientService = currentPatientService;
        this.currentPatient = this.currentPatientService.getCurrentPatient();
        this.url = 'http://localhost:44400/api/labscollection';
    }
    GetPatientLabsService.prototype.getPatientLabs = function (patientId) {
        console.log(this.http.get(this.url + '/' + patientId));
        return this.http.get(this.url + '/' + patientId);
    };
    GetPatientLabsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _current_patient_current_patient_service__WEBPACK_IMPORTED_MODULE_3__["CurrentPatientService"]])
    ], GetPatientLabsService);
    return GetPatientLabsService;
}());



/***/ }),

/***/ "./src/app/shared/services/view-all-patients/view-all-patients.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/services/view-all-patients/view-all-patients.service.ts ***!
  \********************************************************************************/
/*! exports provided: ViewAllPatientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllPatientsService", function() { return ViewAllPatientsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var ViewAllPatientsService = /** @class */ (function () {
    function ViewAllPatientsService(http) {
        this.http = http;
        this.url = 'http://localhost:44300/api/patients';
    }
    ViewAllPatientsService.prototype.getAllPatients = function () {
        return this.http.get(this.url);
    };
    ViewAllPatientsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ViewAllPatientsService);
    return ViewAllPatientsService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-patients-patients-module.js.map