vg <- read.table("C:/Users/Joshs/Desktop/Life/Educational/CMATH 189/hw2/videodata.txt", header=TRUE, quote="\"")

#exclude missing data
vg$time[vg$time==99] <-NA
vg$like[vg$like==99] <- NA
vg$where[vg$where==99] <- NA
vg$freq[vg$freq==99] <- NA
vg$busy[vg$busy==99] <- NA
vg$educ[vg$educ==99] <- NA
vg$sex[vg$sex==99] <- NA
vg$age[vg$age==99] <- NA
vg$home[vg$home==99] <- NA
vg$math[vg$math==99] <- NA
vg$work[vg$work==99] <- NA
vg$own[vg$own==99] <- NA
vg$cdrom[vg$cdrom==99] <- NA
vg$email[vg$email==99] <- NA
vg$grade[vg$grade==99] <- NA


#A Histogram of like
library('ggplot2')
ggplot(vg, aes(x=like)) + geom_histogram(binwidth=1, fill="blue", colour="white") + scale_x_continuous(limits = c(1,5), breaks = seq(1,5,1)) + xlab("Like to play \n 1=never played, 2=very much, 3=somewhat, 4=not really, 5=not at all") + ylab("Frequency")

#How many people are in each bin
dim(subset(vg, like == 1))[1] #1 person never played
dim(subset(vg, like == 2))[1] #23 people like to play very much
dim(subset(vg, like == 3))[1] #46 people somewhat like to play
dim(subset(vg, like == 4))[1] #13 people not really into playing
dim(subset(vg, like == 5))[1] #7 people don't like to play at all 

vgPref <- vg
vgPref$like[vgPref$like == 1] <- 'never'
vgPref$like[vgPref$like == 2 | vgPref$like == 3] <- 'enjoy'
vgPref$like[vgPref$like == 4 | vgPref$like == 5] <- 'dislike'

vgPref$sex[vgPref$sex == 1] <- 'male'
vgPref$sex[vgPref$sex == 0] <- 'female'

vgPref$work[vgPref$work > 0] <- 'employed'
vgPref$work[vgPref$work == 0] <- 'unemployed'

vgPref$own[vgPref$own == 1] <- 'owns PC'
vgPref$own[vgPref$own == 'doesn\'t own PC'] <- 'no PC'

vgPref$freq[vgPref$freq == 1] <- 'daily'
vgPref$freq[vgPref$freq == 2] <- 'weekly'
vgPref$freq[vgPref$freq == 3] <- 'monthly'
vgPref$freq[vgPref$freq == 4] <- 'semesterly'


install.packages("epiR") #command to install epiR for odds ratio analysis
library('epiR')
vgPrefNoNever <- subset(vgPref, like != 'never')

#Bar Plot, Odds ratio of male and female video game preference
sexToLike <- table(vgPrefNoNever$sex, vgPrefNoNever$like)
barplot(sexToLike, beside=T, legend=T) 
fisher.test(sexToLike)
epi.2by2(sexToLike, method="cohort.count", conf.level=0.95)
sexToLike

#Bar Plot, Odds ratio of work and don't work video game preference
workToLike <- table(vgPrefNoNever$work, vgPrefNoNever$like)
barplot(workToLike, beside=T, legend=T) 
fisher.test(workToLike)
epi.2by2(workToLike, method="cohort.count", conf.level=0.95)
workToLike

busyPlayToWork <- table(vgPref$busy, vgPref$work)
busyPlayToWork #shows 82% of workers do not play when busy

#Bar Plot, Odds ratio of has PC and doesn't have PC video game preference
pcToLike <- table(vgPrefNoNever$own, vgPrefNoNever$like)
fisher.test(pcToLike)
pcToFreq <- table(vgPrefNoNever$own, vgPrefNoNever$freq)
fisher.test(pcToFreq)

pcToLike
pcToFreq

#Scenario 4 Bootstrap
vgLrg <- rbind(vg, vg)
vgLrg <- rbind(vgLrg, vg)
#num rows in Bootstrap matrix
B = 1000
#num colsin bootstrap matrix
n = nrow(vgLrg)
#make a matrix of bootstrapped data sampled with replacement
boot.samples = matrix(sample(subset(vgLrg$like, !is.na(vgLrg$like)), size = B * n, replace = TRUE), B, n)
#get the mean of each  bootstrapped row
boot.statistics = apply(boot.samples, 1, mean) 
hist(boot.statistics)

#Show that mean of likes is normally distributed 
#Note that this also follows the predictions of central limit Thm
qqnorm(boot.statistics)
qqline(boot.statistics)

hist(boot.statistics, xlab ="Sample Population Means of 'Like to play'", main="1000 Bootstrapped Means of 'Like To Play'")

#Used to find 95% CI of like to play
mean(boot.statistics) #3.022744
sd(boot.statistics) #0.05080279