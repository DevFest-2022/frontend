import { RotatingLines } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div style={{ height: '100vh', paddingTop: '25px' }}>
      <RotatingLines />
    </div>
  );
};
