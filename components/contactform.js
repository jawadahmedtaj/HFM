'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from './ui/select';
import { PhoneInput } from './ui/phone-input';

const formSchema = z.object({
  firstname: z.string().min(2, { message: 'Firstname is required.' }),
  lastname: z.string().min(2, {
    message: 'Lastname is required.',
  }),
  country: z.string().min(2, {
    message: 'Country must be at least 2 characters.',
  }),
  phone: z.string().min(2, {
    message: 'Phone must be at least 2 characters.',
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
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="bg-[url('/mainimage.png')] bg-contain bg-no-repeat w-screen h-screen">
        <div className="place-content-center grid grid-flow-row">
          <div className="flex flex-col items-center pt-12 text-7xl text-white">
            <h1 className="bg-clip-text bg-gradient-to-r from-[#FCD678] via-[#FCD678] to-[#BC8C2F] text-transparent">
              Lorem ipsum dolor
            </h1>
            <h1>sit amet tosik</h1>
            <div className="bg-white rounded-xl w-[730px]">
              <div className="grid grid-flow-row py-8">
                <h1 className="flex justify-self-center text-2xl text-black">
                  Lorem ipsum dolor sit amet
                </h1>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="gap-4 grid grid-cols-2 px-8 py-8 text-black"
                  >
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
                              <SelectTrigger>
                                <SelectValue placeholder="Select the amount of experience you have" />
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
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
                <h6>First</h6>
                <h6>Last</h6>
                <h6>Country</h6>
                <h6>Phone</h6>
                <h6>Email</h6>
                <h6>Experience</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
