class Solution(object):

    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        prefix = ""
        char = ""
        word = 0
        letter_pos = 0

        while True:
            try:
                while word < len(strs):
                    if char == "":
                        char += strs[word][letter_pos]
                    else:
                        if char != strs[word][letter_pos]:
                            return prefix
                    word += 1

                prefix += char
                char = ""
                letter_pos += 1
                word = 0
            except:
                return prefix
        
strs = ["flower","flow","flight"]
result = Solution()
print(result.longestCommonPrefix(strs))