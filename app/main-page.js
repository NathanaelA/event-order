const frame = require('tns-core-modules/ui/frame');

let eventOrder=[];
console.log("main-page actually loaded and parsed by JavaScript Engine");


function navedTo(args) {
    eventOrder.push("NavigatedTo main-page");
    console.log("NavigatedTo main-page");

}
exports.navedTo = navedTo;

function navingTo(args) {
    eventOrder.push("NavigatingTo main-page");
    console.log("NavigatingTo main-page");
}
exports.navingTo = navingTo;

function navedFrom(args) {
    eventOrder.push("NavigatedFrom main-page");
    console.log("NavigatedFrom main-page");
}
exports.navedFrom = navedFrom;

function navingFrom(args) {
    eventOrder.push("NavigatingFrom main-page");
    console.log("NavigatingFrom main-page");
}
exports.navingFrom = navingFrom;

function loaded(args) {
    eventOrder.push("loaded main-page");
    console.log("loaded main-page");
}
exports.loaded = loaded;

function unloaded(args) {
    eventOrder.push("unloaded main-page");
    console.log("unloaded main-page");
}
exports.unloaded = unloaded;

function shownmodal(args) {
    eventOrder.push("shownModal main-page");
    console.log("shownModal main-page");
}
exports.shownmodal= shownmodal;

function showingmodal(args) {
    eventOrder.push("showingModal main-page");
    console.log("showingModal main-page");
}
exports.showingmodal= showingmodal;

function layoutChanged(args) {
    eventOrder.push("layoutChanged main-page");
    console.log("layoutChanged main-page");
}
exports.layoutChanged = layoutChanged;

function letsNav() {
    console.log("");
    console.log("----------------------------------");
    console.log("Starting navigation to aa-page");
    frame.topmost().navigate("/aa-page");
}
exports.letsNav = letsNav;

function close() {
    console.log("Close Modal callback (in main-page)");
}

function letShow() {
    console.log("");
    console.log("----------------------------------");
    console.log("Starting showModal aa-page");
    frame.topmost().currentPage.showModal("/aa-page", {closeCallback: close});
}
exports.letsShow = letShow;

