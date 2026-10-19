import { Container } from 'reactstrap';
import HealthStatus from './components/HealthStatus';
import InfoIntegrantes from './components/InfoIntegrantes';

export default function App() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Taller IV</h1>
      <HealthStatus />
      <InfoIntegrantes />
    </Container>
  );
}