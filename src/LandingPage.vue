<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

import { useRoute, useRouter } from "vue-router";
import { toast } from "vue3-toastify";

import heroImage from "./assets/images/cumplidatos-consultoria.webp";

import ServicesSection from "./components/ServicesSection.vue";
import ProcessSection from "./components/ProcessSection.vue";
import WorkModesSection from "./components/WorkModesSection.vue";
import PortalSection from "./components/PortalSection.vue";
import DataSection from "./components/DataSection.vue";
import FaqSection from "./components/FaqSection.vue";
import ContactSection from "./components/ContactSection.vue";
import AppFooter from "./components/AppFooter.vue";
import { useAuth } from "./services/authService";

import { authService } from "./services/authService";

const route = useRoute();
const router = useRouter();

const menuOpen = ref(false);
const portalOpen = ref(false);
const scrolled = ref(false);

const loginEmail = ref("");
const loginPassword = ref("");
const loginError = ref("");
const loginLoading = ref(false);

const { login, logout, getUser, isAuthenticated } = useAuth();

const closeMenu = () => {
  menuOpen.value = false;
};

const openPortal = () => {
  loginError.value = "";
  portalOpen.value = true;
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 24;
};

const handleLogin = async () => {
  loginError.value = "";
  loginLoading.value = true;

  try {
    const loginUser = await login(
      loginEmail.value,
      loginPassword.value
    );

    toast.success(
      `Inicio de sesión exitoso, Bienvenido, ${loginUser.name}`,
      {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      }
    );

    console.log("Login successful:", loginUser);

    loginEmail.value = "";
    loginPassword.value = "";
    portalOpen.value = false;

  } catch (error) {
    console.log("Login error:", error);

    loginError.value =
      error.message || "No fue posible iniciar sesión.";
  } finally {
    loginLoading.value = false;
  }
};


const loginForm = () => { };

watch(portalOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? "hidden" : "";
});

watch(
  () => route.query.login,
  (loginRequired) => {
    if (loginRequired === "required") {
      openPortal();
    }
  },
);

onMounted(() => {
  handleScroll();

  window.addEventListener("scroll", handleScroll, { passive: true });

  if (route.query.login === "required") {
    openPortal();
  }
});

onBeforeUnmount(() => {
  document.body.style.overflow = "";

  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="site">
    <header id="inicio" class="site-header" :class="{ scrolled }">
      <div class="header-accent"></div>

      <div class="nav-wrap container">
        <a class="brand" href="#inicio" aria-label="Cumplidatos, inicio" @click="closeMenu">
          <span class="brand-symbol" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>

          <span class="brand-copy">
            <small>Una solución de TempoLegal</small>
            <strong>Cumpli<span>Datos</span></strong>
          </span>
        </a>

        <nav class="nav-links" :class="{ open: menuOpen }" aria-label="Navegación principal">
          <a href="#que-es" @click="closeMenu">Qué es</a>
          <a href="#servicios" @click="closeMenu">Servicios</a>
          <a href="#proceso" @click="closeMenu">Proceso</a>
          <a href="#portal" @click="closeMenu">Plataforma</a>
          <a href="#preguntas" @click="closeMenu">Preguntas</a>

          <a class="mobile-nav-cta" href="#contacto" @click="closeMenu">
            Solicitar evaluación
            <span class="arrow">↗</span>
          </a>
        </nav>

        <div class="nav-actions">
          <button class="portal-link" type="button" @click="openPortal">
            <span class="login-dot"></span>
            Acceso clientes
          </button>

          <a class="header-cta" href="#contacto">
            Evaluación inicial
            <span class="arrow">↗</span>
          </a>

          <button class="menu-toggle" :class="{ active: menuOpen }" type="button"
            :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'" :aria-expanded="menuOpen"
            @click="menuOpen = !menuOpen">
            <i></i>
            <i></i>
          </button>
        </div>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="hero-glow hero-glow-one"></div>
        <div class="hero-glow hero-glow-two"></div>

        <div class="container hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">
              <span></span>
              Protección de datos para empresas en Ecuador
            </p>

            <h1>
              Implementamos y acompañamos la protección de datos de tu empresa.
            </h1>

            <p class="hero-lead">
              En TempoLegal convertimos las obligaciones de la LOPDP en un plan
              de trabajo claro. Nuestro equipo te asesora y Cumplidatos mantiene
              visibles los avances, documentos, requerimientos y evidencias.
            </p>

            <div class="hero-actions">
              <a class="primary-button" href="#contacto">
                Solicitar evaluación inicial
                <span class="arrow">↗</span>
              </a>

              <a class="secondary-button" href="#proceso">
                Conoce cómo trabajamos
              </a>
            </div>

            <div class="hero-points">
              <span><i class="check">✓</i> Diagnóstico</span>
              <span><i class="check">✓</i> Implementación</span>
              <span><i class="check">✓</i> Auditoría</span>
              <span><i class="check">✓</i> DPD y seguimiento</span>
            </div>
          </div>

          <div class="hero-visual" aria-label="Acompañamiento profesional de protección de datos">
            <div class="hero-photo-frame">
              <img :src="heroImage" alt="Asesora de protección de datos trabajando con el equipo de una empresa" />

              <div class="photo-shade"></div>
            </div>

            <div class="expert-chip">
              <span class="expert-icon">TL</span>

              <div>
                <small>ACOMPAÑAMIENTO PROFESIONAL</small>
                <strong>Expertos + metodología + portal</strong>
              </div>

              <i>✓</i>
            </div>

            <div class="route-mini-card">
              <div class="mini-card-head">
                <div>
                  <small>TU RUTA DE TRABAJO</small>
                  <strong>De la evaluación al seguimiento</strong>
                </div>

                <span>En línea</span>
              </div>

              <div class="mini-phases">
                <div>
                  <b>01</b>
                  <span>Diagnóstico</span>
                </div>

                <i></i>

                <div>
                  <b>02</b>
                  <span>Implementación</span>
                </div>

                <i></i>

                <div>
                  <b>03</b>
                  <span>Seguimiento</span>
                </div>
              </div>

              <div class="mini-card-foot">
                <span class="mini-logo">C</span>

                <p>
                  <strong>Todo visible en Cumplidatos</strong><br />
                  Avances, responsables y evidencias.
                </p>

                <span class="arrow">↗</span>
              </div>
            </div>

            <span class="visual-seal">
              <b>LOPDP</b>
              <small>ECUADOR</small>
            </span>
          </div>
        </div>
      </section>

      <section class="clarity-strip">
        <div class="container clarity-grid">
          <p>
            <strong>No ofrecemos únicamente un software.</strong>
            Integramos asesoría especializada, ejecución y una plataforma
            privada para acompañar a tu empresa.
          </p>

          <a href="#que-es">
            Entender la solución
            <span class="arrow">↗</span>
          </a>
        </div>
      </section>

      <section id="que-es" class="what-section section">
        <div class="container">
          <div class="section-title centered">
            <p class="kicker">¿Qué es Cumplidatos?</p>

            <h2>
              Personas expertas, un proceso claro<br />
              y un portal que lo conecta todo.
            </h2>

            <p>
              Cumplidatos es la herramienta privada con la que TempoLegal
              acompaña la implementación y el seguimiento del programa de
              protección de datos de cada cliente.
            </p>
          </div>

          <div class="solution-map">
            <article>
              <span class="map-number">01</span>
              <div class="map-icon legal">TL</div>

              <h3>TempoLegal asesora y ejecuta</h3>

              <p>
                Analiza, prepara documentos, plantea controles, revisa
                evidencias y acompaña decisiones.
              </p>
            </article>

            <span class="map-connector" aria-hidden="true">＋</span>

            <article>
              <span class="map-number">02</span>
              <div class="map-icon platform">C</div>

              <h3>Cumplidatos organiza</h3>

              <p>
                Centraliza avances, requerimientos, documentos, observaciones,
                responsables y trazabilidad.
              </p>
            </article>

            <span class="map-connector" aria-hidden="true">＋</span>

            <article>
              <span class="map-number">03</span>
              <div class="map-icon company">TU</div>

              <h3>Tu empresa participa</h3>

              <p>
                Entrega información, valida decisiones, implementa acciones y
                mantiene actualizado el programa.
              </p>
            </article>
          </div>

          <div class="definition-note">
            <span>En pocas palabras</span>

            <p>
              <strong>TempoLegal conduce el proceso.</strong>
              Tu empresa participa y toma decisiones.
              <strong>Cumplidatos deja evidencia y visibilidad</strong>
              de lo que se está realizando.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />
      <ProcessSection />
      <WorkModesSection />
      <PortalSection @open-portal="openPortal" />
      <DataSection />
      <FaqSection />
      <ContactSection />
    </main>
    <AppFooter @open-portal="openPortal" />

    <div v-if="portalOpen" class="modal-backdrop" @click.self="portalOpen = false">
      <section class="portal-modal" role="dialog" aria-modal="true" aria-labelledby="portal-title">
        <button class="modal-close" type="button" aria-label="Cerrar" @click="portalOpen = false">
          ×
        </button>

        <div class="modal-logo">
          <span class="brand-symbol" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>

        <p class="kicker">Portal privado</p>
        <h2 id="portal-title">Acceso de clientes</h2>

        <p>Ingresa con las credenciales asignadas por el equipo TempoLegal.</p>

        <form @submit.prevent="handleLogin">
          <div class="demo-access">
            <strong>Acceso de demostración</strong>

            <span>admin@cumplidatos.local</span>
            <span>Demo123*</span>
          </div>

          <label>
            Correo electrónico

            <input v-model="loginEmail" type="email" placeholder="nombre@empresa.com" autocomplete="email" required />
          </label>

          <label>
            Contraseña

            <input v-model="loginPassword" type="password" placeholder="Tu contraseña" autocomplete="current-password"
              required />
          </label>

          <p v-if="loginError" class="login-error" role="alert">
            {{ loginError }}
          </p>

          <div class="login-options">
            <label>
              <input type="checkbox" />
              Recordarme
            </label>

            <a href="#contacto" @click="portalOpen = false">
              ¿Necesitas ayuda?
            </a>
          </div>

          <button class="primary-button full" type="submit" :disabled="loginLoading">
            {{ loginLoading ? "Verificando..." : "Ingresar al portal" }}

            <span v-if="!loginLoading" class="arrow">↗</span>
          </button>
        </form>
        <small>
          El acceso está disponible únicamente para clientes autorizados.
        </small>
      </section>
    </div>
  </div>
</template>
