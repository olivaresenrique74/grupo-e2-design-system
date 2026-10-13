function Contact() {
  const { Button, Card, Input, Select, Textarea, Checkbox, Toast, Icon, Logo } = window.GrupoE2DesignSystem_a36653;
  const [sent, setSent] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  return (
    <React.Fragment>
      <Section tone="light">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-11)', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <span className="e2-eyebrow">Contacto</span>
            <h1 style={{ fontSize: 'var(--size-display-3)', lineHeight: 'var(--lh-display-3)', letterSpacing: 'var(--ls-display-3)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)' }}>
              Agenda un diagnóstico inicial
            </h1>
            <p style={{ fontSize: 'var(--size-body-lg)', lineHeight: 'var(--lh-body-lg)', color: 'var(--text-body)', maxWidth: '42ch' }}>
              Una sesión de 60 minutos, sin costo. Al terminar recibes un resumen escrito de los tres frentes más urgentes de tu operación.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-4)', paddingTop: 'var(--space-6)', borderTop: 'var(--hairline)' }}>
              {[['mail', 'contacto@grupoe2.com'], ['globe', 'www.grupoe2.com'], ['map-pin', 'México'], ['clock', 'Lun a vie · 9:00 – 18:00']].map(([i, t]) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                  <Icon name={i} size={18} color="var(--e2-navy)" />
                  <span style={{ fontSize: 'var(--size-body-sm)', color: 'var(--text-body)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <Card style={{ padding: 'var(--space-8)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
              <Input label="Nombre" placeholder="Nombre y apellido" required />
              <Input label="Empresa" placeholder="Razón social" required />
              <Input label="Correo corporativo" type="email" iconLeft="mail" placeholder="nombre@empresa.com" required
                error={sent && !ok ? 'Ingresa un correo válido.' : undefined} />
              <Input label="Teléfono" iconLeft="phone" placeholder="+52 55 0000 0000" />
              <Select label="Tamaño de la empresa" placeholder="Selecciona…" style={{ gridColumn: '1 / -1' }}
                options={['1–10 empleados', '11–50 empleados', '51–250 empleados', 'Más de 250 empleados']} />
              <Select label="Servicio de interés" placeholder="Selecciona…" style={{ gridColumn: '1 / -1' }}
                options={['Consultoría corporativa', 'Estandarización de operaciones', 'Gestión de proyectos', 'Aún no lo sé']} />
              <Textarea label="Reto operativo" rows={4} placeholder="¿Qué proceso se rompe primero?" style={{ gridColumn: '1 / -1' }} />
              <div style={{ gridColumn: '1 / -1' }}>
                <Checkbox label="Acepto el aviso de privacidad" description="Usamos tus datos únicamente para responder esta solicitud." checked={ok} onChange={(e) => setOk(e.target.checked)} />
              </div>
              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 'var(--space-4)', paddingTop: 'var(--space-2)' }}>
                <Button iconRight="arrow-right" onClick={() => setSent(true)}>Enviar solicitud</Button>
                <Button variant="ghost">Prefiero escribir un correo</Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {sent && ok && (
        <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 80 }}>
          <Toast tone="success" title="Solicitud enviada" description="Te contactamos en 48 horas hábiles." onClose={() => setSent(false)} />
        </div>
      )}
    </React.Fragment>
  );
}

Object.assign(window, { Contact });
