# 💻 Portfolio Frontend - Elena Almansa

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-hotpink?style=for-the-badge&logo=sass&logoColor=white)
![Java](https://img.shields.io/badge/Backend-Spring%20Boot-green?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?style=for-the-badge)


![Elena Almansa Portfolio](./src/assets/images/portfolio-preview.png)


## 📌 Descripción

Portfolio personal desarrollado como **Full Stack Developer**, creado con **React + Vite + SCSS**.

> **Estado actual:** versión estática publicada en GitHub Pages. El backend Spring Boot existe en el proyecto, pero no está conectado en esta versión; los proyectos se sirven desde datos locales y el formulario abre el cliente de correo.

El proyecto representa mi evolución profesional desde más de 20 años trabajando como **Webmaster** hacia el desarrollo de aplicaciones Full Stack modernas.

El objetivo es mostrar mi experiencia, stack tecnológico y proyectos reales mediante una interfaz responsive, limpia y orientada a la experiencia de usuario.


---

# 🚀 Demo

🔗 https://elenaalmansacampos.github.io/elena-almansa/


---

# 🛠️ Tecnologías utilizadas


## Frontend

- ⚛️ React
- ⚡ Vite
- 🎨 SCSS / SASS
- 🔀 React Router DOM
- 🎯 React Icons
- 📱 Diseño Responsive


## Backend del proyecto

El backend existe en un repositorio aparte, aunque **no está conectado en la versión estática actual**. Está desarrollado con:

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

Los proyectos se cargan desde datos locales (`src/data/fallbackProjects.js`) para que la versión estática de GitHub Pages no dependa de un backend.

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
│   └── contact
│
├── data
│   └── fallbackProjects.js
│
└── styles
    ├── variables.scss
    └── mixins.scss

```


---

# ⚙️ Instalación


Clonar repositorio:

```bash
git clone https://github.com/elenaalmansacampos/elena-almansa.git
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

# 🔌 Modo estático

Esta versión no realiza peticiones al backend:

- Los proyectos se cargan desde `src/data/fallbackProjects.js`.
- El formulario de contacto valida en cliente y abre el cliente de correo con el mensaje preparado.
- Las rutas `/login` y `/admin` redirigen a la home.

El backend queda preparado en el repositorio `mi-portofolio-backend` para una futura reconexión.


---

# 🐳 Docker

Desde la raíz del repositorio:

```bash
docker compose --env-file ./portafolio-backend/.env up --build
```

El frontend queda disponible en `http://localhost:5173` y consume el backend en `http://localhost:8080/api`.

---

# 🐙 GitHub Pages

URL prevista:

```
https://elenaalmansacampos.github.io/elena-almansa/
```

Configuración:

1. En GitHub, `Settings > Pages > Build and deployment > Source: GitHub Actions`.
2. El workflow `.github/workflows/deploy-pages.yml` compila con `VITE_BASE_PATH=/elena-almansa/`.
3. El workflow genera `404.html` para mantener URLs limpias en rutas SPA.

> GitHub Pages solo aloja el frontend. Esta versión es estática y no usa backend. Las URLs profundas devuelven HTTP 404 aunque el SPA funcione; para SEO perfecto conviene un dominio propio con rewrites reales.

---

# ▲ Despliegue en Vercel

El repositorio incluye `vercel.json` con rewrites SPA y cabeceras de seguridad. Al ser una versión estática, no requiere variables de entorno.

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
