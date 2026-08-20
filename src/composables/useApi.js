import { ref } from 'vue'
import api from '../services/api'

export function useApi() {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const request = async (config) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.request(config);

      data.value = response.data;

      return response.data;
    } catch (requestError) {
      const responseData = requestError.response?.data;
      const validationErrors = responseData?.errors;

      // Obtener el mensaje más útil posible
      const message = validationErrors
        ? Object.values(validationErrors).flat()[0]
        : responseData?.message ||
          requestError.message ||
          "No fue posible comunicarse con el servidor.";

      // Guardar mensaje para el componente que usa useApi
      error.value = message;

      // Crear un error normalizado para que los servicios/componentes
      // no tengan que conocer la estructura de Axios.
      const normalizedError = new Error(message);

      // Información adicional útil
      normalizedError.status = requestError.response?.status ?? null;
      normalizedError.errors = validationErrors ?? null;
      normalizedError.data = responseData ?? null;
      normalizedError.original = requestError;

      throw normalizedError;
    } finally {
      loading.value = false;
    }
  };

  const get = (url, params = {}, config = {}) => {
    return request({
      ...config,
      method: "GET",
      url,
      params,
    });
  };

  const post = (url, payload = {}, config = {}) => {
    return request({
      ...config,
      method: "POST",
      url,
      data: payload,
    });
  };

  const put = (url, payload = {}, config = {}) => {
    return request({
      ...config,
      method: "PUT",
      url,
      data: payload,
    });
  };

  const patch = (url, payload = {}, config = {}) => {
    return request({
      ...config,
      method: "PATCH",
      url,
      data: payload,
    });
  };

  const remove = (url, config = {}) => {
    return request({
      ...config,
      method: "DELETE",
      url,
    });
  };

  const reset = () => {
    data.value = null;
    error.value = null;
    loading.value = false;
  };

  return {
    data,
    loading,
    error,
    get,
    post,
    put,
    patch,
    remove,
    reset,
  };
}