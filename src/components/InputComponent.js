import { useState } from "react";

const InputComponent = ({onChange}) => {
    const [value, setValue] = useState("")

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => onChange(value)} >Save</button>
        </div>
        
    )
}

export default InputComponent;