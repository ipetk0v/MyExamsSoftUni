namespace CarDealer.Services.Implementation
{
    using CarDealer.Data;
    using CarDealer.Data.Models;
    using CarDealer.Services.Interfaces;
    using CarDealer.Services.Models.Parts;
    using System.Collections.Generic;
    using System.Linq;

    public class PartSurvices : IPartSurvices
    {
        private readonly CarDealerDbContext db;

        public PartSurvices(CarDealerDbContext db)
        {
            this.db = db;
        }

        public IEnumerable<PartListingModel> All(int page = 1, int pageSize = 10)    
          => this.db
            .Parts
            .OrderByDescending(p => p.Id)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .Select(p => new PartListingModel
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                Quantity = p.Quantity,
                SupplierName = p.Supplier.Name
            })
            .ToList();

        public PartEditModel ById(int id)
            => this.db
            .Parts
            .Where(p => p.Id == id)
            .Select(p => new PartEditModel
            {
                Name = p.Name,
                Price = p.Price,
                Quantity = p.Quantity
            })
            .FirstOrDefault();

        public void Create(string name, decimal price, int quantity, int supplierId)
        {
            var part = new Part
            {
                Name = name,
                Price = price,
                Quantity = quantity > 0 ? quantity : 1,
                SupplierId = supplierId
            };

            this.db.Add(part);
            db.SaveChanges();
        }

        public void Delete(int id)
        {
            var part = this.db.Parts.Find(id);

            if (part == null)
            {
                return;
            }

            this.db.Parts.Remove(part);
            db.SaveChanges();                
        }

        public void Edit(int id, decimal price, int quantity)
        {
            var part = this.db.Parts.Find(id);

            if (part == null)
            {
                return;
            }

            part.Price = price;
            part.Quantity = quantity;
            db.SaveChanges();
        }

        public int Total()
            => this.db.Parts.Count();
    }
}
