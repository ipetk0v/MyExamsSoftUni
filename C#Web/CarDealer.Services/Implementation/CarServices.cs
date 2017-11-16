namespace CarDealer.Services.Implementation
{
    using System.Collections.Generic;
    using CarDealer.Services.Interfaces;
    using CarDealer.Services.Cars.Models;
    using CarDealer.Data;
    using System.Linq;
    using CarDealer.Services.Models.Cars;
    using CarDealer.Services.Models;

    public class CarServices : ICarServices
    {
        private readonly CarDealerDbContext db;

        public CarServices(CarDealerDbContext db)
        {
            this.db = db;
        }

        public IEnumerable<CarModel> ByMake(string make)
             => this.db
                .Cars.
                Where(c => c.Make.ToLower() == make.ToLower())
                .OrderBy(c => c.Model)
                .ThenBy(c => c.TraveledDistance)
                .Select(c => new CarModel
                {
                    Make = c.Make,
                    Model = c.Model,
                    TraveledDistance = c.TraveledDistance
                })
                .ToList();

        public IEnumerable<CarWithPartsModel> WithParts()
        {
            return db
                .Cars
                .Select(c => new CarWithPartsModel
                {
                    Make = c.Make,
                    Model = c.Model,
                    TraveledDistance = c.TraveledDistance,
                    Parts = c.Parts.Select(p => new PartModel
                    {
                        Name = p.Part.Name,
                        Price = p.Part.Price
                    })
                })
                .ToList();
        }
    }
}
