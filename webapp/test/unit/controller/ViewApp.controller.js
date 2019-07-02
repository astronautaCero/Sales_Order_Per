/*global QUnit*/

sap.ui.define([
	"AppDescriptor/MyApp2/controller/ViewApp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewApp Controller");

	QUnit.test("I should test the ViewApp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});