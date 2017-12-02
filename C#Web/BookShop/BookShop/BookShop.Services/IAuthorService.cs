using BookShop.Services.Model.Authors;

namespace BookShop.Services
{
    public interface IAuthorService
    {
        AuthorDetailsServicesModel Details(int id);

    }
}
