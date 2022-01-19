import "./RectangleButton.css";

const RectangleButton = (props) => {
    const tagValue = props.tagValue;
    
    return (
        <div className="divBtnClass">
            <span className="spanBtnClass">{tagValue}</span>
        </div>
    )
}

export default RectangleButton