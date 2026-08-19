<script setup>
const emit = defineEmits(['open-portal'])

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-main">
      <div class="footer-brand">
        <a class="brand" href="#inicio" aria-label="Cumplidatos, inicio">
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

        <p>
          Acompañamos a las empresas en la implementación, organización y
          seguimiento de la protección de datos personales.
        </p>
      </div>

      <div>
        <strong>Solución</strong>

        <a href="#que-es">Qué es Cumplidatos</a>
        <a href="#proceso">Cómo trabajamos</a>
        <a href="#portal">El portal</a>
        <a href="#informacion">Información requerida</a>
      </div>

      <div>
        <strong>Servicios</strong>

        <a href="#servicios">Diagnóstico</a>
        <a href="#servicios">Implementación LOPDP</a>
        <a href="#servicios">Auditoría</a>
        <a href="#servicios">DPD y seguimiento</a>
      </div>

      <div>
        <strong>Comenzar</strong>

        <a href="#contacto">Evaluación inicial</a>
        <a href="#preguntas">Preguntas frecuentes</a>

        <button type="button" @click="emit('open-portal')">
          Acceso de clientes
        </button>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>
        © {{ currentYear }} TempoLegal. Todos los derechos reservados.
      </span>

      <span>
        Cumplidatos organiza y facilita la gestión; no constituye una
        certificación automática de cumplimiento.
      </span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 67px 0 25px;
  color: #c0cad6;
  background: #071426;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr 1fr;
  gap: 50px;
}

.footer-main > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  font-size: 11px;
}

.footer-brand {
  padding-right: 35px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.brand-symbol {
  position: relative;
  display: block;
  width: 34px;
  height: 34px;
  transform: rotate(45deg);
}

.brand-symbol i {
  position: absolute;
  width: 14px;
  height: 14px;
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
  background: var(--cyan);
}

.brand-symbol i:nth-child(3) {
  bottom: 1px;
  left: 1px;
  background: #65a5ff;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.brand-copy small {
  color: #748398;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.brand-copy strong {
  color: #ffffff;
  font-size: 19px;
  letter-spacing: -0.04em;
}

.brand-copy strong span {
  color: #65a5ff;
}

.footer-brand p {
  max-width: 320px;
  margin: 15px 0 0;
  color: #748398;
  line-height: 1.7;
}

.footer-main > div > strong {
  margin-bottom: 8px;
  color: #ffffff;
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.footer-main a,
.footer-main button {
  padding: 0;
  color: #c0cad6;
  font-size: 11px;
  text-align: left;
  background: none;
  border: 0;
  cursor: pointer;
  transition: color 0.2s ease;
}

.footer-main a:hover,
.footer-main button:hover {
  color: #69dfdb;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  margin-top: 50px;
  padding-top: 22px;
  color: #68778b;
  font-size: 8px;
  line-height: 1.5;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom span:last-child {
  max-width: 490px;
  text-align: right;
}

@media (max-width: 760px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
  }

  .footer-main > div:first-child {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    flex-direction: column;
  }

  .footer-bottom span:last-child {
    text-align: left;
  }
}

@media (max-width: 480px) {
  .footer-main {
    grid-template-columns: 1fr;
  }

  .footer-main > div:first-child {
    grid-column: auto;
  }
}
</style>