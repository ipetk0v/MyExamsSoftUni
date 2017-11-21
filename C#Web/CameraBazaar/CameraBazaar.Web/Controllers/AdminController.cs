using CameraBazaar.Data.Models;
using CameraBazaar.Web.Infrastructures.Constants;
using CameraBazaar.Web.Models.AdminViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CameraBazaar.Web.Controllers
{
    [Authorize(Roles = GlobalConstants.AdministratorRole)]
    public class AdminController : Controller
    {
        private readonly UserManager<User> userManager;

        public AdminController(UserManager<User> userManager)
        {
            this.userManager = userManager;
        }

        public IActionResult Index()
             => this.View();

        public IActionResult Create()
            => this.View();

        [HttpPost]
        public async Task<IActionResult> Create(CreateUserModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            await this.userManager.CreateAsync(new User
            {
               UserName = model.Username,
               Email = model.Email,
               PhoneNumber = model.Phone
            }, model.Password);

            return RedirectToAction(nameof(Index));
        }
    }
}