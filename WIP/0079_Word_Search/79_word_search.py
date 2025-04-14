class Solution(object):
    def exist(self, board, word):
        """
        :type board: List[List[str]]
        :type word: str
        :rtype: bool
        """
        # step 1: find a matching letter
        for y in range(len(board)):
            for x in range(len(board[y])):
                if board[y][x] == word[0]:
                    if self.find_next_letter(board, word, [x,y]):
                        return True
                    
        return False

    def find_next_letter(self, board, word, position=[0, 0], previous_pos=[]):
        if word == "":
            return True

        x = position[0]
        y = position[1]

        # Horizontal search
        if x != 0 and x+1 < len(board[y]):
            if board[y][x+1] == word[0] and [x+1, y] not in previous_pos: # Right
                previous_pos.append([x+1, y])
                return self.find_next_letter(board, word[1:], [x+1, y], previous_pos)
            elif board[y][x-1] == word[0] and [x-1, y] not in previous_pos: # Left
                previous_pos.append([x-1, y])
                return self.find_next_letter(board, word[1:], [x-1, y], previous_pos)
        elif x == 0 and x+1 < len(board[y]):
            if board[y][x+1] == word[0] and [x+1, y] not in previous_pos: # Right
                previous_pos.append([x+1, y])
                return self.find_next_letter(board, word[1:], [x+1, y], previous_pos)
        elif x+1 == len(board[y]):
            if board[y][x-1] == word[0] and [x-1, y] not in previous_pos: # Left
                previous_pos.append([x-1, y])
                return self.find_next_letter(board, word[1:], [x-1, y], previous_pos)
        
        # Vertical search
        if y != 0 and y+1 < len(board):
            if board[y+1][x] == word[0] and [x, y+1] not in previous_pos: # Right
                previous_pos.append([x, y+1])
                return self.find_next_letter(board, word[1:], [x, y+1], previous_pos)
            elif board[y-1][x] == word[0] and [x, y-1] not in previous_pos: # Left
                previous_pos.append([x, y-1])
                return self.find_next_letter(board, word[1:], [x, y-1], previous_pos)
        elif y == 0 and y+1 < len(board):
            if board[y+1][x] == word[0] and [x, y+1] not in previous_pos: # Right
                previous_pos.append([x, y+1])
                return self.find_next_letter(board, word[1:], [x, y+1], previous_pos)
        elif y+1 == len(board):
            if board[y-1][x] == word[0] and [x, y-1] not in previous_pos: # Left
                previous_pos.append([x, y-1])
                return self.find_next_letter(board, word[1:], [x, y-1], previous_pos)

        return False



board = [["a","a"]]
word = "aaa"

solution = Solution()
print(solution.exist(board, word))