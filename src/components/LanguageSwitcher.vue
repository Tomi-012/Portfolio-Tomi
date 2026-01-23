<template>
  <div class="relative inline-block text-left mr-4">
    <div>
      <button @click="isOpen = !isOpen" type="button" class="inline-flex justify-center w-full rounded-md border border-[#383838] shadow-sm px-3 py-2 bg-[#1e1e1f] text-sm font-medium text-amber-50 hover:bg-[#282828] focus:outline-none transition-colors" id="options-menu" aria-haspopup="true" :aria-expanded="isOpen">
        {{ currentLabel }}
        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <div v-if="isOpen" class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-[#1e1e1f] ring-1 ring-black ring-opacity-5 z-[100]">
      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <button @click="changeLocale('id')" class="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#282828] hover:text-white transition-colors" role="menuitem">🇮🇩 Indonesia</button>
        <button @click="changeLocale('en')" class="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#282828] hover:text-white transition-colors" role="menuitem">🇺🇸 English</button>
        <button @click="changeLocale('jp')" class="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#282828] hover:text-white transition-colors" role="menuitem">🇯🇵 日本語</button>
      </div>
    </div>
  </div>
  <!-- Overlay to close dropdown -->
  <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 z-[90] cursor-default"></div>
</template>

<script>
import { useI18n } from '../composables/useI18n';
import { computed, ref } from 'vue';

export default {
  setup() {
    const { locale, setLocale } = useI18n();
    const isOpen = ref(false);

    const labels = {
      id: 'ID',
      en: 'EN',
      jp: 'JP'
    };

    const currentLabel = computed(() => labels[locale.value]);

    const changeLocale = (lang) => {
      setLocale(lang);
      isOpen.value = false;
    };

    return {
      isOpen,
      currentLabel,
      changeLocale
    };
  }
}
</script>
