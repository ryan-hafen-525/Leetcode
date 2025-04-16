class Solution:
    def shoppingOffers(self, price: list[int], special: list[list[int]], needs: list[int]) -> int:
        # Get original price
        # Discount specials
        #   - Analyze specials
        #       - 
        #   - Add special price
        # Include remaining needs
        # Return final price

        discountless_price = 0

        for i in range(len(needs)):
            discountless_price += needs[i] * price[i]

        special_prices = []
        special_price_per_item = []

        for i in range(len(special)):
            deal_price = 0
            
            item_qty = 0
            for j in range(len(price)):
                deal_price += price[j] * special[i][j]
                item_qty += special[i][j]
            deal_difference = special[i][-1] - deal_price
            special_price_per_item.append()
            special_prices.append(deal_difference)
    
        return special_prices


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