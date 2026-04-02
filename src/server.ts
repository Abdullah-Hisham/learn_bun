import { userRoutes } from "./routes/user.routes";

const server = Bun.serve({
    port: 3000,

    async fetch(req) {
        const url = new URL(req.url);

    // routing
    if (url.pathname.startsWith("/api/users")) {
    return userRoutes(req);
    }

    return new Response("Not Found", { status: 404 });
    },
});

console.log(`Server running on http://localhost:${server.port}`);