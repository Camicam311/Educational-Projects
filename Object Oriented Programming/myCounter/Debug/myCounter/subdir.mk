################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../myCounter/myCounter.cpp 

OBJS += \
./myCounter/myCounter.o 

CPP_DEPS += \
./myCounter/myCounter.d 


# Each subdirectory must supply rules for building sources it contributes
myCounter/%.o: ../myCounter/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: Cygwin C++ Compiler'
	g++ -O0 -g3 -Wall -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


