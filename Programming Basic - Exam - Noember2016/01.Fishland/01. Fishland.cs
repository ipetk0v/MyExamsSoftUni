using System;

public class Program
{
    public static void Main()
    {
        double priceSkumriq = double.Parse(Console.ReadLine());
        double priceCaca = double.Parse(Console.ReadLine());
        double kgPalamud = double.Parse(Console.ReadLine());
        double kgSafrid = double.Parse(Console.ReadLine());
        double kgMidi = double.Parse(Console.ReadLine());

        double palamudPrice = priceSkumriq + (priceSkumriq * 0.6);
        double sumPalamud = palamudPrice * kgPalamud;
        double priceSafrid = priceCaca + (priceCaca * 0.8);
        double sumSafrid = kgSafrid * priceSafrid;
        double sumMidi = kgMidi * 7.50;

        double sum = sumPalamud + sumSafrid + sumMidi;

        Console.WriteLine("{0:F2}", sum);
    }
}