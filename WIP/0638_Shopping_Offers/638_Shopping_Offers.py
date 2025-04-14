import numpy as np

class Solution:
    def shoppingOffers(self, price: list[int], special: list[list[int]], needs: list[int]) -> int:
        # See if it is a valid special
        deals = []

        for i in range(len(special)):
            valid_special = True

            for j in range(len(needs)):

                if needs[j] < special[i][j]:
                    valid_special = False
                    break

            if valid_special:
                deals.append(special[i])

        return deals


solution = Solution()

price = [
    [2,5],
    [2,3,4]
    ]

special = [
    [[3,0,5],[1,2,10]],
    [[1,1,0,4],[2,2,1,9]]
    ]

needs = [
    [3,2],
    [1,2,1]
    ]

for i in range(len(price)):
    print(solution.shoppingOffers(price[i], special[i], needs[i]))