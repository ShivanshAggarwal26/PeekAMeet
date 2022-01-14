import "./InputData.css";

const InputData = (props) => {
    const tagName = props.tagName;
    const typeName = props.typeName;
    return (
        <div>
            <label className={tagName}>{tagName}</label>
            <input className="inputBox" type={typeName}/>
        </div>
    )
}

export default InputData