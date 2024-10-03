import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export const CircularSize = () => {
  return (
    <div className='circleSpinner'>
      <Stack spacing={2} direction="row" alignItems="center">
        <CircularProgress size={60} />
      </Stack>
    </div>
  );
}

export default CircularSize;