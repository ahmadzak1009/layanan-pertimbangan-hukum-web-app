const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getPengguna = () => axiosClient.get("/penggunas?populate=*");
const getOnePenggunaByEmail = (email) =>
  axiosClient.get(
    `/penggunas?filters[email][$eq]=${email}&populate[pengajuans][populate][0]=dokumenSurat&populate[pengajuans][populate][1]=progressPengajuan`
  );
const addPengguna = (data) => axiosClient.post("/penggunas", data);
const updatePengguna = (id, data) => axiosClient.put(`/penggunas/${id}`, data);

const addPengajuan = (data) => axiosClient.post("/pengajuans", data);
const getPengajuanById = (id) => axiosClient.get("/pengajuans/" + id + "?populate=*");

const uploadDokumen = (data) => axiosClient.post("/upload", data);

export default {
  getPengguna,
  getOnePenggunaByEmail,
  addPengguna,
  updatePengguna,
  addPengajuan,
  getPengajuanById,
  uploadDokumen,
};
