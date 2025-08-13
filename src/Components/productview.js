const addToRecentlyViewed = (product) => {
  const stored = localStorage.getItem('recentlyViewed');
  let viewed = stored ? JSON.parse(stored) : [];

  // Remove existing product with same ID
  viewed = viewed.filter(p => p.id !== product.id);

  // Add new product at the top
  viewed.unshift(product);

  // Limit to 5 products
  const limited = viewed.slice(0, 5);

  localStorage.setItem('recentlyViewed', JSON.stringify(limited));
};
