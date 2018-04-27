YearPredictionMSD <- read.csv("YearPredictionMSD.txt", header=FALSE)

## use a subset of 1000 to make sure the normalization work
ypTest<- YearPredictionMSD

names(ypTest)[names(ypTest) == 'V1'] <- 'year'

#the multivaraible linear regression model for yp
ypLm <- lm(year ~ ., data = ypTest)

#create a list that shows predictions for each year
predictedYears <- predict(ypLm, ypTest)

#Plot the line of prediction for all the variables
#X axis is actual year, y axis is predicted year
x = c(ypTest$year)
y = c(predictedYears)
plot(x,y, xlab="Actual Year", ylab="Predicted Year")

#Calculate the error in the predictions
error = abs(x - y)
summary(error)