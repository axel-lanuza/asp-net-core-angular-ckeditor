// Define global variable
declare var CKEDITOR_BASEPATH: string;
eval(`CKEDITOR_BASEPATH = "/ckeditor/";`);

require("ckeditor");

// core
require("core-js");
require("zone.js");
require("rxjs");

// angular
require("@angular/core");
require("@angular/common");
require("@angular/compiler");
require("@angular/platform-browser");
require("@angular/platform-browser-dynamic");
require("@angular/http");
require("@angular/router");
require("@angular/forms");
