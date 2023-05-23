import { Label, MultiStepContainer, Steps, Step } from './styles';

export interface MultiStepProps {
  steps: number;
  currentStep?: number;
}

export function MultiStep({ steps, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Paso {currentStep} de {steps}
      </Label>

      <Steps css={{ '--steps': steps }}>
        {Array.from({ length: steps }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  );
}
