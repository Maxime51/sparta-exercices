import request from "@fewlines-education/request";
import "dotenv/config";

function createPost(titlePost: string, authorPost: string): void {
  const body = { title: titlePost, author: authorPost };

  request(
    `http://${process.env.HOST}/posts`,
    {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log(data);
    },
  );
}
createPost("Test", "Bob Marley");

export { createPost };
