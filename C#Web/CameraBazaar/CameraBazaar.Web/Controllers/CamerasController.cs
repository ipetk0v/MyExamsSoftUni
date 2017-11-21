using CameraBazaar.Data.Models;
using CameraBazaar.Services;
using CameraBazaar.Web.Models.Cameras;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CameraBazaar.Web.Controllers
{
    public class CamerasController : Controller
    {
        private readonly UserManager<User> userManager;
        private readonly ICameraService camera;

        public CamerasController(
            UserManager<User> userManager,
            ICameraService camera)
        {
            this.userManager = userManager;
            this.camera = camera;
        }

        [Authorize]
        public IActionResult Add()
            => View();

        [Authorize]
        [HttpPost]
        public IActionResult Add(AddCameraViewModel cameraModel)
        {
            if (!ModelState.IsValid)
            {
                return View(cameraModel);
            }

            this.camera.Create(
                cameraModel.Make,
                cameraModel.Model,
                cameraModel.Price,
                cameraModel.Quantity,
                cameraModel.MinShutterSpeed,
                cameraModel.MaxShutterSpeed,
                cameraModel.MinISO,
                cameraModel.MaxISO,
                cameraModel.IsFullFrame,
                cameraModel.VideoResolution,
                cameraModel.LightMetering,
                cameraModel.Description,
                cameraModel.ImageURL,
                this.userManager.GetUserId(User));

            return RedirectToAction(nameof(HomeController.Index), "Home");
        }

        [Authorize]
        public IActionResult All()
            => this.View(camera.All());

        [Authorize]
        public IActionResult Details(int id)
            => this.View(camera.Details(id));
    }
}
