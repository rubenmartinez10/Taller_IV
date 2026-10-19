import { useEffect, useState } from 'react';
import './HealthStatus.css';

export default function HealthStatus() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error('Error en el API');
        return res.json();
      })
      .then(setHealth)
      .catch(() => setError(true));
  }, []);

  return (
    <section className={`health ${error ? 'health--error' : ''}`}>
      <div className="health__box">
        <h4>Estado del API</h4>
        <p>
          {error
            ? 'No se pudo conectar con el API ❌'
            : health
            ? `${health.message} ✅`
            : 'Verificando...'}
        </p>
      </div>
    </section>
  );
}