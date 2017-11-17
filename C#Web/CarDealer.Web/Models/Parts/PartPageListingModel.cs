namespace CarDealer.Web.Models.Parts
{
    using CarDealer.Services.Models.Parts;
    using System.Collections.Generic;

    public class PartPageListingModel
    {
        public IEnumerable<PartListingModel> Parts { get; set; }

        public int CurrentPage { get; set; }

        public int TotalPages { get; set; }

        public int PreviusPage => this.CurrentPage == 1 ? 
            1 
            : this.CurrentPage - 1;

        public int nextPage => this.CurrentPage == this.TotalPages ? 
            this.TotalPages 
            : this.CurrentPage + 1;
    }
}
