using BookShop.Common.Mapping;
using System.Collections.Generic;
using AutoMapper;
using BookShop.Data.Models;
using System.Linq;

namespace BookShop.Services.Model.Authors
{
    public class AuthorDetailsServicesModel : IMapFrom<Author>, ICustomMapping
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public IEnumerable<string> Books { get; set; } 

        public void ConfigureMapping(Profile mapper)
            => mapper
            .CreateMap<Author, AuthorDetailsServicesModel>()
            .ForMember(a => a.Books, cfg => cfg
            .MapFrom(a => a.Books.Select(b => b.Title)));
    }
}
