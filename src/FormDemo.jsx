import TextField from "@mui/material/TextField"
import Slider from "@mui/material/Slider"
import Box from "@mui/material/Box"
import { useState } from "react"

export default function FormDemo() {
    const [name, setName] = useState('');
    const [volume, setVolume] = useState(0);
    const updateName = (e) => {
        setName(e.target.value);
    }
    const changeVolume = (event, newValue) => {
        setVolume(newValue);
    }
    return (
        <Box sx={{
                border: '1px solid red', 
                p: 6,
                width: 300,
                height: 300,
                margin: "0 auto"
            }}>
            <h2>너의 이름은 {name}</h2>
            <TextField 
                id="outlined-basic" 
                placeholder="이름을 써라!"
                label="이름" 
                variant="outlined"
                value={name} 
                onChange={updateName}/>

            <h2>Volume is {volume}</h2>
            <Slider aria-label="Volume" value={volume} onChange={changeVolume} />                
        </Box>
    )
}