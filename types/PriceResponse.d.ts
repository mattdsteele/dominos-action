export interface PriceResponse {
  success: boolean;
  result: Result;
}
export interface Result {
  Order: Order;
  Status: number;
  Offer: Offer;
  EmailHash?: null;
  StatusItems?: (StatusItemsEntity)[] | null;
}
export interface Order {
  Address: Address;
  Coupons?: (null)[] | null;
  CustomerID: string;
  Email: string;
  Extension: string;
  FirstName: string;
  LastName: string;
  LanguageCode: string;
  OrderChannel: string;
  OrderMethod: string;
  Payments?: (null)[] | null;
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
  PriceOrderTime: string;
  IP: string;
  Promotions: Promotions;
  OrderID: string;
  Status: number;
  StatusItems?: (StatusItemsEntity)[] | null;
  AvailablePromos: AvailablePromos;
  Amounts: Amounts;
  PulseOrderGuid: string;
  PriceOrderMs: number;
  AmountsBreakdown: AmountsBreakdown;
  Products?: (ProductsEntity)[] | null;
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
export interface TagsOrPartnersOrMetaData {
}
export interface Promotions {
  Redeemable?: (null)[] | null;
  AvailablePromos: AvailablePromos;
  Valid?: (null)[] | null;
}
export interface AvailablePromos {
  EndOfOrder: string;
}
export interface StatusItemsEntity {
  Code: string;
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
export interface ProductsEntity {
  ID: number;
  Code: string;
  Qty: number;
  CategoryCode: string;
  FlavorCode: string;
  Price: number;
  Status: number;
  LikeProductID: number;
  Name: string;
  IsNew: boolean;
  NeedsCustomization: boolean;
  AutoRemove: boolean;
  Fulfilled: boolean;
  Tags: TagsOrPartnersOrMetaData;
}
export interface Offer {
  CouponList?: (null)[] | null;
  ProductOffer: string;
}
