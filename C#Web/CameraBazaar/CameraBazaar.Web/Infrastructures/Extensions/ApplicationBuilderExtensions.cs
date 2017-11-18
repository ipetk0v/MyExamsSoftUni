using CameraBazaar.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace CameraBazaar.Web.Infrastructures.Extensions
{
    public static class ApplicationBuilderExtensions
    {
        public static IApplicationBuilder UseDataBaseMigration(this IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                serviceScope.ServiceProvider.GetService<CameraBazaarDbContext>().Database.Migrate();
            }

            return app;
        }
    }
}
