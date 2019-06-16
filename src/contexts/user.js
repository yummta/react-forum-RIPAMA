import { createContext } from "react";

const UserContext = createContext();

export const Provider = UserContext.Provider;
export const Consumer = UserContext.Consumer;
export default UserContext;
