import React from 'react';
import { ScrollView } from 'react-native';
import { Box } from '../../components';

import Category from './Category';

const categories = [
  { id: 'newin', title: 'New In', color: '#FFE8E9' },
  { id: 'summer', title: 'Summer', color: '#BEECC4' },
  { id: 'activewear', title: 'Active Wear', color: '#BFEAF5' },
  { id: 'outlet', title: 'Outlet', color: '#F1E0FF' },
  { id: 'accesories', title: 'Accesories', color: '#FFE8E9' },
];

const Categories = () => {
  return (
    <Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ScrollView>
    </Box>
  );
};

export default Categories;
