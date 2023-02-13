import { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';

interface Ihome {
  folders: any;
}

const Home: FC<Ihome> = ({ folders }) => {
  return <>123123123</>;
};

export async function getServerSideProps() {
  const folders: any = [];

  return { props: { folders } };
}

export default Home;
