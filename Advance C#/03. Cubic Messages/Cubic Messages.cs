using System;
using System.Text;
using System.Text.RegularExpressions;

namespace _03___Cubic_s_Messages
{
    public class CubicMessages
    {
        static void Main(string[] args)
        {
            string messageInput;

            while ((messageInput = Console.ReadLine()) != "Over!")
            {
                var lenghtMessage = int.Parse(Console.ReadLine());
                var sb = new StringBuilder();

                string pattern = (@"^([0-9]+)([a-zA-Z]+)([^a-zA-Z]*)$");
                RegexOptions options = RegexOptions.Multiline;

                foreach (Match m in Regex.Matches(messageInput, pattern, options))
                {
                    var startMessage = m.Groups[1].Value;
                    var message = m.Groups[2].Value;
                    var endMessage = m.Groups[3].Value;

                    if (message.Length == lenghtMessage)
                    {
                        for (int startI = 0; startI < startMessage.Length; startI++)
                        {
                            var index = int.Parse(startMessage[startI].ToString());
                            if (index >= message.Length)
                            {
                                sb.Append(' ');
                            }
                            else
                            {
                                sb.Append(message[index]);
                            }
                        }

                        for (int endI = 0; endI < endMessage.Length; endI++)
                        {
                            if (char.IsDigit(endMessage[endI]))
                            {
                                var index = int.Parse(endMessage[endI].ToString());
                                if (index >= message.Length)
                                {
                                    sb.Append(' ');
                                }
                                else
                                {
                                    sb.Append(message[index]);
                                }
                            }
                        }
                        Console.Write($"{message} == ");
                        Console.WriteLine(string.Join(Environment.NewLine, sb));
                    }
                };
            }
        }
    }
}

