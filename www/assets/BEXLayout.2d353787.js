import { Q as QLayout, a as QHeader, b as QToolbar, c as QPageContainer } from "./QLayout.ae1d783d.js";
import { _ as _export_sfc, d as defineComponent, o as openBlock, c as createBlock, w as withCtx, a as createVNode, n as normalizeClass, b as createCommentVNode, r as resolveComponent } from "./index.3eefdf46.js";
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
      })
    ]),
    _: 1
  });
}
var BEXLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { BEXLayout as default };
