import "./InputData.css";

const InputData = (props) => {
    const tagName = props.tagName;
    const typeName = props.typeName;
    const updateInputHandler = (event) => {
        props.inputDataChange(event);
    }

    return (
        <div>
            <label className={tagName}>{tagName}</label>
            <input className="inputBox" type={typeName} 
                    name={tagName} onChange={updateInputHandler}/>
        </div>
    )
}

export default InputData