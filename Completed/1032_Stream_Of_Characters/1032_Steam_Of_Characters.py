class ReverseTrieNode(object):
    def __init__(self):
        self.children: dict[str, ReverseTrieNode] = {}


class ReverseTrie(object):
    def __init__(self):
        self.root: ReverseTrieNode = ReverseTrieNode()

    def insert(self, word: str):
        current_node = self.root

        for letter in reversed(word):

            if letter not in current_node.children:
                current_node.children[letter] = ReverseTrieNode()

            current_node = current_node.children[letter]
        
        current_node.children["*"] = None

    def search(self, string: str) -> bool:
        current_node = self.root

        for char in reversed(string):
            if char not in current_node.children:
                break
            elif "*" in current_node.children:
                return True

            current_node = current_node.children[char]

        if "*" in current_node.children:
            return True
        else:
            return False

class StreamChecker(object):

    def __init__(self, words: list[str]):
        """
        :type words: List[str]
        """
        self.trie = ReverseTrie()
        self.characters = ""

        for word in words:
            self.trie.insert(word)
        

    def query(self, letter: str) -> bool:
        """
        :type letter: str
        :rtype: bool
        """
        self.characters += letter

        return self.trie.search(self.characters)

        
# TEST CASES
input_1_1 = ["StreamChecker","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query"]
input_1_2 = [[["ab","ba","aaab","abab","baa"]],["a"],["a"],["a"],["a"],["a"],["b"],["a"],["b"],["a"],["b"],["b"],["b"],["a"],["b"],["a"],["b"],["b"],["b"],["b"],["a"],["b"],["a"],["b"],["a"],["a"],["a"],["b"],["a"],["a"],["a"]]
output = []

for i in range(len(input_1_1)):
    if input_1_1[i] == "StreamChecker":
        stream_checker = StreamChecker(input_1_2[i][0])
        output.append(None)
    if input_1_1[i] == "query":
        output.append(stream_checker.query(input_1_2[i][0]))

print(output)