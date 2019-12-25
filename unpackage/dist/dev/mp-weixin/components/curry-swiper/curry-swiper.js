(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/curry-swiper/curry-swiper"],{

/***/ 145:
/*!**********************************************************************************!*\
  !*** D:/selfWorkspace/uni/uniapp-demo1/components/curry-swiper/curry-swiper.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry_swiper_vue_vue_type_template_id_2ac178c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry-swiper.vue?vue&type=template&id=2ac178c3&scoped=true& */ 148);
/* harmony import */ var _curry_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curry-swiper.vue?vue&type=script&lang=js& */ 164);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _curry_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _curry_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _curry_swiper_vue_vue_type_style_index_0_id_2ac178c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curry-swiper.vue?vue&type=style&index=0&id=2ac178c3&lang=scss&scoped=true& */ 166);
/* harmony import */ var _C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _curry_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _curry_swiper_vue_vue_type_template_id_2ac178c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _curry_swiper_vue_vue_type_template_id_2ac178c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ac178c3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "D:/selfWorkspace/uni/uniapp-demo1/components/curry-swiper/curry-swiper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 148:
/*!*****************************************************************************************************************************!*\
  !*** D:/selfWorkspace/uni/uniapp-demo1/components/curry-swiper/curry-swiper.vue?vue&type=template&id=2ac178c3&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_template_id_2ac178c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./curry-swiper.vue?vue&type=template&id=2ac178c3&scoped=true& */ 149);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_template_id_2ac178c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_template_id_2ac178c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 149:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/selfWorkspace/uni/uniapp-demo1/components/curry-swiper/curry-swiper.vue?vue&type=template&id=2ac178c3&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 164:
/*!***********************************************************************************************************!*\
  !*** D:/selfWorkspace/uni/uniapp-demo1/components/curry-swiper/curry-swiper.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./curry-swiper.vue?vue&type=script&lang=js& */ 165);
/* harmony import */ var _C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 165:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/selfWorkspace/uni/uniapp-demo1/components/curry-swiper/curry-swiper.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//

/* eslint-disable */
var noop = function noop() {
};var _default =
{
  name: 'curry-swiper',
  props: {
    // Number of slides
    count: {
      type: [Number, String],
      default: 0 },

    // Slides perspective position
    perspective: {
      type: [Number, String],
      default: 35 },

    // Number of slides displayed on each page
    display: {
      type: [Number, String],
      default: 3 },

    loop: {
      type: Boolean,
      default: true },

    // Animation between slides in milliseconds
    animationSpeed: {
      type: [Number, String],
      default: 500 },

    // Animation direction
    dir: {
      type: String,
      default: 'ltr' },

    width: {
      type: [Number, String],
      default: 360 },

    height: {
      type: [Number, String],
      default: 270 },

    border: {
      type: [Number, String],
      default: 1 },

    // Space between slides in pixels
    space: {
      type: [Number, String],
      default: 'auto' },

    // Start slide index. First slide has 0 index
    startIndex: {
      type: [Number, String],
      default: 0 },

    // Enable navigation by clicking on slide
    clickable: {
      type: Boolean,
      default: true },

    disable3d: {
      type: Boolean,
      default: false },

    // Minimum distance in pixels to swipe before a slide advance is triggered
    minSwipeDistance: {
      type: Number,
      default: 10 },

    // Slide inverse scaling
    inverseScaling: {
      type: [Number, String],
      default: 300 },

    onLastSlide: {
      type: Function,
      default: noop },

    onSlideChange: {
      type: Function,
      default: noop },

    bias: {
      type: String,
      default: 'left' },

    onMainSlideClick: {
      type: Function,
      default: noop } },


  data: function data() {
    return {
      viewport: 0,
      currentIndex: 0,
      total: 0,
      dragOffset: 0,
      dragStartX: 0,
      mousedown: false,
      zIndex: 998 };

  },
  watch: {
    count: function count() {
      this.computeData();
    } },

  computed: {
    isLastSlide: function isLastSlide() {
      return this.currentIndex === this.total - 1;
    },
    isFirstSlide: function isFirstSlide() {
      return this.currentIndex === 0;
    },
    isNextPossible: function isNextPossible() {
      return !(!this.loop && this.isLastSlide);
    },
    isPrevPossible: function isPrevPossible() {
      return !(!this.loop && this.isFirstSlide);
    },
    slideWidth: function slideWidth() {
      var vw = this.viewport;
      var sw = parseInt(this.width) + parseInt(this.border, 10) * 2;
      return vw < sw ? vw : sw;
    },
    slideHeight: function slideHeight() {
      var sw = parseInt(this.width, 10) + parseInt(this.border, 10) * 2;
      var sh = parseInt(parseInt(this.height) + this.border * 2, 10);
      var ar = this.calculateAspectRatio(sw, sh);
      return this.slideWidth / ar;
    },
    visible: function visible() {
      var v = this.display > this.total ? this.total : this.display;
      return v;
    },
    hasHiddenSlides: function hasHiddenSlides() {
      return this.total > this.visible;
    },
    leftIndices: function leftIndices() {
      var n = (this.visible - 1) / 2;
      n = this.bias.toLowerCase() === 'left' ? Math.ceil(n) : Math.floor(n);
      var indices = [];
      for (var m = 1; m <= n; m++) {
        indices.push(this.dir === 'ltr' ?
        (this.currentIndex + m) % this.total :
        (this.currentIndex - m) % this.total);
      }
      return indices;
    },
    rightIndices: function rightIndices() {
      var n = (this.visible - 1) / 2;
      n = this.bias.toLowerCase() === 'right' ? Math.ceil(n) : Math.floor(n);
      var indices = [];
      for (var m = 1; m <= n; m++) {
        indices.push(this.dir === 'ltr' ?
        (this.currentIndex - m) % this.total :
        (this.currentIndex + m) % this.total);
      }
      return indices;
    },
    leftOutIndex: function leftOutIndex() {
      var n = (this.visible - 1) / 2;
      n = this.bias.toLowerCase() === 'left' ? Math.ceil(n) : Math.floor(n);
      n++;
      if (this.dir === 'ltr') {
        return this.total - this.currentIndex - n <= 0 ?
        -parseInt(this.total - this.currentIndex - n) :
        this.currentIndex + n;
      } else {
        return this.currentIndex - n;
      }
    },
    rightOutIndex: function rightOutIndex() {
      var n = (this.visible - 1) / 2;
      n = this.bias.toLowerCase() === 'right' ? Math.ceil(n) : Math.floor(n);
      n++;
      if (this.dir === 'ltr') {
        return this.currentIndex - n;
      } else {
        return this.total - this.currentIndex - n <= 0 ?
        -parseInt(this.total - this.currentIndex - n, 10) :
        this.currentIndex + n;
      }
    } },

  methods: {
    /**
              * Go to next slide
              */
    goNext: function goNext() {
      if (this.isNextPossible) {
        this.isLastSlide ? this.goSlide(0) : this.goSlide(this.currentIndex + 1);
      }
    },
    /**
        * Go to previous slide
        */
    goPrev: function goPrev() {
      if (this.isPrevPossible) {
        this.isFirstSlide ? this.goSlide(this.total - 1) : this.goSlide(this.currentIndex - 1);
      }
    },
    /**
        * Go to slide
        * @param  {String} index of slide where to go
        */
    goSlide: function goSlide(index) {var _this = this;
      this.currentIndex = index < 0 || index > this.total - 1 ? 0 : index;
      if (this.isLastSlide) {
        if (this.onLastSlide !== noop) {
          console.warn('onLastSlide deprecated, please use @last-slide');
        }
        this.onLastSlide(this.currentIndex);
        this.$emit('last-slide', this.currentIndex);
      }
      this.$emit('before-slide-change', this.currentIndex);
      setTimeout(function () {return _this.animationEnd();}, this.animationSpeed);
    },
    /**
        * Go to slide far slide
        */
    goFar: function goFar(index) {var _this2 = this;
      var diff = index === this.total - 1 && this.isFirstSlide ? -1 : index - this.currentIndex;
      if (this.isLastSlide && index === 0) {
        diff = 1;
      }
      var diff2 = diff < 0 ? -diff : diff;
      var timeBuff = 0;
      var i = 0;
      while (i < diff2) {
        i += 1;
        var timeout = diff2 === 1 ? 0 : timeBuff;
        setTimeout(function () {return diff < 0 ? _this2.goPrev(diff2) : _this2.goNext(diff2);}, timeout);
        timeBuff += this.animationSpeed / diff2;
      }
    },
    /**
        * Trigger actions when animation ends
        */
    animationEnd: function animationEnd() {
      if (this.onSlideChange !== noop) {
        console.warn('onSlideChange deprecated, please use @after-slide-change');
      }
      this.onSlideChange(this.currentIndex);
      this.$emit('after-slide-change', this.currentIndex);
    },
    /**
        * Trigger actions when mouse is released
        * @param  {Object} e The event object
        */
    handleMouseup: function handleMouseup() {
      this.mousedown = false;
      this.dragOffset = 0;
    },
    /**
        * Trigger actions when mouse is pressed
        * @param  {Object} e The event object
        */
    handleMousedown: function handleMousedown(e) {
      if (!e.touches) {
        e.preventDefault();
      }
      this.mousedown = true;
      this.dragStartX = 'ontouchstart' in window ? e.touches[0].clientX : e.clientX;
    },
    /**
        * Trigger actions when mouse is pressed and then moved (mouse drag)
        * @param  {Object} e The event object
        */
    handleMousemove: function handleMousemove(e) {
      if (!this.mousedown) {
        return;
      }
      var eventPosX = 'ontouchstart' in window ? e.touches[0].clientX : e.clientX;
      var deltaX = this.dragStartX - eventPosX;
      this.dragOffset = deltaX;
      if (this.dragOffset > this.minSwipeDistance) {
        this.handleMouseup();
        this.goNext();
      } else if (this.dragOffset < -this.minSwipeDistance) {
        this.handleMouseup();
        this.goPrev();
      }
    },
    /**
        * A mutation observer is used to detect changes to the containing node
        * in order to keep the magnet container in sync with the height its reference node.
        */
    attachMutationObserver: function attachMutationObserver() {var _this3 = this;
      var MutationObserver = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver;
      if (MutationObserver) {
        var config = {
          attributes: true,
          childList: true,
          characterData: true };

        this.mutationObserver = new MutationObserver(function () {
          _this3.$nextTick(function () {
            _this3.computeData();
          });
        });
        if (this.$el) {
          this.mutationObserver.observe(this.$el, config);
        }
      }
    },
    /**
        * Stop listening to mutation changes
        */
    detachMutationObserver: function detachMutationObserver() {
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
      }
    },
    /**
        * Get the number of slides
        * @return {Number} Number of slides
        */
    getSlideCount: function getSlideCount() {
      if (this.$slots.default !== undefined) {
        return this.$slots.default.filter(function (value) {
          return value.tag !== void 0;
        }).length;
      }
      return 0;
    },
    /**
        * Calculate slide with and keep defined aspect ratio
        * @return {Number} Aspect ratio number
        */
    calculateAspectRatio: function calculateAspectRatio(width, height) {
      return Math.min(width / height);
    },
    /**
        * Re-compute the number of slides and current slide
        */
    computeData: function computeData(firstRun) {
      this.total = this.getSlideCount();
      if (firstRun || this.currentIndex >= this.total) {
        this.currentIndex = parseInt(this.startIndex) > this.total - 1 ? this.total - 1 : parseInt(this.startIndex);
      }
      this.viewport = this.$el.clientWidth;
    },
    setSize: function setSize() {
      this.$el.style.cssText += 'height:' + this.slideHeight + 'px;';
      this.$el.childNodes[0].style.cssText += 'width:' + this.slideWidth + 'px;' + ' height:' + this.slideHeight + 'px;';
    } },

  mounted: function mounted() {
    this.computeData(true);
    this.attachMutationObserver();
    if (!this.$isServer) {
      window.addEventListener('resize', this.setSize);
      if ('ontouchstart' in window) {
        this.$el.addEventListener('touchstart', this.handleMousedown);
        this.$el.addEventListener('touchend', this.handleMouseup);
        this.$el.addEventListener('touchmove', this.handleMousemove);
      } else {
        this.$el.addEventListener('mousedown', this.handleMousedown);
        this.$el.addEventListener('mouseup', this.handleMouseup);
        this.$el.addEventListener('mousemove', this.handleMousemove);
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.$isServer) {
      this.detachMutationObserver();
      if ('ontouchstart' in window) {
        this.$el.removeEventListener('touchmove', this.handleMousemove);
      } else {
        this.$el.removeEventListener('mousemove', this.handleMousemove);
      }
      window.removeEventListener('resize', this.setSize);
    }
  } };exports.default = _default;

/***/ }),

/***/ 166:
/*!********************************************************************************************************************************************!*\
  !*** D:/selfWorkspace/uni/uniapp-demo1/components/curry-swiper/curry-swiper.vue?vue&type=style&index=0&id=2ac178c3&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_style_index_0_id_2ac178c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./curry-swiper.vue?vue&type=style&index=0&id=2ac178c3&lang=scss&scoped=true& */ 167);
/* harmony import */ var _C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_style_index_0_id_2ac178c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_style_index_0_id_2ac178c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_style_index_0_id_2ac178c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_style_index_0_id_2ac178c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_Admin_Pictures_HBuilderX_2_4_6_20191210_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_curry_swiper_vue_vue_type_style_index_0_id_2ac178c3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 167:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/selfWorkspace/uni/uniapp-demo1/components/curry-swiper/curry-swiper.vue?vue&type=style&index=0&id=2ac178c3&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/curry-swiper/curry-swiper.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/curry-swiper/curry-swiper-create-component',
    {
        'components/curry-swiper/curry-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(145))
        })
    },
    [['components/curry-swiper/curry-swiper-create-component']]
]);
