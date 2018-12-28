class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """        
        length = len(prices)
        res = 0
        i = 0
        j = 1
        
        while (i < length - 1 and j < length):
            subtotal = prices[j] - prices[i]
            if (subtotal > 0 and subtotal > res):
                res = prices[j] - prices[i]
            elif (subtotal > 0):
                j += 1
            else:
                i += 1
                j = i + 1

                    
        return res
