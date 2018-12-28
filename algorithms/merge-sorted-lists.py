# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        a = l1
        b = l2
        
        root = ListNode(0)
        res = root
        
        while not (a == None and b == None):
            if a == None:
                res.next = b
                res = b
                b = b.next
            elif b == None:
                res.next = a
                res = a
                a = a.next
            elif a.val < b.val:
                res.next = a
                res = a
                a = a.next
            else:
                res.next = b
                res = b
                b = b.next
        
        return root.next
            
