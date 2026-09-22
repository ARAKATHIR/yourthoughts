export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`glass-card rounded-2xl ${hover ? 'glass-card-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
