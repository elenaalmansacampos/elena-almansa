import api from "./api";

/** @typedef {import("./api-types").components["schemas"]["PagedResponseProjectResponse"]} PagedProjects */
/** @typedef {import("./api-types").components["schemas"]["ProjectResponse"]} ProjectResponse */
/** @typedef {import("./api-types").components["schemas"]["ProjectRequest"]} ProjectRequest */

/**
 * @param {{ page?: number, size?: number }} [params]
 * @returns {Promise<PagedProjects>}
 */
export const getProjects = async ({ page = 0, size = 12 } = {}) => {
  const response = await api.get("/projects", {
    params: { page, size }
  });

  return response.data;
};

/** @returns {Promise<ProjectResponse[]>} */
export const getFeaturedProjects = async () => {
  const response = await api.get("/projects/featured");
  return response.data;
};

/**
 * @param {ProjectRequest} project
 * @returns {Promise<ProjectResponse>}
 */
export const createProject = async (project) => {
  const response = await api.post("/projects", project);
  return response.data;
};

/**
 * @param {number} id
 * @param {ProjectRequest} project
 * @returns {Promise<ProjectResponse>}
 */
export const updateProject = async (id, project) => {
  const response = await api.put(`/projects/${id}`, project);
  return response.data;
};

/** @param {number} id */
export const deleteProject = async (id) => {
  await api.delete(`/projects/${id}`);
};
