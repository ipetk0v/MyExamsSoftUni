namespace CarDealer.Services.Implementation
{
    using CarDealer.Data.Models;
    using CarDealer.Services.Interfaces;
    using CarDealer.Services.Models;
    using CarDealer.Services.Models.Customer;
    using CarDealer.Services.Models.Sales;
    using Data;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class CustomerServices : ICustomerServices
    {
        private readonly CarDealerDbContext db;

        public CustomerServices(CarDealerDbContext db)
        {
            this.db = db;
        }

        public CustomerModel ById(int id)
            => this.db
                .Customers
                .Where(c => c.Id == id)
                .Select(c => new CustomerModel
                {
                    Id = c.Id,
                    BirthDate = c.BirthDate,
                    IsYoungDriver = c.IsYoungDriver,
                    Name = c.Name
                })
                .FirstOrDefault();

        public void Create(string name, DateTime birthday, bool isYoungDriver)
        {
            var customer = new Customer
            {
                BirthDate = birthday,
                Name = name,
                IsYoungDriver = isYoungDriver
            };

            this.db.Add(customer);
            this.db.SaveChanges();
        }

        public void Edit(int id, string name, DateTime birthday, bool isYoungDriver)
        {
            var existingCustomer = this.db.Customers.Find(id);

            if (existingCustomer == null)
            {
                return;
            }

            existingCustomer.Name = name;
            existingCustomer.BirthDate = birthday;
            existingCustomer.IsYoungDriver = isYoungDriver;

            this.db.SaveChanges();
        }

        public IEnumerable<CustomerModel> OrderedCustomers(OrderDirection order)
        {
            var customerQuery = this.db.Customers.AsQueryable();

            switch (order)
            {
                case OrderDirection.Ascending:
                    customerQuery = customerQuery
                        .OrderBy(c => c.BirthDate)
                        .ThenBy(c => c.Name);
                    break;
                case OrderDirection.Descending:
                    customerQuery = customerQuery
                        .OrderByDescending(c => c.BirthDate)
                        .ThenBy(c => c.Name);
                    break;
                default:
                    throw new InvalidOperationException($"Invalid order direction: {order}");
            }

            return customerQuery
                .Select(c => new CustomerModel
                {
                    Id = c.Id,
                    Name = c.Name,
                    BirthDate = c.BirthDate,
                    IsYoungDriver = c.IsYoungDriver
                })
                .ToList();
        }

        public SalesByCustomerModel SalesCustomer(int id)
        {
            return this.db
                .Customers
                .Where(c => c.Id == id)
                .Select(c => new SalesByCustomerModel
                {
                    Name = c.Name,
                    IsYoungDriver = c.IsYoungDriver,
                    BoughtCars = c.Sales.Select(s => new SalesModel
                    {
                        Discount = s.Discount,
                        Price = s.Car.Parts.Sum(p => p.Part.Price)
                    })
                })
                .FirstOrDefault();
        }
    }
}
