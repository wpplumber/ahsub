import { Q as QLayout, a as QHeader, b as QToolbar, c as QPageContainer } from "./QLayout.ae1d783d.js";
import { Q as QIcon } from "./QIcon.0a776d93.js";
import { _ as _export_sfc, d as defineComponent, o as openBlock, c as createBlock, w as withCtx, a as createVNode, n as normalizeClass, b as createCommentVNode, H as createBaseVNode, r as resolveComponent } from "./index.3eefdf46.js";
import "./dom.da46441d.js";
const _sfc_main = defineComponent({
  name: "MainLayout",
  components: {},
  props: {
    showTopBar: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {};
  }
});
const _hoisted_1 = { class: "tw-bg-gray-900 tw-py-2 tw-px-5 tw-border-t-[1px] tw-border-solid tw-border-gray-200 tw-mt-auto" };
const _hoisted_2 = { class: "tw-flex tw-justify-between tw-text-gray-200" };
const _hoisted_3 = { class: "tw-flex tw-flex-col tw-items-center tw-justify-between tw-cursor-pointer" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "tw-text-xs tw-text-orange-500 tw-capitalize" }, "calc", -1);
const _hoisted_5 = { class: "tw-flex tw-flex-col tw-items-center tw-justify-between tw-cursor-pointer" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "tw-text-xs tw-capitalize" }, "tape", -1);
const _hoisted_7 = { class: "tw-flex tw-flex-col tw-items-center tw-justify-between tw-cursor-pointer" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", { class: "tw-text-xs tw-capitalize" }, "apps", -1);
const _hoisted_9 = { class: "tw-flex tw-flex-col tw-items-center tw-justify-between tw-cursor-pointer" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", { class: "tw-text-xs tw-capitalize" }, "settings", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock(QLayout, {
    view: "lHh Lpr lFf",
    class: "tw-w-[320px] tw-h-[548px] !tw-pb-0 tw-bg-gray-900 tw-p-4 tw-mt-auto tw-flex tw-flex-col tw-justify-between"
  }, {
    default: withCtx(() => [
      _ctx.showTopBar ? (openBlock(), createBlock(QHeader, {
        key: 0,
        elevated: ""
      }, {
        default: withCtx(() => [
          createVNode(QToolbar, {
            class: normalizeClass([_ctx.showTopBar ? "tw-h-6 " : "", "tw-bg-transparent tw-h-6"])
          }, null, 8, ["class"])
        ]),
        _: 1
      })) : createCommentVNode("", true),
      createVNode(QPageContainer, null, {
        default: withCtx(() => [
          createVNode(_component_router_view)
        ]),
        _: 1
      }),
      createBaseVNode("footer", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(QIcon, {
              class: "tw-text-orange-500",
              name: "calculate",
              size: "sm"
            }),
            _hoisted_4
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(QIcon, {
              name: "history",
              size: "sm"
            }),
            _hoisted_6
          ]),
          createBaseVNode("div", _hoisted_7, [
            createVNode(QIcon, {
              name: "widgets",
              size: "sm"
            }),
            _hoisted_8
          ]),
          createBaseVNode("div", _hoisted_9, [
            createVNode(QIcon, {
              name: "settings",
              size: "sm"
            }),
            _hoisted_10
          ])
        ])
      ])
    ]),
    _: 1
  });
}
var MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { MainLayout as default };
