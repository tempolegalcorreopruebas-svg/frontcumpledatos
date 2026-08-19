<script setup>
const questions = [
  {
    question: '¿Cumplidatos es un software que se compra por separado?',
    answer:
      'No. Es el portal privado que TempoLegal utiliza para acompañar sus servicios de implementación, auditoría, DPD y seguimiento.',
  },
  {
    question: '¿La plataforma garantiza que mi empresa cumple?',
    answer:
      'No. La plataforma ayuda a organizar y demostrar la gestión. El cumplimiento depende de las decisiones, medidas y acciones efectivamente aplicadas por la organización.',
  },
  {
    question: '¿Debemos subir nuestras bases de datos?',
    answer:
      'No. No se solicitan bases operativas con datos personales. Se registran categorías, procesos y evidencias limitadas cuando sean necesarias.',
  },
  {
    question: '¿Quién debe participar dentro de la empresa?',
    answer:
      'Depende de la organización, pero normalmente participan gerencia, área legal, tecnología, talento humano, comercial y los responsables de procesos clave.',
  },
  {
    question: '¿Qué ocurre después de la implementación?',
    answer:
      'La empresa puede continuar con auditorías periódicas o un servicio mensual de DPD y seguimiento para mantener el programa actualizado.',
  },
]
</script>

<template>
  <section id="preguntas" class="faq-section section">
    <div class="container faq-grid">
      <div class="faq-heading">
        <p class="faq-kicker">Preguntas frecuentes</p>

        <h2>Antes de comenzar.</h2>

        <p>
          Estas respuestas aclaran el alcance de la solución y la participación
          que necesitará tu organización.
        </p>
      </div>

      <div class="faq-list">
        <details
          v-for="(item, index) in questions"
          :key="item.question"
          :open="index === 0"
        >
          <summary>
            {{ item.question }}
            <span>＋</span>
          </summary>

          <p>{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  background: var(--paper);
}

.faq-grid {
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: 100px;
}

.faq-kicker {
  margin: 0 0 18px;
  color: var(--blue);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.faq-heading h2 {
  margin: 0;
  color: var(--ink);
  font-size: clamp(39px, 4.4vw, 60px);
  line-height: 1.05;
  letter-spacing: -0.055em;
}

.faq-heading > p:last-child {
  max-width: 370px;
  color: var(--text);
  font-size: 13px;
  line-height: 1.8;
}

.faq-list {
  border-top: 1px solid #cfd8e2;
}

.faq-list details {
  border-bottom: 1px solid #cfd8e2;
}

.faq-list summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 78px;
  font-size: 15px;
  font-weight: 800;
  list-style: none;
  cursor: pointer;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list summary span {
  color: var(--blue);
  font-size: 21px;
  font-weight: 300;
  transition: transform 0.2s ease;
}

.faq-list details[open] summary span {
  transform: rotate(45deg);
}

.faq-list details p {
  margin: -4px 48px 24px 0;
  color: var(--text);
  font-size: 12px;
  line-height: 1.75;
}

@media (max-width: 1020px) {
  .faq-grid {
    gap: 60px;
  }
}

@media (max-width: 760px) {
  .faq-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 480px) {
  .faq-heading h2 {
    font-size: 40px;
  }

  .faq-list summary {
    font-size: 14px;
  }
}
</style>