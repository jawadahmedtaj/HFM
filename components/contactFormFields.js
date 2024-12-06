'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from './ui/select';
import { PhoneInput } from './ui/phone-input';
import { Checkbox } from './ui/checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  firstname: z.string().min(2, { message: 'Firstname is required.' }),
  lastname: z.string().min(2, {
    message: 'Lastname is required.',
  }),
  country: z.string().min(2, {
    message: 'Country must be at least 2 characters.',
  }),
  phone: z.string().min(2, {
    message: 'Phone number is required.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  experience: z
    .string({
      required_error: 'Please select experience.',
    })
    .min(2, {
      message: 'Please select experience.',
    }),
  policy: z.boolean().refine((value) => value == true, {
    message: 'You must agree to the policy.',
  }),
});

export default function ContactFormFields() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      policy: false,
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-4 flex flex-col px-8 py-8 text-black [&_input]:h-10"
      >
        <div className="gap-4 grid grid-flow-row lg:grid-flow-col">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PhoneInput placeholder="Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="gap-4 grid grid-rows-2 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-10 text-muted-foreground">
                      <SelectValue placeholder="Experience" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="<1">&lt;1</SelectItem>
                    <SelectItem value="2-5">2 - 5</SelectItem>
                    <SelectItem value="5+">5+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="policy"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox {...field} />
              </FormControl>
              <FormLabel className="ps-2 text-sm font-normal">
                I have read and accepted the <span className="text-[#CD0511]">Privacy Policy</span>{' '}
                and
                <span className="text-[#CD0511]"> Terms and Conditions</span>
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-[#179149] uppercase w-[307px] self-center">
          Join Now
        </Button>
      </form>
    </Form>
  );
}
