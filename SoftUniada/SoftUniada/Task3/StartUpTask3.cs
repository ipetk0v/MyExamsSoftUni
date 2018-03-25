using System;
using System.Collections.Generic;

namespace Task3
{
    public class StartUpTask3
    {
        public static void Main()
        {
            var inputDigit = Console.ReadLine();
            var firstDigit = inputDigit[0] + "" + inputDigit[2];
            var secondDigit = inputDigit[1] + "" + inputDigit[3];
            var sumCeiling = int.Parse(firstDigit) + int.Parse(secondDigit);
            var startElement = firstDigit + secondDigit;
            var maxDigit = string.Concat(sumCeiling,sumCeiling);

            var currentDigit = int.Parse(startElement);
            var digitPlus = 100;
            var digitDividedBy12 = new List<int>();
            var digitDividedBy15 = new List<int>();

            while (currentDigit <= int.Parse(maxDigit))
            {
                while (currentDigit % 100 != sumCeiling)
                {
                    if (currentDigit % 12 == 0)
                    {
                        digitDividedBy12.Add(currentDigit);
                    }

                    if (currentDigit % 15 == 0)
                    {
                        digitDividedBy15.Add(currentDigit);
                    }
                    currentDigit++;
                }

                currentDigit = int.Parse(startElement) + digitPlus;
                digitPlus += 100;
            }

            Console.Write("Dividing on 12: ");
            Console.Write(string.Join(" ",digitDividedBy12));

            Console.WriteLine();

            Console.Write("Dividing on 15: ");
            Console.Write(string.Join(" ", digitDividedBy15));

            Console.WriteLine();
            if(digitDividedBy12.Count == digitDividedBy15.Count)
            {
                Console.WriteLine("!!!BINGO!!!");
            } else
            {
                Console.WriteLine("NO BINGO!");
            }
        }
    }
}
