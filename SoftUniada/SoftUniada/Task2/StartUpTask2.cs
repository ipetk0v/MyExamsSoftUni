using System;

namespace Task2
{
    public class StartUpTask2
    {
        public static void Main()
        {
            var inputDigit = int.Parse(Console.ReadLine());
            var currentDigit = inputDigit;

            //Top
            TopAndBottomLine(inputDigit,currentDigit);
            Console.WriteLine();

            FirstLine(inputDigit,currentDigit);

            SecondLine(inputDigit);

            HappyEaster(inputDigit);
            Console.WriteLine();

            LastSecondLine(inputDigit);

            LastLine(inputDigit,currentDigit);

            //Bottom
            TopAndBottomLine(inputDigit,currentDigit);
        }

        private static void HappyEaster(int inputDigit)
        {
            var krivaLiniq = ((inputDigit * 5) - (inputDigit + 4) - 12) / 2;

            for (int i = 0; i < inputDigit / 2; i++)
            {
                Console.Write(".");
            }

            for (int i = 0; i < 2; i++)
            {
                Console.Write("*");
            }

            for (int i = 0; i < krivaLiniq; i++)
            {
                Console.Write("~");
            }

            Console.Write("HAPPY EASTER");

            for (int i = 0; i < krivaLiniq; i++)
            {
                Console.Write("~");
            }

            for (int i = 0; i < 2; i++)
            {
                Console.Write("*");
            }

            for (int i = 0; i < inputDigit / 2; i++)
            {
                Console.Write(".");
            }
        }

        private static void LastSecondLine(int inputDigit)
        {
            var currentDigit = inputDigit / 2;
            var secondDigit = (inputDigit * 5) - inputDigit - 4;

            for (int i = 0; i < inputDigit / 2; i++)
            {
                for (int dot = 0; dot < currentDigit; dot++)
                {
                    Console.Write(".");
                }

                for (int po = 0; po < 2; po++)
                {
                    Console.Write("*");
                }

                for (int ravno = 0; ravno < secondDigit; ravno++)
                {
                    Console.Write("=");
                }

                for (int po = 0; po < 2; po++)
                {
                    Console.Write("*");
                }

                for (int dot = 0; dot < currentDigit; dot++)
                {
                    Console.Write(".");
                }
                Console.WriteLine();

                currentDigit++;
                secondDigit -= 2;
            }
        }

        private static void SecondLine(int inputDigit)
        {
            var currentDigit = inputDigit;
            var secondDigit = inputDigit * 3 - 2;

            for (int i = 0; i < inputDigit / 2; i++)
            {
                for (int dot = currentDigit - 1; dot > 0; dot--)
                {
                    Console.Write(".");
                }

                for (int zvezda = 0; zvezda < 2; zvezda++)
                {

                    Console.Write("*");
                }

                for (int ravno = 0; ravno < secondDigit; ravno++)
                {
                    Console.Write("=");
                }

                for (int zvezda = 0; zvezda < 2; zvezda++)
                {
                    Console.Write("*");
                }

                for (int dot = currentDigit - 1; dot > 0; dot--)
                {
                    Console.Write(".");
                }

                currentDigit--;
                secondDigit += 2;
                Console.WriteLine();
            }
        }

        private static void LastLine(int inputDigit, int currentDigit)
        {
            var dotDigit = inputDigit;
            currentDigit *= 2;

            for (int i = inputDigit / 2 - 1; i >= 0; i--)
            {
                for (int dot = dotDigit - 1; dot >= 0; dot--)
                {
                    Console.Write(".");
                }

                for (int po = 0 - 1; po < i; po++)
                {
                    Console.Write("*");
                }

                for (int plus = 0; plus < currentDigit; plus++)
                {
                    Console.Write("+");
                }

                for (int po2 = 0 - 1; po2 < i; po2++)
                {
                    Console.Write("*");
                }

                for (int dotMinus = dotDigit - 1; dotMinus >= 0; dotMinus--)
                {
                    Console.Write(".");
                }

                Console.WriteLine();
                dotDigit += 2;
                currentDigit -= 2;
            }       
        }

        private static void FirstLine(int inputDigit, int currentDigit)
        {
            var dotDigit = 2;
            var plusDigit = 2;
            currentDigit += 2;

            for (int i = 1; i <= inputDigit / 2; i++)
            {
                for (int dot = 0; dot < inputDigit * 2 - dotDigit; dot++)
                {
                    Console.Write(".");
                }

                for (int po = 0; po < i; po++)
                {
                    Console.Write("*");
                }

                for (int plus = 0; plus < currentDigit; plus++)
                {
                    Console.Write("+");
                }

                for (int po2 = 0; po2 < i; po2++)
                {
                    Console.Write("*");
                }

                for (int dotMinus = inputDigit * 2 - dotDigit - 1; dotMinus >= 0; dotMinus--)
                {
                    Console.Write(".");
                }

                Console.WriteLine();
                dotDigit += 2;
                plusDigit += 4;
                currentDigit += 2;
            }
        }

        private static void TopAndBottomLine(int inputDigit, int currentDigit)
        {
            for (int i = 0; i < inputDigit * 2; i++)
            {
                Console.Write(".");
            }

            for (int i = 0; i < inputDigit; i++)
            {
                Console.Write("*"); 
            }

            for (int i = 0; i < inputDigit * 2; i++)
            {
                Console.Write(".");
            }
        }
    }
}
