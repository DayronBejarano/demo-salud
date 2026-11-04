import React, { useState } from 'react';
import { 
  Stethoscope, Brain, Apple, Sparkles, Activity, Calendar, ShieldCheck, 
  FileText, Phone, Cpu, X, UserCheck, ChevronRight, ArrowRight, Palette,
  Heart, Dumbbell, Smile, Pill, Award
} from 'lucide-react';

import { 
  SpecialtyBackground, 
  SpecialtyCard, 
  SpecialtyButton, 
  Reveal 
} from './components/ui/Effects';

// MOTOR DE ESPECIALIDADES MÉDICAS & PALETAS 60-30-10
const specialtiesData = {
  tradicional: {
    id: 'tradicional',
    label: 'Medicina & Clínicas',
    sublabel: 'Confianza & Autoridad',
    icon: Stethoscope,
    theme: {
      bgApp: 'bg-slate-950',
      bgNav: 'bg-slate-950/90',
      bgCard: 'bg-slate-900/80',
      textMain: 'text-slate-100',
      textMuted: 'text-slate-400',
      accent: 'text-sky-400',
      accentHex: '#38bdf8',
      secondaryHex: '#1e3a8a',
      border: 'border-sky-500/30',
      buttonBg: 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-sky-500/20',
      glow: 'rgba(56, 189, 248, 0.15)',
      gridLines: 'border-slate-800'
    },
    hero: {
      badge: 'Atención Hospitalaria & Especialidades Médicas',
      title: 'Medicina de Precisión',
      titleHighlight: 'y Diagnóstico Certero.',
      description: 'Red hospitalaria boutique integrada. Diagnósticos avanzados, cuerpo médico certificado y atención de alta complejidad.',
      primaryCta: 'Agendar Cita Médica',
      secondaryCta: 'Ver Cuadro Médico'
    },
    metrics: [
      { val: '+50', label: 'Especialistas' },
      { val: '24/7', label: 'Urgencias & Telemedicina' },
      { val: '99.2%', label: 'Precisión Diagnóstica' },
      { val: 'ISO 9001', label: 'Calidad Certificada' }
    ],
    services: [
      {
        titulo: "Consulta Especializada & Chequeos",
        descripcion: "Evaluación integral por sistemas con exámenes diagnósticos inmediatos e historia clínica digital.",
        icono: Stethoscope,
        badge: "Atención Presencial"
      },
      {
        titulo: "Unidad de Diagnóstico Avanzado",
        descripcion: "Imágenes diagnósticas, ecografía de alta definición y laboratorio automatizado de respuesta rápida.",
        icono: Activity,
        badge: "Tecnología 4K"
      },
      {
        titulo: "Telemedicina & Control Continuo",
        descripcion: "Consultas virtuales seguras con emisión de recetas digitales y seguimiento post-consulta.",
        icono: Phone,
        badge: "Acceso Remoto"
      }
    ]
  },

  saludMental: {
    id: 'saludMental',
    label: 'Salud Mental & Bienestar',
    sublabel: 'Empatía & Equilibrio',
    icon: Brain,
    theme: {
      bgApp: 'bg-neutral-950',
      bgNav: 'bg-neutral-950/90',
      bgCard: 'bg-neutral-900/80',
      textMain: 'text-purple-50',
      textMuted: 'text-purple-200/60',
      accent: 'text-purple-300',
      accentHex: '#c084fc',
      secondaryHex: '#a855f7',
      border: 'border-purple-400/30',
      buttonBg: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white shadow-purple-500/20',
      glow: 'rgba(192, 132, 252, 0.15)',
      gridLines: 'border-purple-900/40'
    },
    hero: {
      badge: 'Psicología, Psiquiatría & Acompañamiento Humano',
      title: 'Tu Bienestar Emocional',
      titleHighlight: 'en un Espacio Seguro.',
      description: 'Acompañamiento terapéutico personalizado. Herramientas científicas y humanas para superar la ansiedad y encontrar equilibrio.',
      primaryCta: 'Iniciar Terapia Privada',
      secondaryCta: 'Conocer Psicólogos'
    },
    metrics: [
      { val: '100%', label: 'Confidencialidad' },
      { val: '+1,200', label: 'Pacientes Acompañados' },
      { val: '4.9/5', label: 'Empatía Evaluada' },
      { val: 'Online/Presencial', label: 'Modalidad Flexible' }
    ],
    services: [
      {
        titulo: "Psicoterapia Individual & Ansiedad",
        descripcion: "Abordaje cognitivo-conductual y enfoques modernos para el manejo del estrés y traumas emocionales.",
        icono: Brain,
        badge: "Sesiones de 50 Min"
      },
      {
        titulo: "Terapia de Pareja & Familiar",
        descripcion: "Espacios de diálogo constructivo para restaurar vínculos, comunicación y resolución de conflictos.",
        icono: Heart,
        badge: "Enfoque Sistémico"
      },
      {
        titulo: "Mindfulness & Salud Holística",
        descripcion: "Programas de regulación emocional, higiene del sueño y técnicas de respiración consciente.",
        icono: Sparkles,
        badge: "Bienestar Integral"
      }
    ]
  },

  nutricion: {
    id: 'nutricion',
    label: 'Nutrición & Vitalidad',
    sublabel: 'Orgánico & Salud Natural',
    icon: Apple,
    theme: {
      bgApp: 'bg-zinc-950',
      bgNav: 'bg-zinc-950/90',
      bgCard: 'bg-zinc-900/80',
      textMain: 'text-emerald-50',
      textMuted: 'text-zinc-400',
      accent: 'text-emerald-400',
      accentHex: '#34d399',
      secondaryHex: '#059669',
      border: 'border-emerald-500/30',
      buttonBg: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-orange-500 hover:from-emerald-400 hover:to-orange-400 text-zinc-950 font-bold shadow-emerald-500/20',
      glow: 'rgba(52, 211, 153, 0.15)',
      gridLines: 'border-zinc-800'
    },
    hero: {
      badge: 'Nutrición Clínica, Deporte & Medicina Funcional',
      title: 'Nutre tu Cuerpo,',
      titleHighlight: 'Potencia tu Energía Natural.',
      description: 'Planes nutricionales basados en tu bioquímica única. Transforma tu composición corporal y hábitos de forma sostenible.',
      primaryCta: 'Agendar Evaluación Nutricional',
      secondaryCta: 'Calculadora Metabólica'
    },
    metrics: [
      { val: '+3,500', label: 'Metas Alcanzadas' },
      { val: '100%', label: 'Planes Personalizados' },
      { val: 'InBody 770', label: 'Análisis Bioimpedancia' },
      { val: 'Sostenible', label: 'Sin Dietas Extremas' }
    ],
    services: [
      {
        titulo: "Nutrición Clínica & Funcional",
        descripcion: "Tratamiento nutricional para metabolismo, salud digestiva, diabetes y balance hormonal.",
        icono: Apple,
        badge: "Análisis Clínico"
      },
      {
        titulo: "Rendimiento Deportivo & Fitness",
        descripcion: "Optimización de masa muscular, recomposición corporal y suplementación estratégica para atletas.",
        icono: Dumbbell,
        badge: "Alto Rendimiento"
      },
      {
        titulo: "Suplementación & Farmacia Verde",
        descripcion: "Prescripción de adaptógenos, multivitamínicos orgánicos y formulaciones botánicas de alta pureza.",
        icono: Pill,
        badge: "100% Orgánico"
      }
    ]
  },

  odontologia: {
    id: 'odontologia',
    label: 'Odontología & Estética',
    sublabel: 'Diseño de Sonrisa & Lujo',
    icon: Sparkles,
    theme: {
      bgApp: 'bg-stone-950',
      bgNav: 'bg-stone-950/90',
      bgCard: 'bg-stone-900/80',
      textMain: 'text-rose-50',
      textMuted: 'text-stone-400',
      accent: 'text-rose-300',
      accentHex: '#f472b6',
      secondaryHex: '#fbbf24',
      border: 'border-rose-400/30',
      buttonBg: 'bg-gradient-to-r from-rose-400 to-amber-500 hover:from-rose-300 hover:to-amber-400 text-stone-950 font-bold shadow-rose-500/20',
      glow: 'rgba(244, 114, 182, 0.15)',
      gridLines: 'border-stone-800'
    },
    hero: {
      badge: 'Odontología Digital & Estética Dental de Lujo',
      title: 'Diseñamos Sonrisas',
      titleHighlight: 'que Transforman tu Confianza.',
      description: 'Tecnología CAD/CAM 3D, ortodoncia invisible y estética dental sin dolor. El estándar de lujo para tu salud oral.',
      primaryCta: 'Agendar Valoración 3D',
      secondaryCta: 'Simulador de Sonrisa'
    },
    metrics: [
      { val: '+8,000', label: 'Sonrisas Diseñadas' },
      { val: '3D CAD/CAM', label: 'Escáner Intraoral' },
      { val: '0 Dolor', label: 'Protocolo de Confort' },
      { val: 'Garantía 10', label: 'Años en Tratamientos' }
    ],
    services: [
      {
        titulo: "Diseño de Sonrisa Digital 3D",
        descripcion: "Planificación milimétrica con carillas cerámicas de ultra conservación y previsualización en vivo.",
        icono: Sparkles,
        badge: "Lentes Cerámicos"
      },
      {
        titulo: "Ortodoncia Invisible Alineadores",
        descripcion: "Alineación dental discreta, rápida y cómoda sin el uso de brackets metálicos convencionales.",
        icono: Smile,
        badge: "Alineadores 3D"
      },
      {
        titulo: "Implantología Guiada por Computador",
        descripcion: "Rehabilitación oral con implantes de titanio de integración rápida y máxima precisión estética.",
        icono: ShieldCheck,
        badge: "Cirugía Guiada"
      }
    ]
  }
};

const Modal = ({ isOpen, onClose, title, children, icon: Icon, t }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className={`absolute inset-0 ${t.bgApp} opacity-90 backdrop-blur-md cursor-pointer`} onClick={onClose} />
      <div className={`relative ${t.bgCard} border ${t.border} w-full max-w-lg shadow-2xl rounded-3xl animate-in fade-in zoom-in duration-200 overflow-hidden`}>
        <div className={`flex items-center justify-between p-5 border-b ${t.gridLines} bg-black/40`}>
          <div className={`flex items-center gap-2 ${t.accent} font-extrabold text-xs uppercase tracking-wider`}>
            {Icon && <Icon className="w-5 h-5" />}
            {title}
          </div>
          <button onClick={onClose} className={`${t.textMuted} hover:${t.accent} transition-colors p-1 rounded-full hover:bg-white/5`}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export const App = () => {
  const [activeSpecialtyKey, setActiveSpecialtyKey] = useState('tradicional');
  const [activeModal, setActiveModal] = useState(null); // 'appointment' | 'portal' | null

  const spec = specialtiesData[activeSpecialtyKey];
  const t = spec.theme;

  const handleWhatsAppRedirect = (motivo) => {
    const msg = `Hola Ing. Dayron. Vengo de interactuar con el Demo de Salud [REF: DEMO-SALUD] en la especialidad de *${spec.label}* (Acción: ${motivo}) y me interesa implementar una plataforma con esta arquitectura.`;
    window.open(`https://wa.me/573104208919?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className={`min-h-screen ${t.bgApp} ${t.textMain} font-sans relative overflow-hidden pb-28 transition-colors duration-700`}>
      <SpecialtyBackground theme={t} />
      
      {/* NAVEGACIÓN PRINCIPAL */}
      <nav className={`fixed w-full z-50 ${t.bgNav} backdrop-blur-xl border-b ${t.gridLines} transition-colors duration-700`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-2xl ${t.buttonBg}`}>
              <Activity className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <span className={`font-black text-2xl tracking-tight ${t.textMain} block leading-none`}>SANATIS<span className={t.accent}>.</span></span>
              <span className={`font-mono text-[10px] tracking-[0.2em] ${t.textMuted} uppercase`}>Plataforma Médica</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 font-bold text-xs tracking-wider uppercase">
            <a href="#servicios" className={`${t.textMuted} hover:${t.accent} transition-colors`}>Servicios</a>
            <button onClick={() => setActiveModal('portal')} className={`${t.textMuted} hover:${t.accent} transition-colors flex items-center gap-1.5`}>
              <UserCheck className="w-4 h-4" /> Portal Pacientes
            </button>
            <SpecialtyButton variant="primary" className="!px-5 !py-2.5 !text-xs" theme={t} onClick={() => setActiveModal('appointment')}>
              Agendar Cita
            </SpecialtyButton>
          </div>
        </div>
      </nav>

      {/* SELECTOR PERSISTENTE DE ESPECIALIDADES */}
      <div className="relative z-30 pt-28 px-6 max-w-7xl mx-auto">
        <div className={`p-2 rounded-2xl ${t.bgCard} border ${t.border} backdrop-blur-2xl shadow-xl flex flex-wrap items-center justify-center gap-2 transition-colors duration-700`}>
          <div className="flex items-center gap-2 px-3 py-1 font-mono text-[11px] text-slate-400 border-r border-white/10 mr-2 hidden md:flex">
            <Palette className={`w-4 h-4 ${t.accent}`} />
            <span>ENFOQUE MÉDICO:</span>
          </div>
          
          {Object.keys(specialtiesData).map((key) => {
            const item = specialtiesData[key];
            const IconComp = item.icon;
            const isActive = activeSpecialtyKey === key;
            return (
              <button
                key={key}
                onClick={() => setActiveSpecialtyKey(key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                  isActive 
                    ? `${item.theme.buttonBg} scale-105 shadow-md` 
                    : `${item.theme.textMuted} hover:text-white bg-white/5 hover:bg-white/10`
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* HERO SECTION DINÁMICA DE LA ESPECIALIDAD */}
      <section className="relative z-10 pt-12 pb-20 px-6 lg:pt-16 lg:pb-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <Reveal key={activeSpecialtyKey}>
            <div className="max-w-2xl">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${t.border} ${t.accent} text-xs font-semibold mb-6 uppercase tracking-widest bg-white/5 backdrop-blur-md`}>
                <ShieldCheck className="w-4 h-4" />
                <span>{spec.hero.badge}</span>
              </div>
              
              <h1 className={`text-4xl lg:text-6xl font-black tracking-tight mb-6 ${t.textMain} leading-[1.12]`}>
                {spec.hero.title} <br/>
                <span className={t.accent}>{spec.hero.titleHighlight}</span>
              </h1>
              
              <p className={`text-lg ${t.textMuted} mb-8 leading-relaxed font-light max-w-lg`}>
                {spec.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <SpecialtyButton icon={ArrowRight} onClick={() => setActiveModal('appointment')} theme={t}>
                  {spec.hero.primaryCta}
                </SpecialtyButton>
                <SpecialtyButton variant="outline" icon={FileText} onClick={() => handleWhatsAppRedirect(spec.hero.secondaryCta)} theme={t}>
                  {spec.hero.secondaryCta}
                </SpecialtyButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} key={`metrics-${activeSpecialtyKey}`}>
            <div className={`relative rounded-3xl ${t.bgCard} border ${t.gridLines} p-8 shadow-2xl overflow-hidden transition-colors duration-700`}>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${t.accent.replace('text-', 'bg-')} animate-ping`} />
                  <span className="font-mono text-xs uppercase text-slate-300 font-bold">Indicadores de Desempeño</span>
                </div>
                <span className={`text-xs ${t.accent} font-mono font-bold bg-white/5 px-3 py-1 rounded-full border ${t.border}`}>
                  {spec.sublabel}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {spec.metrics.map((metric, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <p className={`text-3xl font-black ${t.accent} mb-1`}>{metric.val}</p>
                    <p className={`text-xs ${t.textMuted} font-medium uppercase tracking-wider`}>{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICIOS ESPECÍFICOS DEL ÁREA */}
      <section id="servicios" className="relative z-10 py-16 px-6 max-w-7xl mx-auto">
        <Reveal key={`services-title-${activeSpecialtyKey}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`${t.accent} font-extrabold text-xs uppercase tracking-widest block mb-3`}>Servicios de la Unidad</span>
            <h2 className={`text-3xl lg:text-5xl font-black ${t.textMain} tracking-tight`}>Especialización & Tratamientos</h2>
            <p className={`${t.textMuted} mt-4 text-base font-light`}>
              Modelos de atención diseñados con estándares de nivel internacional para la unidad de {spec.label}.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {spec.services.map((item, idx) => {
            const ServiceIcon = item.icono;
            return (
              <Reveal key={`${activeSpecialtyKey}-${idx}`} delay={idx * 0.1}>
                <SpecialtyCard theme={t} className="h-full flex flex-col group cursor-pointer" onClick={() => setActiveModal('appointment')}>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3.5 rounded-2xl ${t.bgApp} border ${t.border} group-hover:scale-110 transition-transform`}>
                      <ServiceIcon className={`w-6 h-6 ${t.accent}`} />
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${t.border} bg-white/5 ${t.accent}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold ${t.textMain} mb-2 group-hover:${t.accent} transition-colors`}>{item.titulo}</h3>
                  <p className={`${t.textMuted} text-xs leading-relaxed mb-6 font-light`}>{item.descripcion}</p>

                  <div className={`mt-auto pt-4 border-t border-white/5 flex items-center justify-between font-bold text-xs ${t.accent}`}>
                    <span>Agendar Servicio</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </SpecialtyCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* MODAL DE AGENDAMIENTO ADAPTATIVO */}
      <Modal isOpen={activeModal === 'appointment'} onClose={() => setActiveModal(null)} title={`Agendamiento: ${spec.label}`} icon={Calendar} t={t}>
        <div className="space-y-4">
          <p className={`${t.textMuted} text-xs`}>
            Ingrese los datos del paciente para coordinar su valoración en la unidad de <strong className={t.accent}>{spec.label}</strong>.
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={`font-mono text-[10px] ${t.textMuted} mb-1 block uppercase`}>Nombre del Paciente</label>
              <input type="text" placeholder="Ej: Carlos Mendoza" className={`w-full ${t.bgApp} border ${t.gridLines} p-3 rounded-xl ${t.textMain} outline-none text-sm`} />
            </div>
            <div>
              <label className={`font-mono text-[10px] ${t.textMuted} mb-1 block uppercase`}>Teléfono / WhatsApp</label>
              <input type="tel" placeholder="+57 310..." className={`w-full ${t.bgApp} border ${t.gridLines} p-3 rounded-xl ${t.textMain} outline-none text-sm`} />
            </div>
          </div>

          <div>
            <label className={`font-mono text-[10px] ${t.textMuted} mb-1 block uppercase`}>Fecha de Preferencia</label>
            <input type="date" className={`w-full ${t.bgApp} border ${t.gridLines} p-3 rounded-xl ${t.textMain} outline-none text-sm`} />
          </div>

          <SpecialtyButton className="w-full mt-2" onClick={() => { setActiveModal(null); handleWhatsAppRedirect('Solicitud-Agendamiento'); }} theme={t}>
            Confirmar Reserva
          </SpecialtyButton>
        </div>
      </Modal>

      {/* MODAL PORTAL PACIENTE */}
      <Modal isOpen={activeModal === 'portal'} onClose={() => setActiveModal(null)} title="Portal de Pacientes & Historia Clínica" icon={UserCheck} t={t}>
        <p className={`${t.textMuted} text-xs mb-6 font-light`}>
          Acceda a sus informes médicos, recetas digitales y resultados de exámenes encriptados bajo protocolos de seguridad.
        </p>
        <div className="space-y-4">
          <div>
            <label className={`font-mono text-xs ${t.accent} mb-1 block uppercase`}>Documento de Identidad</label>
            <input type="text" placeholder="Ej: 1018293849" className={`w-full ${t.bgApp} border ${t.gridLines} p-3 rounded-xl ${t.textMain} outline-none font-mono text-sm`} />
          </div>
          <div>
            <label className={`font-mono text-xs ${t.accent} mb-1 block uppercase`}>PIN de Acceso Seguro</label>
            <input type="password" placeholder="••••" className={`w-full ${t.bgApp} border ${t.gridLines} p-3 rounded-xl ${t.textMain} outline-none font-mono text-sm`} />
          </div>
          <SpecialtyButton className="w-full mt-2" onClick={() => setActiveModal(null)} theme={t}>
            Ingresar al Portal
          </SpecialtyButton>
        </div>
      </Modal>

      {/* BANNER COMERCIAL PERSISTENTE DE DB TECH STUDIO */}
      <div className={`fixed bottom-0 left-0 right-0 z-[90] ${t.bgNav} backdrop-blur-2xl border-t ${t.border} p-4 shadow-[0_-20px_40px_rgba(0,0,0,0.8)] transition-colors duration-700`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className={`p-2.5 border ${t.border} rounded-2xl shrink-0 bg-white/5`}>
              <Cpu className={`w-6 h-6 ${t.accent} animate-pulse`} />
            </div>
            <div>
              <p className={`${t.textMain} text-sm font-bold tracking-wide uppercase`}>
                Demo B2B Comercial <span className={`${t.accent} font-normal`}>/ DB Tech Studio</span>
              </p>
              <p className={`${t.textMuted} text-xs font-mono mt-0.5`}>
                Multi-Especialidad Activa: <strong className={t.accent}>{spec.label}</strong>.
              </p>
            </div>
          </div>
          
          <SpecialtyButton 
            icon={Phone} 
            onClick={() => handleWhatsAppRedirect(`Cotizacion-Plataforma-Medica-${spec.id}`)} 
            className="w-full sm:w-auto !py-3" 
            theme={t}
          >
            Cotizar esta Plataforma
          </SpecialtyButton>
        </div>
      </div>
    </div>
  );
};

export default App;