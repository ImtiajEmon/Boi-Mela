import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductsProvider } from "./Model/product-context"
import { GenreProvider } from "./Model/genre-context"
import { NewArrivalsProvider } from "./Model/new-arrival-context"
import { ToastContextProvider } from './Model/toast-context';
import { UserLoginContextProvider } from './Model/user-login-context'
import { WishlistContextProvider } from './Model/wishlist-context';
import { CartContextProvider } from './Model/cart-context';
import { OrdersContextProvider } from './Model/orders-context'
import { SearchBarContextProvider } from './Model/search-bar-context'

export { useProductAvailable } from "./Model/product-context"
export { useGenre } from "./Model/genre-context"
export { useNewArrivals } from "./Model/new-arrival-context"
export { useToast } from './Model/toast-context';
export { useUserLogin } from './Model/user-login-context'
export { useWishlist } from './Model/wishlist-context';
export { useCart } from "./Model/cart-context"
export { useOrders } from "./Model/orders-context"
export { useSearchBar } from "./Model/search-bar-context"

export { Navbar } from "./View/Navbar/Navbar"
export { GenreCard } from './View/GenreCards/GenreCard'
export { NewArrivals } from "./View/NewArrivals/NewArrival"
export { ProductCard } from "./View/Card/ProductCard"
export { HorizontalProductCard } from "./View/HorizontalCard/HorizontalProductCard"
export { Footer } from "./View/Footer/Footer"
export { Sidebar } from './View/Sidebar/Sidebar'
export { Toast } from './View/Toast/Toast'
export { ShoppingBill } from './View/ShoppingBill/ShoppingBill'
export { WishlistProductCard } from './View/WishlistProductCard/WishlistProductCard'
export { ProductOrderCard } from './View/ProductOrderCard/ProductOrderCard'
export { Pagination } from './View/Pagination/Pagination'

export { Home } from "./Controller/Home/Home"
export { Login } from "./Controller/AuthenticationPages/Login"
export { Signup } from "./Controller/AuthenticationPages/Signup"
export { ProductPage } from "./Controller/ProductPage/ProductPage"
export { Shop } from "./Controller/Shop/Shop"
export { Wishlist } from "./Controller/Wishlist/Wishlist"
export { Cart } from "./Controller/Cart/Cart"
export { Orders } from "./Controller/Orders/Orders"

ReactDOM.render(
  <React.StrictMode>
    <UserLoginContextProvider>
      <WishlistContextProvider>
        <CartContextProvider>
          <ToastContextProvider>
            <NewArrivalsProvider>
              <GenreProvider>
                <ProductsProvider>
                  <OrdersContextProvider>
                    <SearchBarContextProvider>
                      <App/>
                    </SearchBarContextProvider>
                  </OrdersContextProvider>
                </ProductsProvider>
              </GenreProvider>
            </NewArrivalsProvider>
          </ToastContextProvider>
        </CartContextProvider>
      </WishlistContextProvider>
    </UserLoginContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
