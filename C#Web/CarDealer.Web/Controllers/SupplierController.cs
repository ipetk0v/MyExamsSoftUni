namespace CarDealer.Web.Controllers
{
    using CarDealer.Services.Interfaces;
    using CarDealer.Web.Models.Models;
    using Microsoft.AspNetCore.Mvc;

    public class SupplierController : Controller
    {
        private readonly ISupplierServices supplier;

        public SupplierController(ISupplierServices supplier)
        {
            this.supplier = supplier;
        }

        public IActionResult Local(string service)
            => View("Suppliers", this.GetSupplierModel(false));

        public IActionResult Importers(string service)
            => View("Suppliers", this.GetSupplierModel(true));

        private SupplierModels GetSupplierModel(bool impoters)
        {
            var type = impoters ? "Importer" : "Local";

            var supplier = this.supplier.AllListings(impoters);

            return new SupplierModels
            {
                Type = type,
                Suppliers = supplier
            };
        }
    }
}
