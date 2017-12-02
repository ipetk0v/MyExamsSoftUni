using AutoMapper.QueryableExtensions;
using BookShop.Data;
using BookShop.Services.Model.Authors;
using System.Linq;

namespace BookShop.Services.Implementations
{
    public class AuthorService : IAuthorService
    {
        private readonly BookShopDbContext db;

        public AuthorService(BookShopDbContext db)
        {
            this.db = db;
        }

        public AuthorDetailsServicesModel Details(int id)
            => this.db
            .Author
            .Where(a => a.Id == id)
            .ProjectTo<AuthorDetailsServicesModel>()
            .FirstOrDefault();
    }
}
