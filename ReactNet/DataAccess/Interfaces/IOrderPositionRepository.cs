using ReactNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactNet.DataAccess.Interfaces
{
    public interface IOrderPositionRepository
    {
        IQueryable<OrderPosition> OrderPositions { get; }
        void SaveOrderPosition(params OrderPosition[] orderPositions);
        OrderPosition DeleteOrderPosition(OrderPosition orderPosition);
    }
}
