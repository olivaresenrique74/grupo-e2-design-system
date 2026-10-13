const NAV = [
  { id: 'home', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'contacto', label: 'Contacto' },
];

function Header({ route, go }) {
  const { Logo, Button, Icon } = window.GrupoE2DesignSystem_a36653;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('e2-scroll');
    if (!el) return;
    const on = () => setScrolled(el.scrollTop > 8);
    el.addEventListener('scroll', on);
    return () => el.removeEventListener('scroll', on);
  }, []);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: 'rgba(255,255,255,.88)', backdropFilter: 'var(--blur-glass)',
      borderBottom: scrolled ? 'var(--hairline)' : '1px solid transparent',
      transition: 'border-color var(--dur-base) var(--ease-out)',
    }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter-inline-lg)', height: 76, display: 'flex', alignItems: 'center', gap: 'var(--space-9)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go('home'); }} style={{ display: 'block' }}>
          <Logo variant="full-color" height={30} assetBase="../../assets/" />
        </a>
        <nav style={{ display: 'flex', gap: 'var(--space-8)', marginLeft: 'auto' }}>
          {NAV.map((n) => (
            <a key={n.id} href="#" onClick={(e) => { e.preventDefault(); go(n.id); }}
              style={{
                fontSize: 'var(--size-body-sm)', fontWeight: 'var(--weight-medium)',
                color: route === n.id ? 'var(--text-strong)' : 'var(--text-body)',
                borderBottom: '2px solid ' + (route === n.id ? 'var(--e2-orange)' : 'transparent'),
                paddingBottom: 3,
              }}>{n.label}</a>
          ))}
        </nav>
        <Button size="sm" iconRight="arrow-right" onClick={() => go('contacto')}>Agendar diagnóstico</Button>
      </div>
    </header>
  );
}

function Footer({ go }) {
  const { Logo, Button, Icon } = window.GrupoE2DesignSystem_a36653;
  return (
    <footer className="e2-on-dark" style={{ background: 'var(--navy-900)', color: 'var(--navy-100)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-12) var(--gutter-inline-lg) var(--space-8)', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 'var(--space-10)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <Logo variant="full-white" height={30} assetBase="../../assets/" />
          <p style={{ fontSize: 'var(--size-body-sm)', lineHeight: 'var(--lh-body-sm)', color: 'var(--navy-200)', maxWidth: '34ch' }}>
            Consultoría corporativa, estandarización de operaciones y gestión de proyectos para pequeñas y medianas empresas.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <span className="e2-eyebrow" style={{ color: 'var(--orange-300)' }}>Navegación</span>
          {NAV.map((n) => <a key={n.id} href="#" onClick={(e) => { e.preventDefault(); go(n.id); }} style={{ fontSize: 'var(--size-body-sm)', color: 'var(--navy-100)' }}>{n.label}</a>)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <span className="e2-eyebrow" style={{ color: 'var(--orange-300)' }}>Contacto</span>
          <a href="mailto:contacto@grupoe2.com" style={{ fontSize: 'var(--size-body-sm)', color: 'var(--navy-100)' }}>contacto@grupoe2.com</a>
          <a href="https://www.grupoe2.com" style={{ fontSize: 'var(--size-body-sm)', color: 'var(--navy-100)' }}>www.grupoe2.com</a>
          <span style={{ fontSize: 'var(--size-body-sm)', color: 'var(--navy-300)' }}>México</span>
        </div>
      </div>
      <div style={{ borderTop: 'var(--hairline-inverse)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-5) var(--gutter-inline-lg)', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 'var(--size-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', fontWeight: 600, color: 'var(--navy-300)' }}>Grupo E2 · Consultoría corporativa · México 2026</span>
          <span style={{ fontSize: 'var(--size-caption)', color: 'var(--navy-300)' }}>Aviso de privacidad</span>
        </div>
      </div>
    </footer>
  );
}

function Section({ children, tone = 'light', style }) {
  const { Logo, Button, Icon } = window.GrupoE2DesignSystem_a36653;
  const tones = {
    light: { background: 'var(--surface-page)' },
    subtle: { background: 'var(--surface-subtle)' },
    navy: { background: 'var(--e2-navy)' },
  };
  return (
    <section className={tone === 'navy' ? 'e2-on-dark' : undefined} style={{ ...tones[tone], ...style }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter-inline-lg)' }}>{children}</div>
    </section>
  );
}

function SectionHead({ eyebrow, title, lead, align = 'left', dark = false }) {
  const { Logo, Button, Icon } = window.GrupoE2DesignSystem_a36653;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: align === 'center' ? '62ch' : '52ch', margin: align === 'center' ? '0 auto' : 0, textAlign: align }}>
      {eyebrow && <span className="e2-eyebrow" style={{ color: dark ? 'var(--orange-300)' : 'var(--text-accent)' }}>{eyebrow}</span>}
      <h2 style={{ fontSize: 'var(--size-display-3)', lineHeight: 'var(--lh-display-3)', letterSpacing: 'var(--ls-display-3)', fontWeight: 'var(--weight-bold)', color: dark ? 'var(--white)' : 'var(--text-strong)' }}>{title}</h2>
      {lead && <p style={{ fontSize: 'var(--size-body-lg)', lineHeight: 'var(--lh-body-lg)', color: dark ? 'var(--navy-100)' : 'var(--text-body)' }}>{lead}</p>}
    </div>
  );
}

Object.assign(window, { Header, Footer, Section, SectionHead, NAV });
