# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isSameTree(self, p, q):
        """
        :type p: Optional[TreeNode]
        :type q: Optional[TreeNode]
        :rtype: bool
        """
        # Breadth-first traversal
        p_q = []
        q_q = []

        p_q.append(p)
        q_q.append(q)

        while(p_q or q_q):

            p_node = p_q.pop()
            q_node = q_q.pop()

            if p_node != None and q_node != None:
                if p_node.val != q_node.val:
                    return False
                
                p_q.append(p_node.left)
                p_q.append(p_node.right)

                q_q.append(q_node.left)
                q_q.append(q_node.right)

            elif p_node == None and q_node != None:
                return False
            elif p_node != None and q_node == None:
                return False

        return True