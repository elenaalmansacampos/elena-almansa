# 💻 Portfolio Frontend - Elena Almansa

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-hotpink?style=for-the-badge&logo=sass&logoColor=white)
![Java](https://img.shields.io/badge/Backend-Spring%20Boot-green?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?style=for-the-badge)


![Elena Almansa Portfolio](./src/assets/images/portfolio-preview.png)


## 📌 Descripción

Portfolio personal desarrollado como **Full Stack Developer**, creado con **React + Vite + SCSS** y conectado con una API REST desarrollada con **Spring Boot y PostgreSQL**.

El proyecto representa mi evolución profesional desde más de 20 años trabajando como **Webmaster** hacia el desarrollo de aplicaciones Full Stack modernas.

El objetivo es mostrar mi experiencia, stack tecnológico y proyectos reales mediante una interfaz responsive, limpia y orientada a la experiencia de usuario.


---

# 🚀 Demo

🔗 Próximamente disponible


---

# 🛠️ Tecnologías utilizadas


## Frontend

- ⚛️ React
- ⚡ Vite
- 🎨 SCSS / SASS
- 🔀 React Router DOM
- 🌐 Axios
- 🎯 React Icons
- 📱 Diseño Responsive


## Backend conectado

Este frontend consume una API REST desarrollada con:

- ☕ Java
- 🌱 Spring Boot
- 🔐 Spring Security + JWT
- 🗄️ PostgreSQL


Repositorio backend:

🔗 https://github.com/elenaalmansacampos/mi-portofolio-backend


---

# ✨ Funcionalidades


## 🏠 Home

- Presentación profesional
- Hero section
- Resumen de experiencia
- Stack tecnológico
- Proyectos destacados
- Acceso a contacto


## 👩‍💻 Sobre mí

- Trayectoria profesional
- Experiencia como Webmaster
- Evolución hacia Full Stack Developer
- Fortalezas profesionales
- Tecnologías utilizadas


## 🚀 Proyectos

Los proyectos se cargan dinámicamente desde el backend mediante API REST.

Incluye:

### 🌐 Mundo Tech

Plataforma web de noticias tecnológicas desarrollada con React y Spring Boot.

Tecnologías:

```
React
Java
Spring Boot
PostgreSQL
REST API
SCSS
```


### 💻 Portfolio personal

Portfolio Full Stack con autenticación JWT, gestión de proyectos y arquitectura basada en API REST.


### 🔮 Goddesses Tarot

Aplicación interactiva desarrollada con React, componentes reutilizables y estilos SCSS.


### 🦆 Duckstore

E-commerce frontend con catálogo de productos, carrito y gestión mediante JavaScript.


### 🎮 TicTacToe

Juego interactivo desarrollado para practicar lógica JavaScript y manipulación del DOM.


---

# 📂 Estructura del proyecto


```
src
│
├── assets
│   ├── images
│   └── project
│
├── components
│   ├── button
│   ├── contact
│   ├── experience
│   ├── footer
│   ├── header
│   ├── layouts
│   ├── projects
│   ├── tag
│   └── tech
│
├── pages
│   ├── home
│   ├── about
│   ├── projects
│   ├── contact
│   └── login
│
├── services
│   ├── projectService.js
│   └── authService.js
│
└── styles
    ├── variables.scss
    └── mixins.scss

```


---

# ⚙️ Instalación


Clonar repositorio:

```bash
git clone https://github.com/elenaalmansacampos/portafolio-frontend.git
```


Entrar en la carpeta:

```bash
cd portafolio-frontend
```


Instalar dependencias:

```bash
npm install
```


Ejecutar aplicación:

```bash
npm run dev
```


Disponible en:

```
http://localhost:5173
```


---

# 🔌 Conexión API

La URL del backend se configura con `VITE_API_URL` (por defecto `http://localhost:8080/api`). Copia `.env.example` a `.env` y ajústala si es necesario:

```bash
cp .env.example .env
```

Endpoints utilizados:

```
GET    /api/projects
POST   /api/auth/login
POST   /api/contact
POST   /api/projects      (ADMIN)
PUT    /api/projects/:id  (ADMIN)
DELETE /api/projects/:id  (ADMIN)
```

El frontend incluye login, logout, rutas protegidas y un panel de administración en `/admin`.


---

# 🐳 Docker

Desde la raíz del repositorio:

```bash
docker compose --env-file ./portafolio-backend/.env up --build
```

El frontend queda disponible en `http://localhost:5173` y consume el backend en `http://localhost:8080/api`.

---

# ▲ Despliegue en Vercel

El repositorio incluye `vercel.json` con rewrites SPA y cabeceras de seguridad. Configura `VITE_API_URL` en Vercel apuntando al backend desplegado, por ejemplo:

```
VITE_API_URL=https://tu-backend.onrender.com/api
```

---

# 🎨 Diseño


El diseño está basado en una estética minimalista y profesional:


- Mobile First
- Componentes reutilizables
- Arquitectura limpia
- Diseño responsive
- Experiencia de usuario cuidada
- Separación entre lógica y estilos


---

# 🧪 Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run lint` | ESLint |
| `npm run build:analyze` | Build con análisis de bundle (`dist/stats.html`) |
| `npm run check:bundle` | Verifica el presupuesto de rendimiento |
| `npm run api:types` | Genera tipos TypeScript desde OpenAPI |
| `npm run test:e2e` | Tests E2E con Playwright |

La autenticación usa access token en memoria y refresh token en cookie `HttpOnly`. El interceptor de Axios renueva la sesión automáticamente.

---

# 📌 Próximas mejoras


- [ ] Deploy frontend
- [ ] Deploy backend
- [ ] Formulario conectado a API
- [ ] Panel administrador de proyectos
- [ ] Mejoras de animaciones UX


---

# 👩‍💻 Autora


## Elena Almansa

**Full Stack Developer | Webmaster**


📍 Barcelona, España


LinkedIn:

https://www.linkedin.com/in/elena-almansa-5315a017/


GitHub:

https://github.com/elenaalmansacampos
