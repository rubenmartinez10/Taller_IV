import { useEffect, useState } from 'react';
import {
  Alert, Badge, Card, CardBody, CardTitle, CardText,
  Row, Col, Spinner,
} from 'reactstrap';

export default function InfoIntegrantes() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/info')
      .then((res) => {
        if (!res.ok) throw new Error('Error en el API');
        return res.json();
      })
      .then(setInfo)
      .catch(() => setError(true));
  }, []);

  if (error) return <Alert color="danger">No se pudo obtener la info del API ❌</Alert>;
  if (!info) return <Spinner color="primary" />;

  return (
    <>
      <Alert color="success">{info.message} ✅</Alert>
      <Row>
        {info.integrantes.map((i) => (
          <Col md="6" lg="4" key={i.nombre} className="mb-3">
            <Card className="shadow-sm h-100">
              <CardBody>
                <CardTitle tag="h5">{i.nombre}</CardTitle>
                <CardText>
                  <strong>Edad:</strong> {i.edad} años <br />
                  <strong>Carrera:</strong> {i.carrera}
                </CardText>
                <Badge color="primary" pill>
                  {i.materiasAprobadas} materias aprobadas
                </Badge>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}