import { useState } from 'react';

import './App.css';

// components
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {

  const [choices, setChoices] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  }

  return (
    <Container>
      {!editMode && <div className="choose-container">
        <Button onClick={toggleEditMode} variant="outlined">Edit</Button>
        <div>
          Current Selection
        </div>
        <Button variant="contained">Choose!</Button>
      </div>}
      {editMode && <div className="edit-container">
        <div>
          Current List
        </div>
        <TextField id="standard-basic" label="Choice" variant="standard" />
        <Button variant="contained">Add</Button>
        <Button onClick={toggleEditMode} variant="contained">Save</Button>
        <Button onClick={toggleEditMode} variant="outlined">Cancel</Button>
      </div>}
    </Container>
  );
}

export default App;
