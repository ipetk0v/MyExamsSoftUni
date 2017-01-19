using System;

public class Program
{
    public static void Main()
    {
        int countPensioners = int.Parse(Console.ReadLine());
        int countStudents = int.Parse(Console.ReadLine());
        int countNights = int.Parse(Console.ReadLine());
        string Transport = Console.ReadLine();

        double student = 0.0;
        double Pensioners = 0.0;
        double sumTransport = 0.0;
        double tax = 0.0;
        double priceHotel = 0.0;
        double sum = 0.0;

        if (Transport == "train")
        {
            if (countPensioners + countStudents < 50)
            {
                student = 14.99;
                Pensioners = 24.99;
                sumTransport = ((countStudents * student) + (countPensioners * Pensioners)) * 2;
                priceHotel = countNights * 82.99;
                tax = (sumTransport + priceHotel) * 0.10;
                sum = sumTransport + priceHotel + tax;

            }
            else
            {

                student = 14.99 / 2;
                Pensioners = 24.99 / 2;
                sumTransport = ((countStudents * student) + (countPensioners * Pensioners)) * 2;
                priceHotel = countNights * 82.99;
                tax = (sumTransport + priceHotel) * 0.10;
                sum = sumTransport + priceHotel + tax;

            }


        }


        else if (Transport == "bus")
        {
            student = 28.50;
            Pensioners = 32.50;
            sumTransport = ((countStudents * student) + (countPensioners * Pensioners)) * 2;
            priceHotel = countNights * 82.99;
            tax = (sumTransport + priceHotel) * 0.10;
            sum = sumTransport + priceHotel + tax;
        }


        else if (Transport == "boat")
        {
            student = 39.99;
            Pensioners = 42.99;
            sumTransport = ((countStudents * student) + (countPensioners * Pensioners)) * 2;
            priceHotel = countNights * 82.99;
            tax = (sumTransport + priceHotel) * 0.10;
            sum = sumTransport + priceHotel + tax;
        }

        else if (Transport == "airplane")
        {
            student = 50;
            Pensioners = 70;
            sumTransport = ((countStudents * student) + (countPensioners * Pensioners)) * 2;
            priceHotel = countNights * 82.99;
            tax = (sumTransport + priceHotel) * 0.10;
            sum = sumTransport + priceHotel + tax;
        }


        Console.WriteLine("{0:F2}", sum);

    }
}