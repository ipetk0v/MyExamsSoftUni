using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Pets
{
    class Program
    {
        static void Main(string[] args)
        {

            int day = int.Parse(Console.ReadLine());
            int kgFood = int.Parse(Console.ReadLine());
            double kgDog = double.Parse(Console.ReadLine());
            double kgCat = double.Parse(Console.ReadLine());
            double grTurtle = double.Parse(Console.ReadLine());

            double foodDog = day * kgDog;
            double foodCat = day * kgCat;
            double grfoodTurtle = day * grTurtle;
            double foodTurtle = grfoodTurtle / 1000;
            double sumFood = foodDog + foodCat + foodTurtle;
            double different = kgFood - sumFood;

            if (sumFood <= kgFood)
            {
                Console.WriteLine("{0} kilos of food left.", Math.Floor(different));
            }

            else
            {
                Console.WriteLine("{0} more kilos of food are needed.", Math.Ceiling(Math.Abs(different)));
            }
        }
    }
}
