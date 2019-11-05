export interface OrderResponse {
  success: boolean;
  result: Result;
}
export interface Result {
  Order: Order;
  Status: number;
  Offer: Offer;
  EmailHash: string;
  StatusItems?: (StatusItemsEntity)[] | null;
}
export interface Order {
  Address: Address;
  Coupons?: (CouponsEntity)[] | null;
  CustomerID: string;
  Email: string;
  Extension: string;
  FirstName: string;
  LastName: string;
  LanguageCode: string;
  OrderChannel: string;
  OrderID: string;
  OrderMethod: string;
  Payments?: (PaymentsEntity)[] | null;
  Phone: string;
  Market: string;
  Currency: string;
  ServiceMethod: string;
  SourceOrganizationURI: string;
  StoreID: number;
  Tags: TagsOrPartnersOrMetaData;
  Version: string;
  NoCombine: boolean;
  Partners: TagsOrPartnersOrMetaData;
  NewUser: boolean;
  metaData: TagsOrPartnersOrMetaData;
  BusinessDate: string;
  EstimatedWaitMinutes: string;
  IP: string;
  Promotions: Promotions;
  AvailablePromos: AvailablePromos;
  PulseOrderGuid: string;
  AmountsBreakdown: AmountsBreakdown;
  Status: number;
  StatusItems?: (StatusItemsEntity)[] | null;
  Amounts: Amounts;
  Products?: (ProductsEntity)[] | null;
  LoadTime: number;
  Loyalty: Loyalty;
  StoreOrderID: string;
  StorePlaceOrderTime: string;
  PlaceOrderTime: string;
  PlaceOrderMs: number;
}
export interface Address {
  Type: string;
  Street: string;
  City: string;
  Region: string;
  PostalCode: string;
  StreetNumber: string;
  StreetName: string;
}
export interface CouponsEntity {
  Code: string;
  Qty: number;
  ID: number;
  isNew: boolean;
  Status: number;
  StatusItems?: (StatusItemsEntity)[] | null;
}
export interface StatusItemsEntity {
  Code: string;
}
export interface PaymentsEntity {
  Type: string;
  Amount: number;
  Number: string;
  CardType: string;
  Expiration: string;
  SecurityCode: string;
  PostalCode: string;
}
export interface TagsOrPartnersOrMetaData {}
export interface Promotions {
  Redeemable?: (null)[] | null;
  AvailablePromos: AvailablePromos;
  Valid?: (null)[] | null;
}
export interface AvailablePromos {
  EndOfOrder: string;
}
export interface AmountsBreakdown {
  FoodAndBeverage: string;
  Adjustment: string;
  Surcharge: string;
  DeliveryFee: string;
  Tax: number;
  Tax1: number;
  Tax2: number;
  Bottle: number;
  Customer: number;
  Savings: string;
}
export interface Amounts {
  Menu: number;
  Discount: number;
  Surcharge: number;
  Adjustment: number;
  Net: number;
  Tax: number;
  Tax1: number;
  Tax2: number;
  Bottle: number;
  Customer: number;
  Payment: number;
}
export interface ProductsEntity {
  ID: number;
  Code: string;
  Qty: number;
  CategoryCode: string;
  SizeCode: string;
  FlavorCode: string;
  SpecialtyCode: string;
  Price: number;
  Status: number;
  LikeProductID: number;
  Name: string;
  IsNew: boolean;
  NeedsCustomization: boolean;
  Fulfilled: boolean;
  Tags: TagsOrPartnersOrMetaData;
  Options?: Options | null;
  descriptions?: (DescriptionsEntity)[] | null;
}
export interface Options {
  H: H;
}
export interface H {
  [k: string]: any;
}
export interface DescriptionsEntity {
  portionCode: string;
  value: string;
}
export interface Loyalty {
  EligibleForPOE: boolean;
}
export interface Offer {
  CouponList?: (null)[] | null;
  ProductOffer: string;
}
