import api from "./api";


export const sendContact = async (contactData) => {

  const response = await api.post("/contact", contactData);

  return response.data;

};