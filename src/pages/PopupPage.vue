<template>
  <!-- <div class="tw-w-[320px] tw-h-[548px]"> -->
  <calculator />
  <!-- </div> -->
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Calculator from 'components/CalculatorComponent.vue';

export default defineComponent({
  components: { Calculator },
  setup() {
    return {};
  },
});
</script>
