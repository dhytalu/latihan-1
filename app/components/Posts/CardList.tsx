import React from 'react';

type CardListProps = {
  children: React.ReactNode;
};

const CardList = ({ children }: CardListProps) => {
  return <div className="bg-amber-500 w-full p-4">{children}</div>;
};

export default CardList;
