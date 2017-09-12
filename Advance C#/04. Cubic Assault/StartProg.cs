﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

public class StartProg
{
    public static void Main()
    {
        Dictionary<string, Dictionary<string, long>> soldiers = new Dictionary<string, Dictionary<string, long>>();

        ReadTheInput(soldiers);

        PrlongSoldiersInRegion(soldiers);
    }

    private static void PrlongSoldiersInRegion(Dictionary<string, Dictionary<string, long>> soldiers)
    {
        soldiers.OrderByDescending(reg => reg.Value["Black"]).ThenBy(reg => reg.Key.Length).ThenBy(reg => reg.Key).ToList().ForEach(reg =>
        {
            Console.WriteLine(reg.Key);
            reg.Value.OrderByDescending(s => s.Value).ThenBy(s => s.Key).ToList().ForEach(s =>
            {
                Console.WriteLine("-> {0} : {1}", s.Key, s.Value);
            });
        });
    }

    private static void ReadTheInput(Dictionary<string, Dictionary<string, long>> soldiers)
    {
        while (true)
        {
            string input = Console.ReadLine();
            if (input.Equals("Count em all"))
                break;


            string[] soldiersArgs = Regex.Split(input, @" -> ");

            string region = soldiersArgs[0];
            string soldiersType = soldiersArgs[1];
            long amount = long.Parse(soldiersArgs[2]);

            if (!soldiers.ContainsKey(region))
            {
                soldiers.Add(region, new Dictionary<string, long>());
                soldiers[region]["Green"] = 0;
                soldiers[region]["Red"] = 0;
                soldiers[region]["Black"] = 0;
            }

            soldiers[region][soldiersType] += amount;


            if (soldiers[region]["Green"] >= 1000000)
            {
                soldiers[region]["Red"] += soldiers[region]["Green"] / 1000000;
                soldiers[region]["Green"] = soldiers[region]["Green"] % 1000000;
            }
            if (soldiers[region]["Red"] >= 1000000)
            {
                soldiers[region]["Black"] += soldiers[region]["Red"] / 1000000;
                soldiers[region]["Red"] = soldiers[region]["Red"] % 1000000;
            }
        }
    }
}
