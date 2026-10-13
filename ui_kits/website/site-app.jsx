function Site() {
  const [route, setRoute] = React.useState('home');
  const go = (r) => {
    setRoute(r);
    const el = document.getElementById('e2-scroll');
    if (el) el.scrollTop = 0;
  };
  return (
    <div id="e2-scroll" style={{ height: '100vh', overflowY: 'auto', background: 'var(--surface-page)' }}>
      <Header route={route} go={go} />
      <main key={route} style={{ animation: 'e2-page var(--dur-page) var(--ease-out)' }}>
        {route === 'home' && <Home go={go} />}
        {route === 'servicios' && <Services go={go} />}
        {route === 'contacto' && <Contact go={go} />}
      </main>
      <Footer go={go} />
    </div>
  );
}

window.Site = Site;
