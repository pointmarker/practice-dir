#include <iostream>
#include <sstream>
#include <string>
#include <algorithm>

int findLongestWordLength(const std::string &text)
{
    if (text.empty())
        return 0;

    std::istringstream iss(text);
    std::string word;
    int maxLength = 0;

    while (iss >> word)
    {
        maxLength = std::max(maxLength, (int)word.size());
    }
    return maxLength;
}

std::string reverseString(const std::string &text)
{
    std::string reversed = text;
    std::reverse(reversed.begin(), reversed.end());
    return reversed;
}