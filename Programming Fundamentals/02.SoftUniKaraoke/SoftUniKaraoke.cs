using System;
using System.Collections.Generic;
using System.Linq;

namespace SoftUniKaraoke0305
{
    class SoftUniKaraoke0305
    {
        static void Main(string[] args)
        {
            var listenInformation = new Dictionary<string, HashSet<string>>();

            var inputName = Console.ReadLine().Split(new char[] { ' ', ',' }, StringSplitOptions.RemoveEmptyEntries).ToArray();
            var inputSongs = Console.ReadLine().Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries).ToArray();

            var inputSinger = Console.ReadLine().Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries).ToArray();
            while (inputSinger[0] != "dawn")
            {
                var name = inputSinger[0].Trim();
                var songs = inputSinger[1].Trim();
                var award = inputSinger[2].Trim();

                foreach (var nameCheck in inputName)
                {
                    if (name == nameCheck)
                    {
                        foreach (var songCheck in inputSongs)
                        {
                            if (songCheck.Trim() == songs)
                            {
                                if (!listenInformation.ContainsKey(name))
                                {
                                    listenInformation[name] = new HashSet<string>();
                                    listenInformation[name].Add(award);
                                }
                                else
                                {
                                    listenInformation[name].Add(award);
                                }
                            }
                        }
                    }
                }



                inputSinger = Console.ReadLine().Split(new char[] { ',' }).ToArray();
            }


            if (listenInformation.Keys.Count != 0)
            {
                var participants = listenInformation.OrderByDescending(x => x.Value.Count()).ThenBy(x => x.Key);

                foreach (var singer in participants)
                {
                    Console.WriteLine($"{singer.Key}: {singer.Value.Count} awards");

                    foreach (var item in singer.Value.OrderBy(x => x))
                    {
                        Console.WriteLine($"--{item}");
                    }
                }
            }
            else
            {
                Console.WriteLine("No awards");
            }
        }
    }
}
