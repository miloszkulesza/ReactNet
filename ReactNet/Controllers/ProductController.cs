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
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private IProductRepository productRepository;

        public ProductController(IProductRepository productRepository)
        {
            this.productRepository = productRepository;
        }

        [HttpGet]
        [Route("getProducts")]
        public IEnumerable<Product> GetProducts(string categoryId)
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

        [HttpGet]
        [Route("getProduct")]
        public Product GetProduct(string productId)
        {
            return productRepository.Products.FirstOrDefault(x => x.Id.Equals(productId));
        }
    }
}