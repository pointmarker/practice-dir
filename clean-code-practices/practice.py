def find_longest_word_length(text: str) -> int:
    if not text or text.strip() == "":
        return 0
    words = text.strip().split()
    return max(len(w) for w in words)

def reverse_string(text: str) -> str: 
    return text[::-1]

