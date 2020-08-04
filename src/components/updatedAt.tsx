import React from "react";

interface IUpdatedProps {
  updatedAt: number;
}

const UpdatedAt = ({ updatedAt }: IUpdatedProps) => {
  const ms = new Date().getTime() - updatedAt;
  const secondsAgo = Math.floor(ms / 1000);
  return <>{secondsAgo} seconds ago</>;
};

export default UpdatedAt;
