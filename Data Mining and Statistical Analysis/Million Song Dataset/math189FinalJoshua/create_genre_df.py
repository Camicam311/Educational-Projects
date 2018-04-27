"""
Thierry Bertin-Mahieux and Joshua Wheeler (2015) Columbia University, University of California San Diego
tb2332@columbia.edu        jswheele@ucsd.edu

Code to quickly see the content of an HDF5 file.

This is part of the Million Song Dataset project from
LabROSA (Columbia University) and The Echo Nest.


Copyright 2015, Thierry Bertin-Mahieux, Joshua Wheeler

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
"""

import os
import sys
import hdf5_getters
import glob
import numpy as np
import plotly.plotly as py
from plotly.graph_objs import *

def get_all_files(basedir,ext='.h5') :
    """
    From a root directory, go through all subdirectories
    and find all files with the given extension.
    Return all absolute paths in a list.
    """
    allfiles = []
    for root, dirs, files in os.walk(basedir):
        files = glob.glob(os.path.join(root,'*'+ext))
        for f in files :
            allfiles.append( os.path.abspath(f) )
    return allfiles

#Find a word in a list of tuples
#and add 1 to the second element
def incrWordFreq(wList, word):
	#if(type(wList) != 'list'): return None
	found = False
	for wfTuple in wList:
		if(wfTuple[0] == word):
			found = True
			wfTuple[1] = wfTuple[1] + 1
	if found == False:
		wList.append([word,1])
	return True

def isTopTen(word,year):
	for wordTup in topTenList[year]:
			if(word == wordTup[0]): 
				#print "IT HAS BEEN FOUND: " + word + " = " + wordTup[0]
				return True
	return False


if __name__ == '__main__':
    """ MAIN """

    # help menu
    if len(sys.argv)<3:
        die_with_usage()

    # params
    maindir = sys.argv[1]
    outFile = sys.argv[2]

    # sanity checks
    if not os.path.isdir(maindir):
        print 'ERROR: directory',maindir,'does not exists.'
        sys.exit(0)

    # get all h5 files
    allh5 = get_all_files(maindir,ext='.h5')
    print 'found',len(allh5),'H5 files.'
    # get all getters
    df_header = []
    getters = filter(lambda x: x[:4] == 'get_', hdf5_getters.__dict__.keys())
    getters.remove("get_num_songs") # special case
    getters = np.sort(getters)

    freq = {} #2-dim dict of dict's represented as freq[year][term]
    uniqueWordLst = [] #uniqueVector of unique words to loop
    yearLst = [] #Vector of all years
    for hdf5path in allh5:
        #params
        songidx = 0

        #sanity check (use when dir scanning works)
        if not os.path.isfile(hdf5path):
        	print 'ERROR: file',hdf5path,'does not exist.'
    		continue

    	#PRINT THE FREQUENCY LIST
        h5 = hdf5_getters.open_h5_file_read(hdf5path)
        artist_terms = hdf5_getters.__getattribute__('get_artist_terms')(h5,0)
        year = hdf5_getters.__getattribute__('get_year')(h5,0)

      	#fill up the freq dict
        if(year != 0):
        	freq[year] = []
        	if(not(year in yearLst)):
        		yearLst.append(year)
        	for words in artist_terms:
        		words =  words.split()
        		for word in words:
        			if(not(word in uniqueWordLst)):
        				uniqueWordLst.append(word)
            		incrWordFreq(freq[year], word)
	        
        h5.close()

    yearLst.sort()

    topTenList = {} #topTenList[year] = {dict of top ten words for that year} 
    topWordFreqs = {} #Frequency of word for each year 
    		   		  #with non top ten word for that year as a zero
    for year in freq:
    	freq[year].sort(key=lambda x: x[1], reverse = True)
    	topTenList[year] = freq[year][0:10]

    #print topTenList
    # print "Creating Dataframe...."
    # output = open(outFile,"w")
    # output.write("year\ttopTenWord\tcount\n")
    # for year in yearLst:
    # 	for wordTup in topTenList[year]:
    # 		output.write(str(year)+"\t"+str(wordTup[0])+"\t"+str(wordTup[1])+"\n") 
    # output.close()


    intervalStart = 0
    topTenListSm = {} #condensed version of top ten list.
    				  #each year index represents
    				  #first 5 years of that start year

    def intervalIncrWordFreq(wList, wordTuple):
	    #if(type(wList) != 'list'): return None
		found = False
		for wfTuple in wList:
			if(wfTuple[0] == wordTuple[0]):
				found = True
				wfTuple[1] = wfTuple[1] + wordTuple[1]
		if found == False:
			wList.append(wordTuple)
		return True


    for year in topTenList:
    	if(intervalStart == 0 or year > intervalStart + 5):
    		intervalStart = year
    		topTenListSm[intervalStart] = []
    	for wordTuple in topTenList[year]:
    		intervalIncrWordFreq(topTenListSm[intervalStart], wordTuple)	

    #sort the words freqs for each year
	for year in topTenListSm:
  	  topTenListSm[year].sort(key=lambda x: x[1], reverse = True)

   	#The list has been built, now merge common tuples
    intervalStart = 0
    print "Creating Dataframe...."
    output = open(outFile,"w")
    output.write("interval\ttopWord\tcount\n")
    for year in sorted(topTenListSm):
    	if(intervalStart == 0 or year > intervalStart + 5):
    		print "\n----------------------------------------------"
    		print "YEAR " + str(year) + " - "+str(year+5)+":",
        for wordTuple in topTenListSm[year]:
    		if(wordTuple[1] > 1):
    			output.write(str(intervalStart)+"-"+str((intervalStart + 5))+"\t"+str(wordTuple[0])+"\t"+str(wordTuple[1])+"\n") 
    			print str(wordTuple[0]) + ":" + str(wordTuple[1]) + ", ",




 ##### This code prints the plot.ly stacked bar chart
 #    for word in uniqueWordLst:
 #    	topWordFreqs[word] = []
 #    	for year in yearLst:
 #    		wordFreqInYear = 0
 #    		if(isTopTen(word,year)):
 #    			wordFreqInYear = [wordTup[1] for wordTup in topTenList[year] if wordTup[0] == word][0]
 #    		topWordFreqs[word].append((str(year), wordFreqInYear))


	# #stacked bar chart of song tag (genre) popularity for 
	# #each year
 #    traceLst = [] 
 #    for word in uniqueWordLst:
 #    	traceLst.append(Bar(x = [freqTup[0] for freqTup in topWordFreqs[word]], y = [freqTup[1] for freqTup in topWordFreqs[word]], name=word))

	# data = Data(traceLst)
 #    layout = Layout(
	#    barmode='stack'
	# )
 #    fig = Figure(data=data, layout=layout)
 #    #print fig
 #    plot_url = py.plot(fig, filename='stacked-bar')