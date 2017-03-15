using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication6
{
    class Program
    {
        static void Main(string[] args)
        {
            TimeSpan time = TimeSpan.Parse(Console.ReadLine());
            int step = int.Parse(Console.ReadLine()) % 86400;
            int seconds = int.Parse(Console.ReadLine()) % 86400;

            long sumStep = step * seconds;
            TimeSpan asdf = TimeSpan.FromSeconds(sumStep);


            TimeSpan timeSum = time + asdf;

            Console.WriteLine("Time Arrival: {0:hh\\:mm\\:ss}", timeSum);

        }
    }
}
