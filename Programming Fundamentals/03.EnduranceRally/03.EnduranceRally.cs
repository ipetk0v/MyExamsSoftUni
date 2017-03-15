using System;
using System.Linq;


namespace Endurance_Rally
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] racerName = Console.ReadLine().Split();
            decimal[] trackLayout = Console.ReadLine().Split().Select(decimal.Parse).ToArray();
            int[] chakpoint = Console.ReadLine().Split().Select(int.Parse).ToArray();

            for (int K = 0; K < racerName.Length; K++)
            {
                var firstChar = racerName[K].First();
                decimal sum = 0;

                if (chakpoint[0] != 0)
                {
                    sum = firstChar - trackLayout[0];
                }
                else
                {
                    sum = firstChar + trackLayout[0];
                }


                if (sum > 0)
                {
                    for (int i = 1; i < trackLayout.Length; i++)
                    {
                        if (chakpoint.Contains(i))
                        {
                            sum += trackLayout[i];
                            if (sum > 0)
                            {
                                continue;
                            }
                            else
                            {
                                break;
                                Console.WriteLine($"{racerName[K]} - reached {i}");
                            }
                        }
                        else
                        {
                            sum -= trackLayout[i];
                            if (sum > 0)
                            {
                                continue;
                            }
                            else
                            {
                                Console.WriteLine($"{racerName[K]} - reached {i}");
                                break;

                            }
                        }
                    }
                    if (sum > 0)
                    {
                        Console.WriteLine($"{racerName[K]} - fuel left {sum:F2}");
                    }

                }
                else
                {
                    Console.WriteLine($"{racerName[K]} - reached 0");
                }

            }
        }
    }
}
