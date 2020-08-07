import axios from "axios";

export default {
    createBike: function (bikeData) {
        return axios.post("/api/bike", bikeData);
    },
    createFrequency: function (frequencyData) {
        return axios.post("/api/frequency", frequencyData);
    },
    createUses: function (usesData) {
        return axios.post("/api/uses", usesData);
    },
    createClient: function (clientData) {
        return axios.post("/api/client", clientData);
    },
    createUser: function (userData) {
        return axios.post("/api/user", userData);
    },
    getPostedBikes: function () {
        return axios.get("/api/bike");
    },
    getPostedFrequencies: function () {
        return axios.get("/api/frequency");
    },
    getPostedUses: function () {
        return axios.get("/api/uses");
    },
    getPostedClients: function () {
        return axios.get("/api/client");
    },
    getPostedUsers: function () {
        return axios.get("/api/user");
    }
}