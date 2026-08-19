<script setup>
import processImage from '../assets/images/cumplidatos-proceso.webp'

const processSteps = [
  {
    number: '01',
    phase: 'Fase 1',
    title: 'Reunión inicial',
    description:
      'Entendemos el negocio, su estructura, sus necesidades y el punto de partida.',
  },
  {
    number: '02',
    phase: 'Fase 2',
    title: 'Levantamiento',
    description:
      'Recopilamos información sobre procesos, datos, proveedores, contratos y controles existentes.',
  },
  {
    number: '03',
    phase: 'Fase 3',
    title: 'Diagnóstico',
    description:
      'Identificamos brechas, riesgos y obligaciones aplicables; luego priorizamos el trabajo.',
  },
  {
    number: '04',
    phase: 'Fase 4',
    title: 'Implementación',
    description:
      'Desarrollamos documentos, controles y procedimientos junto con los responsables internos.',
  },
  {
    number: '05',
    phase: 'Acompañamiento continuo',
    title: 'Seguimiento',
    description:
      'Verificamos avances, registramos evidencias y acompañamos los cambios de la organización.',
  },
]
</script>

<template>
  <section id="proceso" class="process-section section">
    <div class="container process-grid">
      <div class="process-intro">
        <p class="process-kicker">Cómo trabajamos</p>

        <h2>
          Un proceso que tu equipo puede entender.
        </h2>

        <p class="process-description">
          Cada fase tiene un objetivo, responsables y entregables concretos. El
          avance queda disponible para consulta en el portal.
        </p>

        <a class="process-link" href="#contacto">
          Conversemos sobre tu empresa
          <span class="arrow">↗</span>
        </a>

        <figure class="process-photo">
          <img
            :src="processImage"
            alt="Equipo empresarial revisando un proceso de protección de datos con su asesor"
            loading="lazy"
          />

          <figcaption>
            <span>Trabajo colaborativo</span>
            <strong>TempoLegal + tu equipo</strong>
          </figcaption>
        </figure>
      </div>

      <div class="process-list">
        <article
          v-for="step in processSteps"
          :key="step.number"
          class="process-item"
        >
          <span>{{ step.number }}</span>

          <div>
            <small>{{ step.phase }}</small>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process-section {
  background: var(--paper);
}

.process-grid {
  display: grid;
  grid-template-columns: 0.78fr 1.22fr;
  gap: 100px;
}

.process-intro {
  position: sticky;
  top: 105px;
  align-self: start;
}

.process-kicker {
  margin: 0 0 18px;
  color: var(--blue);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.process-intro h2 {
  margin: 0;
  color: var(--ink);
  font-size: clamp(39px, 4.4vw, 60px);
  line-height: 1.05;
  letter-spacing: -0.055em;
}

.process-description {
  margin: 26px 0;
  color: var(--text);
  font-size: 14px;
  line-height: 1.8;
}

.process-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--blue);
  font-size: 12px;
  font-weight: 800;
}

.process-link .arrow {
  transition: transform 0.2s ease;
}

.process-link:hover .arrow {
  transform: translate(3px, -3px);
}

.process-photo {
  position: relative;
  height: 235px;
  margin: 33px 0 0;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 20px 45px rgba(26, 62, 102, 0.14);
}

.process-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.process-photo:hover img {
  transform: scale(1.04);
}

.process-photo::after {
  position: absolute;
  inset: 0;
  content: "";
  background: linear-gradient(
    180deg,
    transparent 40%,
    rgba(6, 24, 45, 0.72)
  );
}

.process-photo figcaption {
  position: absolute;
  z-index: 2;
  right: 18px;
  bottom: 15px;
  left: 18px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 15px;
  color: #ffffff;
}

.process-photo figcaption span {
  color: #79e2de;
  font-size: 7px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.process-photo figcaption strong {
  font-size: 10px;
}

.process-list {
  border-top: 1px solid #cad5e1;
}

.process-item {
  display: grid;
  grid-template-columns: 54px 1fr;
  gap: 23px;
  min-height: 143px;
  padding: 27px 0;
  border-bottom: 1px solid #cad5e1;
}

.process-item > span {
  display: grid;
  width: 39px;
  height: 39px;
  color: var(--blue);
  font-size: 9px;
  font-weight: 900;
  place-items: center;
  background: #ffffff;
  border: 1px solid #cad5e1;
  border-radius: 50%;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.process-item:hover > span {
  color: #ffffff;
  background: var(--blue);
  border-color: var(--blue);
  transform: scale(1.08);
}

.process-item small {
  color: #8793a3;
  font-size: 8px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.process-item h3 {
  margin: 5px 0 7px;
  font-size: 22px;
  letter-spacing: -0.025em;
}

.process-item p {
  max-width: 620px;
  margin: 0;
  color: var(--text);
  font-size: 12px;
  line-height: 1.7;
}

@media (max-width: 1020px) {
  .process-grid {
    gap: 60px;
  }
}

@media (max-width: 760px) {
  .process-grid {
    grid-template-columns: 1fr;
    gap: 55px;
  }

  .process-intro {
    position: static;
  }

  .process-photo {
    height: 310px;
  }
}

@media (max-width: 480px) {
  .process-intro h2 {
    font-size: 40px;
  }

  .process-photo {
    height: 245px;
  }

  .process-item {
    grid-template-columns: 45px 1fr;
    gap: 14px;
  }
}
</style>