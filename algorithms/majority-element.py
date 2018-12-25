class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        count = {}
        for x in nums:
            if x not in count:
                count[x] = 1
            else:
                count[x] += 1
        
        return max(count, key=count.get)
