using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Battles
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int input = int.Parse(Console.ReadLine());
            int stop = int.Parse(Console.ReadLine());

            int r = 0;

            for (int i = 1; i <= num; i++)
            {
                for (int y = 1; y <= input; y++)
                {

                    r++;

                    if (r > stop)
                    {
                        break;
                    }
                    else
                    {
                        Console.Write("({0} <-> {1}) ", i, y);
                    }
                }
            }

        }
    }
}
