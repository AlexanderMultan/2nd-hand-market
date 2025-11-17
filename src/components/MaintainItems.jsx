import React, { useState } from 'react';
import Field from "@/Field";

const MaintainItems = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const items = [
        {
            id: 1,
            name: "Nike Air Max 90 Sneakers - White/Black - US 9",
            quantity: 1,
            category: "Footwear",
            subcategory: "Sneakers",
            storage: "Austria 459 Maudie Islands Suite 854 Pecoch...",
            status: "In Sale"
        },
        {
            id: 2,
            name: "Levi's 501 Original Fit Jeans - Dark Blue - 34x32",
            quantity: 1,
            category: "Bottoms",
            subcategory: "Jeans",
            storage: "Austria 459 Maudie Islands Suite 854 Pecoch...",
            status: "In Progress"
        },
        {
            id: 3,
            name: "Gucci GG Marmont Quilted Leather Shoulder Bag...",
            quantity: 1,
            category: "Accessories",
            subcategory: "Handbags",
            storage: "Austria 459 Maudie Islands Suite 854 Pecoch...",
            status: "Locked"
        },
        {
            id: 4,
            name: "H&M Floral Print Wrap Dress - Navy - Medium",
            quantity: 2,
            category: "Dresses",
            subcategory: "Wrap Dress",
            storage: "Austria 459 Maudie Islands Suite 854 Pecoch...",
            status: "Reserved"
        },
        {
            id: 5,
            name: "Puma Evestripe Hoodie - Gray - Large",
            quantity: 1,
            category: "Tops",
            subcategory: "Hoodie",
            storage: "Austria 459 Maudie Islands Suite 854 Pecoch...",
            status: "Sold"
        },
    ];

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.subcategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCheckboxChange = (itemId) => {
        setSelectedItems(prev =>
            prev.includes(itemId)
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedItems(filteredItems.map(item => item.id));
        } else {
            setSelectedItems([]);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setSelectedItems([]);
    };

    const getStatusClass = (status) => {
        const statusMap = {
            'In Sale': 'status--sale',
            'In Progress': 'status--progress',
            'Locked': 'status--locked',
            'Reserved': 'status--reserved',
            'Sold': 'status--sold',
            'Closed Out': 'status--closed'
        };
        return statusMap[status] || '';
    };

    return (
        <section className="maintain-items">
            <div className="maintain-items__header">
                <h1 className="maintain-items__title">Maintain Items</h1>

                <div className="maintain-items__actions">
                    <input
                        className="maintain-items__search-input"
                        placeholder="Search items..."
                        type="search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="maintain-items__btn">Add Item</button>
                </div>
            </div>

            <div className="table-container">
                <table className="items-table">
                    <thead className="items-table__header">
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                onChange={handleSelectAll}
                                checked={selectedItems.length === filteredItems.length && filteredItems.length > 0}
                            />
                        </th>
                        <th>Name</th>
                        <th>Item</th>
                        <th>Category</th>
                        <th>Subcategory</th>
                        <th>Storage</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody className="items-table__body">
                    {filteredItems.map(item => (
                        <tr key={item.id} className="items-table__row">
                            <td className="items-table__cell items-table__cell--checkbox">
                                <input
                                    type="checkbox"
                                    checked={selectedItems.includes(item.id)}
                                    onChange={() => handleCheckboxChange(item.id)}
                                />
                            </td>
                            <td className="items-table__cell items-table__cell--name">
                                <strong>{item.name}</strong>
                            </td>
                            <td className="items-table__cell items-table__cell--quantity">
                                {item.quantity}
                            </td>
                            <td className="items-table__cell">{item.category}</td>
                            <td className="items-table__cell">{item.subcategory}</td>
                            <td className="items-table__cell items-table__cell--storage">
                                {item.storage}
                            </td>
                            <td className="items-table__cell">
                                    <span className={`status ${getStatusClass(item.status)}`}>
                                        {item.status}
                                    </span>
                            </td>
                        </tr>
                    ))}
                    {filteredItems.length === 0 && (
                        <tr>
                            <td colSpan="7" className="no-results-cell">
                                No items found for "{searchTerm}"
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MaintainItems;