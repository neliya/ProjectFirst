using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ShoppingApp.Data.Entities;

namespace ShoppingApp.Data
{
    public interface IShoppingAppRepository
    {
        IEnumerable<Product> GetProducts();
        IEnumerable<Product> GetProductsByCategory(string category);

        bool SaveAll();
        IEnumerable<Order> GetAllOrders(bool includeItems);
        IEnumerable<Order> GetAllOrdersByUser(string username,bool includeItems);
        Order GetOrderById(string username, int id);

        Order GetOrderById(int id);
        void AddEntity(object model);

        Task<Cart> AddCart(Guid userId );
        Task<CartItem> AddCartItem( int cartId, int ProductId, int quantity);
        List<CartItem> GetCartItems(int cartId);

        Task<Cart> GetUserCart(Guid userId);

    }
}