import React, { useCallback, useState } from 'react';

import { AuthStackNavigationProps } from '@app/navigation/AuthStack';
import { useNavigation } from '@react-navigation/native';
import { OnboardingContext } from '.';
import { onboardingNavigation } from '../OnboardingStack';
import { orderedSteps } from '../steps';

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const { goBack } = useNavigation<AuthStackNavigationProps>();

  const nextStep = useCallback(() => {
    const nextStepIndex = currentStepIndex + 1;
    const step = orderedSteps[nextStepIndex];

    if (!step) {
      return;
    }

    onboardingNavigation.navigate(step);
    setCurrentStepIndex(nextStepIndex);
  }, [currentStepIndex]);

  const previousStep = useCallback(() => {
    if (!onboardingNavigation.canGoBack()) {
      goBack();
      return;
    }

    const previousStepIndex = currentStepIndex - 1;

    onboardingNavigation.goBack();
    setCurrentStepIndex(previousStepIndex);
  }, [currentStepIndex, goBack]);

  return (
    <OnboardingContext.Provider value={{
      currentStepIndex,
      nextStep,
      previousStep,
    }}>
      {children}
    </OnboardingContext.Provider>
  );
}
