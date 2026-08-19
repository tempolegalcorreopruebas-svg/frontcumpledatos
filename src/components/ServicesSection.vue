<script setup>
const services = [
  {
    id: '01',
    title: 'Diagnóstico y hoja de ruta',
    text: 'Revisamos cómo funciona tu organización, detectamos brechas y definimos prioridades, responsables y plazos.',
    deliverables: [
      'Diagnóstico inicial',
      'Matriz de brechas',
      'Plan de trabajo priorizado',
    ],
  },
  {
    id: '02',
    title: 'Implementación de la LOPDP',
    text: 'Construimos contigo las políticas, registros, procedimientos y controles que necesita la empresa.',
    deliverables: [
      'Registro de actividades',
      'Políticas y avisos',
      'Procedimientos internos',
    ],
  },
  {
    id: '03',
    title: 'Auditoría y actualización',
    text: 'Revisamos lo implementado, identificamos cambios y mantenemos las medidas alineadas con la operación real.',
    deliverables: [
      'Revisión de evidencias',
      'Hallazgos y acciones',
      'Actualización documental',
    ],
  },
  {
    id: '04',
    title: 'DPD y seguimiento continuo',
    text: 'Acompañamos mensualmente a la organización, atendemos consultas y supervisamos el programa de protección de datos.',
    deliverables: [
      'Checklist mensual',
      'Observaciones del DPD',
      'Reportes de seguimiento',
    ],
  },
]
</script>

<template>
  <section id="servicios" class="services-section section">
    <div class="container">
      <div class="services-heading">
        <div>
          <p class="services-kicker">
            Qué haremos por tu empresa
          </p>

          <h2>
            Del diagnóstico al seguimiento permanente.
          </h2>
        </div>

        <p>
          No entregamos una carpeta y desaparecemos. Construimos el programa
          contigo y lo mantenemos conectado con la operación real de la
          empresa.
        </p>
      </div>

      <div class="services-grid">
        <article
          v-for="service in services"
          :key="service.id"
          class="service-card"
        >
          <div class="service-top">
            <span>{{ service.id }}</span>
            <i aria-hidden="true"></i>
          </div>

          <h3>{{ service.title }}</h3>

          <p>{{ service.text }}</p>

          <div class="deliverables">
            <small>Incluye, según el alcance:</small>

            <span
              v-for="item in service.deliverables"
              :key="item"
            >
              <i class="check">✓</i>
              {{ item }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  color: #ffffff;
  background:
    radial-gradient(
      circle at 90% 10%,
      rgba(39, 197, 195, 0.12),
      transparent 27%
    ),
    var(--navy);
}

.services-heading {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  align-items: end;
  gap: 100px;
  margin-bottom: 54px;
}

.services-kicker {
  margin: 0 0 18px;
  color: #69e4df;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.services-heading h2 {
  max-width: 680px;
  margin: 0;
  color: #ffffff;
  font-size: clamp(39px, 4.4vw, 60px);
  line-height: 1.05;
  letter-spacing: -0.055em;
}

.services-heading > p {
  margin: 0 0 6px;
  color: #aebed0;
  font-size: 14px;
  line-height: 1.75;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.service-card {
  display: flex;
  min-height: 340px;
  flex-direction: column;
  padding: 29px;
  color: var(--ink);
  background: #ffffff;
  border-radius: 12px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.service-card:hover {
  box-shadow: 0 25px 55px rgba(0, 0, 0, 0.2);
  transform: translateY(-6px);
}

.service-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.service-top > span {
  color: var(--blue);
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.service-top i {
  position: relative;
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, var(--sky), var(--cyan-soft));
  border-radius: 50%;
}

.service-top i::after {
  position: absolute;
  top: 14px;
  left: 14px;
  width: 10px;
  height: 10px;
  content: "";
  background: var(--blue);
  border-radius: 2px;
  transform: rotate(45deg);
}

.service-card h3 {
  margin: 29px 0 12px;
  font-size: 24px;
  letter-spacing: -0.035em;
}

.service-card > p {
  max-width: 470px;
  margin: 0;
  color: var(--text);
  font-size: 13px;
  line-height: 1.75;
}

.deliverables {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid var(--line);
}

.deliverables small {
  grid-column: 1 / -1;
  margin-bottom: 3px;
  color: #8995a6;
  font-size: 8px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.deliverables span {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #526176;
  font-size: 10px;
}

.deliverables .check {
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

@media (max-width: 760px) {
  .services-heading {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    min-height: 360px;
  }
}

@media (max-width: 480px) {
  .services-heading h2 {
    font-size: 40px;
  }

  .deliverables {
    grid-template-columns: 1fr;
  }
}
</style>