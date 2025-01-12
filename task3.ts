const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface User {
  ID: number;
  Email: string;
}

const getData = async (
  url: string
): Promise<Array<User> | string[] | string> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    // 👇️ const result: GetUsersResponse
    const res = await response.json();

    const rezalt: Array<User> = [];
    res.forEach((item: any) => {
      const resultItem: User = {
        ID: item.id,
        Email: item.email,
      };
      rezalt.push(resultItem);
    });

    const result = rezalt.map((item) => `ID: ${item.ID}, Email: ${item.Email}`);
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};

getData(COMMENTS_URL).then((data) => {
  console.log(data);
});
