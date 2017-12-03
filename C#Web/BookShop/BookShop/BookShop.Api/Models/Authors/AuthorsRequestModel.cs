using BookShop.Data;
using System.ComponentModel.DataAnnotations;

namespace BookShop.Api.Models.Authors
{
    public class AuthorsRequestModel
    {
        [Required]
        [MaxLength(DataConstants.AuthorFirstNameMaxLength)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(DataConstants.AuthorLastNameMaxLength)]
        public string LastName { get; set; }
    }
}
