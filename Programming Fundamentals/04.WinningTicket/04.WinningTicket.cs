using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace SoftUniKaraoke
{
    class SoftUniKaraoke
    {
        static void Main(string[] args)
        {
            var inputTicket = Console.ReadLine().Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);


            foreach (var ticket in inputTicket)
            {
                var tickets = ticket.Trim();
                var left = tickets.Take(10).ToArray();
                var leftSide = new string(left).Trim();
                var right = tickets.Skip(10).ToArray();
                var rightSide = new string(right).Trim();

                var symbols = new char[] { '^', '$', '#', '@' };


                foreach (var symbol in symbols)
                {
                    string pattern = ($@"\{symbol}{{6,}}");
                    Regex regex = new Regex(pattern);
                    var resultLeft = Regex.Match(leftSide, pattern);
                    var resultRight = Regex.Match(rightSide, pattern);

                    var min = Math.Min(resultLeft.Length, resultRight.Length);
                    var winningTicket = resultLeft.Length + resultRight.Length;

                    if ((tickets.Length != 20) || ((regex.IsMatch(leftSide) && min == 0) || (regex.IsMatch(rightSide) && min == 0)))
                    {
                        Console.WriteLine("invalid ticket");
                        break;
                    }
                    else if ((resultLeft.Length >= 6 || resultRight.Length >= 6) && (resultLeft.Length != 10 || resultRight.Length != 10))
                    {
                        Console.WriteLine($"ticket \"{tickets.Trim()}\" - {min}{symbol}");
                        break;
                    }
                    else if (resultLeft.Length == 10 || resultRight.Length == 10)
                    {
                        Console.WriteLine($"ticket \"{tickets.Trim()}\" - {min}{symbol} Jackpot!");
                        break;
                    }

                    if (symbol == symbols.Last() && winningTicket == 0)
                    {
                        Console.WriteLine($"ticket \"{tickets.Trim()}\" - no match ");
                    }

                }

            }
        }
    }
}
