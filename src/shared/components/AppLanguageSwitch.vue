<template>
  <q-select v-model="currentLocale" :options="localeOptions" :label="$t('components.AppLanguageSwitch.change_language')"
    dense borderless emit-value map-options options-dense style="min-width: 160px">
    <template v-slot:prepend>
      <q-icon name="language" class="q-pr-sm" />
    </template>
  </q-select>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { STORAGE_KEYS } from "src/shared/constants/storage-keys";
import { useLocalStorage } from "src/shared/composables/use-local-storage";

export default {
  setup() {
    const { locale } = useI18n({ useScope: "global" });

    // Define available locale options
    const localeOptions = [
      { value: "ru-RU", label: "Русский" },
      { value: "en-US", label: "English" },
      { value: "es-ES", label: "Español" },
    ];

    const { value: savedLocale } = useLocalStorage<string>(
      STORAGE_KEYS.USER_LOCALE,
      locale.value
    );

    // Sync currentLocale with global locale using computed property
    const currentLocale = computed({
      get: () => locale.value,
      set: (value) => {
        locale.value = value;
        savedLocale.value = value;
      }
    });

    return {
      currentLocale,
      localeOptions,
    };
  }
};
</script>