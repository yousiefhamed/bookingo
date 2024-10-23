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
    return "Something went wrong";
  } catch (error) {
    return error.message;
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
    return "Something went wrong";
  } catch (error) {
    return error.message;
  }
};

export const logout = async () => {
  try {
    if (localStorage.getItem("token") && localStorage.getItem("userId")) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      return true;
    }
    return "Something went wrong";
  } catch (error) {
    return "Something went wrong";
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

    return "Something went wrong";
  } catch (error) {
    return error.message;
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
    return "Something went wrong";
  } catch (error) {
    return error.message;
  }
};

const fetchWithAuth = async (url, method, data) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return "User not logged in";
  }

  try {
    const response = await axios({
      method,
      url,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data) {
      return response.data;
    }
    return "Something went wrong";
  } catch (error) {
    return error.message;
  }
};

export const getCart = async (userId, data) => {
  try {
    const response = await fetchWithAuth(
      `${process.env.REACT_APP_BACKEND_API_URL}/cart/${userId}/`,
      "GET",
      data
    );
    if (response) {
      return response;
    }
    return "Something went wrong";
  } catch (error) {
    return error.message;
  }
};

export const addToCart = async (userId, data) => {
  try {
    const response = await fetchWithAuth(
      `${process.env.REACT_APP_BACKEND_API_URL}/cart/${userId}/add`,
      "POST",
      data
    );
    if (response) {
      return response;
    }
    return "Something went wrong";
  } catch (error) {
    return error.message;
  }
};

export const decreaseCart = async (userId, data) => {
  try {
    const response = await fetchWithAuth(
      `${process.env.REACT_APP_BACKEND_API_URL}/cart/${userId}/decrease`,
      "PATCH",
      data
    );
    if (response) {
      return response;
    }
    return "Something went wrong";
  } catch (error) {
    return error.message;
  }
};

export const getWishllist = async (userId, data) => {
  try {
    const response = await fetchWithAuth(
      `${process.env.REACT_APP_BACKEND_API_URL}/wishlist/${userId}/`,
      "GET",
      data
    );
    if (response) {
      return response;
    }
    return "Something went wrong";
  } catch (error) {
    return error.message;
  }
};

export const addToWishlist = async (userId, data) => {
  try {
    const response = await fetchWithAuth(
      `${process.env.REACT_APP_BACKEND_API_URL}/wishlist/${userId}`,
      "POST",
      data
    );
    if (response) {
      return response;
    }
    return "Something went wrong";
  } catch (error) {
    return error.message;
  }
};

export const removeFromWishlist = async (userId, productId) => {
  try {
    const response = await fetchWithAuth(
      `${process.env.REACT_APP_BACKEND_API_URL}/wishlist/${userId}/${productId}`,
      "DELETE"
    );
    if (response) {
      return response;
    }
    return "Something went wrong";
  } catch (error) {
    return error.message;
  }
};
