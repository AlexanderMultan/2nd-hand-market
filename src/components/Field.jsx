import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchProducts} from "../store/slices/cardSlice";

const Field = (props) => {
const {
    className,
} = props;

    const [searchValue, setSearchValue] = useState('');

    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        dispatch(searchProducts(value));
    };

    return (
        <div className={`field ${className}`}>
            <input
                className="field__input"
                type="text"
                placeholder=""
                value={searchValue}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default Field;