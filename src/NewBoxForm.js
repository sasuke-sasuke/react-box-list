import {useState} from 'react';
import './NewBoxForm.css';

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        backgroundColor: '',
        width: '',
        height: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    // handle change
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(data => ({
          ...data,
            [name]: value
        }))
    }

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">Color</label>
            <input 
                type="text" 
                id="backgroundColor"
                name="backgroundColor" 
                placeholder='purple'
                value={formData.backgroundColor} 
                onChange={handleChange} 
            />
            <label htmlFor="width">Width</label>
            <input 
                type="text" 
                id="width"
                name="width" 
                placeholder='100px'
                value={formData.width} 
                onChange={handleChange} 
            />
            <label htmlFor="height">Height</label>
            <input 
                type="text" 
                id="height"
                name="height" 
                placeholder='150px'
                value={formData.height} 
                onChange={handleChange} 
            />
            <button type='submit'>Add "Square-tangle"</button>

        </form>
    )
}

export default NewBoxForm;