import { AnimatePresence } from "framer-motion";
import ToDoItems from "./ToDoItems";

const ToDoList = ({ todos, handleCheck, removeElement }) => {
    return (
        <div>
            <div className=" space-y-3">
                <AnimatePresence>
                    {todos.map((t) => (
                        <ToDoItems
                            handleCheck={handleCheck}
                            removeElement={removeElement}
                            id={t.id}
                            key={t.id}
                            checked={t.checked}
                            time={t.time}
                        >
                            {t.text}
                        </ToDoItems>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ToDoList;