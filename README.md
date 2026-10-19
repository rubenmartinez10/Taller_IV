# Taller IV: Programación Web

**Universidad Centroamericana José Simeón Cañas (UCA)**
Programación Web, Sección 01, Ciclo 02-2026

## Integrantes

- Rubén Martinez
- Yukio Ogawa

## Descripción

Aplicación web de dos capas que demuestra la comunicación entre un frontend en React y una API REST en Express:

- **Frontend:** Vite + React + Reactstrap (puerto `5173`).
- **Backend:** API REST con Node.js y Express (puerto `3000`).

El frontend consume dos endpoints del backend y muestra su resultado en pantalla.

## Endpoints

| Método | Ruta          | Descripción                                                                                  |
| ------ | ------------- | -------------------------------------------------------------------------------------------- |
| GET    | `/api/health` | Indica que el API está funcionando.                                                          |
| GET    | `/api/info`   | Devuelve los integrantes (nombre, edad, carrera y cantidad de materias aprobadas) en JSON.   |

Ejemplo de respuesta de `/api/health`:

```json
{
  "status": "ok",
  "message": "El API está funcionando correctamente"
}
```

## Estructura del proyecto

```
Taller_IV/
├── backend/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── main.jsx
        └── components/
            ├── HealthStatus.jsx
            ├── HealthStatus.css
            └── InfoIntegrantes.jsx
```

## Requisitos

- Node.js 20.19 o superior (`node -v` para verificarlo)
- npm

## Instalación y ejecución

Se necesitan **dos terminales**, una para cada proyecto.

### 1. Backend

```bash
cd backend
npm install
npm run dev
```

El API quedará disponible en `http://localhost:3000`.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

La aplicación quedará disponible en `http://localhost:5173`.

> **Importante:** el backend debe estar en ejecución antes de abrir el frontend. De lo contrario, la aplicación mostrará un mensaje de error al no poder conectarse con el API.

## Verificación rápida

Con el backend en ejecución:

```bash
curl http://localhost:3000/api/health
curl http://localhost:3000/api/info
```

En Windows PowerShell, utilizar `curl.exe` en lugar de `curl`.

## Notas técnicas

- El frontend realiza las peticiones con `fetch('/api/...')`. Vite redirige (proxy) toda ruta que comience con `/api` hacia `http://localhost:3000`, configurado en `frontend/vite.config.js`.
- El backend habilita CORS mediante el paquete `cors`.
- `HealthStatus` está construido con las etiquetas `section`, `div`, `h4` y `p`, junto con CSS propio.
- `InfoIntegrantes` utiliza componentes de Reactstrap (`Alert`, `Card`, `Badge`, `Row`, `Col` y `Spinner`).
