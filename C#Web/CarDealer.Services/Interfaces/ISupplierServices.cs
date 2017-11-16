using CarDealer.Services.Models;
using System.Collections.Generic;

namespace CarDealer.Services.Interfaces
{
    public interface ISupplierServices
    {
        IEnumerable<CarSupplierModel> All(bool isImporter);
    }
}
