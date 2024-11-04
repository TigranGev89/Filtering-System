import React from 'react';
import { useGetProductsQuery } from './services/productsApi';
import { Container, CircularProgress, Box, Typography, Grid, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ProductList from './components/ProductList';
import Filters from './components/Filters';

const App = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [filters, setFilters] = React.useState({
    category: '',
    brand: '',
    price: [0, 500],
    rating: [0, 5],
    sort: 'price-asc',
  });

  const filteredProducts = React.useMemo(() => {
    if (!products) return [];
    return products.filter(
      (product) =>
        (filters.category === '' || product.category === filters.category) &&
        (filters.brand === '' || product.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
        product.price >= filters.price[0] &&
        product.price <= filters.price[1] &&
        product.rating >= filters.rating[0] &&
        product.rating <= filters.rating[1]
    );
  }, [products, filters]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'right' }}>
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box p={2} width={300}>
          <Typography variant="h6" gutterBottom>Filters</Typography>
          <Filters filters={filters} setFilters={setFilters} />
        </Box>
      </Drawer>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box sx={{ p: 2, borderRight: '1px solid #e0e0e0', height: '100%' }}>
            <Typography variant="h6" gutterBottom>Filters</Typography>
            <Filters filters={filters} setFilters={setFilters} />
          </Box>
        </Grid>

        <Grid item xs={12} md={9}>
          {isLoading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60vh',
              }}
            >
              <CircularProgress size={60} />
            </Box>
          ) : error ? (
            <Typography color="error">Error fetching products 😟</Typography>
          ) : (
            <ProductList products={filteredProducts} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;