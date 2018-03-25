using System;
using System.Linq;

namespace Task4
{
    public class StartUpTask4
    {
        public static void Main()
        {
            var inputDigit = int.Parse(Console.ReadLine());
            var matrix = new string[inputDigit,inputDigit];

            for (int row = 0; row < inputDigit; row++)
            {
                var line = Console.ReadLine().Split(" | ").ToList();

                for (int i = 0; i < inputDigit; i++)
                {
                    matrix[row,i] = line.First();
                    line.RemoveAt(0);
                }                
            }

            var wrongValue = Console.ReadLine().Split(' ').Select(d => int.Parse(d)).ToArray();
            var colEl = wrongValue[0];
            var rowEl = wrongValue[1];
            var element = wrongValue[2];

            var wrongElement = int.Parse(matrix[rowEl, colEl].Split().ToArray()[element]);

            for (int col = 0; col < inputDigit; col++)
            {
                for (int row = 0; row < inputDigit; row++)
                {
                    for (int i = 0; i < inputDigit; i++)
                    {
                        var currentElement = int.Parse(matrix[row, col].Split()[i]);
                        if (currentElement == wrongElement)
                        {
                            var newElement = 0;

                            // SecondLevel
                            if (row >= 0 && matrix[row, col + 1].Split()[i] != wrongElement.ToString())
                            {
                                newElement += int.Parse(matrix[row, col + 1].Split()[i]);
                            }

                            //ThirdLevel
                            if (row >= 0 && matrix[row, col + 2].Split()[i] != wrongElement.ToString())
                            {
                                newElement += int.Parse(matrix[row, col + 2].Split()[i]);
                            }

                            // LEFT
                            if (i - 1 >= 0 && matrix[row, i - 1].Split()[i] != wrongElement.ToString())
                            {
                                newElement += int.Parse(matrix[row,col].Split()[i - 1]);
                            }

                            // DOWN
                            if (row <= inputDigit && matrix[row + 1, col].Split()[i] != wrongElement.ToString())
                            {
                                newElement += int.Parse(matrix[row + 1, col].Split()[i]);
                            }

                            //RIGHT
                            if (i < inputDigit - 1 && matrix[row, col + 1].Split()[i] != wrongElement.ToString())
                            {
                                newElement += int.Parse(matrix[row, col + 1].Split()[i]);
                            }

                            matrix[row, col] = newElement.ToString();
                        }
                    }
                }
            }

        }
    }
}
