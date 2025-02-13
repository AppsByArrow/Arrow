import _ from "lodash";

export default {
  prefix: "/v1",

  get: {
    "/models": async () => {
      return {
        data: [
          {
            id: "deepseek-chat",
            object: "model",
            owned_by: "deepseek-Arrow-ai",
          },
          {
            id: "deepseek-coder",
            object: "model",
            owned_by: "deepseek-Arrow-ai",
          },
        ],
      };
    },
  },
};
