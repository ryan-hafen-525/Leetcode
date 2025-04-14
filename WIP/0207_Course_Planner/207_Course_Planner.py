from collections import deque

class Vertex():
    def __init__(self, value):
        self.value = value
        self.adjacent_vertices = {}

    def add_adjacent_vertex(self, vertex: "Vertex"):
        if self.value in vertex.adjacent_vertices:
            raise Exception()

        if vertex.value not in self.adjacent_vertices:
            self.adjacent_vertices[vertex.value] = vertex        

    def is_not_curcular(self, vertex: "Vertex") -> bool: # DFS with boolean return
        visited_verticies = {}
        stack = []

        # If the stac

        while q:
            if vertex.adjacent_vertices:
                for adj_vertex_key in vertex.adjacent_vertices:
                    adj_vertex = vertex.adjacent_vertices[adj_vertex_key]

        for adjacent_vertex_key in starting_vertex.adjacentVertices:
            adjacent_vertex = starting_vertex.adjacentVertices[adjacent_vertex_key]
            if adjacent_vertex.value in visited_verticies:
                return False
            q.appendleft(starting_vertex.adjacentVertices[adjacent_vertex])
            visited_verticies

        return True





class Solution(object):
    def canFinish(self, numCourses, prerequisites):
        """
        :type numCourses: int
        :type prerequisites: List[List[int]]
        :rtype: bool
        """

        # step 1: get unique courses
        # step 2: create vertices out of courses
        # step 3: create links between courses
        # step 4: if the course is already linked one way, return false
        # step 5: if we get through the entire list, return true

        courses_graph = [None] * numCourses

        for i in range(len(prerequisites)):
            for j in range(2):
                if courses_graph[prerequisites[i][j]] is None:
                    course = Vertex(prerequisites[i][j])
                    courses_graph[course.value] = course

        for i in range(len(prerequisites)):
            course_num = prerequisites[i][0]
            next_course_num = prerequisites[i][1]
            
            if course_num == next_course_num:
                return False
            
            try: 
                courses_graph[course_num].add_adjacent_vertex(courses_graph[next_course_num])
            except:
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