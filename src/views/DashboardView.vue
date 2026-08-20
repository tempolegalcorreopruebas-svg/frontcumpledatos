<script setup>
const selectMenu = (label) => {
  activeMenu.value = label
  sidebarOpen.value = false
}
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../services/authService'

const router = useRouter()
const user = authService.getUser()

const sidebarOpen = ref(false)
const activeMenu = ref('Resumen')

const menuItems = [
  { label: 'Resumen', icon: '⌂' },
  { label: 'Implementación', icon: '◫' },
  { label: 'Requerimientos', icon: '✓' },
  { label: 'Documentos', icon: '▤' },
  { label: 'Seguimiento', icon: '◷' },
  { label: 'Usuarios', icon: '♙' },
]

const stats = [
  {
    label: 'Proceso actual',
    value: 'Implementación',
    description: 'Etapa 3 de 5',
    icon: '◫',
    tone: 'blue',
  },
  {
    label: 'Requerimientos',
    value: '7',
    description: '3 requieren atención',
    icon: '✓',
    tone: 'orange',
  },
  {
    label: 'Documentos',
    value: '18',
    description: '2 actualizados esta semana',
    icon: '▤',
    tone: 'cyan',
  },
  {
    label: 'Próxima revisión',
    value: '24 AGO',
    description: 'Reunión de seguimiento',
    icon: '◷',
    tone: 'purple',
  },
]

const phases = [
  {
    number: '01',
    title: 'Diagnóstico',
    status: 'completed',
  },
  {
    number: '02',
    title: 'Levantamiento',
    status: 'completed',
  },
  {
    number: '03',
    title: 'Implementación',
    status: 'active',
  },
  {
    number: '04',
    title: 'Validación',
    status: 'pending',
  },
  {
    number: '05',
    title: 'Seguimiento',
    status: 'pending',
  },
]

const tasks = [
  {
    title: 'Revisar matriz de riesgos',
    category: 'Implementación',
    date: 'Hoy',
    priority: 'Alta',
  },
  {
    title: 'Validar plazo de conservación',
    category: 'Talento Humano',
    date: '20 ago.',
    priority: 'Media',
  },
  {
    title: 'Cargar contrato de proveedor',
    category: 'Requerimiento',
    date: '22 ago.',
    priority: 'Media',
  },
]

const activities = [
  {
    title: 'Documento actualizado',
    description: 'Política de protección de datos',
    time: 'Hace 2 horas',
    initials: 'TL',
    color: 'blue',
  },
  {
    title: 'Requerimiento atendido',
    description: 'Información de proveedores tecnológicos',
    time: 'Ayer, 16:42',
    initials: 'AV',
    color: 'cyan',
  },
  {
    title: 'Observación registrada',
    description: 'Revisión de contratos laborales',
    time: '16 ago., 10:15',
    initials: 'TL',
    color: 'navy',
  },
]

const initials = computed(() => {
  if (!user?.name) {
    return 'US'
  }

  return user.name
    .split(' ')
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()
})

const roleLabel = computed(() => {
  const roles = {
    super_admin: 'Superadministrador',
    consultor: 'Consultor TempoLegal',
    cliente_admin: 'Administrador de empresa',
    cliente_usuario: 'Usuario de empresa',
  }

  return roles[user?.role] || 'Usuario'
})

const logout = async () => {
  authService.logout()
  await router.replace('/')
}
</script>

<template>
  <div class="dashboard-shell">
    <div
      v-if="sidebarOpen"
      class="sidebar-overlay"
      @click="sidebarOpen = false"
    ></div>

    <aside
      class="sidebar"
      :class="{ 'sidebar--open': sidebarOpen }"
    >
      <div class="sidebar-brand">
        <span class="brand-symbol">
          <i></i>
          <i></i>
          <i></i>
        </span>

        <span>
          <small>PORTAL PRIVADO</small>
          <strong>Cumpli<span>Datos</span></strong>
        </span>

        <button
          class="sidebar-close"
          type="button"
          aria-label="Cerrar menú"
          @click="sidebarOpen = false"
        >
          ×
        </button>
      </div>

      <div class="company-card">
        <span class="company-avatar">EE</span>

        <div>
          <small>EMPRESA ACTUAL</small>
          <strong>Empresa Ejemplo S.A.</strong>
          <span>RUC 0999999999001</span>
        </div>

        <button type="button" aria-label="Cambiar empresa">
          ⌄
        </button>
      </div>

      <nav class="sidebar-nav">
        <small>MENÚ PRINCIPAL</small>

        <button
          v-for="item in menuItems"
          :key="item.label"
          type="button"
          class="nav-item"
          :class="{ active: activeMenu === item.label }"
   @click="selectMenu(item.label)"
        >
          <span>{{ item.icon }}</span>
          {{ item.label }}

          <b v-if="item.label === 'Requerimientos'">
            7
          </b>
        </button>
      </nav>

      <div class="sidebar-support">
        <span>?</span>

        <div>
          <strong>¿Necesitas ayuda?</strong>
          <small>Contacta a tu consultor</small>
        </div>

        <button type="button">↗</button>
      </div>

      <div class="sidebar-user">
        <span class="user-avatar">{{ initials }}</span>

        <div>
          <strong>{{ user?.name }}</strong>
          <small>{{ roleLabel }}</small>
        </div>

        <button
          type="button"
          title="Cerrar sesión"
          @click="logout"
        >
          ⇥
        </button>
      </div>
    </aside>

    <section class="dashboard-main">
      <header class="topbar">
        <div class="topbar-left">
          <button
            class="mobile-menu"
            type="button"
            aria-label="Abrir menú"
            @click="sidebarOpen = true"
          >
            ☰
          </button>

          <div>
            <small>PORTAL / {{ activeMenu.toUpperCase() }}</small>
            <strong>{{ activeMenu }}</strong>
          </div>
        </div>

        <div class="topbar-actions">
          <label class="search-box">
            <span>⌕</span>

            <input
              type="search"
              placeholder="Buscar en el portal..."
            />

            <kbd>⌘ K</kbd>
          </label>

          <button
            class="notification-button"
            type="button"
            aria-label="Notificaciones"
          >
            ♢
            <span>3</span>
          </button>

          <div class="topbar-profile">
            <span>{{ initials }}</span>

            <div>
              <strong>{{ user?.name }}</strong>
              <small>{{ roleLabel }}</small>
            </div>
          </div>
        </div>
      </header>

      <main class="dashboard-content">
        <div class="welcome-row">
          <div>
            <p>Martes, 18 de agosto</p>

            <h1>
              Bienvenido,
              {{ user?.name?.split(' ')[0] }}.
            </h1>

            <span>
              Este es el estado actual del trabajo de tu organización.
            </span>
          </div>

          <div class="demo-label">
            <i></i>
            Datos demostrativos
          </div>
        </div>

        <section class="stats-grid">
          <article
            v-for="stat in stats"
            :key="stat.label"
            class="stat-card"
          >
            <div
              class="stat-icon"
              :class="stat.tone"
            >
              {{ stat.icon }}
            </div>

            <div class="stat-heading">
              <span>{{ stat.label }}</span>
              <button type="button">•••</button>
            </div>

            <strong>{{ stat.value }}</strong>
            <small>{{ stat.description }}</small>
          </article>
        </section>

        <section class="primary-grid">
          <article class="panel progress-panel">
            <div class="panel-heading">
              <div>
                <span>RUTA DE IMPLEMENTACIÓN</span>
                <h2>Implementación LOPDP</h2>
              </div>

              <div class="status-chip">
                En desarrollo
              </div>
            </div>

            <div class="progress-summary">
              <div>
                <strong>Etapa 3 de 5</strong>
                <span>Avance del plan de trabajo</span>
              </div>

              <b>60%</b>
            </div>

            <div class="progress-bar">
              <span></span>
            </div>

            <div class="phase-track">
              <div
                v-for="phase in phases"
                :key="phase.number"
                class="phase"
                :class="phase.status"
              >
                <span>
                  {{
                    phase.status === 'completed'
                      ? '✓'
                      : phase.number
                  }}
                </span>

                <strong>{{ phase.title }}</strong>
                <small>{{ phase.number }}</small>
              </div>
            </div>

            <div class="next-step">
              <span class="next-step-icon">→</span>

              <div>
                <small>PRÓXIMO HITO</small>
                <strong>Completar la matriz de riesgos</strong>
                <p>
                  Se requieren validaciones de Tecnología y Talento Humano.
                </p>
              </div>

              <button type="button">
                Ver proceso
                <span>↗</span>
              </button>
            </div>
          </article>

          <article class="panel task-panel">
            <div class="panel-heading">
              <div>
                <span>ACCIONES PENDIENTES</span>
                <h2>Próximas tareas</h2>
              </div>

              <button class="text-button" type="button">
                Ver todas
              </button>
            </div>

            <div class="task-list">
              <div
                v-for="task in tasks"
                :key="task.title"
                class="task"
              >
                <button
                  class="task-check"
                  type="button"
                  aria-label="Marcar como completada"
                ></button>

                <div>
                  <strong>{{ task.title }}</strong>
                  <span>{{ task.category }}</span>
                </div>

                <div class="task-meta">
                  <small>{{ task.date }}</small>

                  <b
                    :class="{
                      high: task.priority === 'Alta',
                    }"
                  >
                    {{ task.priority }}
                  </b>
                </div>
              </div>
            </div>

            <button class="panel-footer-button" type="button">
              Ver todos los requerimientos
              <span>→</span>
            </button>
          </article>
        </section>

        <section class="secondary-grid">
          <article class="panel activity-panel">
            <div class="panel-heading">
              <div>
                <span>TRAZABILIDAD</span>
                <h2>Actividad reciente</h2>
              </div>

              <button class="text-button" type="button">
                Ver historial
              </button>
            </div>

            <div class="activity-list">
              <div
                v-for="activity in activities"
                :key="activity.title"
                class="activity"
              >
                <span
                  class="activity-avatar"
                  :class="activity.color"
                >
                  {{ activity.initials }}
                </span>

                <div>
                  <strong>{{ activity.title }}</strong>
                  <p>{{ activity.description }}</p>
                </div>

                <small>{{ activity.time }}</small>
              </div>
            </div>
          </article>

          <article class="panel consultant-panel">
            <div class="consultant-decoration"></div>

            <span class="consultant-label">
              TU EQUIPO ASIGNADO
            </span>

            <div class="consultant-profile">
              <span>TL</span>

              <div>
                <strong>Equipo TempoLegal</strong>
                <small>Consultor de protección de datos</small>
              </div>
            </div>

            <p>
              Tu próxima reunión de seguimiento está programada para el
              24 de agosto a las 10:00.
            </p>

            <div class="consultant-actions">
              <button type="button">
                Enviar consulta
              </button>

              <button type="button">
                Ver agenda
              </button>
            </div>
          </article>
        </section>
      </main>
    </section>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

.dashboard-shell {
  display: grid;
  grid-template-columns: 270px minmax(0, 1fr);
  min-height: 100vh;
  color: #10213a;
  background: #f3f6fa;
}

.sidebar {
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 22px 18px;
  color: #d8e1ec;
  background:
    radial-gradient(
      circle at 20% 10%,
      rgba(39, 197, 195, 0.1),
      transparent 25%
    ),
    #08172a;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 54px;
  padding: 0 8px;
}

.brand-symbol {
  position: relative;
  display: block;
  width: 31px;
  height: 31px;
  transform: rotate(45deg);
}

.brand-symbol i {
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 3px;
}

.brand-symbol i:nth-child(1) {
  top: 1px;
  left: 1px;
  background: #ffffff;
}

.brand-symbol i:nth-child(2) {
  top: 1px;
  right: 1px;
  background: #27c5c3;
}

.brand-symbol i:nth-child(3) {
  bottom: 1px;
  left: 1px;
  background: #65a5ff;
}

.sidebar-brand > span:nth-child(2) {
  display: flex;
  flex-direction: column;
}

.sidebar-brand small {
  color: #6f8299;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.sidebar-brand strong {
  color: #ffffff;
  font-size: 18px;
}

.sidebar-brand strong span {
  color: #65a5ff;
}

.sidebar-close {
  display: none;
  margin-left: auto;
  color: #ffffff;
  font-size: 23px;
  background: none;
  border: 0;
}

.company-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
  margin: 20px 0 27px;
  padding: 13px;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 12px;
}

.company-avatar {
  display: grid;
  width: 38px;
  height: 38px;
  color: #08253a;
  font-size: 10px;
  font-weight: 900;
  place-items: center;
  background: #8be4df;
  border-radius: 10px;
}

.company-card > div {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 3px;
}

.company-card small {
  color: #6e8299;
  font-size: 6px;
  font-weight: 800;
  letter-spacing: 0.11em;
}

.company-card strong {
  overflow: hidden;
  color: #ffffff;
  font-size: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.company-card div span {
  color: #6f8196;
  font-size: 7px;
}

.company-card button {
  color: #8da0b5;
  background: none;
  border: 0;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.sidebar-nav > small {
  margin: 0 10px 8px;
  color: #53677f;
  font-size: 7px;
  font-weight: 900;
  letter-spacing: 0.13em;
}

.nav-item {
  display: grid;
  grid-template-columns: 28px 1fr auto;
  align-items: center;
  min-height: 45px;
  padding: 0 12px;
  color: #92a3b7;
  font-size: 11px;
  font-weight: 700;
  text-align: left;
  background: transparent;
  border: 0;
  border-radius: 9px;
  transition:
    color 0.2s ease,
    background 0.2s ease;
}

.nav-item > span {
  font-size: 15px;
}

.nav-item:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.055);
}

.nav-item.active {
  color: #ffffff;
  background: #176be8;
  box-shadow: 0 10px 25px rgba(23, 107, 232, 0.23);
}

.nav-item b {
  display: grid;
  width: 19px;
  height: 19px;
  color: #ffffff;
  font-size: 7px;
  place-items: center;
  background: #ef745f;
  border-radius: 50%;
}

.sidebar-support {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 9px;
  margin-top: auto;
  padding: 13px;
  background: rgba(39, 197, 195, 0.08);
  border: 1px solid rgba(39, 197, 195, 0.14);
  border-radius: 11px;
}

.sidebar-support > span {
  display: grid;
  width: 30px;
  height: 30px;
  color: #8be4df;
  font-weight: 900;
  place-items: center;
  background: rgba(39, 197, 195, 0.12);
  border-radius: 9px;
}

.sidebar-support div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.sidebar-support strong {
  color: #ffffff;
  font-size: 9px;
}

.sidebar-support small {
  color: #7690a5;
  font-size: 7px;
}

.sidebar-support button {
  color: #6ededa;
  background: none;
  border: 0;
}

.sidebar-user {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
  margin-top: 13px;
  padding: 14px 8px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.09);
}

.user-avatar {
  display: grid;
  width: 34px;
  height: 34px;
  color: #ffffff;
  font-size: 9px;
  font-weight: 900;
  place-items: center;
  background: linear-gradient(135deg, #176be8, #27c5c3);
  border-radius: 10px;
}

.sidebar-user div {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 3px;
}

.sidebar-user strong {
  overflow: hidden;
  color: #ffffff;
  font-size: 9px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sidebar-user small {
  color: #74879d;
  font-size: 7px;
}

.sidebar-user button {
  color: #8496aa;
  font-size: 17px;
  background: none;
  border: 0;
}

.dashboard-main {
  min-width: 0;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  padding: 0 30px;
  background: rgba(255, 255, 255, 0.94);
  border-bottom: 1px solid #e3e9f0;
  backdrop-filter: blur(16px);
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 13px;
}

.topbar-left > div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.topbar-left small {
  color: #8c99a9;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.topbar-left strong {
  font-size: 16px;
}

.mobile-menu {
  display: none;
  width: 39px;
  height: 39px;
  color: #19334d;
  font-size: 18px;
  background: #ffffff;
  border: 1px solid #dfe6ee;
  border-radius: 9px;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 250px;
  height: 39px;
  padding: 0 10px;
  color: #8492a3;
  background: #f5f7fa;
  border: 1px solid #e1e7ee;
  border-radius: 9px;
}

.search-box input {
  min-width: 0;
  flex: 1;
  background: transparent;
  border: 0;
  outline: none;
}

.search-box input::placeholder {
  color: #98a4b2;
  font-size: 9px;
}

.search-box kbd {
  padding: 3px 5px;
  color: #8e9aa8;
  font-size: 7px;
  background: #ffffff;
  border: 1px solid #dfe5ec;
  border-radius: 4px;
}

.notification-button {
  position: relative;
  width: 39px;
  height: 39px;
  color: #465b72;
  font-size: 19px;
  background: #ffffff;
  border: 1px solid #dfe6ee;
  border-radius: 9px;
}

.notification-button span {
  position: absolute;
  top: -5px;
  right: -5px;
  display: grid;
  width: 17px;
  height: 17px;
  color: #ffffff;
  font-size: 7px;
  font-weight: 900;
  place-items: center;
  background: #ef745f;
  border: 2px solid #ffffff;
  border-radius: 50%;
}

.topbar-profile {
  display: flex;
  align-items: center;
  gap: 9px;
  padding-left: 5px;
}

.topbar-profile > span {
  display: grid;
  width: 36px;
  height: 36px;
  color: #ffffff;
  font-size: 9px;
  font-weight: 900;
  place-items: center;
  background: linear-gradient(135deg, #176be8, #27c5c3);
  border-radius: 10px;
}

.topbar-profile div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.topbar-profile strong {
  font-size: 9px;
}

.topbar-profile small {
  color: #8794a3;
  font-size: 7px;
}

.dashboard-content {
  width: min(1500px, 100%);
  margin: 0 auto;
  padding: 32px;
}

.welcome-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 27px;
}

.welcome-row p {
  margin: 0 0 6px;
  color: #8794a4;
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
}

.welcome-row h1 {
  margin: 0 0 7px;
  font-size: clamp(27px, 3vw, 38px);
  letter-spacing: -0.04em;
}

.welcome-row > div:first-child > span {
  color: #6f7f91;
  font-size: 12px;
}

.demo-label {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  color: #607186;
  font-size: 8px;
  font-weight: 800;
  background: #ffffff;
  border: 1px solid #dfe6ee;
  border-radius: 99px;
}

.demo-label i {
  width: 7px;
  height: 7px;
  background: #27c5c3;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(39, 197, 195, 0.12);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 17px;
}

.stat-card,
.panel {
  background: #ffffff;
  border: 1px solid #e0e7ef;
  border-radius: 14px;
  box-shadow: 0 10px 35px rgba(20, 52, 88, 0.045);
}

.stat-card {
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 20px;
}

.stat-icon {
  display: grid;
  grid-row: span 3;
  width: 42px;
  height: 42px;
  margin-right: 13px;
  font-weight: 900;
  place-items: center;
  border-radius: 11px;
}

.stat-icon.blue {
  color: #176be8;
  background: #eaf3ff;
}

.stat-icon.orange {
  color: #d77933;
  background: #fff0e5;
}

.stat-icon.cyan {
  color: #078d8a;
  background: #dff8f6;
}

.stat-icon.purple {
  color: #7656cb;
  background: #f0ebff;
}

.stat-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.stat-heading span {
  color: #7d8b9b;
  font-size: 8px;
  font-weight: 800;
  text-transform: uppercase;
}

.stat-heading button {
  color: #94a0ae;
  background: none;
  border: 0;
}

.stat-card > strong {
  margin: 6px 0 3px;
  font-size: 20px;
}

.stat-card > small {
  color: #8795a4;
  font-size: 8px;
}

.primary-grid {
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 17px;
}

.panel {
  padding: 24px;
}

.panel-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}

.panel-heading > div:first-child {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.panel-heading > div:first-child > span {
  color: #176be8;
  font-size: 7px;
  font-weight: 900;
  letter-spacing: 0.13em;
}

.panel-heading h2 {
  margin: 0;
  font-size: 18px;
}

.status-chip {
  padding: 7px 10px;
  color: #167a6e;
  font-size: 7px;
  font-weight: 800;
  background: #e3f8f4;
  border-radius: 99px;
}

.progress-summary {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 28px;
}

.progress-summary div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.progress-summary strong {
  font-size: 13px;
}

.progress-summary span {
  color: #8491a1;
  font-size: 8px;
}

.progress-summary b {
  color: #176be8;
  font-size: 20px;
}

.progress-bar {
  height: 7px;
  margin: 10px 0 26px;
  overflow: hidden;
  background: #e9eef4;
  border-radius: 99px;
}

.progress-bar span {
  display: block;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, #176be8, #27c5c3);
  border-radius: inherit;
}

.phase-track {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 26px;
}

.phase {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
}

.phase:not(:last-child)::after {
  position: absolute;
  z-index: 0;
  top: 15px;
  left: calc(50% + 16px);
  width: calc(100% - 32px);
  height: 1px;
  content: "";
  background: #dce4ed;
}

.phase.completed:not(:last-child)::after {
  background: #27c5c3;
}

.phase > span {
  position: relative;
  z-index: 2;
  display: grid;
  width: 31px;
  height: 31px;
  color: #8b98a7;
  font-size: 8px;
  font-weight: 900;
  place-items: center;
  background: #ffffff;
  border: 1px solid #d3dce6;
  border-radius: 50%;
}

.phase.completed > span {
  color: #ffffff;
  background: #27c5c3;
  border-color: #27c5c3;
}

.phase.active > span {
  color: #ffffff;
  background: #176be8;
  border-color: #176be8;
  box-shadow: 0 0 0 5px rgba(23, 107, 232, 0.1);
}

.phase strong {
  font-size: 8px;
}

.phase small {
  color: #9aa5b2;
  font-size: 6px;
}

.next-step {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 13px;
  padding: 17px;
  background: #f3f7fc;
  border: 1px solid #e0e8f2;
  border-radius: 11px;
}

.next-step-icon {
  display: grid;
  width: 40px;
  height: 40px;
  color: #ffffff;
  place-items: center;
  background: #176be8;
  border-radius: 10px;
}

.next-step div {
  display: flex;
  flex-direction: column;
}

.next-step small {
  color: #176be8;
  font-size: 6px;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.next-step strong {
  margin: 4px 0;
  font-size: 10px;
}

.next-step p {
  margin: 0;
  color: #7b8999;
  font-size: 8px;
}

.next-step button {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 11px;
  color: #ffffff;
  font-size: 8px;
  font-weight: 800;
  background: #0b1d35;
  border: 0;
  border-radius: 7px;
}

.text-button {
  padding: 0;
  color: #176be8;
  font-size: 8px;
  font-weight: 800;
  background: none;
  border: 0;
}

.task-list {
  margin-top: 18px;
}

.task {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 11px;
  padding: 15px 0;
  border-bottom: 1px solid #edf0f4;
}

.task-check {
  width: 20px;
  height: 20px;
  background: #ffffff;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
}

.task > div:nth-child(2) {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.task strong {
  font-size: 9px;
}

.task div span {
  color: #8a97a5;
  font-size: 7px;
}

.task-meta {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 5px;
}

.task-meta small {
  color: #8290a0;
  font-size: 7px;
}

.task-meta b {
  padding: 3px 6px;
  color: #aa7932;
  font-size: 6px;
  background: #fff3dd;
  border-radius: 99px;
}

.task-meta b.high {
  color: #b34f46;
  background: #ffebe8;
}

.panel-footer-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
  padding: 11px 12px;
  color: #176be8;
  font-size: 8px;
  font-weight: 800;
  background: #f3f7fc;
  border: 0;
  border-radius: 7px;
}

.secondary-grid {
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 17px;
  margin-top: 17px;
}

.activity-list {
  margin-top: 17px;
}

.activity {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 13px 0;
  border-bottom: 1px solid #edf0f4;
}

.activity:last-child {
  border-bottom: 0;
}

.activity-avatar {
  display: grid;
  width: 35px;
  height: 35px;
  color: #ffffff;
  font-size: 8px;
  font-weight: 900;
  place-items: center;
  border-radius: 10px;
}

.activity-avatar.blue {
  background: #176be8;
}

.activity-avatar.cyan {
  background: #18a6a4;
}

.activity-avatar.navy {
  background: #0b1d35;
}

.activity div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.activity strong {
  font-size: 9px;
}

.activity p {
  margin: 0;
  color: #798898;
  font-size: 8px;
}

.activity > small {
  color: #8a97a5;
  font-size: 7px;
}

.consultant-panel {
  position: relative;
  overflow: hidden;
  color: #ffffff;
  background:
    linear-gradient(
      145deg,
      rgba(23, 107, 232, 0.2),
      transparent
    ),
    #0b1d35;
  border-color: #0b1d35;
}

.consultant-decoration {
  position: absolute;
  top: -100px;
  right: -90px;
  width: 220px;
  height: 220px;
  border: 40px solid rgba(39, 197, 195, 0.06);
  border-radius: 50%;
}

.consultant-label {
  position: relative;
  color: #6fe0dc;
  font-size: 7px;
  font-weight: 900;
  letter-spacing: 0.13em;
}

.consultant-profile {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 22px 0;
}

.consultant-profile > span {
  display: grid;
  width: 48px;
  height: 48px;
  color: #0b1d35;
  font-size: 12px;
  font-weight: 900;
  place-items: center;
  background: #83e2dd;
  border-radius: 13px;
}

.consultant-profile div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.consultant-profile strong {
  font-size: 12px;
}

.consultant-profile small {
  color: #90a4b9;
  font-size: 7px;
}

.consultant-panel > p {
  position: relative;
  color: #afbdcc;
  font-size: 9px;
  line-height: 1.65;
}

.consultant-actions {
  position: relative;
  display: flex;
  gap: 8px;
  margin-top: 21px;
}

.consultant-actions button {
  min-height: 35px;
  padding: 0 12px;
  color: #ffffff;
  font-size: 8px;
  font-weight: 800;
  background: #176be8;
  border: 0;
  border-radius: 7px;
}

.consultant-actions button:last-child {
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.13);
}

.sidebar-overlay {
  display: none;
}

@media (max-width: 1180px) {
  .dashboard-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: fixed;
    left: 0;
    visibility: hidden;
    width: 270px;
    transform: translateX(-100%);
    transition:
      transform 0.25s ease,
      visibility 0.25s ease;
  }

  .sidebar--open {
    visibility: visible;
    transform: translateX(0);
  }

  .sidebar-close,
  .mobile-menu {
    display: block;
  }

  .sidebar-overlay {
    position: fixed;
    z-index: 25;
    inset: 0;
    display: block;
    background: rgba(4, 14, 27, 0.55);
    backdrop-filter: blur(3px);
  }
}

@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .primary-grid,
  .secondary-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .topbar {
    padding: 0 17px;
  }

  .search-box,
  .topbar-profile {
    display: none;
  }

  .dashboard-content {
    padding: 24px 17px;
  }

  .welcome-row {
    align-items: flex-start;
    flex-direction: column;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .phase-track {
    overflow-x: auto;
    grid-template-columns: repeat(5, 110px);
    padding-bottom: 10px;
  }

  .next-step {
    grid-template-columns: auto 1fr;
  }

  .next-step button {
    grid-column: 1 / -1;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .panel {
    padding: 19px;
  }

  .topbar-left strong {
    font-size: 14px;
  }

  .task,
  .activity {
    grid-template-columns: auto 1fr;
  }

  .task-meta,
  .activity > small {
    grid-column: 2;
    align-items: flex-start;
  }
}
</style>