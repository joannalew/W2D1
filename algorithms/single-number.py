class Solution(object):
    def singleNumber(self, nums):
        res = []
        for x in nums:
            if x not in res:
                res.append(x)
            else:
                res.remove(x)
        return res[0]
