'use client';
import { useEffect, useState } from 'react';
import api from '../../lib/api';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main className='container'>
      <h2>All Products</h2>
      
      <div className='form-group' style={{ maxWidth: '300px', marginBottom: '2rem' }}>
        <input
          type='text'
          placeholder='Search products...'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='grid'>
          {filteredProducts.map((product) => (
            <div key={product.id} className='card'>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <p className='price'>\\</p>
              <p style={{ fontSize: '0.9rem', color: '#999' }}>
                Type: {product.type}
              </p>
              <button className='btn-secondary'>
                <a href={\\/products/\\\\}>View Details</a>
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
