export interface SuccessfulValidationResponse {
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
  Valid?: (null)[] | null;
}
export interface StatusItemsEntity {
  Code: string;
}
export interface ProductsEntity {
  ID: number;
  Code: string;
  Qty: number;
  CategoryCode: string;
  FlavorCode: string;
  Status: number;
  LikeProductID: number;
  Name: string;
  IsNew: boolean;
  NeedsCustomization: boolean;
  AutoRemove: boolean;
  Fulfilled: boolean;
  Tags: TagsOrPartnersOrMetaData;
  StatusItems?: (StatusItemsEntity)[] | null;
}
export interface Offer {
  CouponList?: (null)[] | null;
  ProductOffer: string;
}
