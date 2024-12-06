import { Button } from '@/components/ui/button';

export default function TermsConditionsButton() {
  return (
    <div className="grid grid-flow-row place-content-center gap-4">
      <Button className="bg-[#179149] uppercase w-[300px] h-[54px]">Join Now</Button>
      <p className="text-[#A8A8A8] place-self-center font-normal text-xs">
        Terms and Conditions apply
      </p>
    </div>
  );
}
