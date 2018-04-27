
from misc import *
import crypt

def load_words(filename,regexp):
    """Load the words from the file filename that match the regular
       expression regexp.  Returns a list of matching words in the order
       they are in the file."""
    list = []
    with open(filename) as f:
      for line in f: 
        words = line.split()
        for word in words:
          if(re.match(regexp, word)):
            list.append(word)
    return list


def transform_reverse(str):
    return [str, str[::-1]]

def transform_capitalize(str):
  def helper(str):
    if not str:
      yield ""
    else:
      char = str[:1]
      if char.lower() == char.upper():
        for cur_case in transform_capitalize(str[1:]):
          yield char + cur_case
      else:
        for cur_case in transform_capitalize(str[1:]):
          yield char.lower() + cur_case
          yield char.upper() + cur_case
  return list(helper(str))


def transform_digits(str):
  dict = {'o':['o', '0'], 'z':['z', '2'], 'a':['a', '4'], 
          'b':['b', '6', '8'], 'i':['i', '1'], 'l':['l', '1'], 
          'e':['e', '3'], 's':['s', '5'], 't':['t', '7'], 
          'g':['g', '9'], 'q':['q', '9']}
  def helper(str, list):
    if not str:
      return list
    first = str[:1]
    if dict.has_key(first.lower()): 
      mapping = dict[first.lower()] 
    else: 
      mapping = [first.lower()]
    new_list = []
    if not list: 
      return helper(str[1:], mapping)
    else:
      for substr in list:
        for new_char in mapping:
          new_list.append(substr + new_char)
      return helper(str[1:], new_list)
  return helper(str, [])



def check_pass(plain,enc):
    """Check to see if the plaintext plain encrypts to the encrypted
       text enc"""
    salt = enc[:2]
    cryptedplain = crypt.crypt(plain, salt)
    if cryptedplain == enc: return True 
    else: return False

def load_passwd(filename):
    """Load the password file filename and returns a list of
       dictionaries with fields "account", "password", "UID", "GID",
       "GECOS", "directory", and "shell", each mapping to the
       corresponding field of the file."""
    listdict = []
    with open(filename) as f:
      for line in f:
        values = line.split(":")
        record = {'account': values[0], 'shell': re.sub('[\r\n]+','',values[6]), 'UID': values[2], 'GID': values[3], 'GECOS': values[4], 'directory': values[5], 'password': values[1]}
        listdict.append(record)
    return listdict

def crack_pass_file(fn_pass,words,out):
    """Crack as many passwords in file fn_pass as possible using words
       in the file words"""
    accountDict = load_passwd(fn_pass)
    wordDict = load_words(words, '[a-z]{6,8}')
    print str(len(wordDict)) + " words loaded... \n"
    outfile = open(out, 'w+')
    for record in accountDict:
      for word in wordDict:
        if check_pass(word.lower(),record['password']) == True:
          outfile.write(record['account'] + '=' + word + "\n")
          continue
    outfile.close()