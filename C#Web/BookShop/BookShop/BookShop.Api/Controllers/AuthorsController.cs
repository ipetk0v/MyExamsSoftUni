using Microsoft.AspNetCore.Mvc;

namespace BookShop.Api.Controllers
{
    using BookShop.Api.Infrastructures.Extensions;
    using BookShop.Api.Infrastructures.Filters;
    using BookShop.Api.Models.Authors;
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

        [HttpGet(WithId + "/books")]
        public IActionResult GetBooks(int id)
            => this.Ok(author.Books(id));

        [HttpPost]
        [ValidateModelState]
        public IActionResult Post([FromBody]AuthorsRequestModel model)
            => this.Ok(author.Create(model.FirstName, model.LastName));
    }
}
