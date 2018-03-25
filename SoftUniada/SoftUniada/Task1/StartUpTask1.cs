using System;

namespace Task1
{
    public class StartUpTask1
    {
        public static void Main()
        {
            var inputDigit = long.Parse(Console.ReadLine());
            var favoriteDigit = long.Parse(Console.ReadLine());
            var validResult = 0;

            if(inputDigit % 2 != 0)
            {
                validResult++;
            }

            if (inputDigit < 0)
            {
                validResult++;
            }

            if (inputDigit % favoriteDigit == 0)
            {
                validResult++;
            }

            switch (validResult)
            {
                case 0:
                    Console.WriteLine("boring");
                    break;
                case 1:
                    Console.WriteLine("awesome");
                    break;
                case 2:
                    Console.WriteLine("super awesome");
                    break;
                case 3:
                    Console.WriteLine("super special awesome");
                    break;
            }
        }
    }
}
