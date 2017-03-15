using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.SoftUni_Camp
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());

            double cars = 0;
            double van = 0;
            double smallVan = 0;
            double bigVan = 0;
            double train = 0;

            for (var i = 0; i < num; i++)

            {
                double n = double.Parse(Console.ReadLine());

                if (n <= 5)
                {
                    cars = cars + n;
                }

                else if (n >= 6 && n <= 12)
                {
                    van = van + n;
                }

                else if (n >= 13 && n <= 25)
                {
                    smallVan = smallVan + n;
                }

                else if (n >= 26 && n <= 40)
                {
                    bigVan = bigVan + n;
                }

                else
                {
                    train = train + n;
                }
            }

            double sum = cars + van + smallVan + bigVan + train;

            Console.WriteLine("{0:F2}%", cars / sum * 100);
            Console.WriteLine("{0:F2}%", van / sum * 100);
            Console.WriteLine("{0:F2}%", smallVan / sum * 100);
            Console.WriteLine("{0:F2}%", bigVan / sum * 100);
            Console.WriteLine("{0:F2}%", train / sum * 100);
        }
    }
}
