using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using ShoppingApp.Data;
using ShoppingApp.Data.Entities;
using ShoppingApp.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace ShoppingApp
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration config){
            _config = config;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<StoreUser, IdentityRole>(cfg =>
            {
                cfg.User.RequireUniqueEmail = true;

            })
            .AddEntityFrameworkStores<ShoppingAppContext>();

            services.AddAuthentication()
                .AddCookie()
                .AddJwtBearer(cfg =>
                {
                    cfg.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidIssuer = _config["Tokens:Issuer"],
                        ValidAudience = _config["Tokens:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]))
                    };                   

                });


            services.AddDbContext<ShoppingAppContext>(cfg =>
            {
                cfg.UseSqlServer(_config.GetConnectionString("ShoppingAppConnectionString"));
            });
            services.AddAutoMapper();
            services.AddTransient<IMailService, NullMailService>();
            services.AddTransient<ShoppingAppSeeder>();
            services.AddScoped<IShoppingAppRepository, ShoppingAppRepository>();
            services.AddMvc()
                .AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling =
                ReferenceLoopHandling.Ignore);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void  Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseNodeModules(env);

            app.UseMvc(cfg =>
            {
                cfg.MapRoute("Default",
                    "/{controller}/{action}/{id?}",
                    new { controller = "App", Action = "Index" });
            });

            //var task = new Task(async () =>
            //{

            //    using (var scope = app.ApplicationServices.CreateScope())
            //    {
            //        var ser = scope.ServiceProvider.GetService<IShoppingAppRepository>();

                    

            //        var cart = await ser.AddCart(Guid.Parse("30ffbea1-e9c9-4574-a0e4-f0016d86dfda"));



            //        var cartItem = await ser.AddCartItem(cart.Id, 1, 1);
            //        var items = ser.GetCartItems(cart.Id);


            //    }

            //});
            //task.Start();
            //task.Wait();




            //if (env.IsDevelopment())
            //{
            //    //Seed the database
            //    using (var scope = app.ApplicationServices.CreateScope())
            //    {
            //       var seeder = scope.ServiceProvider.GetService<ShoppingAppSeeder>();

            //        seeder.TestCart().Wait();
            //        seeder.SeedAsync().Wait();
            //        seeder.AddRolesAsync().Wait();


            //    }
            //}

        }
    }
}
