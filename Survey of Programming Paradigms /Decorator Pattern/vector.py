from misc import Failure

class Vector(object):
	"TODO: document this class here"
	vector = None

	def __init__(self, vec_repr):
		if isinstance(vec_repr,(list,tuple)):
			self.vector = vec_repr
		elif isinstance(vec_repr,(int, long)):
			if vec_repr >= 0:
				self.vector = [0.0]*vec_repr
	   		else: 
				raise ValueError('Vector length cannot be negative')
		else:
			raise TypeError('Vector must be an integer or sequence')

	def __repr__(self):
	   	return "Vector(" + str(self.vector) + ")"

	def __len__(self):
		return len(self.vector)

	def __iter__(self):
		ndx = 0
		while(ndx < len(self.vector)):
			yield self.vector[ndx]
			ndx += 1

	def __add__(self, other):
		sum = []
		for li1, li2 in zip(self.vector, other):
			sum.append(li1 + li2)
		return Vector(sum)

	def __radd__(self, other):
		return self.__add__(other)

	def __iadd__(self, other):
		return self.__add__(other)

	def dot(self, other):
		dotprod = None
		for li1, li2 in zip(self.vector, other):
			if(dotprod == None):
				dotprod = 0
			dotprod += li1*li2
		return dotprod

	def __getitem__(self,key):
		if(key > len(self.vector)):
			raise IndexError("Index out of range")
		return self.vector[key]

	def __setitem__(self,key,value):
		if(isinstance(key, slice)):
			(start,stop,step) = key.indices(len(self))
			if((start > len(self.vector)-1) or stop > (len(self.vector)-1) 
				or (start > stop) or (abs(start-stop) < len(value))):
				raise ValueError("Slice indices out of range")
			else: 	
				listndx = 0
				startndx = start
				while(start < stop):
					self.vector[start] = value[listndx]
					listndx += 1
					start += 1

		elif(key > len(self.vector)):	
			raise IndexError("Index out of range")
		else:
			self.vector[key] = value

	def __eq__(self, other):
		""" Check if all elements of self are respectively equal to 
		elements in other """
		if(not(self.checkCmp(other))):
			return False

		cmpflag = True
		for li1, li2 in zip(self.vector, other):
			if(li1 != li2):
				cmpflag = False
		return cmpflag

	def __ne__(self, other):
		""" Check if all elements of self are respectively equal to 
		elements in other """
		return not(self.__eq__(other))

	def __gt__(self,other):
		""" self is greater than other if largest element in self is greater than
		largest element in other, if they are equal then sequentially check the nth
		next largest element until either one is larger than the other.  
		"""
		sorted_self = sorted(self.vector, reverse=True) #sort both lists in descending order
		sorted_other = sorted(other, reverse=True) 
		cmpflag = False
		for li1, li2 in zip(sorted_self, sorted_other):
			if(li1 > li2):
				cmpflag = True
		return cmpflag
	
	def __ge__(self,other): 
		""" Same as __gt__ but also returns true if they vectors are equal """
		if(self.checkUnorderedEq(other)): 
			return True
		return self.__gt__(other)

	def __lt__(self,other):
		if(self.checkUnorderedEq(other)): 
			return False
		return not(self.__gt__(other))

	def __le__(self,other):
		if(self.checkUnorderedEq(other)): 
			return True
		return self.__lt__(other)

	def checkCmp(self, value):
		if(type(value) == type(self)):
			return True
		else:
			return False

	def checkUnorderedEq(self, other):
		sorted_self = sorted(self.vector, reverse=True) #sort both lists in descending order
		sorted_other = sorted(other, reverse=True)
		if(sorted_self == sorted_other):
			return True
		else: 
			return False

#lookup lambda expressions

"""
Before/After decorator example

def before(turkey):
	def decorator(f):
		def g(*args)+
			turkey(*args)
			return f(*args)
		return g
	return decorator

def after(pie):
	def decorator(f):
		def g(*args)
			rv = f(*args)
			pie(*args)
			return rv
		return g
	return decorator
"""