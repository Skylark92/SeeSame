export default function ResultSection({title, children}) {
  return (
    <section className="result-section">
      <h2 className="result-section-title">{title}</h2>
      {children}
    </section>
  )
}
