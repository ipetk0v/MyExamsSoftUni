namespace CarDealer.Web.Controllers
{
    using CarDealer.Services.Implementation;
    using CarDealer.Services.Interfaces;
    using CarDealer.Web.Models;
    using Microsoft.AspNetCore.Mvc;

    [Route("sales")]
    public class SalesController : Controller
    {
        private readonly ISalesServices sales;

        public SalesController(ISalesServices sales)
        {
            this.sales = sales;
        }

        [Route("")]
        public IActionResult All()
            => this.View(this.sales.All());

        [Route("{id}")]
        public IActionResult Details(int id)
            => this.View(this.sales.Detail(id));
    }
}
