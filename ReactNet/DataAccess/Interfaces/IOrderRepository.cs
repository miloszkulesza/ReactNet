using ReactNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactNet.DataAccess.Interfaces
{
    public interface IOrderRepository
    {
        IQueryable<Order> Orders { get; }
        Order SaveOrder(Order order);
        Order DeleteOrder(Order order);
    }
}
