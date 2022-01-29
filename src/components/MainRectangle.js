import classes from "./MainRectangle.module.css"

const MainRectangle = (props) => {
    const inputData = props.inputData
    return (
        <div className={props.divClassValue} id={classes.divIdValue}>
            <span className={props.spanClassValue} id={classes.spanIdValue}>{inputData}</span>
        </div>
    )
}

export default MainRectangle