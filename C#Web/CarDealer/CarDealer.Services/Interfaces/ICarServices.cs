using CarDealer.Services.Cars.Models;
using CarDealer.Services.Models.Cars;
using System.Collections.Generic;

namespace CarDealer.Services.Interfaces
{
    public interface ICarServices
    {
        IEnumerable<CarModel> ByMake(string make);

        IEnumerable<CarWithPartsModel> WithParts();
    }
}
