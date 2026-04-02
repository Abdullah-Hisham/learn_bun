import {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
} from "../controllers/user.controller";

export const userRoutes = async (req: Request) => {
    const url = new URL(req.url);
    const method = req.method;
    const pathParts = url.pathname.split("/").filter(Boolean);

  // /api/users
    if (pathParts.length === 2) {
    if (method === "GET") return getUsers();

    if (method === "POST") {
        try {
        
        const data :any = await req.json();
        return createUser(data); 
        } catch (error) {
        return new Response(
            JSON.stringify({ message: "Invalid JSON" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
        }
    }
    }

    if (pathParts.length === 3) {
    const id = Number(pathParts[2]);

    if (method === "GET") return getUser(id);

    if (method === "PUT") {
        try {
        const data:any = await req.json();
        return updateUser(data, id);
        } catch (error) {
        return new Response(
            JSON.stringify({ message: "Invalid JSON" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
        }
    }

    if (method === "DELETE") return deleteUser(id);
    }

    return new Response("Not Found", { status: 404 });
};