import loginInfo from "../fakedata/userdb";

export default (axios) => ({
  forgotPassword(email) {
    return axios.post("/auth/password/forgot", { email });
  },

  login(email, password) {
    if (email === loginInfo.email && password === loginInfo.password) {
      console.log("Logged in successfully!");
      return true;
    } else {
      console.log("Email or Password is wrong!");
      return false;
    }
    // return axios.post("/auth/login", { email, password });
  },

  logout() {
    return axios.get("/auth/logout");
  },

  register(payload) {
    return axios.post("/auth/register", payload);
  },

  resetPassword(password, passwordConfirmation, resetToken) {
    return axios.post("/auth/password/reset", {
      password: password,
      password_confirmation: passwordConfirmation,
      token: resetToken,
    });
  },
});
