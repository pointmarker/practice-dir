using System;
using System.Linq;
public class Program
{
    public static void Main(string[] args)
    {
        int[] numbers = new int[5];
        int[] numbers = [1, 2, 3, 4, 5];
        int[] numbers = { 1, 2, 3, 4, 5 };

        numbers[2] = 4;
        int middle = numbers[2];

        int last = numbers[numbers.Length - 1];
        int last = numbers[^1];

        int rank = numbers.Rank;

        // if there is positive, it will return true, O(n) complexity
        bool anyPositive = Array.Exists(numbers, e => e > 0);

        // if all elements meet the condition
        bool noZeros = Array.TrueForAll(numbers, e => e != 0);

        // it will return the first element that meet the condition
        int firstNegative = Array.Find(numbers, e => e < 0);

        // it will return a new array with the elements that meet the condition
        int[] positives = Array.FindAll(numbers, e => e > 0);

        // it will return of the first found elements index of the searced value
        int searchedValIndex = Array.IndexOf(numbers, 5);

        // it will go through all elements of the array
        Array.ForEach(numbers, e =>
        {
            Console.WriteLine(e);
        });





    }
}