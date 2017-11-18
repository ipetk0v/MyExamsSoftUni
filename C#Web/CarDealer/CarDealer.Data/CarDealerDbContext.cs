namespace CarDealer.Data
{
    using CarDealer.Data.Models;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;

    public class CarDealerDbContext : IdentityDbContext<User>
    {
        public CarDealerDbContext(DbContextOptions<CarDealerDbContext> options)
            : base(options)
        {
        }

        public DbSet<Car> Cars { get; set; }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<Part> Parts { get; set; }

        public DbSet<Sale> Sales { get; set; }

        public DbSet<Supplier> Suppliers { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder
                .Entity<PartCar>()
                .HasKey(pc => new { pc.CarId, pc.PartId });

            builder
                .Entity<PartCar>()
                .HasOne(pc => pc.Car)
                .WithMany(pc => pc.Parts)
                .HasForeignKey(pc => pc.CarId);

            builder
                .Entity<PartCar>()
                .HasOne(pc => pc.Part)
                .WithMany(pc => pc.Cars)
                .HasForeignKey(pc => pc.PartId);

            builder
                .Entity<Sale>()
                .HasOne(s => s.Car)
                .WithMany(c => c.Sales)
                .HasForeignKey(s => s.CarId);

            builder
                .Entity<Sale>()
                .HasOne(s => s.Customer)
                .WithMany(c => c.Sales)
                .HasForeignKey(s => s.CustomerId);

            builder
                .Entity<Supplier>()
                .HasMany(s => s.Parts)
                .WithOne(p => p.Supplier)
                .HasForeignKey(s => s.SupplierId);

            base.OnModelCreating(builder);
        }
    }
}
