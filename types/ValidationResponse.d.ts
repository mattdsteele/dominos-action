export interface ValidationResponse {
  success: boolean;
  result: Result;
}
export interface Result {
  Order: Order;
  Status: number;
  Offer: Offer;
  EmailHash?: null;
  SuggestedState: TagsOrPartnersOrMetaDataOrAmountsOrSuggestedState;
  StatusItems?: (StatusItemsEntity)[] | null;
}
export interface Order {
  Address: string;
  Coupons?: (null)[] | null;
  CustomerID: string;
  Email: string;
  Extension: string;
  FirstName: string;
  LastName: string;
  LanguageCode: string;
  OrderChannel: string;
  OrderID: string;
  OrderMethod: string;
  Payments?: (null)[] | null;
  Phone: string;
  Products?: (ProductsEntity)[] | null;
  Market: string;
  Currency: string;
  ServiceMethod: string;
  SourceOrganizationURI: string;
  StoreID: string;
  Tags: TagsOrPartnersOrMetaDataOrAmountsOrSuggestedState;
  Version: string;
  NoCombine: boolean;
  Partners: TagsOrPartnersOrMetaDataOrAmountsOrSuggestedState;
  NewUser: boolean;
  metaData: TagsOrPartnersOrMetaDataOrAmountsOrSuggestedState;
  Amounts: TagsOrPartnersOrMetaDataOrAmountsOrSuggestedState;
  BusinessDate: string;
  EstimatedWaitMinutes: string;
  PriceOrderTime: string;
  customer: Customer;
  deliveryMethod: string;
  storeId: number;
  IP: string;
  Promotions: Promotions;
  Status: number;
  StatusItems?: (StatusItemsEntity)[] | null;
}
export interface ProductsEntity {
  AutoRemove: boolean;
  Code: string;
  Qty: number;
  ID: number;
  isNew: boolean;
  StatusItems?: (StatusItemsEntity)[] | null;
  Status: number;
}
export interface StatusItemsEntity {
  Code: string;
}
export interface TagsOrPartnersOrMetaDataOrAmountsOrSuggestedState {
}
export interface Customer {
  ID: string;
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
  phone: string;
}
export interface Address {
  Type: string;
  Street: string;
  City: string;
  Region: string;
  PostalCode: string;
}
export interface Promotions {
  Redeemable?: (null)[] | null;
}
export interface Offer {
  CouponList?: (null)[] | null;
  ProductOffer: string;
}
