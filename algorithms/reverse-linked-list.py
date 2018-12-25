class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head:
            return None
        
        prev = None
        
        while head.next:
            nextLN = head.next 
            head.next = prev
            prev = head
            head = nextLN
        
        head.next = prev
        return head
