import { z } from 'zod';

const IPv4AddressFormSchema = z.object({
  ipv4Address: z.string(),
});

type IPv4AddressFormSchemaType = z.infer<typeof IPv4AddressFormSchema>;

type NetworkInfo = {
  address: string;
  subnet: string;
};

export { IPv4AddressFormSchema };
export type { IPv4AddressFormSchemaType, NetworkInfo  };
