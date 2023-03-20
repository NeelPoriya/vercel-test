const server =
  process.env.NODE_ENV === "production"
    ? "https://vercel-test-neelporiya.vercel.app"
    : "http://localhost:3000";

export default server;
