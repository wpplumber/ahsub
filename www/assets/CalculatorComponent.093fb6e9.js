var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { u as useSizeProps, a as useSize, Q as QIcon } from "./QIcon.0a776d93.js";
import { R as Ripple, Q as QBtn } from "./QBtn.84341b10.js";
import { e as computed, h, D as stopAndPrevent, m as getCurrentInstance, E as client, t as inject, F as quasarKey, _ as _export_sfc, d as defineComponent, f as ref, o as openBlock, G as createElementBlock, H as createBaseVNode, I as toDisplayString, a as createVNode, w as withCtx, n as normalizeClass, J as createTextVNode, K as pushScopeId, L as popScopeId } from "./index.3eefdf46.js";
import { c as createComponent, e as hDir, f as hMergeSlotSafely } from "./dom.da46441d.js";
const useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
};
function useDark(props, $q) {
  return computed(() => props.dark === null ? $q.dark.isActive : props.dark);
}
const defaultSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
var QChip = createComponent({
  name: "QChip",
  props: {
    ...useDarkProps,
    ...useSizeProps,
    dense: Boolean,
    icon: String,
    iconRight: String,
    iconRemove: String,
    iconSelected: String,
    label: [String, Number],
    color: String,
    textColor: String,
    modelValue: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Boolean,
      default: null
    },
    square: Boolean,
    outline: Boolean,
    clickable: Boolean,
    removable: Boolean,
    removeAriaLabel: String,
    tabindex: [String, Number],
    disable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["update:modelValue", "update:selected", "remove", "click"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const sizeStyle = useSize(props, defaultSizes);
    const hasLeftIcon = computed(() => props.selected === true || props.icon !== void 0);
    const leftIcon = computed(() => props.selected === true ? props.iconSelected || $q.iconSet.chip.selected : props.icon);
    const removeIcon = computed(() => props.iconRemove || $q.iconSet.chip.remove);
    const isClickable = computed(
      () => props.disable === false && (props.clickable === true || props.selected !== null)
    );
    const classes = computed(() => {
      const text = props.outline === true ? props.color || props.textColor : props.textColor;
      return "q-chip row inline no-wrap items-center" + (props.outline === false && props.color !== void 0 ? ` bg-${props.color}` : "") + (text ? ` text-${text} q-chip--colored` : "") + (props.disable === true ? " disabled" : "") + (props.dense === true ? " q-chip--dense" : "") + (props.outline === true ? " q-chip--outline" : "") + (props.selected === true ? " q-chip--selected" : "") + (isClickable.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (props.square === true ? " q-chip--square" : "") + (isDark.value === true ? " q-chip--dark q-dark" : "");
    });
    const attributes = computed(() => {
      const chip = props.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: props.tabindex || 0 };
      const remove = {
        ...chip,
        role: "button",
        "aria-hidden": "false",
        "aria-label": props.removeAriaLabel || $q.lang.label.remove
      };
      return { chip, remove };
    });
    function onKeyup(e) {
      e.keyCode === 13 && onClick(e);
    }
    function onClick(e) {
      if (!props.disable) {
        emit("update:selected", !props.selected);
        emit("click", e);
      }
    }
    function onRemove(e) {
      if (e.keyCode === void 0 || e.keyCode === 13) {
        stopAndPrevent(e);
        if (props.disable === false) {
          emit("update:modelValue", false);
          emit("remove");
        }
      }
    }
    function getContent() {
      const child = [];
      isClickable.value === true && child.push(
        h("div", { class: "q-focus-helper" })
      );
      hasLeftIcon.value === true && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--left",
          name: leftIcon.value
        })
      );
      const label = props.label !== void 0 ? [h("div", { class: "ellipsis" }, [props.label])] : void 0;
      child.push(
        h("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, hMergeSlotSafely(slots.default, label))
      );
      props.iconRight && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--right",
          name: props.iconRight
        })
      );
      props.removable === true && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: removeIcon.value,
          ...attributes.value.remove,
          onClick: onRemove,
          onKeyup: onRemove
        })
      );
      return child;
    }
    return () => {
      if (props.modelValue === false) {
        return;
      }
      const data = {
        class: classes.value,
        style: sizeStyle.value
      };
      isClickable.value === true && Object.assign(
        data,
        attributes.value.chip,
        { onClick, onKeyup }
      );
      return hDir(
        "div",
        data,
        getContent(),
        "ripple",
        props.ripple !== false && props.disable !== true,
        () => [[Ripple, props.ripple]]
      );
    };
  }
});
const handlers = [];
function trigger(e) {
  handlers[handlers.length - 1](e);
}
function addFocusout(fn) {
  if (client.is.desktop === true) {
    handlers.push(fn);
    if (handlers.length === 1) {
      document.body.addEventListener("focusin", trigger);
    }
  }
}
function removeFocusout(fn) {
  const index = handlers.indexOf(fn);
  if (index > -1) {
    handlers.splice(index, 1);
    if (handlers.length === 0) {
      document.body.removeEventListener("focusin", trigger);
    }
  }
}
function fallback(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.contentEditable = "true";
  area.style.position = "fixed";
  const fn = () => {
  };
  addFocusout(fn);
  document.body.appendChild(area);
  area.focus();
  area.select();
  const res = document.execCommand("copy");
  area.remove();
  removeFocusout(fn);
  return res;
}
function copyToClipboard(text) {
  return navigator.clipboard !== void 0 ? navigator.clipboard.writeText(text) : new Promise((resolve, reject) => {
    const res = fallback(text);
    if (res) {
      resolve(true);
    } else {
      reject(res);
    }
  });
}
function useQuasar() {
  return inject(quasarKey);
}
class Calculator$1 {
  constructor() {
    __publicField(this, "memory", 0);
    __publicField(this, "currentOperand", "");
    __publicField(this, "previousOperand", "");
    __publicField(this, "operation", "");
    __publicField(this, "currentDisplay", "");
    __publicField(this, "previousDisplay", "");
    __publicField(this, "screenNumsLimit", 9);
    this.clear();
  }
  invalidInput(entry) {
    if (parseInt(entry) == 0) {
      return true;
    }
    return false;
  }
  convertSign() {
    if (this.invalidInput(this.currentOperand)) {
      return;
    }
    this.currentOperand = String(this.currentOperand).charAt(0) === "-" ? String(this.currentOperand).slice(1) : `-${this.currentOperand}`;
  }
  convertDecimal() {
    if (this.currentOperand == "") {
      this.currentOperand = "0.";
    } else if (this.currentOperand.indexOf(".") === -1) {
      this.currentOperand += ".";
    }
  }
  memoryClear() {
    this.memory = 0;
  }
  memoryRecall() {
    this.currentOperand = this.memory.toString();
  }
  memorySave() {
    this.memory = parseFloat(this.currentOperand);
  }
  memoryAdd() {
    this.memory = this.memory + parseFloat(this.currentOperand);
  }
  memorySubtract() {
    this.memory = this.memory - parseFloat(this.currentOperand);
  }
  clearDisplay() {
    this.currentOperand = "";
  }
  updateDisplay() {
    this.currentDisplay = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.previousDisplay = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
    } else {
      this.currentDisplay = "";
    }
  }
  getDisplayNumber(number) {
    const integerDigits = parseFloat(number.split(".")[0]);
    const decimalDigits = number.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }
  evaluate() {
    let computation = 0;
    const current = parseFloat(this.currentOperand);
    if (isNaN(current))
      return;
    switch (this.operation) {
      case "\u221A":
        computation = Math.sqrt(current);
        this.currentOperand = computation.toString().substring(0, 10);
        this.operation = "";
        this.previousOperand = "";
        break;
      case "%":
        computation = parseFloat(
          parseFloat(`${parseFloat(current.toString()) / 100}`).toFixed(8)
        );
        this.currentOperand = computation.toString().substring(0, 10);
        this.operation = "";
        this.previousOperand = "";
        break;
    }
    const prev = parseFloat(this.previousOperand);
    if (isNaN(prev))
      return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        console.log("x func called");
        break;
      case "\xF7":
        computation = prev / current;
        break;
    }
    this.currentOperand = computation.toString().substring(0, 10);
    this.operation = "";
    this.previousOperand = "";
  }
  typeOperation(operation) {
    this.operation = operation;
    if (this.currentOperand === "")
      return;
    this.evaluate();
  }
  checkLimitedNums() {
    return this.currentOperand.length >= this.screenNumsLimit ? true : false;
  }
  typeNumber(number) {
    if (this.checkLimitedNums())
      return;
    if (number.toString() === "." && this.currentOperand.includes("."))
      return;
    if (this.operation !== "" && this.previousOperand == "") {
      this.previousOperand = this.currentOperand;
      this.currentOperand = number.toString();
      return;
    }
    this.currentOperand = this.currentOperand === "0" ? number.toString() : `${this.currentOperand}${number}`;
  }
  backspace() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = "";
  }
}
var CalculatorComponent_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  setup() {
    const $q = useQuasar();
    const calculator = ref(new Calculator$1());
    const tape = ref("");
    const tapeActive = ref(true);
    async function onPaste() {
    }
    function copyOnClipboard() {
      copyToClipboard(calculator.value.currentOperand).then(() => {
        $q.notify({
          type: "positive",
          message: "Copied to clipboard",
          timeout: 3500
        });
      }).catch(() => {
      });
    }
    return {
      calculator,
      tape,
      tapeActive,
      onPaste,
      copyOnClipboard,
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75
      },
      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "grey",
        width: "9px",
        opacity: 0.2
      }
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-549a6358"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "tw-h-[115px] tw-bg-white tw-w-full tw-rounded-md tw-text-right tw-text-5xl tw-flex tw-items-end tw-justify-end tw-p-2" };
const _hoisted_2 = { class: "tw-flex tw-items-center tw-justify-between tw-h-4 tw-text-white tw-mt-4 tw-px-1" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "tw-text-xl tw-font-bold" }, "AHSUB", -1));
const _hoisted_4 = { class: "tw-flex tw-justify-between tw-mt-4" };
const _hoisted_5 = { class: "tw-grid tw-grid-cols-5 tw-gap-2 tw-text-white tw-mt-4" };
const _hoisted_6 = { class: "tw-grid tw-grid-cols-5 tw-gap-2 tw-h-48 tw-mt-4" };
const _hoisted_7 = { class: "tw-flex tw-flex-col tw-justify-between" };
const _hoisted_8 = { class: "tw-flex tw-flex-col tw-justify-between" };
const _hoisted_9 = { class: "tw-flex tw-flex-col tw-justify-between" };
const _hoisted_10 = { class: "tw-flex tw-flex-col tw-justify-between" };
const _hoisted_11 = { class: "tw-flex tw-flex-col tw-justify-between" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, toDisplayString(_ctx.calculator.currentOperand || "0") + " ", 1),
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createVNode(QChip, { class: "tw-text-xs tw-font-extrabold tw-bg-orange-500 tw-text-white" }, {
        default: withCtx(() => [
          createTextVNode("Version 1")
        ]),
        _: 1
      })
    ]),
    createBaseVNode("div", _hoisted_4, [
      createVNode(QBtn, {
        "data-cy": "btn-mc",
        label: "mc",
        class: "tw-w-[53px] tw-h-9",
        size: "md",
        color: "grey-5",
        "text-color": "dark",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.calculator.memoryClear())
      }),
      createVNode(QBtn, {
        "data-cy": "btn-mr",
        label: "mr",
        class: "tw-w-[53px] tw-h-9",
        size: "md",
        color: "grey-5",
        "text-color": "dark",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.calculator.memoryRecall())
      }),
      createVNode(QBtn, {
        "data-cy": "btn-ms",
        label: "ms",
        class: "tw-w-[53px] tw-h-9",
        size: "md",
        color: "grey-5",
        "text-color": "dark",
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.calculator.memorySave())
      }),
      createVNode(QBtn, {
        "data-cy": "btn-m-plus",
        label: "m+",
        class: "tw-w-[53px] tw-h-9",
        size: "md",
        color: "grey-5",
        "text-color": "dark",
        onClick: _cache[3] || (_cache[3] = ($event) => _ctx.calculator.memoryAdd())
      }),
      createVNode(QBtn, {
        "data-cy": "btn-m-minus",
        label: "m-",
        class: "tw-w-[53px] tw-h-9",
        size: "md",
        color: "grey-5",
        "text-color": "dark",
        onClick: _cache[4] || (_cache[4] = ($event) => _ctx.calculator.memorySubtract())
      })
    ]),
    createBaseVNode("div", _hoisted_5, [
      createVNode(QBtn, {
        "data-cy": "btn-backspace",
        onClick: _cache[5] || (_cache[5] = ($event) => _ctx.calculator.backspace()),
        icon: "backspace",
        class: "tw-w-[53px] tw-h-9",
        size: "md",
        color: "grey-5",
        "text-color": "dark"
      }),
      createVNode(QBtn, {
        "data-cy": "btn-ce",
        onClick: _cache[6] || (_cache[6] = ($event) => _ctx.calculator.clear()),
        class: "tw-w-[53px] tw-h-9",
        label: "ce",
        size: "md",
        color: "grey-5",
        "text-color": "dark"
      }),
      createVNode(QBtn, {
        id: "btn-clear",
        onClick: _cache[7] || (_cache[7] = ($event) => _ctx.calculator.clear()),
        class: "tw-w-[53px] tw-h-9",
        label: "c",
        size: "md",
        color: "grey-5",
        "text-color": "dark"
      }),
      createVNode(QBtn, {
        "data-cy": "btn-copy-on-clipboard",
        onClick: _cache[8] || (_cache[8] = ($event) => _ctx.copyOnClipboard()),
        icon: "content_copy",
        class: "tw-w-[53px] tw-h-9",
        size: "md",
        color: "grey-5",
        "text-color": "dark"
      }),
      createVNode(QBtn, {
        id: "btn-paste",
        onClick: _cache[9] || (_cache[9] = ($event) => _ctx.onPaste()),
        icon: "content_paste",
        class: "tw-w-[53px] tw-h-9",
        size: "md",
        color: "grey-5",
        "text-color": "dark"
      })
    ]),
    createBaseVNode("div", _hoisted_6, [
      createBaseVNode("div", _hoisted_7, [
        createVNode(QBtn, {
          "data-cy": "calc-num-seven",
          onClick: _cache[10] || (_cache[10] = ($event) => _ctx.calculator.typeNumber(7)),
          label: "7",
          class: "tw-w-[53px] tw-h-9",
          size: "md",
          color: "blue-grey-10"
        }),
        createVNode(QBtn, {
          "data-cy": "calc-num-four",
          onClick: _cache[11] || (_cache[11] = ($event) => _ctx.calculator.typeNumber(4)),
          label: "4",
          class: "tw-w-[53px] tw-h-9",
          size: "md",
          color: "blue-grey-10"
        }),
        createVNode(QBtn, {
          "data-cy": "calc-num-one",
          onClick: _cache[12] || (_cache[12] = ($event) => _ctx.calculator.typeNumber(1)),
          label: "1",
          class: "tw-w-[53px] tw-h-9",
          size: "md",
          color: "blue-grey-10"
        }),
        createVNode(QBtn, {
          "data-cy": "calc-num-zero",
          onClick: _cache[13] || (_cache[13] = ($event) => _ctx.calculator.typeNumber(0)),
          label: "0",
          class: "tw-w-[53px] tw-h-9",
          size: "md",
          color: "blue-grey-10"
        })
      ]),
      createBaseVNode("div", _hoisted_8, [
        createVNode(QBtn, {
          "data-cy": "calc-num-eight",
          onClick: _cache[14] || (_cache[14] = ($event) => _ctx.calculator.typeNumber(8)),
          label: "8",
          class: "tw-w-[53px] tw-h-9",
          size: "md",
          color: "blue-grey-10"
        }),
        createVNode(QBtn, {
          "data-cy": "calc-num-five",
          onClick: _cache[15] || (_cache[15] = ($event) => _ctx.calculator.typeNumber(5)),
          label: "5",
          class: "tw-w-[53px] tw-h-9",
          size: "md",
          color: "blue-grey-10"
        }),
        createVNode(QBtn, {
          "data-cy": "calc-num-two",
          onClick: _cache[16] || (_cache[16] = ($event) => _ctx.calculator.typeNumber(2)),
          label: "2",
          class: "tw-w-[53px] tw-h-9",
          size: "md",
          color: "blue-grey-10"
        }),
        createVNode(QBtn, {
          "data-cy": "calc-num-zero",
          onClick: _cache[17] || (_cache[17] = ($event) => _ctx.calculator.typeNumber(0)),
          label: "00",
          class: "tw-w-[53px] tw-h-9",
          size: "md",
          color: "blue-grey-10"
        })
      ]),
      createBaseVNode("div", _hoisted_9, [
        createVNode(QBtn, {
          "data-cy": "calc-num-nine",
          onClick: _cache[18] || (_cache[18] = ($event) => _ctx.calculator.typeNumber(9)),
          label: "9",
          class: "tw-w-[53px] tw-h-9",
          size: "md",
          color: "blue-grey-10"
        }),
        createVNode(QBtn, {
          "data-cy": "calc-num-six",
          onClick: _cache[19] || (_cache[19] = ($event) => _ctx.calculator.typeNumber(6)),
          label: "6",
          class: "tw-w-[53px] tw-h-9",
          size: "md",
          color: "blue-grey-10"
        }),
        createVNode(QBtn, {
          "data-cy": "calc-num-three",
          onClick: _cache[20] || (_cache[20] = ($event) => _ctx.calculator.typeNumber(3)),
          label: "3",
          class: "tw-w-[53px] tw-h-9",
          size: "md",
          color: "blue-grey-10"
        }),
        createVNode(QBtn, {
          "data-cy": "btn-decimal",
          onClick: _cache[21] || (_cache[21] = ($event) => _ctx.calculator.convertDecimal()),
          label: ".",
          class: "tw-w-[53px] tw-h-9",
          size: "md",
          color: "blue-grey-10"
        })
      ]),
      createBaseVNode("div", _hoisted_10, [
        createVNode(QBtn, {
          "data-cy": "btn-division",
          onClick: _cache[22] || (_cache[22] = ($event) => _ctx.calculator.typeOperation("\xF7")),
          label: "\xF7",
          class: normalizeClass([
            "tw-w-[53px] tw-h-9",
            _ctx.calculator.operation === "\xF7" ? "tw-bg-orange-500 tw-text-white" : "tw-bg-gray-300 tw-text-dark"
          ]),
          size: "md"
        }, null, 8, ["class"]),
        createVNode(QBtn, {
          "data-cy": "btn-multiple",
          onClick: _cache[23] || (_cache[23] = ($event) => _ctx.calculator.typeOperation("x")),
          label: "\xD7",
          class: normalizeClass([
            "tw-w-[53px] tw-h-9",
            _ctx.calculator.operation === "x" ? "tw-bg-orange-500 tw-text-white" : "tw-bg-gray-300 tw-text-dark"
          ]),
          size: "md"
        }, null, 8, ["class"]),
        createVNode(QBtn, {
          "data-cy": "btn-minus",
          onClick: _cache[24] || (_cache[24] = ($event) => _ctx.calculator.typeOperation("-")),
          label: "-",
          class: normalizeClass([
            "tw-w-[53px] tw-h-9",
            _ctx.calculator.operation === "-" ? "tw-bg-orange-500 tw-text-white" : "tw-bg-gray-300 tw-text-dark"
          ]),
          size: "md"
        }, null, 8, ["class"]),
        createVNode(QBtn, {
          "data-cy": "btn-plus",
          onClick: _cache[25] || (_cache[25] = ($event) => _ctx.calculator.typeOperation("+")),
          label: "+",
          class: normalizeClass([
            "tw-w-[53px] tw-h-9",
            _ctx.calculator.operation === "+" ? "tw-bg-orange-500 tw-text-white" : "tw-bg-gray-300 tw-text-dark"
          ]),
          size: "md"
        }, null, 8, ["class"])
      ]),
      createBaseVNode("div", _hoisted_11, [
        createVNode(QBtn, {
          "data-cy": "btn-sign",
          onClick: _cache[26] || (_cache[26] = ($event) => _ctx.calculator.convertSign()),
          label: "\xB1",
          class: "tw-w-[53px] tw-h-9 tw-bg-gray-300 tw-text-dark",
          size: "md"
        }),
        createVNode(QBtn, {
          "data-cy": "btn-percent",
          onClick: _cache[27] || (_cache[27] = ($event) => _ctx.calculator.typeOperation("%")),
          label: "%",
          class: "tw-w-[53px] tw-h-9 tw-bg-gray-300 tw-text-dark",
          size: "md"
        }),
        createVNode(QBtn, {
          "data-cy": "btn-sqrt",
          onClick: _cache[28] || (_cache[28] = ($event) => _ctx.calculator.typeOperation("\u221A")),
          label: "\u221A",
          class: "tw-w-[53px] tw-h-9 tw-bg-gray-300 tw-text-dark",
          size: "md"
        }),
        createVNode(QBtn, {
          "data-cy": "btn-equal",
          onClick: _cache[29] || (_cache[29] = ($event) => _ctx.calculator.evaluate()),
          label: "=",
          class: "tw-w-[53px] tw-h-9 tw-bg-gray-300 tw-text-dark",
          size: "md"
        })
      ])
    ])
  ]);
}
var Calculator = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-549a6358"]]);
export { Calculator as default };
