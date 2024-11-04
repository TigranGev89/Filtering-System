import React from 'react';
import { 
  Box, FormControl, InputLabel, Select, MenuItem, Slider, TextField, Typography 
} from '@mui/material';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
					label="Category"
          value={filters.category}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Footwear">Footwear</MenuItem>
          <MenuItem value="Clothing">Clothing</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Search by Brand"
        value={filters.brand}
        onChange={(e) => handleChange('brand', e.target.value)}
        variant="outlined"
        fullWidth
      />

      <Typography gutterBottom>Price Range</Typography>
      <Slider
        value={filters.price}
        onChange={(e, value) => handleChange('price', value)}
        valueLabelDisplay="auto"
        min={0}
        max={500}
      />

      <Typography gutterBottom>Rating</Typography>
      <Slider
        value={filters.rating}
        onChange={(e, value) => handleChange('rating', value)}
        valueLabelDisplay="auto"
        min={0}
        max={5}
        step={0.1}
      />

      <FormControl fullWidth>
        <InputLabel>Sort By</InputLabel>
        <Select
					label="Sort By"
          value={filters.sort}
          onChange={(e) => handleChange('sort', e.target.value)}
        >
          <MenuItem value="price-asc">Price: Low to High</MenuItem>
          <MenuItem value="price-desc">Price: High to Low</MenuItem>
          <MenuItem value="rating-asc">Rating: Low to High</MenuItem>
          <MenuItem value="rating-desc">Rating: High to Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
