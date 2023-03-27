<template>
  <q-layout
    view="lHh Lpr lFf"
    class="tw-w-[320px] tw-h-[548px] !tw-pb-0 tw-bg-gray-900 tw-p-4 tw-mt-auto tw-flex tw-flex-col tw-justify-between"
  >
    <!-- tw-max-w-[453.12px] tw-max-h-[576px] -->
    <q-header v-if="showTopBar" elevated>
      <q-toolbar
        :class="showTopBar ? 'tw-h-6 ' : ''"
        class="tw-bg-transparent tw-h-6"
      >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <footer
      class="tw-bg-gray-900 tw-py-2 tw-px-5 tw-border-t-[1px] tw-border-solid tw-border-gray-200 tw-mt-auto"
    >
      <div class="tw-flex tw-justify-between tw-text-gray-200">
        <div
          class="tw-flex tw-flex-col tw-items-center tw-justify-between tw-cursor-pointer"
        >
          <q-icon class="tw-text-orange-500" name="calculate" size="sm" />
          <span class="tw-text-xs tw-text-orange-500 tw-capitalize">calc</span>
        </div>
        <div
          class="tw-flex tw-flex-col tw-items-center tw-justify-between tw-cursor-pointer"
        >
          <q-icon name="history" size="sm" />
          <span class="tw-text-xs tw-capitalize">tape</span>
        </div>
        <div
          class="tw-flex tw-flex-col tw-items-center tw-justify-between tw-cursor-pointer"
        >
          <q-icon name="widgets" size="sm" />
          <span class="tw-text-xs tw-capitalize">apps</span>
        </div>
        <div
          class="tw-flex tw-flex-col tw-items-center tw-justify-between tw-cursor-pointer"
        >
          <q-icon name="settings" size="sm" />
          <span class="tw-text-xs tw-capitalize">settings</span>
        </div>
        <!-- <div class="tw-flex tw-flex-col tw-items-center tw-justify-between">
          <q-icon name="edit" />
          <span>history</span>
        </div> -->
      </div>
    </footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},
  props: {
    showTopBar: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>
