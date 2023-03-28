import './Box.css';

const Box = ({id, backgroundColor, width, height, removeBox}) => {

    return (
        <>
            <div 
                className="Box"
                style={{
                    backgroundColor: backgroundColor, 
                    width: width, 
                    height: height
                }}
            >
                <button className='Box-btn' onClick={() => removeBox(id)}>x</button>
            </div>
        </>
    )
}

export default Box;