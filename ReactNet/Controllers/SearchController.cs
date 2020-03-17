using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ReactNet.DataAccess.Interfaces;
using ReactNet.Models;

namespace ReactNet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SearchController : Controller
    {
        private IProductRepository productRepository;

        public SearchController(IProductRepository productRepository)
        {
            this.productRepository = productRepository;
        }

        [HttpPost]
        public IActionResult Search()
        {
            var keyword = new StreamContent(Request.Body).ReadAsStringAsync().Result;
            var products = productRepository.Products.Where(product => product.Name.ToLower().Contains(keyword.ToLower())).ToArray();
            if (products != null && products.Length != 0)
                return Ok(products);
            else
                return NotFound();
        }
    }
}