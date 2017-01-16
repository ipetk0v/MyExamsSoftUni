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

            double avtomobil = 0;
            double mikrobus = 0;
            double malakavtobus = 0;
            double golqmavtobus = 0;
            double vlak = 0;

            for (var i = 0; i < num; i++)

            {
                double n = double.Parse(Console.ReadLine());

                if (n <= 5)
                {
                    avtomobil = avtomobil + n;
                }

                else if (n >= 6 && n <= 12)
                {
                    mikrobus = mikrobus + n;
                }

                else if (n >= 13 && n <= 25)
                {
                    malakavtobus = malakavtobus + n;
                }

                else if (n >= 26 && n <= 40)
                {
                    golqmavtobus = golqmavtobus + n;
                }

                else
                {
                    vlak = vlak + n;
                }
            }

            double sum = avtomobil + mikrobus + malakavtobus + golqmavtobus + vlak;

            Console.WriteLine("{0:F2}%", avtomobil / sum * 100);
            Console.WriteLine("{0:F2}%", mikrobus / sum * 100);
            Console.WriteLine("{0:F2}%", malakavtobus / sum * 100);
            Console.WriteLine("{0:F2}%", golqmavtobus / sum * 100);
            Console.WriteLine("{0:F2}%", vlak / sum * 100);
        }
    }
}
