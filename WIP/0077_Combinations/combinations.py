from typing import List
import math

class Solution:
    @staticmethod
    def combine(n: int, k: int) -> List[List[int]]:
        result = []

        # Cannot have preceding numbers larger than previous number
        for i in range(1, n + 1):
            temp = []
            temp.append(i)
            for j in range(1, n + 1):
                if j > i:
                    if  j < n + 1:
                        temp.append(j)
            if len(temp) == k:
                result.append(temp)

        return result