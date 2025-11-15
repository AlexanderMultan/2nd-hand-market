const Aside = () => {
    return (
        <div className="accordion">
            <p className="accordion__title">
                Categories
            </p>
            <details>
                <summary>Shoes</summary>
            </details>

            <details>
                <summary>Apparel</summary>
            </details>

            <details>
                <summary>Accessories</summary>
                <details>
                    <summary>Belts</summary>
                    hello
                </details>
            </details>

            <details>
                <summary>Sport</summary>
            </details>

            <details>
                <summary>Beauty</summary>
            </details>
        </div>
    );
};

export default Aside;
