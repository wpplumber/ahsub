<template>
  <div>
    <div
      class="tw-h-[115px] tw-bg-white tw-w-full tw-rounded-md tw-text-right tw-text-5xl tw-flex tw-items-end tw-justify-end tw-p-2"
    >
      <!-- <div
              data-cy="calc-display"
              class="full-width q-pr-sm text-h5 text-right tw-h-[35px] inset-shadow"
            > -->
      {{ calculator.currentOperand || '0' }}
      <!-- </div> -->
    </div>

    <div
      class="tw-flex tw-items-center tw-justify-between tw-h-4 tw-text-white tw-mt-4 tw-px-1"
    >
      <span class="tw-text-xl tw-font-bold">AHSUB</span>
      <!-- <span class="tw-uppercase tw-text-sm">Friendly Calculator</span> -->
      <!-- <span>Version 1</span> -->
      <q-chip
        class="tw-text-xs tw-font-extrabold tw-bg-orange-500 tw-text-white"
        >Version 1</q-chip
      >
    </div>

    <div class="tw-flex tw-justify-between tw-mt-4">
      <q-btn
        data-cy="btn-mc"
        label="mc"
        class="tw-w-[53px] tw-h-9"
        size="md"
        color="grey-5"
        text-color="dark"
        @click="calculator.memoryClear()"
      />
      <q-btn
        data-cy="btn-mr"
        label="mr"
        class="tw-w-[53px] tw-h-9"
        size="md"
        color="grey-5"
        text-color="dark"
        @click="calculator.memoryRecall()"
      />
      <q-btn
        data-cy="btn-ms"
        label="ms"
        class="tw-w-[53px] tw-h-9"
        size="md"
        color="grey-5"
        text-color="dark"
        @click="calculator.memorySave()"
      />
      <q-btn
        data-cy="btn-m-plus"
        label="m+"
        class="tw-w-[53px] tw-h-9"
        size="md"
        color="grey-5"
        text-color="dark"
        @click="calculator.memoryAdd()"
      />
      <q-btn
        data-cy="btn-m-minus"
        label="m-"
        class="tw-w-[53px] tw-h-9"
        size="md"
        color="grey-5"
        text-color="dark"
        @click="calculator.memorySubtract()"
      />
    </div>
    <div class="tw-grid tw-grid-cols-5 tw-gap-2 tw-text-white tw-mt-4">
      <q-btn
        data-cy="btn-backspace"
        @click="calculator.backspace()"
        icon="backspace"
        class="tw-w-[53px] tw-h-9"
        size="md"
        color="grey-5"
        text-color="dark"
      />
      <q-btn
        data-cy="btn-ce"
        @click="calculator.clear()"
        class="tw-w-[53px] tw-h-9"
        label="ce"
        size="md"
        color="grey-5"
        text-color="dark"
      />
      <q-btn
        id="btn-clear"
        @click="calculator.clear()"
        class="tw-w-[53px] tw-h-9"
        label="c"
        size="md"
        color="grey-5"
        text-color="dark"
      />
      <q-btn
        data-cy="btn-copy-on-clipboard"
        @click="copyOnClipboard()"
        icon="content_copy"
        class="tw-w-[53px] tw-h-9"
        size="md"
        color="grey-5"
        text-color="dark"
      />

      <q-btn
        id="btn-paste"
        @click="onPaste()"
        icon="content_paste"
        class="tw-w-[53px] tw-h-9"
        size="md"
        color="grey-5"
        text-color="dark"
      />
    </div>

    <div class="tw-grid tw-grid-cols-5 tw-gap-2 tw-h-48 tw-mt-4">
      <div class="tw-flex tw-flex-col tw-justify-between">
        <q-btn
          data-cy="calc-num-seven"
          @click="calculator.typeNumber(7)"
          label="7"
          class="tw-w-[53px] tw-h-9"
          size="md"
          color="blue-grey-10"
        />
        <q-btn
          data-cy="calc-num-four"
          @click="calculator.typeNumber(4)"
          label="4"
          class="tw-w-[53px] tw-h-9"
          size="md"
          color="blue-grey-10"
        />
        <q-btn
          data-cy="calc-num-one"
          @click="calculator.typeNumber(1)"
          label="1"
          class="tw-w-[53px] tw-h-9"
          size="md"
          color="blue-grey-10"
        />
        <q-btn
          data-cy="calc-num-zero"
          @click="calculator.typeNumber(0)"
          label="0"
          class="tw-w-[53px] tw-h-9"
          size="md"
          color="blue-grey-10"
        />
      </div>
      <div class="tw-flex tw-flex-col tw-justify-between">
        <q-btn
          data-cy="calc-num-eight"
          @click="calculator.typeNumber(8)"
          label="8"
          class="tw-w-[53px] tw-h-9"
          size="md"
          color="blue-grey-10"
        />
        <q-btn
          data-cy="calc-num-five"
          @click="calculator.typeNumber(5)"
          label="5"
          class="tw-w-[53px] tw-h-9"
          size="md"
          color="blue-grey-10"
        />
        <q-btn
          data-cy="calc-num-two"
          @click="calculator.typeNumber(2)"
          label="2"
          class="tw-w-[53px] tw-h-9"
          size="md"
          color="blue-grey-10"
        />
        <q-btn
          data-cy="calc-num-zero"
          @click="calculator.typeNumber(0)"
          label="00"
          class="tw-w-[53px] tw-h-9"
          size="md"
          color="blue-grey-10"
        />
      </div>
      <div class="tw-flex tw-flex-col tw-justify-between">
        <q-btn
          data-cy="calc-num-nine"
          @click="calculator.typeNumber(9)"
          label="9"
          class="tw-w-[53px] tw-h-9"
          size="md"
          color="blue-grey-10"
        />
        <q-btn
          data-cy="calc-num-six"
          @click="calculator.typeNumber(6)"
          label="6"
          class="tw-w-[53px] tw-h-9"
          size="md"
          color="blue-grey-10"
        />
        <q-btn
          data-cy="calc-num-three"
          @click="calculator.typeNumber(3)"
          label="3"
          class="tw-w-[53px] tw-h-9"
          size="md"
          color="blue-grey-10"
        />
        <q-btn
          data-cy="btn-decimal"
          @click="calculator.convertDecimal()"
          label="."
          class="tw-w-[53px] tw-h-9"
          size="md"
          color="blue-grey-10"
        />
      </div>
      <div class="tw-flex tw-flex-col tw-justify-between">
        <q-btn
          data-cy="btn-division"
          @click="calculator.typeOperation('÷')"
          label="÷"
          class="tw-w-[53px] tw-h-9"
          :class="
            calculator.operation === '÷'
              ? 'tw-bg-orange-500 tw-text-white'
              : 'tw-bg-gray-300 tw-text-dark'
          "
          size="md"
        />
        <q-btn
          data-cy="btn-multiple"
          @click="calculator.typeOperation('x')"
          label="×"
          class="tw-w-[53px] tw-h-9"
          :class="
            calculator.operation === 'x'
              ? 'tw-bg-orange-500 tw-text-white'
              : 'tw-bg-gray-300 tw-text-dark'
          "
          size="md"
        />
        <q-btn
          data-cy="btn-minus"
          @click="calculator.typeOperation('-')"
          label="-"
          class="tw-w-[53px] tw-h-9"
          :class="
            calculator.operation === '-'
              ? 'tw-bg-orange-500 tw-text-white'
              : 'tw-bg-gray-300 tw-text-dark'
          "
          size="md"
        />
        <!-- :TODO Tarik: increase buttons' font -->
        <!-- <span
            class="tw-my-auto tw-font-bold tw-h-4 tw-text-red-500 tw-text-4xl"
            >-</span
          > -->
        <!-- </q-btn> -->
        <q-btn
          data-cy="btn-plus"
          @click="calculator.typeOperation('+')"
          label="+"
          class="tw-w-[53px] tw-h-9"
          :class="
            calculator.operation === '+'
              ? 'tw-bg-orange-500 tw-text-white'
              : 'tw-bg-gray-300 tw-text-dark'
          "
          size="md"
        />
      </div>
      <div class="tw-flex tw-flex-col tw-justify-between">
        <q-btn
          data-cy="btn-sign"
          @click="calculator.convertSign()"
          label="±"
          class="tw-w-[53px] tw-h-9 tw-bg-gray-300 tw-text-dark"
          size="md"
        />
        <q-btn
          data-cy="btn-percent"
          @click="calculator.typeOperation('%')"
          label="%"
          class="tw-w-[53px] tw-h-9 tw-bg-gray-300 tw-text-dark"
          size="md"
        />
        <q-btn
          data-cy="btn-sqrt"
          @click="calculator.typeOperation('√')"
          label="√"
          class="tw-w-[53px] tw-h-9 tw-bg-gray-300 tw-text-dark"
          size="md"
        />
        <q-btn
          data-cy="btn-equal"
          @click="calculator.evaluate()"
          label="="
          class="tw-w-[53px] tw-h-9 tw-bg-gray-300 tw-text-dark"
          size="md"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { copyToClipboard, useQuasar } from 'quasar';
import Calculator from 'components/Calculator';

export default defineComponent({
  // props: {
  //   showTopBar: {
  //     type: Boolean,
  //     default: false,
  //   },

  //   // caption: {
  //   //   type: String,
  //   //   default: ''
  //   // },
  // },

  setup() {
    const $q = useQuasar();
    const calculator = ref(new Calculator());

    const tape = ref('');

    const tapeActive = ref(true);

    // const tapeHistoryDisplay = computed(() => {
    //   let screen: string[][] = [];
    //   for (let i = 0; i < calculator.value.tapeHistory.length; i++) {
    //     screen[i] = [];
    //     let operator = '';
    //     // console.log('calculator.value.tapeHistory index: '+ i)
    //     for (let j = 0; j < calculator.value.tapeHistory[i].length; j++) {
    //       // console.log('calculator.value.tapeHistory index j: '+ j)
    //       if (
    //         ['×', '÷', '+', '-'].indexOf(calculator.value.tapeHistory[i][j]) !==
    //         -1
    //       ) {
    //         operator = calculator.value.tapeHistory[i][j];
    //       } else if (
    //         ['1/x', '%', '±', '√'].indexOf(
    //           calculator.value.tapeHistory[i][j]
    //         ) !== -1
    //       ) {
    //         let operand = calculator.value.tapeHistory[i][j];
    //         screen[i].push(operand);
    //         // screen.push(`${operand} ` +  tapePendingCalculation.value[i - 1])
    //       } else if (calculator.value.tapeHistory[i][j] === '=') {
    //         screen[i].push('----------------');
    //         screen[i].push(`${calculator.value.tapeHistory[i][j + 1]} =`);
    //         operator = '';
    //         break;
    //       } else {
    //         screen[i].push(`${calculator.value.tapeHistory[i][j]} ${operator}`);
    //       }
    //     }
    //   }
    //   return screen;
    // });

    // const tapePendingCalcDisplay = computed(() => {
    //   let screen = [];
    //   let operator = '';
    //   for (let i = 0; i < calculator.value.tape.length; i++) {
    //     if (['×', '÷', '+', '-'].indexOf(calculator.value.tape[i]) !== -1) {
    //       operator = calculator.value.tape[i];
    //     } else if (
    //       ['1/x', '%', '±', '√'].indexOf(calculator.value.tape[i]) !== -1
    //     ) {
    //       let operand = calculator.value.tape[i];
    //       screen.push(operand);
    //       operator = '';
    //       // screen.push(`${operand} ` +  tapePendingCalculation.value[i - 1])
    //     } else {
    //       screen.push(calculator.value.tape[i] + ` ${operator}`);
    //     }
    //   }
    //   return screen;
    // });

    // methods

    async function onPaste(): Promise<void> {
      // const text = await navigator.clipboard.readText();
      // if (calculator.value.currentOperand.hasOnlyDigits(text) === false) {
      //   $q.notify({
      //     type: 'warning',
      //     message: 'Only numbers can be pasted into the calculator',
      //     timeout: 3500,
      //   });
      //   return;
      // }
      // calculator.value.currentOperand = text;
      // if (calculator.value.tape.length === 0) {
      //   calculator.value.tape.push(text);
      //   return;
      // }
      // const lastTapeIndex = calculator.value.tape.length - 1;
      // calculator.value.tape[lastTapeIndex] = text;
    }

    function copyOnClipboard(): void {
      copyToClipboard(calculator.value.currentOperand)
        .then(() => {
          $q.notify({
            type: 'positive',
            message: 'Copied to clipboard',
            timeout: 3500,
          });
          // success!
        })
        .catch(() => {
          //  $q.notify({type: 'positive', message: 'Copied to clipboard',
          // timeout: 3500});
          // fail
        });
    }

    return {
      calculator,
      // tapeHistoryDisplay,
      // tapePendingCalcDisplay,
      tape,
      tapeActive,
      onPaste,
      copyOnClipboard,
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75,
      },
      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: 'grey',
        width: '9px',
        opacity: 0.2,
      },
    };
  },
});
</script>
<style lang="scss" scoped>
:deep(.keyboard > button) {
  // background-color: burlywood !important
  width: 3rem;
}
:deep(.button-font > .q-btn__content) {
  font-size: 15px;
}
// .q-field--readonly
//       .q-field__control:before
:deep(.q-field--standard.q-field--readonly .q-field__control:before) {
  border-bottom-style: none;
}
</style>
