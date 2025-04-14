""" Leetcode problem 101 """
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    """ Solution Class """
    def isSymmetric(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: bool
        """
        if not root:
            return True
        def is_mirror_tree(p, q):
            if p is None and q is None:
                return True
            
            if p is None or q is None:
                return False
            
            if p.val != q.val:
                return False
            
            return is_mirror_tree(p.left, q.right) and is_mirror_tree(q.left, p.right)
        
        return is_mirror_tree(root.left, root.right)
