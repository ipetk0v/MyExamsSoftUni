using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApplication4
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());

            var dictionaryDirectory = new Dictionary<string, Dictionary<string,long>>();

            for (int i = 0; i < num; i++)
            {
               var input = Console.ReadLine().Split(new char[] { '\\' }, StringSplitOptions.RemoveEmptyEntries).ToList();
                var directory = input.First().Trim();
                var file = input.Last().Split(';').First().Trim();
                var fileKB = long.Parse(input.Last().Split(';').Last().Trim());

                if (!dictionaryDirectory.ContainsKey(directory))
                {
                    dictionaryDirectory[directory] = new Dictionary<string, long>();
                    dictionaryDirectory[directory].Add(file, fileKB);
                }
                else
                {
                    if (!dictionaryDirectory[directory].ContainsKey(file))
                    {
                        dictionaryDirectory[directory].Add(file, fileKB);
                    }
                    else
                    {
                        dictionaryDirectory[directory].Remove(file);
                        dictionaryDirectory[directory].Add(file, fileKB);
                    }

                }
            }

            var rootInput = Console.ReadLine().Split().ToArray();
            var root = rootInput.Last().Trim();
            var extension = rootInput.First().Trim();

            var truee = false;


            foreach (var item in dictionaryDirectory)
            {
                var newDictionary = new Dictionary<string, long>();

                foreach (var kvp in item.Value)
                {
                   newDictionary[kvp.Key] = kvp.Value;
                }

                foreach (var infoFile in newDictionary.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
                {
                    if (root == item.Key)
                    {
                        var lastCharsInFileToArray = infoFile.Key.Split('.').ToArray();
                        var lastCharsInFile = lastCharsInFileToArray.Last();
                        if (extension == lastCharsInFile)
                        {
                            var nameFile = infoFile.Key;
                            var fileKB = infoFile.Value;
                                
                            Console.WriteLine($"{nameFile} - {fileKB} KB");
                            truee = true;
                        }
                    }
                }
            }

            if (truee == false)
            {
                Console.WriteLine("No");
            }



        }
    }
}
