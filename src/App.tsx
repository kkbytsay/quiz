import React from "react";
type Props = {
  title: string;
};

export const App = ({ title }: Props) => {
  return <div>{title}</div>;
};
