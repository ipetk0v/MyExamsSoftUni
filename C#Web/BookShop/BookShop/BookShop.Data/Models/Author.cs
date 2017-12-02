using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BookShop.Data.Models
{
    public class Author
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(DataConstants.AuthorFirstNameMaxLength)]
        public string FirstName { get; set; }

        [MaxLength(DataConstants.AuthorLastNameMaxLength)]
        public string LastName { get; set; }

        public List<Book> Books { get; set; } = new List<Book>();
    }
}
