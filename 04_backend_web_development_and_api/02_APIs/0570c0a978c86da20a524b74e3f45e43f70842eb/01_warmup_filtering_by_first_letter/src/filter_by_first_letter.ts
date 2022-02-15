import { Customer } from "../data/customers";

export function filterByFirstLetter(customer: any[], letter: string) {
  // Code here
  return customer.filter((element) => element.last_name.charAt(0) === letter);
}
