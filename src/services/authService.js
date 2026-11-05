import api from "./api";

/** @typedef {import("./api-types").components["schemas"]["LoginResponse"]} LoginResponse */

/**
 * @param {string} username
 * @param {string} password
 * @returns {Promise<LoginResponse>}
 */
export const login = async (username, password) => {
  const response = await api.post("/auth/login", { username, password });
  return response.data;
};

/** @returns {Promise<LoginResponse>} */
export const refreshSession = async () => {
  const response = await api.post("/auth/refresh");
  return response.data;
};

/** @returns {Promise<void>} */
export const logout = async () => {
  await api.post("/auth/logout");
};
