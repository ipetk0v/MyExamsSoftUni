using Microsoft.AspNetCore.Mvc;

namespace BookShop.Api.Controllers
{
    using BookShop.Api.Infrastructures.Extensions;
    using BookShop.Services;
    using static WebConstants;

    public class AuthorsController : BaseController
    {
        public readonly IAuthorService author;

        public AuthorsController(IAuthorService author)
        {
            this.author = author;
        }

        [HttpGet(WithId)]
        public IActionResult Get(int id)
            => this.OkOrNotFound(this.author.Details(id));
    }
}
