<script setup>
import { ref } from 'vue'

const sent = ref(false)

const submitForm = (event) => {
  event.currentTarget.reset()
  sent.value = true
}
</script>

<template>
  <section id="contacto" class="contact-section">
    <div class="container contact-grid">
      <div class="contact-copy">
        <p class="contact-kicker">Evaluación inicial</p>

        <h2>
          Conversemos sobre el punto de partida de tu empresa.
        </h2>

        <p>
          En una primera reunión conoceremos tu situación, aclararemos el
          alcance y definiremos cuál de nuestros servicios se ajusta mejor.
        </p>

        <div class="contact-facts">
          <span><i class="check">✓</i> Conversación de 30 minutos</span>
          <span><i class="check">✓</i> Sin compromiso</span>
          <span><i class="check">✓</i> Enfoque según tu organización</span>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="submitForm">
        <div v-if="sent" class="form-success">
          <span>✓</span>

          <h3>Solicitud registrada</h3>

          <p>
            Gracias. El equipo de TempoLegal se pondrá en contacto para
            coordinar la conversación inicial.
          </p>

          <button type="button" @click="sent = false">
            Enviar otra solicitud
          </button>
        </div>

        <template v-else>
          <div class="form-row">
            <label>
              Nombre y apellido

              <input
                name="name"
                type="text"
                placeholder="Tu nombre"
                autocomplete="name"
                required
              />
            </label>

            <label>
              Empresa

              <input
                name="company"
                type="text"
                placeholder="Nombre de la empresa"
                autocomplete="organization"
                required
              />
            </label>
          </div>

          <div class="form-row">
            <label>
              Correo electrónico

              <input
                name="email"
                type="email"
                placeholder="nombre@empresa.com"
                autocomplete="email"
                required
              />
            </label>

            <label>
              Teléfono

              <input
                name="phone"
                type="tel"
                placeholder="+593 99 000 0000"
                autocomplete="tel"
                required
              />
            </label>
          </div>

          <label>
            Servicio de interés

            <select name="service" required>
              <option value="" disabled selected>
                Selecciona una opción
              </option>

              <option value="diagnostico">
                Diagnóstico y hoja de ruta
              </option>

              <option value="implementacion">
                Implementación de la LOPDP
              </option>

              <option value="auditoria">
                Auditoría y actualización
              </option>

              <option value="dpd">
                DPD y seguimiento continuo
              </option>

              <option value="orientacion">
                Necesito orientación
              </option>
            </select>
          </label>

          <label>
            Cuéntanos brevemente sobre tu empresa

            <textarea
              name="message"
              rows="4"
              placeholder="¿Qué necesitas resolver?"
              required
            ></textarea>
          </label>

          <button class="submit-button" type="submit">
            Solicitar evaluación inicial
            <span>↗</span>
          </button>

          <small>
            Al enviar este formulario autorizas el contacto relacionado con tu
            solicitud.
          </small>
        </template>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  overflow: hidden;
  padding-block: 105px;
  color: #ffffff;
  background: linear-gradient(135deg, #102b4e, #0b1d35);
}

.contact-section::before {
  position: absolute;
  bottom: -380px;
  left: -330px;
  width: 600px;
  height: 600px;
  content: "";
  border: 100px solid rgba(39, 197, 195, 0.035);
  border-radius: 50%;
}

.contact-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 100px;
}

.contact-kicker {
  margin: 0 0 18px;
  color: #69e4df;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.contact-copy h2 {
  margin: 0;
  font-size: clamp(40px, 4.5vw, 60px);
  line-height: 1.05;
  letter-spacing: -0.055em;
}

.contact-copy > p:not(.contact-kicker) {
  margin: 25px 0;
  color: #b5c1cf;
  font-size: 14px;
  line-height: 1.8;
}

.contact-facts {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  color: #c4cfdb;
  font-size: 11px;
}

.contact-facts span {
  display: flex;
  align-items: center;
  gap: 8px;
}

.check {
  display: inline-grid;
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
  color: #70e4df;
  font-size: 11px;
  font-style: normal;
  font-weight: 900;
  place-items: center;
  background: rgba(39, 197, 195, 0.13);
  border-radius: 50%;
}

.contact-form {
  min-height: 470px;
  padding: 33px;
  color: var(--ink);
  background: #ffffff;
  border-radius: 13px;
}

.contact-form label {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 15px;
  font-size: 10px;
  font-weight: 800;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  padding: 0 12px;
  color: var(--ink);
  background: #fafbfd;
  border: 1px solid #d6dfe9;
  border-radius: 7px;
  outline: none;
}

.contact-form input,
.contact-form select {
  min-height: 45px;
}

.contact-form textarea {
  padding-block: 11px;
  resize: vertical;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  border-color: #7aa9ee;
  box-shadow: 0 0 0 3px rgba(23, 107, 232, 0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 13px;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  min-height: 51px;
  padding: 0 20px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  background: var(--blue);
  border: 0;
  border-radius: 7px;
  box-shadow: 0 12px 30px rgba(23, 107, 232, 0.18);
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.submit-button:hover {
  background: var(--blue-dark);
  transform: translateY(-2px);
}

.contact-form > small {
  display: block;
  margin-top: 12px;
  color: #8b96a6;
  font-size: 8px;
  text-align: center;
}

.form-success {
  display: flex;
  min-height: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.form-success > span {
  display: grid;
  width: 62px;
  height: 62px;
  color: #078c89;
  font-size: 27px;
  place-items: center;
  background: var(--cyan-soft);
  border-radius: 50%;
}

.form-success h3 {
  margin: 21px 0 8px;
  font-size: 25px;
}

.form-success p {
  max-width: 350px;
  color: var(--text);
  font-size: 12px;
  line-height: 1.7;
}

.form-success button {
  margin-top: 10px;
  padding: 0;
  color: var(--blue);
  font-size: 10px;
  text-decoration: underline;
  background: none;
  border: 0;
  cursor: pointer;
}

@media (max-width: 1020px) {
  .contact-grid {
    gap: 55px;
  }
}

@media (max-width: 760px) {
  .contact-section {
    padding-block: 80px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .contact-copy h2 {
    font-size: 40px;
  }

  .contact-form {
    padding: 23px;
  }
}
</style>