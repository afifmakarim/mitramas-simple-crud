import Api from "../config/Api";

export const Auth = async (payload) => {
  const { data } = await Api.post("/auth/login", payload, {
    headers: { "Content-Type": "application/json" },
  });

  return data;
};
