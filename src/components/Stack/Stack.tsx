import React from "react";

type Props = {
  children: React.ReactNode;
};

const Stack = ({ children }: Props) => {
  return <div className="stack">{children}</div>;
};

export default Stack;
