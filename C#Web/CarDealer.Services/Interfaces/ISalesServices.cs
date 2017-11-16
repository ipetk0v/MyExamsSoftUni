namespace CarDealer.Services.Interfaces
{
    using CarDealer.Services.Models.Sales;
    using System.Collections.Generic;

    public interface ISalesServices
    {
        IEnumerable<SaleListModel> All();

        SaleDetailsModel Detail(int id);
    }
}
