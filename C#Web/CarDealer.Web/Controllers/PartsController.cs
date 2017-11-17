namespace CarDealer.Web.Controllers
{
    using CarDealer.Services.Interfaces;
    using CarDealer.Web.Models.Parts;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using System;
    using System.Linq;

    public class PartsController : Controller
    {
        private const int PageSize = 25; 

        private readonly IPartSurvices parts;
        private readonly ISupplierServices supplier;

        public PartsController(IPartSurvices parts, ISupplierServices supplier)
        {
            this.parts = parts;
            this.supplier = supplier;
        }

        public IActionResult All(int page = 1)
          => this.View(new PartPageListingModel
          {
              Parts = this.parts.All(page,PageSize),
              CurrentPage = page,
              TotalPages = (int)Math.Ceiling(this.parts.Total() / (double)PageSize)
          });
        
        public IActionResult Create() 
            => this.View(new PartFormModel
            {
                AllSuppliers = this.supplier.All().Select(s => new SelectListItem
                {
                    Text = s.Name,
                    Value = s.Id.ToString()
                })
            });

        [HttpPost]
        public IActionResult Create(PartFormModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            this.parts.Create(
                model.Name,
                model.Price,
                model.Quantity,
                model.SupplierId
                );

            return RedirectToAction(nameof(All));
        }

        public IActionResult Delete(int id) 
            => this.View(id);


        public IActionResult Destroy(int id)
        {
            this.parts.Delete(id);

            return RedirectToAction(nameof(All));
        }

        public IActionResult Edit(int id)
        {
            var part = this.parts.ById(id);

            if (part == null)
            {
                return NotFound();
            }

            return View(new PartFormModel
            {
                Name = part.Name,
                Quantity = part.Quantity,
                Price = part.Price,
                IsEdit = true
            });
        }

        [HttpPost]
        public IActionResult Edit(int id, PartFormModel model)
        {
            if (!ModelState.IsValid)
            {
                model.IsEdit = true;
                return View(model);
            }

            this.parts.Edit(
                id,
                model.Price,
                model.Quantity);

            return RedirectToAction(nameof(All));
        }
    }
}
