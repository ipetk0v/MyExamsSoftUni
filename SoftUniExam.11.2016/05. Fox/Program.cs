using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Fox
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());

            int zvezdichki = 1;
            int tireta = 2 * num - 1;
            int zvezdichkisreda = tireta / 4;
            int tiretavkraq = 1;
            int zvezdivsredata = 2 * num - 1;

            for (var i = 0; i < num; i++)
            {
                Console.WriteLine("{0}\\{1}/{0}", new string('*', zvezdichki), new string('-', tireta));

                tireta -= 2;
                zvezdichki++;
            }

            for (var y = 0; y < num / 3; y++)
            {
                Console.WriteLine("|{0}\\{1}/{0}|", new string('*', zvezdichkisreda), new string('*', zvezdichki - 1));

                zvezdichkisreda++;
                zvezdichki -= 2;
            }


            for (var t = 0; t < num; t++)
            {
                Console.WriteLine("{0}\\{1}/{0}", new string('-', tiretavkraq), new string('*', zvezdivsredata));

                zvezdivsredata -= 2;
                tiretavkraq++;


            }
        }
    }
}
