#PA 4

import re

"Miscellaneous functions to practice Python"

class Failure(Exception):
    """Failure exception"""
    def __init__(self,value):
        self.value=value
    def __str__(self):
        return repr(self.value)

# Problem 1

# data type functions

def closest_to(l,v):
    """Return the element of the list l closest in value to v.  In the case of
       a tie, the first such element is returned.  If l is empty, None is returned."""
    small_diff = None
    closest_v = None
    for lv in l:
      cur_diff = abs(lv - v)
      if(small_diff == None or cur_diff < small_diff):
        small_diff = cur_diff
        closest_v = lv
    return closest_v

def make_dict(keys,values):
    """Return a dictionary pairing corresponding keys to values."""
    dict = {}
    for key, value in zip(keys, values):
      dict[key] = value
    return dict


   
# file IO functions
def word_count(fn):
    """Open the file fn and return a dictionary mapping words to the number
       of times they occur in the file.  A word is defined as a sequence of
       alphanumeric characters and _.  All spaces and punctuation are ignored.
       Words are returned in lower case"""
    dict = {}
    txtfile = open(fn)
    txt = txtfile.read()
    cleanTxt = re.sub('[^A-Za-z0-9_]+', ' ', txt);
    words = cleanTxt.split()
    for word in words:
      word = word.lower()
      if re.match('^[0-9a-z_]+$', word):
        if(dict.has_key(word)):
          dict[word] = dict[word] + 1
        else:
          dict[word] = 1 
    return dict