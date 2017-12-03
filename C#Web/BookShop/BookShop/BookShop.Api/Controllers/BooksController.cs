using BookShop.Api.Infrastructures.Extensions;
using BookShop.Services;
using Microsoft.AspNetCore.Mvc;
using static BookShop.Api.WebConstants;

namespace BookShop.Api.Controllers
{
    public class BooksController : BaseController
    {
        private readonly IBookService book;

        public BooksController(IBookService book)
        {
            this.book = book;
        }

        [HttpGet(WithId)]
        public IActionResult Get(int id)
         => this.OkOrNotFound(book.Details(id));

        [HttpGet]
        public IActionResult Get([FromQuery]string search)
            => this.OkOrNotFound(book.All(search));
    }
}
