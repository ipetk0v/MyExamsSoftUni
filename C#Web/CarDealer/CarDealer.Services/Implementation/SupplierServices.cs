namespace CarDealer.Services.Implementation
{
    using CarDealer.Data;
    using CarDealer.Services.Interfaces;
    using CarDealer.Services.Models;
    using CarDealer.Services.Models.Suppliers;
    using System.Collections.Generic;
    using System.Linq;

    public class SupplierServices : ISupplierServices
    {
        private readonly CarDealerDbContext db;

        public SupplierServices(CarDealerDbContext db)
        {
            this.db = db;
        }

        public IEnumerable<SupplierModel> All()
           => this.db
                .Suppliers
                .OrderBy(s => s.Name)
                .Select(s => new SupplierModel
                {
                    Id = s.Id,
                    Name = s.Name
                })
                .ToList();

        public IEnumerable<CarSupplierModel> AllListings(bool isImporter)
             => this.db
                .Suppliers
                .OrderByDescending(s => s.Id)
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
