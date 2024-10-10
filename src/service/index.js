import request from "./request";

export const getAccessToken = (data) => request.post("/oauth/token",data)

export const getRope = (data) => request.post("/api/v5/user/repos", data);