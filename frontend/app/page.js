'use client';
import { useEffect, useState } = require('react');
import api from '../lib/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <main className='container'>
      <section className='hero'>
        <h2>Welcome to SokoHost</h2>
        <p>Buy and sell digital products easily</p>
        <button className='btn-primary'><a href='/products'>Browse Products</a></button>
      </section>

      <section className='products'>
        <h3>Featured Products</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='grid'>
            {products.slice(0, 6).map((product) => (
              <div key={product.id} className='card'>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <p className='price'>\\</p>
                <button className='btn-secondary'><a href={\\/products/\\\\}>View Details</a></button>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
