const SERVICES = [
  { icon: 'clipboard-list', eyebrow: 'Consultoría', title: 'Consultoría corporativa', text: 'Revisamos estructura, roles y decisiones. Entregamos un diagnóstico con prioridades, no un documento de 90 páginas.' },
  { icon: 'workflow', eyebrow: 'Operaciones', title: 'Estandarización de operaciones', text: 'Documentamos los procesos que ya funcionan, medimos los que no, y dejamos un manual que el equipo puede seguir sin nosotros.' },
  { icon: 'target', eyebrow: 'Proyectos', title: 'Gestión de proyectos', text: 'Un responsable, un tablero y fechas que se sostienen. Coordinamos proveedores, áreas internas y entregables.' },
];

const STEPS = [
  { n: '01', title: 'Diagnóstico', text: 'Dos semanas de entrevistas y revisión de datos operativos.' },
  { n: '02', title: 'Plan de trabajo', text: 'Alcance, responsables y calendario acordados por escrito.' },
  { n: '03', title: 'Implementación', text: 'Trabajamos dentro del equipo, no desde afuera.' },
  { n: '04', title: 'Transferencia', text: 'Manual, indicadores y capacitación al equipo interno.' },
];

function Home({ go }) {
  const { Button, Card, Badge, Icon } = window.GrupoE2DesignSystem_a36653;
  return (
    <React.Fragment>
      {/* Hero */}
      <section style={{ background: 'var(--e2-navy)', position: 'relative', overflow: 'hidden' }} className="e2-on-dark">
        <img src="../../assets/mark-white.png" alt="" aria-hidden="true"
          style={{ position: 'absolute', right: -120, top: 40, height: 460, opacity: .06, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '112px var(--gutter-inline-lg) 120px', position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
            <span className="e2-eyebrow" style={{ color: 'var(--orange-300)' }}>Consultoría corporativa · México</span>
            <h1 style={{ fontSize: 'var(--size-display-1)', lineHeight: 'var(--lh-display-1)', letterSpacing: 'var(--ls-display-1)', fontWeight: 'var(--weight-bold)', color: 'var(--white)', maxWidth: '20ch' }}>
              Operaciones que no dependen de una sola persona
            </h1>
            <p style={{ fontSize: 'var(--size-body-lg)', lineHeight: 'var(--lh-body-lg)', color: 'var(--navy-100)', maxWidth: '46ch' }}>
              Ordenamos la operación de pequeñas y medianas empresas: procesos documentados, proyectos con dueño y decisiones con datos.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', paddingTop: 'var(--space-2)' }}>
              <Button variant="accent" size="lg" iconRight="arrow-right" onClick={() => go('contacto')}>Agendar diagnóstico</Button>
              <Button variant="inverse" size="lg" onClick={() => go('servicios')}>Ver servicios</Button>
            </div>
          </div>
        </div>
        <div aria-hidden="true" style={{ height: 6, background: 'linear-gradient(90deg,var(--e2-orange) 0 220px,rgba(255,255,255,.12) 220px)' }} />
      </section>

      {/* Proof strip */}
      <section style={{ background: 'var(--surface-page)', borderBottom: 'var(--hairline)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-9) var(--gutter-inline-lg)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-8)' }}>
          {[['+120', 'proyectos implementados'], ['14', 'sectores atendidos'], ['6 sem', 'para el primer entregable'], ['1', 'responsable por proyecto']].map(([k, v]) => (
            <div key={v} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 'var(--size-h1)', lineHeight: 1, letterSpacing: 'var(--ls-h1)', fontWeight: 'var(--weight-bold)', color: 'var(--e2-navy)' }}>{k}</span>
              <span style={{ fontSize: 'var(--size-caption)', color: 'var(--text-muted)' }}>{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <Section tone="light">
        <SectionHead eyebrow="Qué hacemos" title="Tres servicios, un mismo criterio" lead="Cada servicio se contrata por separado o como un solo programa. Siempre con alcance escrito y un responsable con nombre." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-6)', marginTop: 'var(--space-10)' }}>
          {SERVICES.map((s) => (
            <Card key={s.title} icon={s.icon} eyebrow={s.eyebrow} title={s.title} description={s.text} accentEdge interactive
              footer={<a href="#" onClick={(e) => { e.preventDefault(); go('servicios'); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 'var(--size-body-sm)', fontWeight: 600 }}>Conocer el alcance <Icon name="arrow-right" size={16} /></a>} />
          ))}
        </div>
      </Section>

      {/* Method */}
      <Section tone="subtle">
        <SectionHead eyebrow="Cómo trabajamos" title="Cuatro fases, sin sorpresas" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-6)', marginTop: 'var(--space-10)' }}>
          {STEPS.map((s) => (
            <div key={s.n} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', paddingTop: 'var(--space-5)', borderTop: '2px solid var(--e2-navy)' }}>
              <span style={{ fontSize: 'var(--size-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', fontWeight: 700, color: 'var(--e2-orange)' }}>{s.n}</span>
              <h3 style={{ fontSize: 'var(--size-h4)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{s.title}</h3>
              <p style={{ fontSize: 'var(--size-body-sm)', lineHeight: 'var(--lh-body-sm)', color: 'var(--text-body)' }}>{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial + CTA */}
      <Section tone="navy">
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 'var(--space-11)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <Badge tone="accent" solid>Caso · Manufactura</Badge>
            <p style={{ fontSize: 'var(--size-h2)', lineHeight: 1.4, letterSpacing: 'var(--ls-h2)', color: 'var(--white)', fontWeight: 'var(--weight-medium)' }}>
              “Documentaron en ocho semanas lo que llevábamos tres años explicando de voz en voz. Hoy el proceso sobrevive a las vacaciones.”
            </p>
            <span style={{ fontSize: 'var(--size-body-sm)', color: 'var(--navy-200)' }}>Dirección de Operaciones · empresa de 90 empleados</span>
          </div>
          <div style={{ background: 'var(--navy-800)', border: 'var(--hairline-inverse)', borderRadius: 'var(--radius-surface)', padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <h3 style={{ fontSize: 'var(--size-h3)', fontWeight: 'var(--weight-semibold)', color: 'var(--white)' }}>Diagnóstico inicial sin costo</h3>
            <p style={{ fontSize: 'var(--size-body-sm)', lineHeight: 'var(--lh-body-sm)', color: 'var(--navy-100)' }}>Una sesión de 60 minutos y un resumen escrito de los tres frentes más urgentes de tu operación.</p>
            <Button variant="accent" fullWidth iconRight="arrow-right" onClick={() => go('contacto')}>Solicitar la sesión</Button>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
}

Object.assign(window, { Home });
