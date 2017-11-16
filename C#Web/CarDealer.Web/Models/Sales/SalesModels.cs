namespace CarDealer.Web.Models
{
    using CarDealer.Services.Models.Sales;
    using System.Collections.Generic;

    public class SalesModels
    {
        public IEnumerable<SalesModel> Sales { get; set; }

        public IEnumerable<SalesModel> SalesId { get; set; }

        public IEnumerable<SalesModel> Discount { get; set; }

        public IEnumerable<SalesModel> DiscountPercent { get; set; }
    }
}
