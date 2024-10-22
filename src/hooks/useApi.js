import axios from "axios";

export const register = async (data) => {
  const { name, email, password } = data;
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API_URL}/users/register`,
      { name, email, password }
    );
    if (response?.data?.token && response?.data?.user._id) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.user._id);
      return true;
    }
    throw new Error("Something went wrong");
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async (data) => {
  const { email, password } = data;
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API_URL}/users/login`,
      { email, password }
    );
    if (response?.data?.token && response?.data?.user._id) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.user._id);
      return true;
    }
    throw new Error("Something went wrong");
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    if (localStorage.getItem("token") && localStorage.getItem("userId")) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      return true;
    }
    throw new Error("Something went wrong");
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const getBooks = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_API_URL}/products/`
    );
    if (response?.data) {
      return response.data;
    }

    // throw new Error("Something went wrong");
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getBook = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_API_URL}/products/${id}`
    );
    if (response?.data) {
      return response.data;
    }
    throw new Error("Something went wrong");
  } catch (error) {
    throw new Error(error.message);
  }
};
