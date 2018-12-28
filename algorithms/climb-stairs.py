class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n < 4:
            return n
        
        a = 1
        b = 1
        c = 0
        
        for i in xrange(n - 1):
            c = a + b
            a = b
            b = c
        
        return c
