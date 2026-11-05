import api from "./api";

/** @typedef {import("./api-types").components["schemas"]["ContactRequest"]} ContactRequest */

/**
 * @param {ContactRequest} contactData
 * @returns {Promise<{ message?: string }>}
 */
export const sendContact = async (contactData) => {
  const response = await api.post("/contact", contactData);
  return response.data;
};
