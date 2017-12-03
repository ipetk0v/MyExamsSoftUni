using BookShop.Services.Model.Authors;
using BookShop.Services.Model.Books;
using System.Collections.Generic;

namespace BookShop.Services
{
    public interface IAuthorService
    {
        AuthorDetailsServicesModel Details(int id);

        int Create(string firstName, string lastName);

        IEnumerable<BookWithCategoriesServiceModel> Books(int id);
    }
}
