import { useState } from 'react';

function ShoppingCart() {
    
    const [cart, setCart] = useState([
        { id: 1, name: "mouse", price: 20, quantity: 1 }
    ]);

    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    
    const handleAddProduct = (e) => {
        e.preventDefault();
        if (!name || !price) return;

        const newProduct = {
            id: Date.now(),
            name: name,
            price: parseFloat(price),
            quantity: 1
        };

        setCart([...cart, newProduct]);
        setName('');
        setPrice('');
    };

    
    const handleUpdateQuantity = (id, delta) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + delta;
                return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
            }
            return item;
        }));
    };

    
    const handleRemoveProduct = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div style={{ padding: '20px', }}>
            <h1>Simple Shopping Cart</h1>

            <h2>Add a Product</h2>
            <form onSubmit={handleAddProduct} style={{ marginBottom: '20px' }}>
                <input 
                    type="text" 
                    placeholder="Product Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    style={{ marginRight: '10px', padding: '5px' }}
                />
                <input 
                    type="number" 
                    placeholder="Price" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    style={{ marginRight: '10px', padding: '5px', width: '80px' }}
                />
                <button type="submit" style={{ padding: '6px 12px' }}>Add to Cart</button>
            </form>

            <h2>Products in Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul style={{ paddingLeft: '20px' }}>
                    {cart.map(item => (
                        <li key={item.id} style={{ marginBottom: '15px' }}>
                            <div>
                                {item.name} - ${item.price.toFixed(2)}
                            </div>
                            <div style={{ margin: '5px 0' }}>
                                Quantity: 
                                <button onClick={() => handleUpdateQuantity(item.id, -1)} style={{ margin: '0 5px', padding: '2px 6px' }}>-</button>
                                {item.quantity}
                                <button onClick={() => handleUpdateQuantity(item.id, 1)} style={{ margin: '0 5px', padding: '2px 6px' }}>+</button>
                            </div>
                            <div>
                                <button onClick={() => handleRemoveProduct(item.id)} style={{ padding: '3px 8px' }}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
}

export default ShoppingCart;