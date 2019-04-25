using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ShoppingApp.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingApp.Data
{
    public class ShoppingAppRepository : IShoppingAppRepository
    {
        private readonly ShoppingAppContext _context;
        private readonly ILogger<ShoppingAppContext> _logger;

        public ShoppingAppRepository(ShoppingAppContext context,ILogger<ShoppingAppContext> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<Cart> AddCart(Guid userId)
        {
           var res = await _context.Cart.AddAsync(new Cart() {
                IsDeleted = false,
                CreatedDate = DateTime.UtcNow,
                UserId = userId,
                
            });

            await _context.SaveChangesAsync();

            return res.Entity ;
        }

        public async Task<CartItem> AddCartItem( int cartId, int ProductId, int quantity)
        {
            var res = await _context.CartItems.AddAsync(new CartItem() {
                 CartId = cartId,
                 DateCreated = DateTime.UtcNow,
                 ProductId = ProductId,
                 Quantity = quantity,
                
            });

            await _context.SaveChangesAsync();

            return res.Entity;
        }

        public void AddEntity(object model)
        {
            _context.Add(model);
        }

        public IEnumerable<Order> GetAllOrders(bool includeItems)
        {
            if (includeItems)
            {
                return _context.Orders
                .Include(o => o.Items)
                .ThenInclude(i => i.Product)
                .ToList();
            }
            else
            {
                return _context.Orders
                .ToList();
            }
            
        }

        public IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems)
        {
            if (includeItems)
            {
                return _context.Orders
                    .Where(o => o.User.UserName == username)
                    .Include(o => o.Items)
                    .ThenInclude(i => i.Product)
                    .ToList();
            }
            else
            {
                return _context.Orders
                    .Where(o => o.User.UserName == username)
                    .ToList();
            }
        }

        public List<CartItem> GetCartItems(int cartId)
        {
            var res =  _context.CartItems.Where(x => x.CartId == cartId);

            return res.ToList();

        }

        public Order GetOrderById(string username, int id)
        {
            return _context.Orders
               .Include(o => o.Items)
               .ThenInclude(i => i.Product)
               .Where(o => o.Id == id && o.User.UserName == username)
               .FirstOrDefault();
        }

        public Order GetOrderById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Product> GetProducts()
        {
            _logger.LogInformation("Get Products was called.");
            return _context.Products.OrderBy(p => p.Title).ToList();
        }

        public IEnumerable<Product> GetProductsByCategory(string category)
        {
            return _context.Products.OrderBy(p => p.Category == category).ToList();
        }

        public async Task<Cart> GetUserCart(Guid userId)
        {
            var cart = await this._context.Cart.FirstOrDefaultAsync(x => x.UserId == userId);

            if (cart == null) {
                cart = await this.AddCart(userId);
            }

            return cart;
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0 ;
        }
    }
}
