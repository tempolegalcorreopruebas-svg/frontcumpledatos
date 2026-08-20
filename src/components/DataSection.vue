<script setup>
const dataGroups = [
  {
    number: '01',
    title: 'Empresa',
    description:
      'Actividad, estructura, sedes, responsables y canales de atención.',
  },
  {
    number: '02',
    title: 'Procesos',
    description:
      'Cómo se recolectan, usan, conservan, comparten y eliminan los datos.',
  },
  {
    number: '03',
    title: 'Personas',
    description:
      'Categorías de titulares y tipos de datos, sin cargar bases reales.',
  },
  {
    number: '04',
    title: 'Terceros',
    description:
      'Proveedores, contratos, encargados y posibles transferencias.',
  },
  {
    number: '05',
    title: 'Seguridad',
    description:
      'Controles actuales, accesos, respaldos y gestión de incidentes.',
  },
  {
    number: '06',
    title: 'Evidencias',
    description:
      'Políticas, formatos o respaldos necesarios, con acceso restringido.',
  },
]
</script>

<template>
  <section id="informacion" class="data-section section">
    <div class="container data-grid">
      <div class="data-copy">
        <p class="data-kicker">
          Qué necesitaremos conocer
        </p>

        <h2>
          La información mínima para entender tu realidad.
        </h2>

        <p class="data-description">
          Durante el levantamiento no buscamos llenar formularios por llenar.
          Cada dato solicitado ayuda a identificar obligaciones, riesgos o
          acciones necesarias.
        </p>

        <div class="privacy-callout">
          <span>!</span>

          <p>
            <strong>
              No cargamos bases reales de clientes, empleados o pacientes.
            </strong>

            Registramos categorías, finalidades, medidas y evidencias limitadas.
            Siempre aplicamos minimización y acceso restringido.
          </p>
        </div>
      </div>

      <div class="data-list">
        <article
          v-for="group in dataGroups"
          :key="group.number"
        >
          <span>{{ group.number }}</span>

          <div>
            <h3>{{ group.title }}</h3>
            <p>{{ group.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.data-section {
  background: #ffffff;
}

.data-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 100px;
}

.data-kicker {
  margin: 0 0 18px;
  color: var(--blue);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.data-copy h2 {
  margin: 0;
  color: var(--ink);
  font-size: clamp(39px, 4.4vw, 60px);
  line-height: 1.05;
  letter-spacing: -0.055em;
}

.data-description {
  margin: 26px 0;
  color: var(--text);
  font-size: 14px;
  line-height: 1.8;
}

.privacy-callout {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  background: var(--cyan-soft);
  border-radius: 9px;
}

.privacy-callout > span {
  display: grid;
  flex: 0 0 27px;
  width: 27px;
  height: 27px;
  color: #078a87;
  font-weight: 900;
  place-items: center;
  background: #ffffff;
  border-radius: 50%;
}

.privacy-callout p {
  margin: 0;
  color: #376664;
  font-size: 11px;
  line-height: 1.65;
}

.privacy-callout strong {
  color: #114e4c;
}

.data-list {
  border-top: 1px solid var(--line);
}

.data-list article {
  display: grid;
  grid-template-columns: 45px 1fr;
  gap: 20px;
  min-height: 94px;
  padding: 20px 0;
  border-bottom: 1px solid var(--line);
}

.data-list article > span {
  padding-top: 5px;
  color: var(--blue);
  font-size: 9px;
  font-weight: 900;
}

.data-list h3 {
  margin: 0 0 6px;
  font-size: 17px;
}

.data-list p {
  margin: 0;
  color: var(--text);
  font-size: 11px;
  line-height: 1.6;
}

@media (max-width: 1020px) {
  .data-grid {
    gap: 60px;
  }
}

@media (max-width: 760px) {
  .data-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 480px) {
  .data-copy h2 {
    font-size: 40px;
  }
}
</style>