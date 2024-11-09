fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

const fetchApi = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const response = await fetch(url);

  try {
    if (response.status !== 200) {
      throw new Error("Đã xảy ra lỗi");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Có lỗi xảy ra:", error);
  }
};

fetchApi();
