using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;


namespace _01.Softuni_Coffee_Orders
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            var listPriceCofeeOrder = new List<decimal>();

            for (int i = 0; i < n; i++)
            {
                decimal priceCapsule = decimal.Parse(Console.ReadLine());
                var date = Console.ReadLine();
                var orderDate = DateTime.ParseExact(date, "d/M/yyyy", CultureInfo.InvariantCulture);
                long capsuleCount = long.Parse(Console.ReadLine());

                var daysInMonth = DateTime.DaysInMonth(orderDate.Year, orderDate.Month);
                var sumPriceCapsule = ((daysInMonth * capsuleCount) * priceCapsule);

                listPriceCofeeOrder.Add(sumPriceCapsule);
            }

            foreach (var priceCofeeOrder in listPriceCofeeOrder)
            {
                Console.WriteLine($"The price for the coffee is: ${priceCofeeOrder:f2}");
            }

            Console.WriteLine($"Total: ${listPriceCofeeOrder.Sum():f2}");

        }
    }
}
