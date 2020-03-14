using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactNet.DataAccess.Interfaces;
using ReactNet.Models;

namespace ReactNet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : Controller
    {
        private IProductRepository productRepository;

        public ProductController(IProductRepository productRepository)
        {
            this.productRepository = productRepository;
        }

        [HttpGet]
        public IEnumerable<Product> Get(string categoryId)
        {
            Product[] products;
            if(string.IsNullOrEmpty(categoryId) || categoryId == "all")
            {
                products = productRepository.Products.Where(x => x.Quantity > 0 && !x.IsHidden).ToArray();
            }
            else
            {
                products = productRepository.Products.Where(x => x.Quantity > 0 && !x.IsHidden && x.CategoryId == categoryId).ToArray();
            }
            return products;
        }
    }
}