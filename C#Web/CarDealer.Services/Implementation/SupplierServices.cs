namespace CarDealer.Services.Implementation
{
    using System.Collections.Generic;
    using CarDealer.Services.Interfaces;
    using CarDealer.Services.Models;
    using CarDealer.Data;
    using System.Linq;

    public class SupplierServices : ISupplierServices
    {
        private readonly CarDealerDbContext db;

        public SupplierServices(CarDealerDbContext db)
        {
            this.db = db;
        }

        public IEnumerable<CarSupplierModel> All(bool isImporter)
             => this.db
                .Suppliers
                .Where(s => s.IsImporter == isImporter)
                .Select(s => new CarSupplierModel
                {
                    Id = s.Id,
                    Name = s.Name,
                    TotalParts = s.Parts.Count
                })
                .ToList();
    }
}
