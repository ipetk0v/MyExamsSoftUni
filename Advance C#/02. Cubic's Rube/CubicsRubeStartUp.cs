using System;

namespace Cubic_s_Rube
{
    public class CubicsRubeStartUp
    {
        public static void Main(string[] args)
        {
            var cubic = int.Parse(Console.ReadLine());
            var inputLine = Console.ReadLine();

            var row = cubic;
            var len = cubic;
            var sides = cubic;
            var sum = 0;
            var freePlaces = cubic * cubic * cubic;

            var matrix = new int[row][];

            while (inputLine != "Analyze")
            {
                var digit = inputLine.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);

                var side1 = int.Parse(digit[0]);
                var side2 = int.Parse(digit[1]);
                var side3 = int.Parse(digit[2]);
                var digitIndex = int.Parse(digit[3]);

                for (int side = 0; side < sides; side++)
                {
                    for (int rows = 0; rows < matrix.Length; rows++)
                    {
                        matrix[rows] = new int[len];

                        for (int lens = 0; lens < matrix[rows].Length; lens++)
                        {
                            if (side == side1 && rows == side2 && lens == side3)
                            {
                                matrix[rows][lens] = digitIndex;
                                sum += digitIndex;

                                if (digitIndex != 0)
                                {
                                    freePlaces -= 1;
                                }
                            }
                        }
                    }
                }
                inputLine = Console.ReadLine();
            }
            Console.WriteLine(sum);
            Console.WriteLine(freePlaces);
        }
    }
}
