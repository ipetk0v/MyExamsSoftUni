namespace CarDealer.Web.Models.Models
{
    using CarDealer.Services.Models;
    using System.Collections.Generic;

    public class SupplierModels
    {
        public string Type { get; set; }

        public IEnumerable<CarSupplierModel> Suppliers { get; set; }
    }
}
