namespace CarDealer.Web.Controllers
{
    using CarDealer.Services.Interfaces;
    using CarDealer.Services.Models;
    using CarDealer.Web.Models.Customers;
    using Microsoft.AspNetCore.Mvc;

    [Route("customers")]
    public class CustomersController : Controller
    {
        public readonly ICustomerServices customers;

        public CustomersController(ICustomerServices customer)
        {
            this.customers = customer;
        }

        [Route("all/{order}")]
        public IActionResult All(string order)
        {
            var orderDirection = order == "ascending" ?
                OrderDirection.Ascending :
                OrderDirection.Descending;

            var customers = this.customers.OrderedCustomers(orderDirection);

            return View(new AllCustomersModel
            {
                Customers = customers,
                OrderDirection = orderDirection
            });
        }

        [Route(nameof(Create))]
        public IActionResult Create()
            => this.View();

        [HttpPost]
        [Route(nameof(Create))]
        public IActionResult Create(CustomerFormModel model)
        {
            if (!ModelState.IsValid)
            {
                return this.View(model);
            }

            this.customers.Create(model.Name, model.Birthday, model.IsYoungDriver);

            return RedirectToAction(nameof(All), new { order = OrderDirection.Ascending });
        }

        [Route(nameof(Edit) + "/{id}")]
        public IActionResult Edit(int id)
        {
            var customer = this.customers.ById(id);

            if (customer == null)
            {
                return NotFound();
            }

            return View(new CustomerFormModel
            {
                Birthday = customer.BirthDate,
                IsYoungDriver = customer.IsYoungDriver,
                Name = customer.Name
            });
        }

        [HttpPost]
        [Route(nameof(Edit) + "/{id}")]
        public IActionResult Edit(int id, CustomerFormModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            this.customers.Edit(model.Id,model.Name, model.Birthday, model.IsYoungDriver);

            return RedirectToAction(nameof(All), new { order = OrderDirection.Ascending });
        }


        [Route("{id}")]
        public IActionResult Customers(int id)
        {
            var customerWithSales = this.customers.SalesCustomer(id);

            if (customerWithSales == null)
            {
                return NotFound();
            }

            return View(customerWithSales);
        }
    }
}
