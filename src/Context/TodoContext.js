import { createContext, useContext } from "react";

const TodoContext = createContext({
    [
        {
            id: 1,
            todo: "todo msg",
            complete: false
        }
    ]
})