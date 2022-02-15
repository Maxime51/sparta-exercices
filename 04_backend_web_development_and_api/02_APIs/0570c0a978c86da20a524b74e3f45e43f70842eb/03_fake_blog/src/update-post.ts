import request from "@fewlines-education/request";
import "dotenv/config";

function updatePostTitle(idUpdate: number, newTitle: string): void {
  const body = { title: newTitle };

  request(
    `http://${process.env.HOST}/posts/${idUpdate}`,
    {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log(data);
    },
  );
}

function updatePostAuthor(idUpdate: number, newAuthor: string): void {
  const body = { author: newAuthor };

  request(
    `http://${process.env.HOST}/posts/${idUpdate}`,
    {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log(data);
    },
  );
}

function updatePost(idUpdate: number, newTitle: string, newAuthor: string): void {
  const body = { id: idUpdate, title: newTitle, author: newAuthor };
  request(
    `http://${process.env.HOST}/posts/${idUpdate}`,
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log(data);
    },
  );
}

export { updatePost, updatePostAuthor, updatePostTitle };
