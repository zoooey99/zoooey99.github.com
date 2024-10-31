// /pages/index.tsx

import { GetServerSideProps } from 'next';
import { getTodayStats } from '@/lib/db';

interface StatsProps {
  recovery: number;
  hrv: number;
  rhr: number;
  strain: number;
}

const HomePage: React.FC<StatsProps> = ({ recovery, hrv, rhr, strain }) => {
  return (
    <div>
      <h1>Today&apos;s Stats</h1>
      <ul>
        <li>Recovery: {recovery}%</li>
        <li>HRV: {hrv} ms</li>
        <li>RHR: {rhr} bpm</li>
        <li>Strain: {strain}</li>
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const stats = await getTodayStats(); // Fetch from your database
    return { props: stats };
  } catch (error: any) {
    console.error('Error in getServerSideProps:', error.message);
    return {
      props: { recovery: 0, hrv: 0, rhr: 0, strain: 0 }, // Return default values on error
    };
  }
};

export default HomePage;
