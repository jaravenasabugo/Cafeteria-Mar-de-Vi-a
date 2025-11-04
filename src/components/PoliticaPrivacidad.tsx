import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PoliticaPrivacidad = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#C7A14A] hover:text-[#d4b056] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-light">Volver al inicio</span>
        </button>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold italic text-white mb-4">
              Política de Privacidad
            </h1>
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#C7A14A] to-transparent mb-6"></div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">1. Datos que Recopilamos</h2>
            <p className="text-white/80 font-light leading-relaxed">
              Dependiendo de cómo interactúes con nosotros, podemos recopilar la siguiente información:
            </p>
            <ul className="space-y-4 text-white/80 font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span><strong className="text-white">Información de contacto:</strong> Nombre, correo electrónico, número de teléfono u otros datos similares que nos proporciones.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span><strong className="text-white">Contenido de las interacciones:</strong> Mensajes, documentos, imágenes u otros contenidos compartidos en nuestros canales (WhatsApp, formularios web, correo u otras integraciones).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span><strong className="text-white">Datos técnicos:</strong> Dirección IP, navegador, sistema operativo, fecha y hora de acceso, métricas de uso y trazabilidad de servicios.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span><strong className="text-white">Información de clientes y empresas:</strong> Datos relacionados con los procesos que se automatizan, siempre con fines estrictamente operativos.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-6 pt-8 border-t border-[#C7A14A]/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white">2. Uso de la Información</h2>
            <p className="text-white/80 font-light leading-relaxed">
              La información recopilada se utiliza con los siguientes fines:
            </p>
            <ul className="space-y-4 text-white/80 font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span><strong className="text-white">Proveer y operar los servicios:</strong> Responder consultas, procesar solicitudes y ejecutar los flujos de automatización contratados.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span><strong className="text-white">Mejorar nuestros servicios:</strong> Analizar interacciones para optimizar la calidad, seguridad y eficiencia de nuestras soluciones.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span><strong className="text-white">Comunicación:</strong> Enviar notificaciones relevantes, actualizaciones o información sobre nuestros servicios, únicamente cuando exista consentimiento previo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span><strong className="text-white">Cumplimiento legal:</strong> Atender las obligaciones establecidas por la legislación vigente.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-6 pt-8 border-t border-[#C7A14A]/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white">3. Almacenamiento y Protección de Datos</h2>
            <p className="text-white/80 font-light leading-relaxed">
              Tu información se almacena de forma segura en servidores utilizados por Mar de Viña (infraestructura propia o VPS gestionados a través de proveedores certificados).
            </p>
            <p className="text-white/80 font-light leading-relaxed">
              Implementamos medidas de seguridad que incluyen:
            </p>
            <ul className="space-y-4 text-white/80 font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span>Cifrado de datos en tránsito y en reposo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span>Controles de acceso y autenticación.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span>Monitoreo y respaldos periódicos.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-6 pt-8 border-t border-[#C7A14A]/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white">4. Compartir Información con Terceros</h2>
            <p className="text-white/80 font-light leading-relaxed">
              En Mar de Viña no vendemos ni alquilamos tus datos personales. Solo compartiremos información en los siguientes casos:
            </p>
            <ul className="space-y-4 text-white/80 font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span>Con proveedores tecnológicos de confianza (ej. hosting, infraestructura cloud, API de mensajería) estrictamente necesarios para la operación del servicio.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span>Con socios o integradores autorizados que colaboren en la implementación de soluciones de automatización.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span>Cuando lo requiera una obligación legal o regulatoria.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-6 pt-8 border-t border-[#C7A14A]/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white">5. Tus Derechos</h2>
            <p className="text-white/80 font-light leading-relaxed">
              De acuerdo con la normativa vigente en materia de protección de datos, tienes derecho a:
            </p>
            <ul className="space-y-4 text-white/80 font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span>Solicitar acceso a tus datos personales.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span>Rectificar información incorrecta o incompleta.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span>Solicitar la eliminación de tus datos cuando sea procedente.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C7A14A] mt-1">•</span>
                <span>Revocar el consentimiento previamente otorgado.</span>
              </li>
            </ul>
            
          </section>

          <section className="space-y-6 pt-8 border-t border-[#C7A14A]/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white">6. Consentimiento</h2>
            <p className="text-white/80 font-light leading-relaxed">
              Al interactuar con los servicios digitales de Mar de Viña, aceptas los términos de esta Política de Privacidad. Si no estás de acuerdo, por favor abstente de usar nuestros servicios.
            </p>
          </section>

          <section className="space-y-6 pt-8 border-t border-[#C7A14A]/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white">7. Cambios en la Política de Privacidad</h2>
            <p className="text-white/80 font-light leading-relaxed">
              Mar de Viña se reserva el derecho de actualizar esta política en cualquier momento. Cualquier cambio será notificado mediante la publicación de la versión más reciente en esta misma página.
            </p>
            <p className="text-white/80 font-light leading-relaxed">
              Te recomendamos revisar esta política periódicamente.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;

