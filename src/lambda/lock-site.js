// import axios from "axios";

export function handler(event, context, callback) {
  console.log("hi");
  console.log(event);
  console.log(context);

  const headers = event.headers;

  console.log("headers", headers);

  // axios({
  //   url: `https://api.netlify.com/api/v1/sites/${
  //     event.headers["x-bb-client-request-uuid"]
  //   }`,
  //   headers,
  //   method: "PUT",
  //   data: {
  //     password: "superSecretPassword"
  //   }
  // })
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, World!" })
  });
}
