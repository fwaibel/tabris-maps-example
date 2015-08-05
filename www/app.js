var centerPage = require("./pages/centerPage");
var mapTypePage = require("./pages/mapTypePage");
var zoomPage = require("./pages/zoomPage");
var mapTapPage = require("./pages/mapTapPage");
var mapLongpressPage = require("./pages/mapLongpressPage");
var markerPage = require("./pages/markerPage");
var pointGroupPage = require("./pages/pointGroupPage");
var drawer = tabris.create("Drawer");

tabris.create("PageSelector").appendTo(drawer);
centerPage.create().open();
mapTypePage.create();
zoomPage.create();
mapTapPage.create();
mapLongpressPage.create();
markerPage.create();
pointGroupPage.create();