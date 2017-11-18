namespace CarDealer.Services.Interfaces
{
    using CarDealer.Services.Models.Parts;
    using System.Collections.Generic;

    public interface IPartSurvices
    {
        IEnumerable<PartListingModel> All(int page = 1, int PageSize = 10);

        PartEditModel ById(int id);

        void Create(string name, decimal price, int quantity, int supplierId);

        void Delete(int id);

        void Edit(int id, decimal price, int quantity);

        int Total();
    }
}
