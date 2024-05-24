import './App.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo';

function App() {
  return (
    <div>
      <Button variant="text" onClick={() => alert('Hi!')}>Text</Button>
      <Button color="success" variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button color="error" variant="contained">Contained</Button>
      <Button color="secondary" variant="contained" size="large">Contained</Button>

      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>

      <RatingDemo />
    </div>
  )
}

export default App
