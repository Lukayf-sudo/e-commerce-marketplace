
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Mock product data
const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 79.99,
    rating: 4.5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    category: 'Electronics',
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    rating: 4.8,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    category: 'Electronics',
    badge: 'New'
  },
  {
    id: '3',
    name: 'Leather Backpack',
    price: 89.99,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
    category: 'Fashion'
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: 129.99,
    rating: 4.7,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    category: 'Sports',
    badge: 'Popular'
  },
  {
    id: '5',
    name: 'Coffee Maker',
    price: 149.99,
    rating: 4.4,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=300&fit=crop',
    category: 'Home'
  },
  {
    id: '6',
    name: 'Desk Lamp',
    price: 45.99,
    rating: 4.3,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop',
    category: 'Home'
  },
  {
    id: '7',
    name: 'Yoga Mat',
    price: 34.99,
    rating: 4.6,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop',
    category: 'Sports'
  },
  {
    id: '8',
    name: 'Sunglasses',
    price: 159.99,
    rating: 4.5,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    category: 'Fashion',
    badge: 'Trending'
  }
];

export default function HomePage() {
  const { addItem } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Discover Amazing Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Shop the latest trends with unbeatable prices and fast shipping
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">All</Button>
            <Button variant="ghost" size="sm">Electronics</Button>
            <Button variant="ghost" size="sm">Fashion</Button>
            <Button variant="ghost" size="sm">Sports</Button>
            <Button variant="ghost" size="sm">Home</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-elevated transition-all duration-300 border-border">
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                      {product.badge}
                    </Badge>
                  )}
                </div>
              </Link>
              
              <CardContent className="p-4">
                <Link to={`/product/${product.id}`}>
                  <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium text-foreground">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <p className="text-2xl font-bold text-primary">${product.price}</p>
                </Link>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}