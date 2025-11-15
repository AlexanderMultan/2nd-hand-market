import {useState} from "react";
import {Breadcrumbs, Link} from "@mui/material";
import CustomSelect from "@/CustomSelect";
import Aside from "@/Aside";
import Card from "@/Card";
import FilterList from "@/FilterList";


import redJacket from '../assets/images/red-jacket.jpg'
import darkJacket from '../assets/images/dark-jacket.jpg'
import brownJacket from '../assets/images/brown-jacket.jpg'
import beigeJacket from '../assets/images/beige-jacket.jpg'
import smock from "../assets/images/smock.jpg"
import darkDenimJacket from '../assets/images/dark-denim-jacket.jpg'
import blackJacket from '../assets/images/black-jacket.jpg'
import lightDenimJacket from '../assets/images/light-denim-jacket.jpg'


const Accessories = () => {
    return (
        <section className="accessories">
            <div className="container">
                <Aside />
                <div className="idk">
                    <Breadcrumbs
                        sx={{
                            fontFamily: 'var(--font-family)',
                            opacity: 0.6,
                            fontSize: '12px',
                            fontWeight: 500,
                            '& .MuiBreadcrumbs-separator': {
                                color: '#000000',
                                opacity: 1,
                            },
                            '& .MuiLink-root': {
                                fontFamily: 'inherit',
                                fontSize: 'inherit',
                                fontWeight: 'inherit',
                            }
                        }}
                        separator="›"
                        aria-label="breadcrumb"
                    >
                        <Link underline="hover" color="#ff2d55" href="/">
                            Home
                        </Link>
                        <Link underline="hover" color="#ff2d55" href="/">
                            Woman
                        </Link>
                        <Link underline="hover" color="#333" href="/" aria-current="page">
                            Accessories
                        </Link>
                    </Breadcrumbs>

                    <div className="accessories__filters">
                        <CustomSelect />
                    </div>
                    <FilterList />
                    <div className="accessories__sort" >
                        <span>Sort by:</span>
                        &nbsp;
                        <span className="unpicked">Ascending price</span>
                        &nbsp;
                        <span className="picked">Descending Price</span>
                    </div>
                    <div className="cards">
                        <Card
                            src= {redJacket}
                            alt= 'Red Jacket'
                            value = 'Autumn / Spring jacket - Esprit - XS'
                            price = '42,90'
                        />
                        <Card
                            src= {darkJacket}
                            alt= 'Dark Jacket'
                            value = 'Autumn / Spring jacket - Other Brand - S'
                            price = '32,90'
                        />
                        <Card
                            src= {brownJacket}
                            alt= 'Brown Jacket'
                            value = 'Faux leather jacket - Zizzi - 44'
                            price = '37,90'
                        />
                        <Card
                            src= {beigeJacket}
                            alt= 'Beige Jacket'
                            value = 'Outdoor jacket - Torstai - 46'
                            price = '22,90'
                        />
                        <Card
                            src= {smock}
                            alt= 'Smock'
                            value = 'Smock - Other Brand - XL'
                            price = '7,90'
                        />
                        <Card
                            src= {darkDenimJacket}
                            alt= 'Dark Denim Jacket'
                            value = 'Denim jacket - Mexx - 34'
                            price = '17,90'
                        />
                        <Card
                            src= {blackJacket}
                            alt= 'Black Jacket'
                            value = 'Autumn / Spring jacket - Only - 38'
                            price = '14,90'
                        />
                        <Card
                            src= {lightDenimJacket}
                            alt= 'Light Denim Jacket'
                            value = 'Denim jacket - Vero Moda - 36'
                            price = '29,90'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accessories;