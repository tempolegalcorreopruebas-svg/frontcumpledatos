import { useApi } from "@/composables/useApi";

const { post, get } = useApi();

const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

/*
|--------------------------------------------------------------------------
| LOGIN CENTRAL
|--------------------------------------------------------------------------
|
| Este login ocurre en:
|
| localhost:5173
|
| Después Laravel nos devuelve:
| tenant_id
| subdomain
| transfer_code
|
*/
const login = async (email, password) => {
  const response = await post("/api/v1/auth/login", {
    email,
    password,
  });

  const loginData = response.data;

  /*
  |--------------------------------------------------------------------------
  | Usuario Tenant
  |--------------------------------------------------------------------------
  */

  if (loginData.contexto === "tenant") {
    redirectToTenant(
      loginData.subdomain,
      loginData.transfer_code
    );

    return response;
  }

  /*
  |--------------------------------------------------------------------------
  | Usuario plataforma
  |--------------------------------------------------------------------------
  |
  | Esto lo resolveremos después para el Super Admin.
  |
  */

  if (loginData.contexto === "platform") {
    return response;
  }

  return response;
};


/*
|--------------------------------------------------------------------------
| REDIRECCIÓN AL SUBDOMINIO
|--------------------------------------------------------------------------
*/
const redirectToTenant = (subdomain, transferCode) => {
  const centralDomain = import.meta.env.VITE_CENTRAL_DOMAIN;

  const url = new URL(window.location.origin);

  url.hostname = `${subdomain}.${centralDomain}`;

  // Esta línea es importante
  url.pathname = "/auth/callback";

  url.search = "";

  url.searchParams.set("code", transferCode);

  console.log("Redirigiendo a:", url.toString());

  window.location.replace(url.toString());
};


/*
|--------------------------------------------------------------------------
| EXCHANGE
|--------------------------------------------------------------------------
|
| Este método YA se ejecuta desde:
|
| empresa1.localhost
|
*/
const exchange = async (code) => {
  const response = await post(
    "/api/v1/auth/exchange",
    {
      code,
      device_name: "vue-web",
    }
  );

  const exchangeData = response.data;

  /*
  |--------------------------------------------------------------------------
  | Guardamos el verdadero token
  |--------------------------------------------------------------------------
  */

  sessionStorage.setItem(
    TOKEN_KEY,
    exchangeData.token
  );

  sessionStorage.setItem(
    USER_KEY,
    JSON.stringify(exchangeData.user)
  );

  return exchangeData;
};


/*
|--------------------------------------------------------------------------
| ME
|--------------------------------------------------------------------------
*/
const me = async () => {
  const response = await get(
    "/api/v1/auth/me"
  );

  const user = response.data.user;

  sessionStorage.setItem(
    USER_KEY,
    JSON.stringify(user)
  );

  return user;
};


/*
|--------------------------------------------------------------------------
| LOGOUT
|--------------------------------------------------------------------------
*/
const logout = async () => {
  try {
    await post(
      "/api/v1/auth/logout"
    );
  } finally {
    clearSession();
  }
};


/*
|--------------------------------------------------------------------------
| SESIÓN LOCAL
|--------------------------------------------------------------------------
*/
const clearSession = () => {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_KEY);
};


const getToken = () => {
  return sessionStorage.getItem(TOKEN_KEY);
};


const getUser = () => {
  const user = sessionStorage.getItem(USER_KEY);

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user);
  } catch {
    sessionStorage.removeItem(USER_KEY);

    return null;
  }
};


const isAuthenticated = () => {
  return !!getToken();
};


export const authService = {
  login,
  exchange,
  me,
  logout,
  getToken,
  getUser,
  isAuthenticated,
  clearSession,
};


export function useAuth() {
  return {
    login,
    exchange,
    me,
    logout,
    getToken,
    getUser,
    isAuthenticated,
    clearSession,
  };
}