import * as userService from "../services/user.service";

export const createUser = async (req: Request) => {
  const body :any= await req;

  if (!body.name || !body.email) {
    return new Response(JSON.stringify({ message: "Invalid data" }), {
      status: 400,
    });
  }

  const user = userService.createUser(body.name, body.email);

  return Response.json(user, { status: 201 });
};

export const getUsers = () => {
  return Response.json(userService.getUsers());
};

export const getUser = (id: number) => {
  const user = userService.getUserById(id);

  if (!user) {
    return new Response(JSON.stringify({ message: "Not found" }), {
      status: 404,
    });
  }

  return Response.json(user);
};

export const updateUser = async (req: Request, id: number) => {
  const body:any = await req.json();

  const user = userService.updateUser(id, body);

  if (!user) {
    return new Response(JSON.stringify({ message: "Not found" }), {
      status: 404,
    });
  }

  return Response.json(user);
};

export const deleteUser = (id: number) => {
  userService.deleteUser(id);

  return Response.json({ message: "Deleted" });
};