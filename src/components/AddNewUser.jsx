import React, {useState} from 'react';

const AddNewUser = () => {

    const [formData, setFormData] = useState({
        archived: 'no',
        active: 'yes',
        salutation: '',
        firstName: '',
        email: '',
        phone: '',
        mobile: '',
        street: '',
        number: '',
        zipCode: '',
        city: '',
        country: '',
        paypal: '',
        contractSigned: '',
        notes: '',
        shipping: 'no',
        salesQuote: '',
        yearOfBirth: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <>
        <form className="user-form" onSubmit={handleSubmit}>
            <h1 className="user-form__title">Add New User</h1>

            {/* Client Section */}
            <section className="form-section">
                <h2 className="form-section__title">Client *</h2>

                <div className="field-group">
                    <label className="field-group__label">Archived</label>
                    <div className="radio-group">
                        <label className="radio">
                            <input
                                type="radio"
                                name="archived"
                                value="yes"
                                checked={formData.archived === 'yes'}
                                onChange={handleChange}
                            />
                            <span className="radio__label">Yes</span>
                        </label>
                        <label className="radio">
                            <input
                                type="radio"
                                name="archived"
                                value="no"
                                checked={formData.archived === 'no'}
                                onChange={handleChange}
                            />
                            <span className="radio__label">No</span>
                        </label>
                    </div>
                </div>

                <div className="field-group">
                    <label className="field-group__label">Active</label>
                    <div className="radio-group">
                        <label className="radio">
                            <input
                                type="radio"
                                name="active"
                                value="yes"
                                checked={formData.active === 'yes'}
                                onChange={handleChange}
                            />
                            <span className="radio__label">Yes</span>
                        </label>
                        <label className="radio">
                            <input
                                type="radio"
                                name="active"
                                value="no"
                                checked={formData.active === 'no'}
                                onChange={handleChange}
                            />
                            <span className="radio__label">No</span>
                        </label>
                    </div>
                </div>

                <div className="field-group">
                    <label className="field-group__label">Bring client number *</label>
                    <select
                        className="select"
                        name="salutation"
                        value={formData.salutation}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Salutation</option>
                        <option value="mr">Mr.</option>
                        <option value="ms">Ms.</option>
                        <option value="dr">Dr.</option>
                    </select>
                </div>

                <div className="field-group">
                    <label className="field-group__label">Name *</label>
                    <input
                        type="text"
                        className="input"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        required
                    />
                </div>

                <div className="field-group">
                    <label className="field-group__label">Email address *</label>
                    <input
                        type="email"
                        className="input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        required
                    />
                </div>

                <div className="field-group">
                    <label className="field-group__label">Phone number</label>
                    <input
                        type="tel"
                        className="input"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                    />
                </div>
            </section>

            <hr className="form-divider" />

            {/* Address Section */}
            <section className="form-section">
                <div className="field-group">
                    <label className="field-group__label">Mobile number</label>
                    <input
                        type="tel"
                        className="input"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile number"
                    />
                </div>

                <div className="field-group">
                    <label className="field-group__label">Street *</label>
                    <input
                        type="text"
                        className="input"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        placeholder="Street"
                        required
                    />
                </div>

                <div className="field-group">
                    <label className="field-group__label">Number *</label>
                    <input
                        type="text"
                        className="input"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="Number"
                        required
                    />
                </div>

                <div className="field-group">
                    <label className="field-group__label">ZIP code *</label>
                    <input
                        type="text"
                        className="input"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        placeholder="ZIP code (4-5 digits)"
                        pattern="\d{4,5}"
                        required
                    />
                </div>

                <div className="field-group">
                    <label className="field-group__label">City *</label>
                    <input
                        type="text"
                        className="input"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        required
                    />
                </div>

                <div className="field-group">
                    <label className="field-group__label">Country *</label>
                    <select
                        className="select"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Country</option>
                        <option value="us">United States</option>
                        <option value="de">Germany</option>
                        <option value="fr">France</option>
                    </select>
                </div>
            </section>

            <hr className="form-divider" />

            {/* Additional Info */}
            <section className="form-section">
                <div className="field-group">
                    <label className="field-group__label">Paypal account</label>
                    <input
                        type="text"
                        className="input"
                        name="paypal"
                        value={formData.paypal}
                        onChange={handleChange}
                        placeholder="Paypal account"
                    />
                </div>

                <div className="field-group">
                    <label className="field-group__label">Contract signed</label>
                    <input
                        type="text"
                        className="input"
                        name="contractSigned"
                        value={formData.contractSigned}
                        onChange={handleChange}
                        placeholder="Contract signed"
                    />
                </div>

                <div className="field-group">
                    <label className="field-group__label">Notes</label>
                    <textarea
                        className="textarea"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Notes"
                        rows="3"
                    />
                </div>

                <div className="field-group">
                    <label className="field-group__label">Shipping</label>
                    <div className="radio-group">
                        <label className="radio">
                            <input
                                type="radio"
                                name="shipping"
                                value="yes"
                                checked={formData.shipping === 'yes'}
                                onChange={handleChange}
                            />
                            <span className="radio__label">Yes</span>
                        </label>
                        <label className="radio">
                            <input
                                type="radio"
                                name="shipping"
                                value="no"
                                checked={formData.shipping === 'no'}
                                onChange={handleChange}
                            />
                            <span className="radio__label">No</span>
                        </label>
                    </div>
                </div>

                <div className="field-group">
                    <label className="field-group__label">Sales quote</label>
                    <div className="input-with-symbol">
                        <input
                            type="number"
                            className="input"
                            name="salesQuote"
                            value={formData.salesQuote}
                            onChange={handleChange}
                            placeholder="0"
                            min="0"
                            max="100"
                        />
                        <span className="input-symbol">%</span>
                    </div>
                </div>

                <div className="field-group">
                    <label className="field-group__label">Year of birth</label>
                    <select
                        className="select"
                        name="yearOfBirth"
                        value={formData.yearOfBirth}
                        onChange={handleChange}
                    >
                        <option value="">Year of birth</option>
                        {Array.from({ length: 100 }, (_, i) => {
                            const year = new Date().getFullYear() - i;
                            return (
                                <option key={year} value={year}>{year}</option>
                            );
                        })}
                    </select>
                </div>
            </section>

            <div className="form-actions">
                <button type="submit" className="button button--primary">
                    Create User
                </button>
                <button type="button" className="button button--secondary">
                    Cancel
                </button>
            </div>
        </form>
        </>
    );
};

export default AddNewUser;