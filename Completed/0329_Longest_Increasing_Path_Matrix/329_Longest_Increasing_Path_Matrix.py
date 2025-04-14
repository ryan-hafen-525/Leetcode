class Solution:

    def coordinate_to_index(self, coordinate: list[int, int], size: list[int, int]) -> int:
        m = size[1]

        x = coordinate[0]
        y = coordinate[1]

        index = x * m
        index += y

        return index

    def traverse_matrix(self, matrix: list[list[int]], position: list[int, int], size: list[int, int], memo: dict[int, int]):
        index = self.coordinate_to_index(position, size)

        if index in memo:
            return memo[index]
        else:
            row = position[0]
            col = position[1]

            memo[index] = 1 + max(
                self.traverse_matrix(matrix, [row-1, col], size, memo) if row > 0 and row <= size[0] - 1 and matrix[row][col] < matrix[row-1][col] else 0, # Up
                self.traverse_matrix(matrix, [row+1, col], size, memo) if row >= 0 and row < size[0] - 1 and matrix[row][col] < matrix[row+1][col] else 0, # Down
                self.traverse_matrix(matrix, [row, col-1], size, memo) if col > 0 and col <= size[1] - 1 and matrix[row][col] < matrix[row][col-1] else 0, # Left
                self.traverse_matrix(matrix, [row, col+1], size, memo) if col >= 0 and col < size[1] - 1 and matrix[row][col] < matrix[row][col+1] else 0 # Right
            )
        
            return memo[index]

    def longestIncreasingPath(self, matrix: list[list[int]]) -> int:
        m = len(matrix)
        n = len(matrix[0])

        size = [m,n]
        memo = {}
        output = 0

        for i in range(m):
            for j in range(n):
                self.traverse_matrix(matrix=matrix, position=[i,j], size=size, memo=memo)

        for val in memo:
            if output < memo[val]:
                output = memo[val]

        return output

# TEST CASES
solution = Solution()

matrix1 = [[9,9,4],[6,6,8],[2,1,1]]
matrix2 = [[3,4,5],[3,2,6],[2,2,1]]
matrix3 = [[1]]
matrix4 = [[17,4,6,11,4,0,17,12,19,12,12,0],[0,6,4,4,5,9,15,1,11,13,18,0],[4,2,13,1,2,7,15,5,14,6,8,6]]

print(solution.longestIncreasingPath(matrix1))
print(solution.longestIncreasingPath(matrix2))
print(solution.longestIncreasingPath(matrix3))
print(solution.longestIncreasingPath(matrix4))