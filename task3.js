"use strict";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
const getData = async (url) => {
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
        const rezalt = [];
        res.forEach((item) => {
            const resultItem = {
                ID: item.id,
                Email: item.email,
            };
            rezalt.push(resultItem);
        });
        const result = rezalt.map((item) => `ID: ${item.ID}, Email: ${item.Email}`);
        return result;
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("error message: ", error.message);
            return error.message;
        }
        else {
            console.log("unexpected error: ", error);
            return "An unexpected error occurred";
        }
    }
};
getData(COMMENTS_URL).then((data) => {
    console.log(data);
});
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
