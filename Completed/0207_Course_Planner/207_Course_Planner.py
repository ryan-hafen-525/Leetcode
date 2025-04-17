class Solution:
    # Creates a adjacent vertices list for each class
    def init_adj(self, n: int, prereq: list[list[int]]):
        adj: list[list[int]] = [[] for _ in range(n)]

        for u, v in prereq:
            adj[u].append(v)

        return adj
    
    # Depth-first search for cycle detection
    def is_cycle_rec(self, adj: list[list[int]], u: int, visited: list[bool], rec_stack: list[bool]):
        # If the node is already in the current recursion stack, a cycle is detected
        if rec_stack[u]:
            return True
        
        # If the node is already visited and not part of the recursion stack, skip it
        if visited[u]:
            return False
        
        # Mark the current node as visited and add it to the recursion stack
        visited[u] = True
        rec_stack[u] = True

        # Recursion for all the adjacent verticies
        for v in adj[u]:
            if self.is_cycle_rec(adj, v, visited, rec_stack):
                return True
            
        # Remove from stack before returning
        rec_stack[u] = False
        return False

    
    def canFinish(self, numCourses: int, prerequisites: list[list[int]]) -> bool:
        adj: list[list[int]] = self.init_adj(numCourses, prerequisites)

        visited: list[bool] = [False] * numCourses
        rec_stack: list[bool] = [False] * numCourses

        for i in range(numCourses):
            if not visited[i] and self.is_cycle_rec(adj, i, visited, rec_stack):
                return False

        return True

solution = Solution()

# Test Case 1
numCourses = 2
prerequisites = [[1, 0]]
print(solution.canFinish(numCourses, prerequisites)) # True

# Test Case 2
numCourses = 2
prerequisites = [[1,0],[0,1]]
print(solution.canFinish(numCourses, prerequisites)) # False

# Test Case 3
numCourses = 20
prerequisites = [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]
print(solution.canFinish(numCourses, prerequisites)) # False

# Test Case 3
numCourses = 3
prerequisites = [[1,0],[0,2],[2,1]]
print(solution.canFinish(numCourses, prerequisites)) # False