﻿using System;

namespace CarDealer.Services.Models
{
    public class CustomerModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime BirthDate { get; set; }

        public bool IsYoungDriver { get; set; }
    }
}
