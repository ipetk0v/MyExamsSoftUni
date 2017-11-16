namespace CarDealer.Services.Implementation
{
    using System.Collections.Generic;
    using CarDealer.Services.Interfaces;
    using CarDealer.Services.Models.Sales;
    using CarDealer.Data;
    using System.Linq;
    using CarDealer.Services.Cars.Models;

    public class SalesServices : ISalesServices
    {
        private readonly CarDealerDbContext db;

        public SalesServices(CarDealerDbContext db)
        {
            this.db = db;
        }

        public IEnumerable<SaleListModel> All()
            => this.db
            .Sales
            .Select(s => new SaleListModel
            {
                Id = s.Id,
                CustomerName = s.Customer.Name,
                Discount = s.Discount,
                IsYoungDriver = s.Customer.IsYoungDriver,
                Price = s.Car.Parts.Sum(p => p.Part.Price)
            })
            .ToList();

        public SaleDetailsModel Detail(int id)
         => this.db
                .Sales
                .Where(s => s.Id == id)
                .Select(s => new SaleDetailsModel
                {
                    Id = s.Id,
                    CustomerName = s.Customer.Name,
                    Discount = s.Discount,
                    IsYoungDriver = s.Customer.IsYoungDriver,
                    Price = s.Car.Parts.Sum(p => p.Part.Price),
                    Car = new CarModel
                    {
                        Make = s.Car.Make,
                        Model = s.Car.Model,
                        TraveledDistance = s.Car.TraveledDistance
                    }
                })
                .FirstOrDefault();
    }
}
