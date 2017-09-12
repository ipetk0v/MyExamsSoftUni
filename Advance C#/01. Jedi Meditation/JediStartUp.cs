using System;
using System.Collections.Generic;
using System.Text;

namespace Jedi_Meditation
{
    public class JediStartUp
    {
        public static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var master = new Queue<string>();
            var knight = new Queue<string>();
            var padoin = new Queue<string>();
            var toshkoSlav = new Queue<string>();
            var yodaIsHere = false;

            for (int i = 0; i < n; i++)
            {
                var inputLine = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);

                foreach (var item in inputLine)
                {
                    if (item[0] == 'm')
                    {
                        master.Enqueue(item);
                    }
                    else if (item[0] == 'k')
                    {
                        knight.Enqueue(item);
                    }
                    else if (item[0] == 'p')
                    {
                        padoin.Enqueue(item);
                    }
                    else if (item[0] == 't' | item[0] == 's')
                    {
                        toshkoSlav.Enqueue(item);
                    }
                    else
                    {
                        yodaIsHere = true;
                    }
                }

            }

            var sb = new StringBuilder();

            if (yodaIsHere)
            {
                sb.Append(string.Join(" ", master) + " ");
                sb.Append(string.Join(" ", knight) + " ");
                sb.Append(string.Join(" ", toshkoSlav) + " ");
                sb.Append(string.Join(" ", padoin) + " ");
            }
            else
            {
                sb.Append(string.Join(" ", toshkoSlav) + " ");
                sb.Append(string.Join(" ", master) + " ");
                sb.Append(string.Join(" ", knight) + " ");
                sb.Append(string.Join(" ", padoin) + " ");
            }

            Console.WriteLine(sb.ToString().ToLower());
        }
    }
}
