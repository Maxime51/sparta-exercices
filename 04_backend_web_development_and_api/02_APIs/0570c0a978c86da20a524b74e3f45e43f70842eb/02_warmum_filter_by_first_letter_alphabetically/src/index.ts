// code here
import { Customer } from "../data/customers";

export function filterByFirstLetterOrdered(customer: Customer[], letter: string): Customer[] {
  const array = customer.filter((element) => element.last_name.charAt(0) === letter);
  function compare(a: Customer, b: Customer) {
    if (a.last_name < b.last_name) {
      return -1;
    }
    if (a.last_name > b.last_name) {
      return 1;
    }
    return 0;
  }
  return array.sort(compare);
}
