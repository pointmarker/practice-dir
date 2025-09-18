using System;
using System.Linq;

public class Program
{
    public static int FindLongestWordLength(string text)
    {
        if (string.IsNullOrWhiteSpace(text))
            return 0;

        var words = text.Trim().Split((char[])null, StringSplitOptions.RemoveEmptyEntries);
        return words.Max(w => w.Length);
    }

    public static string ReverseString(string text)
    {
        if (string.IsNullOrEmpty(text)) return text;

        char[] chars = text.ToCharArray();
        Array.Reverse(chars);
        return new string(chars);
    }
}