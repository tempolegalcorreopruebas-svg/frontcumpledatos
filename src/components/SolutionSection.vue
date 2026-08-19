<script setup>
import consultationImage from '../assets/images/cumplidatos-consultoria.webp'
</script>

<template>
  <section id="solucion" class="solution">
    <div class="solution-container">
      <div class="solution-visual">
        <div class="image-decoration"></div>

        <img
          :src="consultationImage"
          alt="Equipo profesional revisando el proceso de cumplimiento"
          loading="lazy"
        />

        <div class="image-card">
          <span class="image-card-icon">✓</span>

          <div>
            <small>ACOMPAÑAMIENTO ESPECIALIZADO</small>
            <strong>Equipo TempoLegal</strong>
          </div>
        </div>
      </div>

      <div class="solution-content">
        <span class="section-label">MÁS QUE UN SOFTWARE</span>

        <h2>
          Una ruta de cumplimiento
          <span>acompañada de principio a fin.</span>
        </h2>

        <p class="section-description">
          Cumplidatos transforma las recomendaciones del equipo TempoLegal en
          actividades claras, documentos organizados y evidencias fáciles de
          consultar.
        </p>

        <p class="section-secondary">
          No reemplazamos la asesoría profesional. Combinamos conocimiento
          especializado y tecnología para que cada empresa conozca qué debe
          hacer, qué debe presentar y cuál es el siguiente paso.
        </p>

        <div class="solution-list">
          <article>
            <span>01</span>

            <div>
              <h3>Diagnóstico estructurado</h3>
              <p>
                Identificamos las necesidades y el punto de partida de cada
                organización.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>

            <div>
              <h3>Documentos y evidencias</h3>
              <p>
                Centralizamos requisitos, entregables y respaldos en un mismo
                lugar.
              </p>
            </div>
          </article>

          <article>
            <span>03</span>

            <div>
              <h3>Seguimiento continuo</h3>
              <p>
                Organizamos actividades pendientes, responsables y próximos
                pasos.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solution {
  position: relative;
  overflow: hidden;
  padding: 125px 0;
  color: #102536;
  background:
    radial-gradient(
      circle at 100% 20%,
      rgba(32, 201, 130, 0.09),
      transparent 25%
    ),
    #f7faf9;
}

.solution::before {
  position: absolute;
  top: 60px;
  left: -110px;
  width: 260px;
  height: 260px;
  content: "";
  border: 1px solid rgba(26, 177, 117, 0.15);
  border-radius: 50%;
}

.solution-container {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 0.94fr 1.06fr;
  align-items: center;
  gap: 90px;
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.solution-visual {
  position: relative;
  padding: 12px;
  background: #ffffff;
  border: 1px solid #e5eeea;
  border-radius: 32px;
  box-shadow: 0 30px 80px rgba(15, 47, 61, 0.15);
}

.solution-visual img {
  display: block;
  width: 100%;
  height: 610px;
  object-fit: cover;
  object-position: 60% center;
  border-radius: 24px;
}

.image-decoration {
  position: absolute;
  top: -24px;
  left: -24px;
  width: 105px;
  height: 105px;
  background-image: radial-gradient(#24b77d 2px, transparent 2px);
  background-size: 13px 13px;
  opacity: 0.35;
}

.image-card {
  position: absolute;
  right: -30px;
  bottom: 42px;
  display: flex;
  align-items: center;
  gap: 13px;
  min-width: 250px;
  padding: 18px;
  color: #ffffff;
  background: #0b2333;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 17px;
  box-shadow: 0 20px 50px rgba(7, 21, 33, 0.25);
}

.image-card-icon {
  display: grid;
  flex: 0 0 43px;
  width: 43px;
  height: 43px;
  color: #072c1f;
  font-weight: 900;
  place-items: center;
  background: #94ebc7;
  border-radius: 13px;
}

.image-card div {
  display: flex;
  flex-direction: column;
}

.image-card small {
  margin-bottom: 4px;
  color: #6ed7ac;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1px;
}

.image-card strong {
  font-size: 14px;
}

.section-label {
  display: inline-flex;
  padding: 8px 12px;
  color: #0c9062;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  background: #e3f8ef;
  border-radius: 100px;
}

.solution-content h2 {
  margin: 22px 0;
  font-size: clamp(39px, 4vw, 58px);
  line-height: 1.05;
  letter-spacing: -2.5px;
}

.solution-content h2 span {
  display: block;
  color: #159565;
}

.section-description {
  color: #405965;
  font-size: 18px;
  line-height: 1.7;
}

.section-secondary {
  margin-top: 16px;
  color: #71838d;
  font-size: 15px;
  line-height: 1.7;
}

.solution-list {
  display: grid;
  gap: 13px;
  margin-top: 31px;
}

.solution-list article {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  padding: 17px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid #e4ece9;
  border-radius: 16px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.solution-list article:hover {
  box-shadow: 0 15px 35px rgba(19, 67, 82, 0.09);
  transform: translateX(7px);
}

.solution-list article > span {
  display: grid;
  width: 43px;
  height: 43px;
  color: #ffffff;
  font-size: 11px;
  font-weight: 800;
  place-items: center;
  background: #15384d;
  border-radius: 13px;
}

.solution-list article:nth-child(2) > span {
  background: #16a46e;
}

.solution-list h3 {
  margin-bottom: 5px;
  font-size: 15px;
}

.solution-list p {
  color: #71838d;
  font-size: 13px;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .solution {
    padding: 90px 0;
  }

  .solution-container {
    grid-template-columns: 1fr;
    gap: 70px;
  }

  .solution-visual {
    width: min(600px, 100%);
    margin: 0 auto;
  }

  .solution-visual img {
    height: 520px;
  }
}

@media (max-width: 560px) {
  .solution {
    padding: 75px 0;
  }

  .solution-container {
    width: min(100% - 24px, 1180px);
  }

  .solution-visual img {
    height: 430px;
  }

  .image-card {
    right: 18px;
    bottom: 25px;
    min-width: auto;
  }

  .solution-content h2 {
    font-size: 39px;
    letter-spacing: -1.8px;
  }

  .section-description {
    font-size: 16px;
  }
}
</style>