const frame = require('tns-core-modules/ui/frame');

let eventOrder=[];
console.log("aa-Page actually loaded and parsed by JavaScript Engine");

function navedTo(args) {
    eventOrder.push("NavigatedTo aa-page");
    console.log("NavigatedTo aa-page");
}
exports.navedTo = navedTo;

function navingTo(args) {
    eventOrder.push("NavigatingTo aa-page");
    console.log("NavigatingTo aa-page");
}
exports.navingTo = navingTo;

function navedFrom(args) {
    eventOrder.push("NavigatedFrom aa-page");
    console.log("NavigatedFrom aa-page");
}
exports.navedFrom = navedFrom;

function navingFrom(args) {
    eventOrder.push("NavigatingFrom aa-page");
    console.log("NavigatingFrom aa-page");
}
exports.navingFrom = navingFrom;

function loaded(args) {
    eventOrder.push("loaded aa-page");
    console.log("loaded aa-page");
}
exports.loaded = loaded;

function unloaded(args) {
    eventOrder.push("unloaded aa-page");
    console.log("unloaded aa-page");
}
exports.unloaded = unloaded;

function shownmodal(args) {
    eventOrder.push("shownModal aa-page");
    console.log("shownModal aa-page");
}
exports.shownmodal= shownmodal;

function showingmodal(args) {
    eventOrder.push("showingModal aa-page");
    console.log("showingModal aa-page");
}
exports.showingmodal= showingmodal;

function layoutChanged(args) {
    eventOrder.push("layoutChanged aa-page");
    console.log("layoutChanged aa-page");
}
exports.layoutChanged = layoutChanged;

function letsNav() {
    console.log("");
    console.log("----------------------------------");
    console.log("Attempting to navigate to main-page");
    frame.topmost().navigate("/main-page");
}
exports.letsNav = letsNav;

function close() {
    console.log("Close Modal Callback (in aa-page)");
}

function letShow() {
    console.log("");
    console.log("----------------------------------");
    console.log("Starting showModal main-page");
    frame.topmost().currentPage.showModal("/main-page", {closeCallback: close});
}
exports.letsShow = letShow;

