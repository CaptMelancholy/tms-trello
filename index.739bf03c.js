// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"b3anl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ebWYT":[async function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _cardJs = require("./Card.js");
var _cardJsDefault = parcelHelpers.interopDefault(_cardJs);
var _validatorJs = require("./validator.js");
var _validatorJsDefault = parcelHelpers.interopDefault(_validatorJs);
var _idHandlerJs = require("./idHandler.js");
var _idHandlerJsDefault = parcelHelpers.interopDefault(_idHandlerJs);
var _listJs = require("./List.js");
var _listJsDefault = parcelHelpers.interopDefault(_listJs);
var _listsJs = require("./lists.js");
var _listsJsDefault = parcelHelpers.interopDefault(_listsJs);
var _apiJs = require("./API.js");
var _apiJsDefault = parcelHelpers.interopDefault(_apiJs);
var _initializerJs = require("./initializer.js");
var _initializerJsDefault = parcelHelpers.interopDefault(_initializerJs);
var _localStorageControllerJs = require("./LocalStorageController.js");
var _localStorageControllerJsDefault = parcelHelpers.interopDefault(_localStorageControllerJs);
var _clockJs = require("./Clock.js");
var _clockJsDefault = parcelHelpers.interopDefault(_clockJs);
var _elementJs = require("./Element.js");
var _elementJsDefault = parcelHelpers.interopDefault(_elementJs);
var _modalJs = require("./modal.js");
var _modalJsDefault = parcelHelpers.interopDefault(_modalJs);
const root = document.querySelector(".body");
const idHandler = new (0, _idHandlerJsDefault.default)();
const lists = new (0, _listsJsDefault.default)();
const modal = new (0, _modalJsDefault.default)();
startTime();
const apiController = new (0, _apiJsDefault.default)();
if (localStorage.length === 0) {
    await apiController.getData();
    const initializer = new (0, _initializerJsDefault.default)(idHandler, lists, apiController);
    initializer.initializeLists(apiController.getTodos(), apiController.getAuthors());
    (0, _localStorageControllerJsDefault.default).saveToLocalStorage(lists.getCollection);
} else {
    await apiController.getDataAuthors();
    (0, _localStorageControllerJsDefault.default).getFromLocalStorage(lists, idHandler);
}
root.addEventListener("click", (event)=>{
    let element = event.target;
    console.log(element);
    if (element.classList.contains("add-card-button")) {
        while(!element.classList.contains("field__list-add"))element = element.parentNode;
        (0, _cardJsDefault.default).showAddingCard(root, element.parentNode, element);
        apiController.setAuthors(root.querySelector(".select-for-card"));
    } else if ((0, _validatorJsDefault.default).checkNeedOfRemoving(element)) (0, _cardJsDefault.default).removeShowingCard(root);
    if (element.classList.contains("field__list-cards__card__add")) {
        let element = event.target.parentNode;
        let title = element.querySelector(".title-for-card");
        let description = element.querySelector(".description-for-card");
        let author = element.querySelector(".select-for-card");
        if ((0, _validatorJsDefault.default).checkAddingCard(title, description)) {
            const listObject = element.parentNode.querySelector(".field__list-cards");
            const listId = element.parentNode.getAttribute("id").substr(5);
            const card = new (0, _cardJsDefault.default)(idHandler.idCards, parseInt(listId), title.value, description.value, author.options[author.selectedIndex].text, new Date());
            card.showCard(listObject);
            const list = lists.getList(parseInt(listId));
            list.addCardToList(card.elementData);
            (0, _localStorageControllerJsDefault.default).saveToLocalStorage(lists.getCollection);
        }
    }
    if (element.classList.contains("field__list-nav__control")) {
        const list = element.parentNode.parentNode;
        const listId = list.getAttribute("id").substr(5);
        const listEntity = lists.getList(parseInt(listId));
        modal.showListModal(listEntity.name, listEntity.id);
    }
    if (element.classList.contains("field__list-cards-card-control")) {
        const card = element.parentNode;
        const cardId = card.getAttribute("id").substr(5);
        const listId = card.parentNode.parentNode.getAttribute("id").substr(5);
        console.log(listId);
        const cardEntity = lists.getList(parseInt(listId)).getCard(parseInt(cardId)).entity;
        modal.showCardModal(cardEntity.title, cardEntity.description, cardEntity.id, cardEntity);
        apiController.setAuthors(document.querySelector(".modal-input.select"));
    }
    if (element.classList.contains("submit-card")) {
        const { entity, id, newTitle, newDescription, newAuthor } = modal.getCardInfo();
        const list = lists.getList(entity.listId);
        const card = list.getCard(id).entity;
        card.updateInfo(newTitle, newDescription, newAuthor);
        list.addCardToList(card.elementData);
        // entity.updateInfo(newTitle, newDescription, newAuthor);
        lists.printCollection();
        (0, _localStorageControllerJsDefault.default).saveToLocalStorage(lists.getCollection);
        modal.closeModal();
    }
    if (element.classList.contains("delete-card")) {
        const { entity } = modal.getCardInfo();
        const list = lists.getList(entity.listId);
        list.removeFromTheList(entity.id);
        (0, _localStorageControllerJsDefault.default).saveToLocalStorage(lists.getCollection);
        modal.closeModal();
    }
    if (element.classList.contains("modal-header-button")) modal.closeModal();
    if (element.classList.contains("delete-all-cards")) {
        const listEntity = lists.getList(parseInt(modal.id));
        console.log(listEntity);
        listEntity.removeAllCardsFromTheList();
        (0, _localStorageControllerJsDefault.default).saveToLocalStorage(lists.getCollection);
        modal.closeModal();
    }
    if (element.classList.contains("delete-list")) {
        const listEntity = lists.getList(parseInt(modal.id));
        console.log(listEntity);
        listEntity.removeAllCardsFromTheList();
        listEntity.removeList();
        lists.popList(listEntity.id);
        (0, _localStorageControllerJsDefault.default).removeItemFromLocalStrorage(listEntity.id);
        modal.closeModal();
    }
});
root.addEventListener("mousedown", (event)=>{
    let element = event.target;
    if (element.classList.contains("card")) {
        while(!element.classList.contains("field__list-cards__card"))element = element.parentNode;
        const listOfElements = element.parentNode;
        const listsOfElements = document.querySelectorAll(".field__list");
        const listIdToRemove = listOfElements.parentNode.getAttribute("id").substr(5);
        const cardId = parseInt(element.getAttribute("id").substr(5));
        element.classList.add("card_move");
        document.body.append(element);
        moveAt(event.pageX, event.pageY);
        function moveAt(pageX, pageY) {
            element.style.left = pageX - element.offsetWidth / 2 + "px";
            element.style.top = pageY - element.offsetHeight / 2 + "px";
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
        document.addEventListener("mousemove", onMouseMove);
        element.onmouseup = function() {
            document.removeEventListener("mousemove", onMouseMove);
            const addingList = Array.from(listsOfElements).find((el)=>{
                let coords = el.getBoundingClientRect();
                let coordsElement = element.getBoundingClientRect();
                if (coords.left <= coordsElement.x && coords.right >= coordsElement.x) return true;
                return false;
            });
            element.classList.remove("card_move");
            element.onmouseup = null;
            if (addingList) {
                const addingListId = addingList.getAttribute("id").substr(5);
                const addingListObject = lists.getList(parseInt(addingListId));
                const removeListObject = lists.getList(parseInt(listIdToRemove));
                addingListObject.addCardToList(removeListObject.getCard(cardId));
                removeListObject.removeFromTheList(cardId);
                addingList.querySelector(".field__list-cards").append(element);
                (0, _localStorageControllerJsDefault.default).saveToLocalStorage(lists.getCollection);
            } else listOfElements.append(element);
        };
        element.ondragstart = function() {
            return false;
        };
    }
});
root.addEventListener("input", (event)=>{
    const element = event.target;
    if (element.classList.contains("field__list-nav__title")) {
        if (element.value.trim().length === "") {
            alert("You need to add title");
            (0, _elementJsDefault.default).setRedBorder(element);
        } else {
            (0, _elementJsDefault.default).removeRedBorder(element);
            const newTitle = element.value.trim();
            const listId = element.parentNode.parentNode.getAttribute("id").substr(5);
            const list = lists.getList(parseInt(listId));
            list.setName = newTitle;
            lists.pushList(list.getListInfo());
            (0, _localStorageControllerJsDefault.default).saveToLocalStorage(lists.getCollection);
        }
    }
});
function startTime() {
    const checkTime = (i)=>{
        return i < 10 ? i = "0" + i : i;
    };
    let now = new Date();
    let hours = now.getHours();
    let min = checkTime(now.getMinutes());
    let seconds = checkTime(now.getSeconds());
    document.getElementById("header__clocks__content").textContent = hours + ":" + min + ":" + seconds;
    setTimeout(startTime, 1000);
}

},{"./Card.js":"5cH3J","./validator.js":"cGA0m","./idHandler.js":"apHln","./List.js":"JH3Lo","./lists.js":"3Piky","./API.js":"iKbJC","./initializer.js":"9p9G8","./LocalStorageController.js":"iQURx","./Clock.js":"4Yhx4","./Element.js":"g8cJn","./modal.js":"aHHgN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cH3J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _elementJs = require("./Element.js");
var _elementJsDefault = parcelHelpers.interopDefault(_elementJs);
class Card extends (0, _elementJsDefault.default) {
    constructor(id, listId, title, description, author, time){
        super(undefined);
        this.id = id;
        this.listId = listId;
        this.title = title;
        this.description = description;
        this.author = author;
        if (typeof time === "string") this.time = time;
        else this.time = time.toLocaleString("default", {
            month: "long"
        }) + ", " + this.checkTime(time.getDate()) + " " + this.checkTime(time.getHours()) + ":" + this.checkTime(time.getMinutes()) + ":" + this.checkTime(time.getSeconds());
    }
    removeCard() {
        this.element.remove();
    }
    checkTime = (i)=>{
        return i < 10 ? i = "0" + i : i;
    };
    get elementData() {
        return {
            entity: this,
            id: this.id,
            title: this.title,
            description: this.description,
            author: this.author,
            time: this.time,
            element: this.element
        };
    }
    updateInfo(title, description, author) {
        this.element.querySelector(".field__list-cards__card-info-title").textContent = title;
        this.element.querySelector(".field__list-cards__card-info-description").textContent = description;
        this.element.querySelector(".field__list-cards__card-footer-user").textContent = author;
        this.title = title;
        this.description = description;
        this.author = author;
    }
    showCard(list) {
        list.insertAdjacentHTML("beforeend", `
                <div id="card_${this.id}" class="field__list-cards__card card">
                  <div class="field__list-cards__card-identificators">
                  </div>
                  <button class="field__list-cards-card-control">
                    ***
                  </button>
                  <div class="field__list-cards__card-info card">
                    <p class="field__list-cards__card-info-title card">
                      ${this.title}
                    </p>
                    <p class="field__list-cards__card-info-description card">
                      ${this.description}
                    </p>
                  </div>
                  <div class="field__list-cards__card-footer card">
                    <p class="field__list-cards__card-footer-user card">
                      ${this.author}
                    </p>
                    <p class="field__list-cards__card-footer-time card">
                      ${this.time}
                    </p>
                  </div>
                </div>
        `);
        this.element = list.querySelector("#card_" + this.id);
        Card.removeShowingCard(document.querySelector(".body"));
    }
    static showAddingCard(root, element, button) {
        this.removeShowingCard(root);
        const addingCard = `<div class="field__list-cards__adding-card">
            <input type="text" placeholder="Title for this card" class="title-for-card"/>
            <input type="text" placeholder="Description for this card" class="description-for-card" />
            <select class="select-for-card"></select>
            <button class="field__list-cards__card__add">
                Add Card
            </button>
        </div>`;
        element.insertAdjacentHTML("beforeend", addingCard);
        (0, _elementJsDefault.default).hideElement(button);
    }
    static removeShowingCard(root) {
        const addingCards = root.querySelectorAll(".field__list-cards__adding-card");
        const addButtons = root.querySelectorAll(".field__list-add");
        Array.from(addingCards).forEach((element)=>element.remove());
        Array.from(addButtons).forEach((element)=>(0, _elementJsDefault.default).showElement(element));
    }
}
exports.default = Card;

},{"./Element.js":"g8cJn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g8cJn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Element {
    #element = undefined;
    constructor(element){
        this.#element = element;
    }
    get getElement() {
        return this.#element;
    }
    set setElement(value) {
        this.#element = value;
    }
    static hideElement(element) {
        element.classList.add("hide");
    }
    static showElement(element) {
        element.classList.remove("hide");
    }
    static setRedBorder(element) {
        element.classList.add("red-border");
    }
    static removeRedBorder(element) {
        element.classList.remove("red-border");
    }
}
exports.default = Element;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cGA0m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _elementJs = require("./Element.js");
var _elementJsDefault = parcelHelpers.interopDefault(_elementJs);
class Validator {
    static checkNeedOfRemoving(element) {
        if (element.classList.contains("field__list-cards__card__add") || element.classList.contains("field__list-cards__adding-card") || element.classList.contains("title-for-card") || element.classList.contains("description-for-card") || element.classList.contains("select-for-card") || element.parentNode.classList.contains("select-for-card")) return false;
        return true;
    }
    static checkAddingCard(title, description) {
        if (title.value === "" || description.value === "") {
            title.value === "" ? (0, _elementJsDefault.default).setRedBorder(title) : (0, _elementJsDefault.default).removeRedBorder(title);
            description.value === "" ? (0, _elementJsDefault.default).setRedBorder(description) : (0, _elementJsDefault.default).removeRedBorder(description);
            return false;
        }
        return true;
    }
}
exports.default = Validator;

},{"./Element.js":"g8cJn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"apHln":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class IdHandler {
    #idLists = 0;
    #idCards = 0;
    constructor(){}
    get idLists() {
        this.#idLists++;
        return this.#idLists;
    }
    get idCards() {
        this.#idCards++;
        return this.#idCards;
    }
    get currentMaximumIdList() {
        return this.#idLists;
    }
}
exports.default = IdHandler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"JH3Lo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _elementJs = require("./Element.js");
var _elementJsDefault = parcelHelpers.interopDefault(_elementJs);
class List extends (0, _elementJsDefault.default) {
    #cardsList = new Map();
    get getCardsList() {
        return this.#cardsList;
    }
    constructor(name, id){
        super(undefined);
        this.name = name;
        this.id = id;
    }
    set setName(name) {
        this.name = name;
    }
    addCardToList(card) {
        this.#cardsList.set(card.id, card);
    }
    getCard(id) {
        return this.#cardsList.get(id);
    }
    removeFromTheList(id) {
        this.#cardsList.get(id).entity.removeCard();
        this.#cardsList.delete(id);
    }
    removeList() {
        this.element.remove();
    }
    removeAllCardsFromTheList() {
        this.#cardsList.forEach((values, keys, map)=>{
            values.entity.removeCard();
            map.delete(keys);
        });
    }
    getListInfo() {
        return {
            entity: this,
            id: this.id,
            name: this.name,
            element: this.element,
            cards: this.#cardsList
        };
    }
    addList() {
        const root = document.querySelector("#root");
        root.insertAdjacentHTML("beforeend", `
        <div id="list_${this.id}" class="field__list">
            <div class="field__list-nav">
                <input
                type="text"
                class="field__list-nav__title"
                value="${this.name}"
                />
                <button class="field__list-nav__control">
                ***
                </button>
            </div>
            <div class="field__list-cards"></div>
            <button class="field__list-add add-card-button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="add-card-button"
                >
                    <mask
                    id="mask0_4_70"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    >
                    <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_4_70)">
                    <path
                        d="M11 13H6C5.71667 13 5.47917 12.9042 5.2875 12.7125C5.09583 12.5208 5 12.2833 5 12C5 11.7167 5.09583 11.4792 5.2875 11.2875C5.47917 11.0958 5.71667 11 6 11H11V6C11 5.71667 11.0958 5.47917 11.2875 5.2875C11.4792 5.09583 11.7167 5 12 5C12.2833 5 12.5208 5.09583 12.7125 5.2875C12.9042 5.47917 13 5.71667 13 6V11H18C18.2833 11 18.5208 11.0958 18.7125 11.2875C18.9042 11.4792 19 11.7167 19 12C19 12.2833 18.9042 12.5208 18.7125 12.7125C18.5208 12.9042 18.2833 13 18 13H13V18C13 18.2833 12.9042 18.5208 12.7125 18.7125C12.5208 18.9042 12.2833 19 12 19C11.7167 19 11.4792 18.9042 11.2875 18.7125C11.0958 18.5208 11 18.2833 11 18V13Z"
                        fill="#49454E"
                    />
                    </g>
                </svg>
                <p class="field__add-button__button-title add-card-button">Add a card</p>
                </button>
        </div>
        `);
        this.element = root.querySelector("#list_" + this.id);
    }
}
exports.default = List;

},{"./Element.js":"g8cJn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Piky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Lists {
    #collectionOfLists = new Map();
    pushList(list) {
        this.#collectionOfLists.set(list.id, list);
    }
    popList(id) {
        this.#collectionOfLists.delete(id);
    }
    getList(id) {
        return this.#collectionOfLists.get(id).entity;
    }
    get getCollection() {
        return this.#collectionOfLists;
    }
    printCollection() {
        console.log(this.#collectionOfLists);
    }
}
exports.default = Lists;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iKbJC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class APIController {
    async getData() {
        try {
            this.todos = await fetch("https://jsonplaceholder.typicode.com/todos").then((response)=>response.json());
            this.users = await fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json());
        } catch (error) {
            console.log(error);
        }
    }
    async getDataAuthors() {
        try {
            this.users = await fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json());
        } catch (error) {
            console.log(error);
        }
    }
    getRandomList(maxId) {
        return this.getRandomIntInclusive(1, maxId);
    }
    getRandomAuthor() {
        const authorId = this.getRandomIntInclusive(0, Array.from(this.users).length - 1);
        const author = Array.from(this.users).at(authorId);
        const { name } = author;
        return name;
    }
    getAuthors() {
        return Array.from(this.users);
    }
    setAuthors(select) {
        Array.from(this.users).forEach((value, index)=>{
            const option = document.createElement("option");
            option.value = index.toString();
            const { name } = value;
            option.text = name;
            select.add(option, select.options[index]);
        });
    }
    getTodos(authors) {
        return Array.from(this.todos);
    }
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
exports.default = APIController;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9p9G8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _idHandlerJs = require("./idHandler.js");
var _idHandlerJsDefault = parcelHelpers.interopDefault(_idHandlerJs);
var _listsJs = require("./lists.js");
var _listsJsDefault = parcelHelpers.interopDefault(_listsJs);
var _listJs = require("./List.js");
var _listJsDefault = parcelHelpers.interopDefault(_listJs);
var _apiJs = require("./API.js");
var _apiJsDefault = parcelHelpers.interopDefault(_apiJs);
var _cardJs = require("./Card.js");
var _cardJsDefault = parcelHelpers.interopDefault(_cardJs);
class Initializer {
    constructor(handler, lists, apiController){
        this.handler = handler;
        this.lists = lists;
        this.apiController = apiController;
        const defaultList1 = new (0, _listJsDefault.default)("TO-DO", this.handler.idLists);
        const defaultList2 = new (0, _listJsDefault.default)("IN PROGRESS", this.handler.idLists);
        const defaultList3 = new (0, _listJsDefault.default)("COMPLITED", this.handler.idLists);
        defaultList1.addList();
        defaultList2.addList();
        defaultList3.addList();
        this.lists.pushList(defaultList1.getListInfo());
        this.lists.pushList(defaultList2.getListInfo());
        this.lists.pushList(defaultList3.getListInfo());
    }
    initializeLists(todos) {
        if (localStorage.length === 0) todos.forEach((element)=>{
            const { title } = element;
            const listId = this.apiController.getRandomList(this.handler.currentMaximumIdList);
            const card = new (0, _cardJsDefault.default)(this.handler.idCards, listId, title, title, this.apiController.getRandomAuthor(), new Date());
            const randomList = document.querySelector("#list_" + listId);
            const randomListField = randomList.querySelector(".field__list-cards");
            card.showCard(randomListField);
            const list = this.lists.getList(listId);
            list.addCardToList(card.elementData);
        });
    }
}
exports.default = Initializer;

},{"./idHandler.js":"apHln","./lists.js":"3Piky","./List.js":"JH3Lo","./API.js":"iKbJC","./Card.js":"5cH3J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQURx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _listJs = require("./List.js");
var _listJsDefault = parcelHelpers.interopDefault(_listJs);
var _cardJs = require("./Card.js");
var _cardJsDefault = parcelHelpers.interopDefault(_cardJs);
class LocalStorageController {
    static saveToLocalStorage(lists) {
        lists.forEach((value, key, map)=>{
            const { id, name, cards } = value;
            const array = Array.from(cards.values());
            localStorage.setItem(key, JSON.stringify({
                id: id,
                name: name,
                cards: array
            }));
        });
    }
    static removeItemFromLocalStrorage(id) {
        localStorage.removeItem(id);
    }
    static getFromLocalStorage(lists, idHandler) {
        if (localStorage.length !== 0) {
            let localStorageData = [];
            for(let key in localStorage){
                if (!localStorage.hasOwnProperty(key)) continue;
                localStorageData.push(JSON.parse(localStorage.getItem(key)));
            }
            localStorageData.reverse();
            localStorageData.forEach((element)=>{
                const { id, name, cards } = element;
                const list = new (0, _listJsDefault.default)(name, idHandler.idLists);
                list.addList();
                lists.pushList(list.getListInfo());
                const listsField = list.element;
                const listOfCards = listsField.querySelector(".field__list-cards");
                cards.forEach((element)=>{
                    const { title, description, author, time } = element;
                    const card = new (0, _cardJsDefault.default)(idHandler.idCards, list.id, title, description, author, time);
                    card.showCard(listOfCards);
                    list.addCardToList(card.elementData);
                });
            });
        }
    }
}
exports.default = LocalStorageController;

},{"./List.js":"JH3Lo","./Card.js":"5cH3J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Yhx4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _elementJs = require("./Element.js");
var _elementJsDefault = parcelHelpers.interopDefault(_elementJs);
class Clock {
    static startTime() {
        const checkTime = (i)=>{
            return i < 10 ? i = "0" + i : i;
        };
        let now = new Date();
        let hours = now.getHours();
        let min = checkTime(now.getMinutes());
        let seconds = checkTime(now.getSeconds());
        document.getElementById("header__clocks__content").textContent = hours + ":" + min + ":" + seconds;
    }
}
exports.default = Clock;

},{"./Element.js":"g8cJn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aHHgN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _elementJs = require("./Element.js");
var _elementJsDefault = parcelHelpers.interopDefault(_elementJs);
class Modal {
    constructor(){
        this.flagList = false;
        this.flagCard = false;
        this.body = document.querySelector(".body");
        this.overlay = document.querySelector(".overlay");
    }
    showCardModal(title, description, id, entity) {
        this.id = id;
        if (this.flagList || this.flagCard) return;
        this.flagCard = true;
        this.entity = entity;
        const cardModal = `<section class="modal">
            <div class="modal-header">
                <h3 class="modal-header-title">CARD: ${title}</h3>
                <button class="modal-header-button">\u{2A09}</button>
            </div>
            <div class="modal-container">
                <input type="text" class="modal-input title" value="${title}" />
                <input type="text" class="modal-input description" value="${description}" />
                <select class="modal-input select">
                </select>
                <button class="modal-submit submit-card">SUBMIT</button>
                <button class="modal-submit delete-card">DELETE</button>
            </div>
        </section>`;
        this.body.insertAdjacentHTML("afterbegin", cardModal);
        (0, _elementJsDefault.default).showElement(this.overlay);
    }
    closeModal() {
        if (this.flagList) this.flagList = false;
        if (this.flagCard) this.flagCard = false;
        document.querySelector(".modal").remove();
        (0, _elementJsDefault.default).hideElement(this.overlay);
    }
    getCardInfo() {
        const modal = document.querySelector(".modal");
        if (this.flagCard) {
            const entity = this.entity;
            const id = this.id;
            const newTitle = modal.querySelector(".modal-input.title").value.trim().toUpperCase();
            const newDescription = modal.querySelector(".modal-input.description").value.trim();
            const author = modal.querySelector(".modal-input.select");
            const newAuthor = author.options[author.selectedIndex].text;
            return {
                entity,
                id,
                newTitle,
                newDescription,
                newAuthor
            };
        } else if (this.flagList) return this.id;
    }
    showListModal(title, id) {
        if (this.flagList || this.flagCard) return;
        this.flagList = false;
        this.id = id;
        const cardList = `<section class="modal">
            <div class="modal-header">
                <h3 class="modal-header-title">LIST: ${title}</h3>
                <button class="modal-header-button">\u{2A09}</button>
            </div>
            <div class="modal-container">
                <button class="modal-submit delete-list">DELETE</button>
                <button class="modal-submit delete-all-cards">DELETE ALL CARDS</button>
            </div>
        </section>`;
        this.body.insertAdjacentHTML("afterbegin", cardList);
        (0, _elementJsDefault.default).showElement(this.overlay);
    }
    closeListModal() {
        document.querySelector(".modal").remove();
        (0, _elementJsDefault.default).hideElement(this.overlay);
    }
}
exports.default = Modal;

},{"./Element.js":"g8cJn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["b3anl","ebWYT"], "ebWYT", "parcelRequire2be7")

//# sourceMappingURL=index.739bf03c.js.map
