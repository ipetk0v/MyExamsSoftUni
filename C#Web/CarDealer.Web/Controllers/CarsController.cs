namespace CarDealer.Web.Controllers
{
    using CarDealer.Services.Interfaces;
    using CarDealer.Web.Models.Cars;
    using Microsoft.AspNetCore.Mvc;

    [Route("Cars")]
    public class CarsController : Controller
    {
        public readonly ICarServices cars;

        public CarsController(ICarServices cars)
        {
            this.cars = cars;
        }

        [Route("{make}", Order = 2)]
        public IActionResult ByMake(string make)
        {
            var cars = this.cars.ByMake(make);

            return View(new CarsByMakeModel
            {
                Make = make,
                Cars = cars
            });
        }

        [Route("parts", Order = 1)]
        public IActionResult Parts()
            => this.View(this.cars.WithParts());

    }
}
