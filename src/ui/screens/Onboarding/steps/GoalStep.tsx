import { ArrowRightIcon } from 'lucide-react-native';
import React from 'react';

import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';
import { Step, StepContent, StepFooter, StepHeader, StepSubtitle, StepTitle } from '../components/Step';
import { useOnboarding } from '../context/useOnboarding';

export function GoalStep() {
  const { nextStep } = useOnboarding();
  return (
    <Step>
      <StepHeader>
        <StepTitle>Qual é seu objetivo?</StepTitle>
        <StepSubtitle>O que você pretende alcançar com a dieta?</StepSubtitle>
      </StepHeader>

      <StepContent>
        <AppText>
          Step content
        </AppText>
      </StepContent>

      <StepFooter>
        <Button size='icon' onPress={nextStep}>
          <ArrowRightIcon size={20} color={theme.colors.black[700]} />
        </Button>
      </StepFooter>
    </Step>
  );
}
