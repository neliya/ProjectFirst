using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoppingApp.Data;
using ShoppingApp.Services;
using ShoppingApp.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingApp.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService _mailService;
        private readonly IShoppingAppRepository _repository;


        public AppController(IMailService mailService, IShoppingAppRepository repository)
        {
            _mailService = mailService;
            _repository = repository;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            return View();
        }
        

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                _mailService.SendMessage("neliyagrg@gmail.com", model.Subject,
                    $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear();
            }
            else
            {

            }
            return View();
        }

        public IActionResult About()
        {
            ViewBag.Title = "About Information";
            return View();
        }

        [Authorize]
        public IActionResult Shop()
        {
            var results = _repository.GetProducts();
                
            return View(results);
        }
    }
}
