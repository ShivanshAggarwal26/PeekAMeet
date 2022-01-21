import { useDispatch } from "react-redux"
import { MainSliceActions } from "../store/MainSlice"

const NextButton = () => {

    const dispatch = useDispatch()
    
    const nextClickHandler = () => {
        dispatch(MainSliceActions.setPageVal())
    }

    return (
        <button className="nextButtonClass" onClick={nextClickHandler}>Next</button>
    )
}

export default NextButton