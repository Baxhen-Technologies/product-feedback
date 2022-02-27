import React from 'react';
interface Props {}

const defaultProps: Partial<Props> = {};

export const Home: React.FC<Props> = () => {
  return <div>Home</div>;
};

Home.defaultProps = defaultProps;

export default Home;
