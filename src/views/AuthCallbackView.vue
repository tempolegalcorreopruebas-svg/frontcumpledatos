<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuth } from "@/services/authService";

const route = useRoute();
const router = useRouter();

const { exchange } = useAuth();

const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  const code = route.query.code;

  if (!code) {
    error.value = "Código de acceso no encontrado.";
    loading.value = false;

    return;
  }

  try {

    await exchange(code);

    /*
    |--------------------------------------------------------------------------
    | Exchange correcto
    |--------------------------------------------------------------------------
    |
    | En este momento YA tenemos:
    |
    | sessionStorage.auth_token
    | sessionStorage.auth_user
    |
    */

    await router.replace("/dashboard");

  } catch (exchangeError) {

    error.value =
      exchangeError.message ||
      "No fue posible completar el inicio de sesión.";

  } finally {

    loading.value = false;

  }
});
</script>

<template>
  <div>
    <p v-if="loading">
      Iniciando sesión...
    </p>

    <p v-else-if="error">
      {{ error }}
    </p>
  </div>
</template>