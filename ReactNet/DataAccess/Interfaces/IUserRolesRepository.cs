using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactNet.DataAccess.Interfaces
{
    public interface IUserRolesRepository
    {
        IQueryable<IdentityUserRole<string>> UserRoles { get; }
    }
}
