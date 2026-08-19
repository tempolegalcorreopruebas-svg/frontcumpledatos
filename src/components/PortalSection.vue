<script setup>
const emit = defineEmits(['open-portal'])
</script>

<template>
  <section id="portal" class="portal-section section">
    <div class="container portal-grid">
      <div class="portal-showcase">
        <div class="portal-window">
          <div class="window-head">
            <span class="mini-logo">C</span>
            <strong>CumpliDatos</strong>
            <small>Empresa Ejemplo S.A.</small>
          </div>

          <div class="window-body">
            <aside>
              <span class="selected">Resumen</span>
              <span>Implementación</span>
              <span>Requerimientos</span>
              <span>Documentos</span>
              <span>Seguimiento mensual</span>
              <span>Reportes</span>
            </aside>

            <div class="window-content">
              <div class="window-title">
                <div>
                  <small>PROCESO ACTUAL</small>
                  <h3>Implementación LOPDP</h3>
                </div>

                <span>En desarrollo</span>
              </div>

              <div class="milestone">
                <i class="complete"></i>

                <div>
                  <strong>Diagnóstico inicial</strong>
                  <small>Finalizado · Documento disponible</small>
                </div>

                <b>Ver</b>
              </div>

              <div class="milestone">
                <i class="working"></i>

                <div>
                  <strong>Levantamiento de tratamientos</strong>
                  <small>Requiere información de la empresa</small>
                </div>

                <b>Atender</b>
              </div>

              <div class="milestone">
                <i></i>

                <div>
                  <strong>Políticas y procedimientos</strong>
                  <small>Programado para la siguiente fase</small>
                </div>

                <b>Próximo</b>
              </div>

              <div class="observation">
                <small>ÚLTIMA OBSERVACIÓN</small>

                <p>
                  Validar con Talento Humano el plazo de conservación de
                  expedientes.
                </p>

                <span>Equipo TempoLegal · Hoy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="portal-copy">
        <p class="portal-kicker">El portal Cumplidatos</p>

        <h2>
          Sabes qué se está haciendo, qué falta y quién debe actuar.
        </h2>

        <p class="portal-description">
          El portal no reemplaza el acompañamiento profesional: lo hace visible,
          ordenado y trazable para todos los responsables autorizados.
        </p>

        <ul>
          <li>
            <i class="check">✓</i>

            <span>
              <strong>Consulta avances</strong> y próximos pasos de la
              implementación.
            </span>
          </li>

          <li>
            <i class="check">✓</i>

            <span>
              <strong>Atiende requerimientos</strong> de información sin perder
              el contexto.
            </span>
          </li>

          <li>
            <i class="check">✓</i>

            <span>
              <strong>Accede a documentos</strong>, versiones y observaciones.
            </span>
          </li>

          <li>
            <i class="check">✓</i>

            <span>
              <strong>Completa el seguimiento mensual</strong> y reporta
              cambios.
            </span>
          </li>

          <li>
            <i class="check">✓</i>

            <span>
              <strong>Conserva trazabilidad</strong> de decisiones, responsables
              y evidencias.
            </span>
          </li>
        </ul>

        <button
          class="portal-button"
          type="button"
          @click="emit('open-portal')"
        >
          Ver acceso demostrativo
          <span class="arrow">↗</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portal-section {
  overflow: hidden;
  color: #ffffff;
  background: #0a1a2f;
}

.portal-grid {
  display: grid;
  grid-template-columns: 1.12fr 0.88fr;
  align-items: center;
  gap: 85px;
}

.portal-showcase {
  position: relative;
}

.portal-showcase::before {
  position: absolute;
  top: -110px;
  left: -120px;
  width: 470px;
  height: 470px;
  content: "";
  background: radial-gradient(
    circle,
    rgba(39, 197, 195, 0.17),
    transparent 67%
  );
  border-radius: 50%;
}

.portal-window {
  position: relative;
  z-index: 2;
  overflow: hidden;
  color: var(--ink);
  background: #ffffff;
  border-radius: 13px;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.38);
  transform: perspective(1300px) rotateY(3deg);
}

.window-head {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 56px;
  padding: 0 18px;
  border-bottom: 1px solid #e6ebf1;
}

.mini-logo {
  display: grid;
  width: 24px;
  height: 24px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 900;
  place-items: center;
  background: var(--blue);
  border-radius: 6px;
}

.window-head strong {
  font-size: 10px;
}

.window-head small {
  margin-left: auto;
  color: #8995a5;
  font-size: 7px;
}

.window-body {
  display: grid;
  grid-template-columns: 128px 1fr;
  min-height: 423px;
}

.window-body aside {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 24px 10px;
  background: #f3f6fa;
  border-right: 1px solid #e1e7ee;
}

.window-body aside span {
  padding: 9px 8px;
  color: #6e7d91;
  font-size: 7px;
  border-radius: 5px;
}

.window-body aside span.selected {
  color: #ffffff;
  font-weight: 800;
  background: var(--blue);
}

.window-content {
  padding: 27px;
}

.window-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.window-title small {
  color: #8c98a7;
  font-size: 7px;
  letter-spacing: 0.12em;
}

.window-title h3 {
  margin: 4px 0 0;
  font-size: 15px;
}

.window-title > span {
  padding: 6px 8px;
  color: var(--blue);
  font-size: 7px;
  font-weight: 800;
  background: var(--sky);
  border-radius: 99px;
}

.milestone {
  display: grid;
  grid-template-columns: 12px 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 15px 0;
  border-bottom: 1px solid #edf0f4;
}

.milestone > i {
  width: 10px;
  height: 10px;
  border: 2px solid #cbd4df;
  border-radius: 50%;
}

.milestone > i.complete {
  background: var(--cyan);
  border-color: var(--cyan);
}

.milestone > i.working {
  background: var(--blue);
  border-color: var(--blue);
  box-shadow: inset 0 0 0 2px #ffffff;
}

.milestone div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.milestone strong {
  font-size: 9px;
}

.milestone small {
  color: #8490a1;
  font-size: 7px;
}

.milestone b {
  color: var(--blue);
  font-size: 7px;
}

.observation {
  margin-top: 16px;
  padding: 12px 14px;
  background: var(--sky);
  border-left: 3px solid var(--blue);
  border-radius: 0 6px 6px 0;
}

.observation small {
  color: var(--blue);
  font-size: 6px;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.observation p {
  margin: 6px 0;
  color: #40536c;
  font-size: 8px;
}

.observation span {
  color: #8995a4;
  font-size: 6px;
}

.portal-kicker {
  margin: 0 0 18px;
  color: #69e4df;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.portal-copy h2 {
  margin: 0;
  font-size: clamp(38px, 4.2vw, 56px);
  line-height: 1.05;
  letter-spacing: -0.055em;
}

.portal-description {
  margin: 26px 0;
  color: #acbacb;
  font-size: 14px;
  line-height: 1.8;
}

.portal-copy ul {
  margin: 0 0 27px;
  padding: 0;
  list-style: none;
}

.portal-copy li {
  display: flex;
  gap: 10px;
  padding: 11px 0;
  color: #b4c0cf;
  font-size: 11px;
  line-height: 1.55;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.portal-copy li strong {
  color: #ffffff;
}

.check {
  display: inline-grid;
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
  color: #6fe1dd;
  font-size: 11px;
  font-style: normal;
  font-weight: 900;
  place-items: center;
  background: rgba(39, 197, 195, 0.13);
  border-radius: 50%;
}

.portal-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 51px;
  padding: 0 20px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 7px;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.portal-button:hover {
  border-color: #6fe1dd;
  transform: translateY(-2px);
}

@media (max-width: 1020px) {
  .portal-grid {
    grid-template-columns: 1fr;
    gap: 70px;
  }

  .portal-showcase {
    max-width: 730px;
  }
}

@media (max-width: 760px) {
  .portal-showcase {
    overflow-x: auto;
    padding-bottom: 10px;
  }

  .portal-window {
    min-width: 610px;
    transform: none;
  }

  .portal-copy h2 {
    font-size: 42px;
  }
}
</style>