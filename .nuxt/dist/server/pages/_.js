exports.ids = [1];
exports.modules = {

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("0ae5969c", content, true, context)
};

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_type_style_index_0_id_e682ce36_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_type_style_index_0_id_e682ce36_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_type_style_index_0_id_e682ce36_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_type_style_index_0_id_e682ce36_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_type_style_index_0_id_e682ce36_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Landscape{min-height:calc(100vh - 200px);background-color:#fff;padding:80px 15px 70px;text-align:center}@media (min-width:992px){.Landscape{padding:140px 30px 0}}.Landscape__Logo__Title{margin:0;font-family:\"Quicksand\",\"Source Sans Pro\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px;padding:0 15px}@media (min-width:992px){.Landscape__Logo__Title{font-size:120px;display:inline-block;padding:0 0 0 30px}}.Landscape__Title{font-size:45px;font-weight:300;line-height:normal;margin:10px 0 0;color:#526488;word-spacing:5px}.Landscape__Page__Explanation,.Landscape__Title{font-family:\"Quicksand\",\"Source Sans Pro\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif}.Landscape__Page__Explanation{color:#35495e;margin:16px 0 0;font-size:16px}.Landscape__Page__Explanation>a{color:#3b8070;text-decoration:underline}@media (min-width:992px){.Landscape__Title{font-size:60px}}.VueToNuxtLogo{display:inline-block;animation:turn 2s linear forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;animation:goright .5s linear 2.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;animation:godown .5s linear 2s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@keyframes turn{to{transform:rotateX(0deg)}}@keyframes godown{to{top:180px}}@keyframes goright{to{left:70px}}.button{font-family:\"Quicksand\",\"Source Sans Pro\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;position:relative;display:inline-block;color:#fff!important;font-size:16px;font-weight:600;padding:13px 42px 14px;min-width:150px;text-align:center;text-transform:uppercase;text-decoration:none;background-color:#3b8070;border-radius:4px;letter-spacing:1px;border:1px solid #3b8070;margin-top:40px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/_.vue?vue&type=template&id=e682ce36&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"Landscape\"><div class=\"Landscape__Logo\"><div class=\"VueToNuxtLogo\"><div class=\"Triangle Triangle--two\"></div> <div class=\"Triangle Triangle--one\"></div> <div class=\"Triangle Triangle--three\"></div> <div class=\"Triangle Triangle--four\"></div></div> <h1 class=\"Landscape__Logo__Title\">\n        NUXT\n      </h1></div> <h2 class=\"Landscape__Title\">\n      Live on <a href=\"https://vercel.com/home\">Vercel</a>!\n    </h2> <p class=\"Landscape__Page__Explanation\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.path) + "\n    ") + "</p></section>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/_.vue?vue&type=template&id=e682ce36&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_.vue?vue&type=script&lang=js&
/* harmony default export */ var _vue_type_script_lang_js_ = ({
  computed: {
    path() {
      return this.$route.params.pathMatch;
    }
  }
});
// CONCATENATED MODULE: ./pages/_.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_vue_type_script_lang_js_ = (_vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/_.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(19)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1f3adaaa"
  
)

/* harmony default export */ var _ = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_.js.map