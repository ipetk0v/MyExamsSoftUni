using CarDealer.Services.Models;
using CarDealer.Services.Models.Suppliers;
using System.Collections.Generic;

namespace CarDealer.Services.Interfaces
{
    public interface ISupplierServices
    {
        IEnumerable<CarSupplierModel> AllListings(bool isImporter);

        IEnumerable<SupplierModel> All();
    }
}
