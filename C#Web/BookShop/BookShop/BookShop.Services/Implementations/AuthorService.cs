using AutoMapper.QueryableExtensions;
using BookShop.Data;
using BookShop.Data.Models;
using BookShop.Services.Model.Authors;
using System.Linq;
using System.Collections.Generic;
using BookShop.Services.Model.Books;

namespace BookShop.Services.Implementations
{
    public class AuthorService : IAuthorService
    {
        private readonly BookShopDbContext db;

        public AuthorService(BookShopDbContext db)
        {
            this.db = db;
        }

        public IEnumerable<BookWithCategoriesServiceModel> Books(int id)
            => this.db
            .Book
            .Where(b => b.Id == id)
            .ProjectTo<BookWithCategoriesServiceModel>()
            .ToList();

        public int Create(string firstName, string lastName)
        {
            var author = new Author
            {
                FirstName = firstName,
                LastName = lastName
            };

            this.db
                .Author
                .Add(author);

            this.db.SaveChanges();

            return author.Id;
        }

        public AuthorDetailsServicesModel Details(int id)
            => this.db
            .Author
            .Where(a => a.Id == id)
            .ProjectTo<AuthorDetailsServicesModel>()
            .FirstOrDefault();
    }
}
