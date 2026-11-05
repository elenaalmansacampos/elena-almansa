import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/authContext";
import {
  createProject,
  deleteProject,
  getProjects,
  updateProject
} from "../../services/projectService";

import "./Admin.scss";

const EMPTY_FORM = {
  title: "",
  slug: "",
  description: "",
  technologies: "",
  imageUrl: "",
  githubUrl: "",
  demoUrl: "",
  featured: false,
  displayOrder: 0
};

function Admin() {
  const { user, logout } = useAuth();

  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let active = true;

    getProjects({ size: 100 })
      .then((page) => {
        if (active) {
          setProjects(page.content);
        }
      })
      .catch(() => {
        if (active) {
          setError("No se pudieron cargar los proyectos.");
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleEdit = (project) => {
    setEditingId(project.id);
    setForm({
      title: project.title || "",
      slug: project.slug || "",
      description: project.description || "",
      technologies: project.technologies || "",
      imageUrl: project.imageUrl || "",
      githubUrl: project.githubUrl || "",
      demoUrl: project.demoUrl || "",
      featured: Boolean(project.featured),
      displayOrder: project.displayOrder ?? 0
    });
    setMessage("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (saving) {
      return;
    }

    setSaving(true);
    setError("");
    setMessage("");

    const payload = {
      ...form,
      slug: form.slug.trim() || null,
      displayOrder: Number(form.displayOrder) || 0
    };

    try {
      if (editingId) {
        const updated = await updateProject(editingId, payload);

        setProjects((current) =>
          current.map((project) =>
            project.id === editingId ? updated : project
          )
        );
        setEditingId(null);
        setMessage("Proyecto actualizado correctamente.");
      } else {
        const created = await createProject(payload);

        setProjects((current) => [created, ...current]);
        setMessage("Proyecto creado correctamente.");
      }

      setForm(EMPTY_FORM);
    } catch (requestError) {
      const status = requestError.response?.status;

      if (status === 400) {
        setError("Revisa los datos del formulario.");
      } else if (status === 401 || status === 403) {
        setError("Tu sesión ha caducado o no tienes permisos.");
      } else {
        setError("No se pudo guardar el proyecto.");
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este proyecto?")) {
      return;
    }

    setError("");
    setMessage("");

    try {
      await deleteProject(id);
      setProjects((current) => current.filter((project) => project.id !== id));

      if (editingId === id) {
        setEditingId(null);
        setForm(EMPTY_FORM);
      }

      setMessage("Proyecto eliminado correctamente.");
    } catch {
      setError("No se pudo eliminar el proyecto.");
    }
  };

  return (
    <main className="admin">
      <header className="admin__header">
        <div>
          <span className="admin__label">
            PANEL DE ADMINISTRACIÓN
          </span>

          <h1>
            Hola, {user?.username}
          </h1>

          <p>
            Gestiona los proyectos que aparecen en tu portfolio.
          </p>
        </div>

        <button
          type="button"
          className="admin__logout"
          onClick={logout}
        >
          Cerrar sesión
        </button>
      </header>

      {message && (
        <p className="admin__success">
          {message}
        </p>
      )}

      {error && (
        <p className="admin__error">
          {error}
        </p>
      )}

      <section className="admin__grid">
        <article className="admin__card">
          <h2>
            {editingId ? "Editar proyecto" : "Nuevo proyecto"}
          </h2>

          <form className="admin__form" onSubmit={handleSubmit}>
            <label htmlFor="admin-title">
              Título
            </label>
            <input
              id="admin-title"
              name="title"
              value={form.title}
              onChange={handleChange}
              maxLength={120}
              required
            />

            <label htmlFor="admin-slug">
              Slug (opcional)
            </label>
            <input
              id="admin-slug"
              name="slug"
              value={form.slug}
              onChange={handleChange}
              maxLength={160}
              placeholder="mi-proyecto"
            />

            <label htmlFor="admin-description">
              Descripción
            </label>
            <textarea
              id="admin-description"
              name="description"
              value={form.description}
              onChange={handleChange}
              maxLength={5000}
              rows="3"
            />

            <label htmlFor="admin-technologies">
              Tecnologías
            </label>
            <input
              id="admin-technologies"
              name="technologies"
              value={form.technologies}
              onChange={handleChange}
              maxLength={500}
              placeholder="React, Java, Spring Boot"
            />

            <label htmlFor="admin-image">
              Imagen (URL)
            </label>
            <input
              id="admin-image"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              maxLength={500}
            />

            <label htmlFor="admin-github">
              GitHub (URL)
            </label>
            <input
              id="admin-github"
              name="githubUrl"
              value={form.githubUrl}
              onChange={handleChange}
              maxLength={500}
            />

            <label htmlFor="admin-demo">
              Demo (URL)
            </label>
            <input
              id="admin-demo"
              name="demoUrl"
              value={form.demoUrl}
              onChange={handleChange}
              maxLength={500}
            />

            <label htmlFor="admin-order">
              Orden
            </label>
            <input
              id="admin-order"
              name="displayOrder"
              type="number"
              min="0"
              max="9999"
              value={form.displayOrder}
              onChange={handleChange}
            />

            <label className="admin__checkbox" htmlFor="admin-featured">
              <input
                id="admin-featured"
                name="featured"
                type="checkbox"
                checked={form.featured}
                onChange={handleChange}
              />
              Mostrar como proyecto destacado
            </label>

            <button type="submit" disabled={saving}>
              {saving
                ? "Guardando..."
                : editingId
                  ? "Guardar cambios"
                  : "Crear proyecto"}
            </button>

            {editingId && (
              <button
                type="button"
                className="admin__cancel"
                onClick={handleCancelEdit}
              >
                Cancelar edición
              </button>
            )}
          </form>
        </article>

        <article className="admin__card">
          <h2>
            Proyectos ({projects.length})
          </h2>

          {loading && <p>Cargando proyectos...</p>}

          {!loading && projects.length === 0 && (
            <p>Todavía no hay proyectos.</p>
          )}

          {!loading && projects.length > 0 && (
            <ul className="admin__list">
              {projects.map((project) => (
                <li key={project.id}>
                  <div>
                    <strong>{project.title}</strong>
                    <span>
                      {project.slug} · orden {project.displayOrder}
                      {project.featured ? " · destacado" : ""}
                    </span>
                    <span>{project.technologies}</span>
                  </div>

                  <div className="admin__row-actions">
                    <button
                      type="button"
                      className="admin__edit"
                      onClick={() => handleEdit(project)}
                    >
                      Editar
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(project.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </article>
      </section>

      <Link to="/" className="admin__back">
        ← Volver al portfolio
      </Link>
    </main>
  );
}

export default Admin;
