using CarDealer.Services.Models;
using CarDealer.Services.Models.Customer;
using System;
using System.Collections.Generic;

namespace CarDealer.Services.Interfaces
{
    public interface ICustomerServices
    {
        IEnumerable<CustomerModel> OrderedCustomers(OrderDirection order);
            
        SalesByCustomerModel SalesCustomer(int id);

        void Create(string name, DateTime birthday, bool isYoungDriver);

        CustomerModel ById(int id);
        void Edit(int id, string name, DateTime birthday, bool isYoungDriver);
    }
}
