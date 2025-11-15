const selectOptions = [
    {
        name: "color",
        label: "Сolor",
        options: [
            { value: "black", label: "Black" },
            { value: "white", label: "White" },
            { value: "gray", label: "Gray" }
        ]
    },
    {
        name: "size",
        label: "Size",
        options: [
            { value: "s", label: "S" },
            { value: "m", label: "M" },
            { value: "l", label: "L" },
            { value: "xl", label: "XL" }
        ]
    },
    {
        name: "brand",
        label: "Brand",
        options: [
            { value: "nike", label: "Nike" },
            { value: "adidas", label: "Adidas" },
            { value: "puma", label: "Puma" }
        ]
    },
    {
        name: "condition",
        label: "Condition",
        options: [
            { value: "new", label: "New" },
            { value: "used", label: "Used" },
            { value: "refurbished", label: "Refurbished" }
        ]
    },
    {
        name: "shop",
        label: "Shop",
        options: [
            { value: "amazon", label: "Amazon" },
            { value: "ebay", label: "eBay" },
            { value: "walmart", label: "Walmart" }
        ]
    },
    {
        name: "price",
        label: "Price",
        options: [
            { value: "0-50", label: "$0 - $50" },
            { value: "50-100", label: "$50 - $100" },
            { value: "100-200", label: "$100 - $200" },
            { value: "200+", label: "$200+" }
        ]
    }
];

const CustomSelect = () => {
    return (
        <div className="selects">
            {selectOptions.map((select) => (
                <select
                    key={select.name}
                    name={select.name}
                    id={`${select.name}-select`}
                    className="selects__select"
                    defaultValue=""
                >
                    <option className="select__option" value="" disabled>{select.label}</option>
                    {select.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ))}
        </div>
    );
};

export default CustomSelect;