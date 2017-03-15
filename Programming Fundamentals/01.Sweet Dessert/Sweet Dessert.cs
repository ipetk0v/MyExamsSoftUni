using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Sweet_Dessert
{
    class Program
    {
        static void Main(string[] args)
        {
            var budjet = decimal.Parse(Console.ReadLine());
            var guest = int.Parse(Console.ReadLine());
            var bananaPrice = decimal.Parse(Console.ReadLine());
            var eggsPrice = decimal.Parse(Console.ReadLine());
            var berriesPrice = decimal.Parse(Console.ReadLine());

            var portion = 0;
            if (guest % 6 == 0)
            {
                portion = guest / 6;
            }
            else
            {
                portion = guest / 6 + 1;
            }

            var sumProducts = ((bananaPrice * 2) * portion) + ((eggsPrice * 4) * portion) + ((berriesPrice * 0.2M) * portion);

            if (budjet >= sumProducts)
            {
                Console.WriteLine($"Ivancho has enough money - it would cost {sumProducts:F2}lv.");
            }
            else
            {
                var differentSum = sumProducts - budjet;
                Console.WriteLine($"Ivancho will have to withdraw money - he will need {differentSum:f2}lv more.");
            }
        }
    }
}
