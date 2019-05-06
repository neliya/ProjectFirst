using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.HttpSys;
using Microsoft.Extensions.Logging;
using ShoppingApp.Data;
using ShoppingApp.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace ShoppingApp.Controllers
{ 
  
    public class ProductsController : Controller
    {
        private readonly IShoppingAppRepository _repository;
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(IShoppingAppRepository repository,ILogger<ProductsController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        [Route("api/products")]
        public ActionResult<IEnumerable<Product>> Get()
        {
            try
            {
                return Ok(_repository.GetProducts());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest("Failed to get products");
            }

        }
      

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet]
        [Route("api/get-cart")]
        public async Task<IActionResult> GetCart() {

            var userId = Guid.Parse(this.User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value);

            var cart = await this._repository.GetUserCart(userId);

            cart.CartItems =  this._repository.GetCartItems(cart.Id);

            return base.Ok(cart);
        }


        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet]
        [Route("api/{cartId}/{productId}/{quantity}")]
        public async Task<IActionResult> AddCartProduct([FromRoute]int cartId,[FromRoute]int productId,[FromRoute]int quantity)
        {

            var addProduyct = await _repository.AddCartItem(cartId,productId,quantity);


            return base.Ok(addProduyct);
        }


        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost]
        [Route("api/checkout")]
        public async Task<IActionResult> Checkout()
        {

            var userId = Guid.Parse(this.User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value);

            var cart = await this._repository.GetUserCart(userId);

            cart.CartItems = this._repository.GetCartItems(cart.Id);

            //order create garne 
            // each cart item ko product lae order ma add garne

            // delete all carrt items


            return base.Ok(cart);
        }
    }

    
}
