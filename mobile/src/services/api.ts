import axios from "axios";

const api = axios.create({
  // para desenvolvimento deve ser o IP de conexão com EXPO
  baseURL: "http://192.168.15.7:3101",
});

export default api;
