using System.Collections.Generic;
using ShoppingApp.Data.Entities;

namespace ShoppingApp.Data
{
    public interface IShoppingAppRepository
    {
        IEnumerable<Product> GetProducts();
        IEnumerable<Product> GetProductsByCategory(string category);

        bool SaveAll();
        IEnumerable<Order> GetAllOrders(bool includeItems);
        Order GetOrderById(int id);
        void AddEntity(object model);
    }
}