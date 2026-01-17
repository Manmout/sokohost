-- INSERT DEMO USERS
INSERT INTO users (email, password, name, is_seller) VALUES
  ('seller@example.com', '\\\\\\$..hashed_password..', 'Demo Seller', TRUE),
  ('buyer@example.com', '\\\\\\$..hashed_password..', 'Demo Buyer', FALSE);

-- INSERT DEMO PRODUCTS
INSERT INTO products (seller_id, title, description, price, type, file_url, category, published) VALUES
  ('seller-id-here', 'React Tutorial eBook', 'Complete guide to React development', 29.99, 'ebook', 'https://example.com/react-guide.pdf', 'Programming', TRUE),
  ('seller-id-here', 'Website Template', 'Modern responsive website template', 49.99, 'template', 'https://example.com/template.zip', 'Design', TRUE),
  ('seller-id-here', 'Digital Music Pack', '100 royalty-free music tracks', 19.99, 'music', 'https://example.com/music-pack.zip', 'Music', TRUE);
