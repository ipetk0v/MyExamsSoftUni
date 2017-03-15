using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Text;

namespace _03.FootballLeague
{
    class Program
    {
        static void Main(string[] args)
        {
            var inputKey = Console.ReadLine();

            var teamPoint = new Dictionary<string, int>();
            var teamGoals = new Dictionary<string, int>();

            var matchInput = Console.ReadLine();
            while (matchInput != "fina")
            {
                // var pattern = ();
                
                var pattern = Regex.Escape($"{inputKey}");
                var rgx = new Regex($@".*{pattern}([A-Za-z]*){pattern}.*{pattern}([A-Za-z]*){pattern}.*?(\d+:\d+)");
                var rgxGroup = rgx.Match(matchInput);
                if (rgxGroup.Success)
                {
                    // get value from groups
                    var firstTeamValue = rgxGroup.Groups[1].Value;
                    var secondTeamValue = rgxGroup.Groups[2].Value;
                    var resultValue = rgxGroup.Groups[3].Value;

                    // reverse and value to string

                    var firstTeamArray = firstTeamValue.ToUpper().Reverse().ToArray();
                    var teamA = new StringBuilder(); // firstTeam
                    teamA.Append(firstTeamArray);
                    var firstTeam = teamA.ToString();
                    var secondTeamArray = secondTeamValue.ToUpper().Reverse().ToArray();
                    StringBuilder teamB = new StringBuilder(); // secondTeam
                    teamB.Append(secondTeamArray);
                    var secondTeam = teamB.ToString();
                    var resultValueArray = resultValue.Split(':').ToArray();
                    var firstTeamGoal = int.Parse(resultValueArray[0]);
                    var secondTeamGoal = int.Parse(resultValueArray[1]);

                    // team point to Dictionary

                    if (firstTeamGoal > secondTeamGoal)
                    {
                        if (!teamPoint.ContainsKey(firstTeam))
                        {
                            teamPoint[firstTeam] = 3;
                        }
                        else
                        {
                            teamPoint[firstTeam] += 3;
                        }

                        if (!teamPoint.ContainsKey(secondTeam))
                        {
                            teamPoint[secondTeam] = 0;
                        }
                        else
                        {
                            teamPoint[secondTeam] += 0;
                        }

                        teamGoalsAdd(teamGoals, firstTeam, secondTeam, firstTeamGoal, secondTeamGoal);
                        
                    }
                    else if (secondTeamGoal > firstTeamGoal)
                    {
                        if (!teamPoint.ContainsKey(secondTeam))
                        {
                            teamPoint[secondTeam] = 3;
                        }
                        else
                        {
                            teamPoint[secondTeam] += 3;
                        }

                        if (!teamPoint.ContainsKey(firstTeam))
                        {
                            teamPoint[firstTeam] = 0;
                        }
                        else
                        {
                            teamPoint[firstTeam] += 0;
                        }

                        teamGoalsAdd(teamGoals, firstTeam, secondTeam, firstTeamGoal, secondTeamGoal);
                    }
                    else
                    {
                        if (!teamPoint.ContainsKey(firstTeam))
                        {
                            teamPoint[firstTeam] = 1;
                        }
                        else
                        {
                            teamPoint[firstTeam] += 1;
                        }

                        if (!teamPoint.ContainsKey(secondTeam))
                        {
                            teamPoint[secondTeam] = 1;
                        }
                        else
                        {
                            teamPoint[secondTeam] += 1;
                        }

                        teamGoalsAdd(teamGoals, firstTeam, secondTeam, firstTeamGoal, secondTeamGoal);
                    }

                }
                else
                {
                    break;
                }
                matchInput = Console.ReadLine();
            }

            // Print

            var place = 1;
            Console.WriteLine("League standings:");
            foreach (var team in teamPoint.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
            {
                Console.WriteLine($"{place}. {team.Key} {team.Value}");
                place++;
            }

            Console.WriteLine("Top 3 scored goals:");
            foreach (var points in teamGoals.OrderByDescending(x => x.Value).ThenBy(x => x.Key).Take(3))
            {
                Console.WriteLine($"- {points.Key} -> {points.Value}");
            }




        }

        private static Dictionary<string,int> teamGoalsAdd(Dictionary<string,int> teamGoals, string firstTeam, string secondTeam, int firstTeamGoal, int secondTeamGoal)
        {
            if (!teamGoals.ContainsKey(firstTeam))
            {
                teamGoals[firstTeam] = firstTeamGoal;
            }
            else
            {
                teamGoals[firstTeam] += firstTeamGoal;
            }

            if (!teamGoals.ContainsKey(secondTeam))
            {
                teamGoals[secondTeam] = secondTeamGoal;
            }
            else
            {
                teamGoals[secondTeam] += secondTeamGoal;
            }

            return teamGoals;
        }
    }
}
