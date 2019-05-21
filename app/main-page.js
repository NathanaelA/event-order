// -----------------------------------------------------------------------------------
// (c) 2019, Master Technology
// -----------------------------------------------------------------------------------


const frame = require('tns-core-modules/ui/frame');

let orderId = 0;
if (!global.mtlog) {
    global.mtlog = function(page, value) {
        orderId++;
        console.log(page.padEnd(10, " ")+" ("+orderId+"): "+value );
    };
    global.resetOrder = function() { orderId = 0; };
}

const pageName="main-page";
const navigationPage = "aa-page";

global.mtlog(pageName, "loaded and parsed by JavaScript Engine (only happens once per app run)");

function navedTo(args) {
    global.mtlog(pageName, "NavigatedTo");
}
exports.navedTo = navedTo;

function navingTo(args) {
    global.mtlog(pageName, "NavigatingTo");
}
exports.navingTo = navingTo;

function navedFrom(args) {
    global.mtlog(pageName, "NavigatedFrom");
}
exports.navedFrom = navedFrom;

function navingFrom(args) {
    global.mtlog(pageName, "NavigatingFrom");
}
exports.navingFrom = navingFrom;

function loaded(args) {
    global.mtlog(pageName, "loaded");
}
exports.loaded = loaded;

function unloaded(args) {
    global.mtlog(pageName, "unloaded");
}
exports.unloaded = unloaded;

function shownmodal(args) {
    global.mtlog(pageName, "shownModal");
}
exports.shownmodal= shownmodal;

function showingmodal(args) {
    global.mtlog(pageName, "showingModal");
}
exports.showingmodal= showingmodal;

function layoutChanged(args) {
    global.mtlog(pageName, "layoutChanged");
}
exports.layoutChanged = layoutChanged;

function letsNav() {
    global.resetOrder();
    console.log("");
    console.log("----------------------------------");
    global.mtlog(pageName, "Attempting to navigate to "+ navigationPage);
    frame.topmost().navigate("/"+navigationPage);
}
exports.letsNav = letsNav;

function close() {
    global.mtlog(pageName, "Close Modal Callback");
}

function letShow() {
    global.resetOrder();
    console.log("");
    console.log("----------------------------------");
    global.mtlog(pageName, "Attempting ShowModal page "+ navigationPage);
    frame.topmost().currentPage.showModal("/modal-page", {closeCallback: close});
}
exports.letsShow = letShow;

function closeModal() {
    frame.topmost().closeModal();
}
exports.closeModal = closeModal;