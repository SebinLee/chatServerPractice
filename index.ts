import { createHandler } from "./server/utils/graphql";

const server = createHandler();
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
