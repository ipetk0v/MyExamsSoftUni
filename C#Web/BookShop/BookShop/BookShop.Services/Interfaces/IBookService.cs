using BookShop.Services.Model.Books;
using System.Collections.Generic;

namespace BookShop.Services
{
    public interface IBookService
    {
        BookDetailsServiceModel Details(int id);

        IEnumerable<BookDetailsServiceModel> All(string searchText);
    }
}
