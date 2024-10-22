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
      `${process.env.REACT_APP_BACKEND_API_URL}/products`
    );
    console.log(response);
    if (response?.data?.books) {
      return response.data.books;
    }
    // throw new Error("Something went wrong");
  } catch (error) {
    // throw new Error(error.message);
    return [
      {
        id: 1,
        title: "Book 1",
        author: "Author 1",
        genre: "Fiction",
        rating: 4.5,
        price: 19.99,
      },
      {
        id: 2,
        title: "Book 2",
        author: "Author 2",
        genre: "Mystery",
        rating: 4.2,
        price: 14.99,
      },
      {
        id: 3,
        title: "Book 3",
        author: "Author 3",
        genre: "Science Fiction",
        rating: 4.8,
        price: 24.99,
      },
      {
        id: 4,
        title: "Book 4",
        author: "Author 4",
        genre: "Fantasy",
        rating: 4.0,
        price: 12.99,
      },
      {
        id: 5,
        title: "Book 5",
        author: "Author 5",
        genre: "Romance",
        rating: 4.7,
        price: 17.99,
      },
    ];
  }
};
