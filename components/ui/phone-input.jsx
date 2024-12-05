import * as React from 'react';
import { CheckIcon, ChevronsUpDown } from 'lucide-react';
import * as RPNInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

const PhoneInput = React.forwardRef(({ className, onChange, ...props }, ref) => {
  return (
    <RPNInput.default
      ref={ref}
      className={cn('flex', className)}
      flagComponent={FlagComponent}
      countrySelectComponent={CountrySelect}
      inputComponent={InputComponent}
      smartCaret={false}
      /**
       * Handles the onChange event.
       *
       * react-phone-number-input might trigger the onChange event as undefined
       * when a valid phone number is not entered. To prevent this,
       * the value is coerced to an empty string.
       *
       * @param {E164Number | undefined} value - The entered value
       */
      onChange={(value) => onChange?.(value || '')}
      {...props}
    />
  );
});
PhoneInput.displayName = 'PhoneInput';

const InputComponent = React.forwardRef(({ className, ...props }, ref) => (
  <Input className={cn('rounded-e-lg rounded-s-none', className)} {...props} ref={ref} />
));
InputComponent.displayName = 'InputComponent';

const CountrySelect = ({ disabled, value: selectedCountry, options: countryList, onChange }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="focus:z-10 flex gap-1 px-3 border-r-0 rounded-e-none rounded-s-lg"
          disabled={disabled}
        >
          <FlagComponent country={selectedCountry} countryName={selectedCountry} />
          <ChevronsUpDown
            className={cn('-mr-2 size-4 opacity-50', disabled ? 'hidden' : 'opacity-100')}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[300px]">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <ScrollArea className="h-72">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countryList.map(({ value, label }) =>
                  value ? (
                    <CountrySelectOption
                      key={value}
                      country={value}
                      countryName={label}
                      selectedCountry={selectedCountry}
                      onChange={onChange}
                    />
                  ) : null
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const CountrySelectOption = ({ country, countryName, selectedCountry, onChange }) => {
  return (
    <CommandItem className="gap-2" onSelect={() => onChange(country)}>
      <FlagComponent country={country} countryName={countryName} />
      <span className="flex-1 text-sm">{countryName}</span>
      <span className="text-foreground/50 text-sm">{`+${RPNInput.getCountryCallingCode(
        country
      )}`}</span>
      <CheckIcon
        className={`ml-auto size-4 ${country === selectedCountry ? 'opacity-100' : 'opacity-0'}`}
      />
    </CommandItem>
  );
};

const FlagComponent = ({ country, countryName }) => {
  const Flag = flags[country];

  return (
    <span className="flex bg-foreground/20 rounded-sm w-6 h-4 overflow-hidden">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneInput };