import request from "@fewlines-education/request";
import "dotenv/config";

function deletePost(idDelete: number): void {
  request(
    `http://${process.env.HOST}/posts/${idDelete}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log(data, 404);
    },
  );
}

export { deletePost };
