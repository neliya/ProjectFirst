using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using ShoppingApp.Data.Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingApp.Data
{
    public class ShoppingAppSeeder
    {
        private readonly ShoppingAppContext _context;
        private readonly IHostingEnvironment _hosting;
        private readonly UserManager<StoreUser> _userManager;

        public ShoppingAppSeeder(ShoppingAppContext context, IHostingEnvironment hosting, UserManager<StoreUser> userManager)
        {
            _context = context;
            _hosting = hosting;
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            _context.Database.EnsureCreated();
            StoreUser user = await _userManager.FindByEmailAsync("neliyagrg@gmail.com");
            if(user == null)
            {
                user = new StoreUser()
                {
                    FirstName = "Neliya",
                    LastName = "Gurung",
                    Email = "neliyagrg@gmail.com",
                    UserName = "neliyagrg@gmail.com"
                };

                var result = await _userManager.CreateAsync(user, "P@ssw0rd!");
                if(result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Could not create new user in seeder.");
                }
                   
            }
            if (!_context.Products.Any())
            {
                var file = Path.Combine(_hosting.ContentRootPath, "Data/art.json");
                var json = File.ReadAllText(file);

                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                _context.Products.AddRange(products);

                var order = _context.Orders.Where(o => o.Id == 1).FirstOrDefault();
                if(order != null)
                {
                    order = new Order();
                    order.User = user;
                    order.Items = new List<OrderItem>()
                    {
                        new OrderItem()
                        {
                            Product = products.First(),
                            Quantity = 5,
                            UnitPrice = products.First().Price
                        }
                    };
                    _context.Add(order);
                }
                

                _context.SaveChanges();
            }

        }

        internal async Task AddRolesAsync()
        {
            await _context.Roles.AddAsync(new IdentityRole()
            {
                Id = Guid.NewGuid().ToString(),
                Name = "USER",
                NormalizedName = "USER"

            });

            await _context.Roles.AddAsync(new IdentityRole()
            {
                Id = Guid.NewGuid().ToString(),
                Name = "ADMIN",
                NormalizedName = "ADMIN"

            });

            //await _context.UserRoles.AddAsync(new IdentityUserRole<string>()
            //{
            //    RoleId = "57a8c4fa-d2d5-47d2-93c0-2cff53f44907",
            //    UserId = "f84cd9ae-0d8a-480c-ae00-3d5eaf01f4d0"
            //});
            await _context.SaveChangesAsync();
        }

    }
}
