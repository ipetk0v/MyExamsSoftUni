﻿using BookShop.Common.Mapping;
using BookShop.Data.Models;

namespace BookShop.Services.Model.Books
{
    public class BookListeningServiceModel : IMapFrom<Book>
    {
        public int Id { get; set; }

        public string Title { get; set; }
    }
}
