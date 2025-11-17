import { Breadcrumbs, Link } from "@mui/material";
import CustomSelect from "@/CustomSelect";
import Aside from "@/Aside";
import Card from "@/Card";
import FilterList from "@/FilterList";
import { useSelector } from 'react-redux';
import { useGetAllProductsQuery, useSearchProductsQuery } from '../store/api/productsApi';

const Accessories = () => {
    const filteredProducts = useSelector(state => state.cards.filteredItems);
    const searchQuery = useSelector(state => state.cards.searchQuery);

    const {
        data: apiProducts,
        isLoading: isLoadingProducts,
        error: productsError
    } = useGetAllProductsQuery();

    const {
        data: searchResults,
        isLoading: isLoadingSearch,
        isFetching: isFetchingSearch
    } = useSearchProductsQuery(searchQuery, {
        skip: !searchQuery,
    });

    const displayProducts = searchQuery
        ? (searchResults?.products || [])
        : (apiProducts?.products || filteredProducts); //DummyJSON товары

    // const displayProducts = filteredProducts; //Мои товары

    const isLoading = isLoadingProducts || isLoadingSearch || isFetchingSearch;

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

                    {searchQuery && (
                        <div style={{ marginBottom: '15px', fontStyle: 'italic', color: '#666' }}>
                            {isLoadingSearch || isFetchingSearch ? (
                                'Searching...'
                            ) : (
                                `Found ${displayProducts.length} products for "${searchQuery}"`
                            )}
                        </div>
                    )}

                    <div className="accessories__filters">
                        <CustomSelect />
                    </div>
                    <FilterList />
                    <div className="accessories__sort">
                        <span>Sort by:</span>
                        &nbsp;
                        <span className="unpicked">Ascending price</span>
                        &nbsp;
                        <span className="picked">Descending Price</span>
                    </div>

                    <div className="cards">
                        {isLoading ? (
                            <div style={{
                                textAlign: 'center',
                                padding: '40px',
                                color: '#666',
                                fontSize: '18px'
                            }}>
                                Loading products...
                            </div>
                        ) : productsError ? (
                            <div style={{
                                textAlign: 'center',
                                padding: '40px',
                                color: 'red',
                                fontSize: '18px'
                            }}>
                                Error loading products
                            </div>
                        ) : displayProducts.length > 0 ? (
                            displayProducts.map(product => (
                                <Card
                                    key={product.id}
                                    src={product.thumbnail || product.src}
                                    alt={product.title || product.alt}
                                    value={product.title || product.value}
                                    price={product.price}
                                />
                            ))
                        ) : (
                            <div style={{
                                textAlign: 'center',
                                padding: '40px',
                                color: '#999',
                                fontSize: '18px'
                            }}>
                                {searchQuery ? 'No products found' : 'No products available'}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accessories;