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

            int asterisk = 1;
            int dash = 2 * num - 1;
            int middleAsterisk = dash / 4;
            int dashEnd = 1;
            int middleAsteriskTwo = 2 * num - 1;

            for (var i = 0; i < num; i++)
            {
                Console.WriteLine("{0}\\{1}/{0}", new string('*', asterisk), new string('-', dash));

                dash -= 2;
                asterisk++;
            }

            for (var y = 0; y < num / 3; y++)
            {
                Console.WriteLine("|{0}\\{1}/{0}|", new string('*', middleAsterisk), new string('*', asterisk - 1));

                middleAsterisk++;
                asterisk -= 2;
            }


            for (var t = 0; t < num; t++)
            {
                Console.WriteLine("{0}\\{1}/{0}", new string('-', dashEnd), new string('*', middleAsteriskTwo));

                middleAsteriskTwo -= 2;
                dashEnd++;


            }
        }
    }
}
