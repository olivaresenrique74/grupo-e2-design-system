const DETAIL = {
  consultoria: {
    title: 'Consultoría corporativa',
    lead: 'Para empresas que crecieron más rápido que su estructura.',
    scope: ['Diagnóstico de estructura y roles', 'Mapa de decisiones y cuellos de botella', 'Modelo de gobierno y juntas', 'Plan de prioridades a 90 días'],
    deliverable: 'Informe ejecutivo + plan a 90 días',
    duration: '4 a 6 semanas',
    tags: ['Estructura', 'Roles', 'Gobierno corporativo'],
  },
  operaciones: {
    title: 'Estandarización de operaciones',
    lead: 'Para operaciones que dependen de la memoria de dos o tres personas.',
    scope: ['Levantamiento de procesos en piso', 'Manual de operación por área', 'Indicadores y tableros de control', 'Capacitación y transferencia al equipo'],
    deliverable: 'Manual de operación + tablero de indicadores',
    duration: '8 a 12 semanas',
    tags: ['Procesos', 'Manuales', 'Indicadores'],
  },
  proyectos: {
    title: 'Gestión de proyectos',
    lead: 'Para proyectos con muchos involucrados y ninguna fecha firme.',
    scope: ['Definición de alcance y entregables', 'Calendario y ruta crítica', 'Coordinación de proveedores y áreas', 'Reporte semanal a dirección'],
    deliverable: 'Tablero de proyecto + reporte semanal',
    duration: 'Por proyecto',
    tags: ['PMO', 'Proveedores', 'Reportes'],
  },
};

function Services({ go }) {
  const { Button, Card, Tabs, Badge, Tag, Icon } = window.GrupoE2DesignSystem_a36653;
  const [tab, setTab] = React.useState('consultoria');
  const d = DETAIL[tab];
  return (
    <React.Fragment>
      <section style={{ background: 'var(--e2-navy)' }} className="e2-on-dark">
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px var(--gutter-inline-lg)' }}>
          <span className="e2-eyebrow" style={{ color: 'var(--orange-300)' }}>Servicios</span>
          <h1 style={{ marginTop: 'var(--space-5)', fontSize: 'var(--size-display-2)', lineHeight: 'var(--lh-display-2)', letterSpacing: 'var(--ls-display-2)', fontWeight: 'var(--weight-bold)', color: 'var(--white)', maxWidth: '24ch' }}>
            Alcance escrito, responsable con nombre
          </h1>
        </div>
      </section>

      <Section tone="light" style={{ paddingTop: 0 }}>
        <Tabs value={tab} onChange={setTab} items={[
          { id: 'consultoria', label: 'Consultoría corporativa', icon: 'clipboard-list' },
          { id: 'operaciones', label: 'Estandarización', icon: 'workflow' },
          { id: 'proyectos', label: 'Gestión de proyectos', icon: 'target' },
        ]} />
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'var(--space-10)', marginTop: 'var(--space-9)', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <h2 style={{ fontSize: 'var(--size-h1)', lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)' }}>{d.title}</h2>
            <p style={{ fontSize: 'var(--size-body-lg)', lineHeight: 'var(--lh-body-lg)', color: 'var(--text-body)' }}>{d.lead}</p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>{d.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-3)' }}>
              <span className="e2-eyebrow">Qué incluye</span>
              {d.scope.map((s) => (
                <div key={s} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start', paddingBottom: 'var(--space-4)', borderBottom: 'var(--hairline)' }}>
                  <Icon name="check" size={18} color="var(--e2-orange)" style={{ marginTop: 2 }} />
                  <span style={{ fontSize: 'var(--size-body)', color: 'var(--text-body)' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <Card variant="subtle" style={{ position: 'sticky', top: 100 }}
            footer={<Button fullWidth iconRight="arrow-right" onClick={() => go('contacto')}>Solicitar propuesta</Button>}>
            <span className="e2-eyebrow">Resumen</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', marginTop: 'var(--space-4)' }}>
              <div><div style={{ fontSize: 'var(--size-caption)', color: 'var(--text-muted)' }}>Entregable</div><div style={{ fontSize: 'var(--size-body-sm)', fontWeight: 600, color: 'var(--text-strong)' }}>{d.deliverable}</div></div>
              <div><div style={{ fontSize: 'var(--size-caption)', color: 'var(--text-muted)' }}>Duración estimada</div><div style={{ fontSize: 'var(--size-body-sm)', fontWeight: 600, color: 'var(--text-strong)' }}>{d.duration}</div></div>
              <div><div style={{ fontSize: 'var(--size-caption)', color: 'var(--text-muted)' }}>Modalidad</div><div style={{ display: 'flex', gap: 6, marginTop: 4 }}><Badge tone="brand">Presencial</Badge><Badge tone="neutral">Remoto</Badge></div></div>
            </div>
          </Card>
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHead eyebrow="Sectores" title="Dónde hemos trabajado" align="center" />
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center', marginTop: 'var(--space-8)' }}>
          {['Manufactura', 'Retail', 'Logística', 'Construcción', 'Servicios profesionales', 'Alimentos y bebidas', 'Salud', 'Educación'].map((s) => <Tag key={s}>{s}</Tag>)}
        </div>
      </Section>
    </React.Fragment>
  );
}

Object.assign(window, { Services });
