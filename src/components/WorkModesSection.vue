<template>
  <section class="work-modes section">
    <div class="container">
      <div class="modes-heading">
        <p class="modes-kicker">Dos formas de acompañamiento</p>

        <h2>
          Nos adaptamos al momento de tu organización.
        </h2>
      </div>

      <div class="mode-grid">
        <article class="mode-card implementation">
          <div class="mode-badge">Para comenzar</div>

          <p class="mode-time">
            Proceso estimado: 3 a 5 meses*
          </p>

          <h3>Implementación inicial</h3>

          <p class="mode-description">
            Para empresas que necesitan construir o completar su programa de
            protección de datos desde el diagnóstico.
          </p>

          <div class="role-columns">
            <div>
              <small>TempoLegal</small>

              <span><i class="check">✓</i> Levanta y analiza información</span>
              <span><i class="check">✓</i> Desarrolla documentos y controles</span>
              <span><i class="check">✓</i> Orienta la implementación</span>
            </div>

            <div>
              <small>Tu empresa</small>

              <span><i class="check">✓</i> Designa responsables</span>
              <span><i class="check">✓</i> Entrega y valida información</span>
              <span><i class="check">✓</i> Aplica las acciones acordadas</span>
            </div>
          </div>
        </article>

        <article class="mode-card continuous">
          <div class="mode-badge">Para mantener</div>

          <p class="mode-time">
            Servicio mensual continuo
          </p>

          <h3>DPD y seguimiento</h3>

          <p class="mode-description">
            Para organizaciones que ya tienen avances y requieren supervisión,
            actualización y acompañamiento permanente.
          </p>

          <div class="role-columns">
            <div>
              <small>TempoLegal / DPD</small>

              <span><i class="check">✓</i> Revisa el checklist mensual</span>
              <span><i class="check">✓</i> Emite observaciones y reportes</span>
              <span><i class="check">✓</i> Atiende consultas y cambios</span>
            </div>

            <div>
              <small>Tu empresa</small>

              <span><i class="check">✓</i> Reporta novedades</span>
              <span><i class="check">✓</i> Carga evidencias autorizadas</span>
              <span><i class="check">✓</i> Ejecuta acciones pendientes</span>
            </div>
          </div>
        </article>
      </div>

      <p class="time-note">
        *El plazo depende del tamaño, complejidad y nivel de colaboración de la
        organización.
      </p>
    </div>
  </section>
</template>

<style scoped>
.work-modes {
  background: #ffffff;
}

.modes-heading {
  max-width: 760px;
  margin: 0 auto 58px;
  text-align: center;
}

.modes-kicker {
  margin: 0 0 18px;
  color: var(--blue);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.modes-heading h2 {
  margin: 0;
  color: var(--ink);
  font-size: clamp(39px, 4.4vw, 60px);
  line-height: 1.05;
  letter-spacing: -0.055em;
}

.mode-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.mode-card {
  position: relative;
  overflow: hidden;
  padding: 34px;
  border: 1px solid var(--line);
  border-radius: 14px;
}

.mode-card::after {
  position: absolute;
  top: -110px;
  right: -100px;
  width: 210px;
  height: 210px;
  content: "";
  border: 35px solid rgba(23, 107, 232, 0.06);
  border-radius: 50%;
  pointer-events: none;
}

.mode-card.continuous {
  color: #ffffff;
  background: var(--navy);
  border-color: var(--navy);
}

.mode-card.continuous::after {
  border-color: rgba(39, 197, 195, 0.06);
}

.mode-badge {
  position: relative;
  z-index: 2;
  display: inline-flex;
  padding: 7px 10px;
  color: var(--blue);
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: var(--sky);
  border-radius: 99px;
}

.continuous .mode-badge {
  color: #72e4df;
  background: rgba(39, 197, 195, 0.13);
}

.mode-time {
  margin: 17px 0 7px;
  color: #78869a;
  font-size: 10px;
}

.continuous .mode-time {
  color: #9aabbe;
}

.mode-card h3 {
  margin: 0 0 13px;
  font-size: 31px;
  letter-spacing: -0.04em;
}

.mode-description {
  max-width: 490px;
  margin: 0;
  color: var(--text);
  font-size: 13px;
  line-height: 1.7;
}

.continuous .mode-description {
  color: #b5c1d0;
}

.role-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 27px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
}

.continuous .role-columns {
  border-color: rgba(255, 255, 255, 0.15);
}

.role-columns > div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.role-columns small {
  margin-bottom: 2px;
  color: var(--blue);
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.continuous .role-columns small {
  color: #6de0db;
}

.role-columns span {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  color: #53637a;
  font-size: 10px;
  line-height: 1.45;
}

.continuous .role-columns span {
  color: #c0cad6;
}

.check {
  display: inline-grid;
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
  color: #078d8a;
  font-size: 11px;
  font-style: normal;
  font-weight: 900;
  place-items: center;
  background: var(--cyan-soft);
  border-radius: 50%;
}

.continuous .check {
  color: #70e5e0;
  background: rgba(39, 197, 195, 0.14);
}

.time-note {
  margin: 18px 0 0;
  color: #8994a4;
  font-size: 9px;
  text-align: center;
}

@media (max-width: 760px) {
  .modes-heading {
    margin-bottom: 40px;
  }

  .mode-grid {
    grid-template-columns: 1fr;
  }

  .role-columns {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .modes-heading h2 {
    font-size: 40px;
  }

  .mode-card {
    padding: 25px;
  }
}
</style>