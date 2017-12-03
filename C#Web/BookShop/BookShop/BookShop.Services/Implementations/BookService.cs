using AutoMapper.QueryableExtensions;
using BookShop.Data;
using BookShop.Services.Model.Books;
using System.Collections.Generic;
using System.Linq;

namespace BookShop.Services.Implementations
{
    public class BookService : IBookService
    {
        private readonly BookShopDbContext db;

        public BookService(BookShopDbContext db)
        {
            this.db = db;
        }

        public IEnumerable<BookDetailsServiceModel> All(string searchText)
             => this.db
            .Book
            .Where(b => b.Title.ToLower().Contains(searchText.ToLower()))
            .OrderBy(w => w.Title)
            .Take(10)
            .ProjectTo<BookDetailsServiceModel>()
            .ToList();

        public BookDetailsServiceModel Details(int id)
         => this.db
            .Book   
            .Where(b => b.Id == id)
            .ProjectTo<BookDetailsServiceModel>()
            .FirstOrDefault();
    }
}
