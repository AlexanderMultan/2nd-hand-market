import React from 'react';
import Field from "@/Field";

const MaintainItems = () => {
    return (
            <section className="maintain-items">
                <div className="maintain-items__header">
                    <p className="maintain-items__tittle">Maintain Items</p>

                    <div className="maintain-items__actions">
                        <Field
                            className = "maintain-items__search"
                            placeholder=""
                            id="search-item"
                            type="search"
                        />
                        <button className="maintain-items__btn">Add Item</button>
                    </div>
                </div>
            </section>
    );
};

export default MaintainItems;