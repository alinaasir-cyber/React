import { CartProvider, useCart } from './CartContext';


const products = [
    { id: 1, name: 'Widget', price: 89.99 },
    { id: 2, name: 'Gadget', price: 89.99 }
];

function ProductList() {
    const { addToCart } = useCart();

    return (
        <div style={{ marginBottom: '30px' }}>
            {products.map((product) => (
                <div key={product.id} style={{ marginBottom: '15px' }}>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <button 
                        onClick={() => addToCart(product)}
                        style={{ padding: '6px 12px', cursor: 'pointer' }}
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

function CartSummary() {
    const { cart, removeFromCart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div>
            <h2>Cart Summary</h2>
            <p><strong>Total Items:</strong> {totalItems}</p>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {cart.map((item) => (
                        <li key={item.id} style={{ marginBottom: '10px' }}>
                            {item.name} - ${item.price} 
                            <button 
                                onClick={() => removeFromCart(item.id)}
                                style={{ marginLeft: '10px', padding: '2px 8px', cursor: 'pointer' }}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function ShopApp() {
    return (
        <CartProvider>
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <ProductList />
                <hr style={{ margin: '20px 0' }} />
                <CartSummary />
            </div>
        </CartProvider>
    );
}

export default ShopApp;