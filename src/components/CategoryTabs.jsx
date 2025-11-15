
const CategoryTabs = () => {
    return (
        <div className='category'>
            <ul className="category__list">
                <li className="category__list-item">
                    <button className='category__list-button'>Women</button>
                </li>
                <li className="category__list-item">
                    <button className='category__list-button'>Men</button>
                </li>
                <li className="category__list-item">
                    <button className='category__list-button'>Unisex</button>
                </li>
                <li className="category__list-item">
                    <button className='category__list-button'>Children</button>
                </li>
                <li className="category__list-item">
                    <button className='category__list-button'>New</button>
                </li>
            </ul>
        </div>
    );
};

export default CategoryTabs;