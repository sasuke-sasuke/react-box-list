import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

const BoxList = () => {
    const INITIAL_STATE = [{
        id: uuid(),
        backgroundColor: 'red',
        width: '100px',
        height: '100px'
    }]
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    // add a new box
    const addBox = (newBox) => {
        setBoxes([...boxes, {...newBox, id: uuid()}]);
    }

    // remove a box
    const removeBox = (id) => {
        setBoxes(boxes.filter(box => box.id !== id));
    }
    
    return (
        <div className='BoxList'>
            <NewBoxForm addBox={addBox} />
            {boxes.map(({id, backgroundColor, width, height}) => (
                <Box 
                    key={id} 
                    id={id} 
                    backgroundColor={backgroundColor} 
                    width={width}
                    height={height}
                    removeBox={removeBox}

                />
            ))}
        </div>
    )

};

export default BoxList;