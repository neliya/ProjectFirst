using ShoppingApp.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoppingApp.Data
{
    public class ShoppingAppContext : IdentityDbContext<StoreUser>
    {
        public ShoppingAppContext(DbContextOptions<ShoppingAppContext> options): base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Order>()
                .HasData(new Order()
                {
                    Id = 1,
                    OrderDate = DateTime.UtcNow,
                    OrderNumber = "1"
                });
        }

    }
}
