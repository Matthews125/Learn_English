export function Card({ title, right, children, className = '' }) {
  return (
    <section className={`card ${className}`}>
      {(title || right) && (
        <div className="card-head">
          {title && <h3>{title}</h3>}
          {right}
        </div>
      )}
      {children}
    </section>
  )
}

export function Bar({ value, max, color = 'var(--primary)' }) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0
  return (
    <div className="bar">
      <div className="bar-fill" style={{ width: `${pct}%`, background: color }} />
      <span className="bar-label">{pct}%</span>
    </div>
  )
}

export function Stat({ value, label, accent }) {
  return (
    <div className="stat">
      <div className="stat-value" style={accent ? { color: accent } : undefined}>{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export function Empty({ children }) {
  return <p className="empty">{children}</p>
}
