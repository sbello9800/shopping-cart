

export function Cart (){
    return(
        <>
    <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
    </label>
    <input id={cartCheckboxId} type='checkbox' hidden />

    <aside className='cart'>
        <ul>
            {cart.map(product => (
            <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
            />
            ))}
        </ul>

        <button onClick={clearCart}>
            <ClearCartIcon />
        </button>
    </aside>
        </>
    )
}