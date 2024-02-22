import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store.ts";
import {writeDigit, deleteDigit, truePassword} from './PasswordSlice.ts'

const Password: React.FC = () => {

    const password = useSelector((state: RootState) => state.password.value);
    const isCorrect = useSelector((state: RootState) => state.password.isCorrect);
    const dispatch = useDispatch();

    const click = (digit: number) => {
        dispatch(writeDigit(digit));
    }

    const deleteClick = () => {
        dispatch(deleteDigit());
    };

    const enterClick = () => {
        dispatch(truePassword());
    }

    const passwordStars = () => {
        return '*'.repeat(password.length);
    }

    return (
        <div className="container">
            <div className="d-flex flex-row justify-content-md-center mt-4">
                <div className="col-md-auto">
                    <h4>Enter Password here:</h4>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-md-center mt-3">
                <div className="col-md-auto">
                    <h4>{passwordStars()}</h4>
                </div>
            </div>
            <div className="d-flex justify-content-md-center mt-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
                    <div key={digit} className="col-md-auto">
                        <button className="btn btn-primary" onClick={() => click(digit)}>{digit}</button>
                    </div>
                ))}
                <div className="col-md-auto">
                    <button className="btn btn-primary" onClick={deleteClick}>Delete</button>
                </div>
                <div className="col-md-auto">
                    <button className="btn btn-primary" onClick={enterClick}>Enter</button>
                </div>
            </div>
            {isCorrect !== null && (
                <div className="d-flex justify-content-md-center mt-3">
                    <div className="col-md-auto">
                        <p style={{color: isCorrect ? 'green' : 'red'}}>{isCorrect ? 'Access Granted' : 'Access Denied'}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Password;