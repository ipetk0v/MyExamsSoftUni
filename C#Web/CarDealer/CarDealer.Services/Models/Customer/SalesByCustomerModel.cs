namespace CarDealer.Services.Models.Customer
{
    using CarDealer.Services.Models.Sales;
    using System.Collections.Generic;
    using System.Linq;

    public class SalesByCustomerModel
    {
        public string Name { get; set; }

        public bool IsYoungDriver { get; set; }

        public IEnumerable<SalesModel> BoughtCars { get; set; }

        public int TotalBoughtCars => this.BoughtCars.Count();

        public decimal TotalMoneySpent
        {
            get
            {
                return this.BoughtCars
                    .Sum(c => c.Price * (decimal)(1 - c.Discount))
                    * (this.IsYoungDriver ? 0.95m : 1);
            }
        }
    }
}
