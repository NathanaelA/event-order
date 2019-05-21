const frame = require('tns-core-modules/ui/frame');

const pageName="aa-page";
const navigationPage = "main-page";

global.log(pageName, "loaded and parsed by JavaScript Engine (only happens once per app run)");

function navedTo(args) {
    global.log(pageName, "NavigatedTo");
}
exports.navedTo = navedTo;

function navingTo(args) {
    global.log(pageName, "NavigatingTo");
}
exports.navingTo = navingTo;

function navedFrom(args) {
    global.log(pageName, "NavigatedFrom");
}
exports.navedFrom = navedFrom;

function navingFrom(args) {
    global.log(pageName, "NavigatingFrom");
}
exports.navingFrom = navingFrom;

function loaded(args) {
    global.log(pageName, "loaded");
}
exports.loaded = loaded;

function unloaded(args) {
    global.log(pageName, "unloaded");
}
exports.unloaded = unloaded;

function shownmodal(args) {
    global.log(pageName, "shownModal");
}
exports.shownmodal= shownmodal;

function showingmodal(args) {
    global.log(pageName, "showingModal");
}
exports.showingmodal= showingmodal;

function layoutChanged(args) {
    global.log(pageName, "layoutChanged");
}
exports.layoutChanged = layoutChanged;

function letsNav() {
    global.resetOrder();
    console.log("");
    console.log("----------------------------------");
    global.log(pageName, "Attempting to navigate to "+ navigationPage);
    frame.topmost().navigate("/"+navigationPage);
}
exports.letsNav = letsNav;

function close() {
    global.log(pageName, "Close Modal Callback");
}

function letShow() {
    global.resetOrder();
    console.log("");
    console.log("----------------------------------");
    global.log(pageName, "Attempting ShowModal page "+ navigationPage);
    frame.topmost().currentPage.showModal("/modal-page", {closeCallback: close});
}
exports.letsShow = letShow;

function closeModal() {
    frame.topmost().closeModal();
}
exports.closeModal = closeModal;