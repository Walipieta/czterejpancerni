import React from "react";

interface TaskItemProps {
  children: React.ReactNode;
}

const TaskItem: React.FC<TaskItemProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default TaskItem;

/*
CardMdProps
interface CardMdProps {
//   href?: string;
//   iconSrc: string;
//   onClick?: () => void;
//   children?: React.ReactNode;
// }

*/
