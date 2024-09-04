interface Task {
    id: string;
    title: string;
    status: "inprogress" | "completed";
    priority: "high" | "low" | "medium"
}


export default Task;

