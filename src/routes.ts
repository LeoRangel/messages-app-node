import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
// import { Get3LastMessagesController } from "./controllers/GetLast3MessagesController";
// import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
    "/messages",
    ensureAuthenticated,
    new CreateMessageController().handle
);


export { router };