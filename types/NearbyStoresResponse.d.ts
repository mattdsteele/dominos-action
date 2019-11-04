export interface NearbyStoresResponse {
  success: boolean;
  result: Result;
}
export interface Result {
  Status: number;
  Granularity: string;
  Address: Address;
  Stores?: (StoresEntity)[] | null;
}
export interface Address {
  Street: string;
  StreetNumber: string;
  StreetName: string;
  UnitType: string;
  UnitNumber: string;
  City: string;
  Region: string;
  PostalCode: string;
}
export interface StoresEntity {
  StoreID: string;
  IsDeliveryStore: boolean;
  Phone: string;
  AddressDescription: string;
  HolidaysDescription: string;
  HoursDescription: string;
  ServiceHoursDescription: ServiceHoursDescription;
  IsOnlineCapable: boolean;
  IsOnlineNow: boolean;
  IsNEONow: boolean;
  IsSpanish: boolean;
  SubstitutionStore?: string | null;
  LocationInfo?: string | null;
  LanguageLocationInfo: LanguageLocationInfo;
  AllowDeliveryOrders: boolean;
  AllowCarryoutOrders: boolean;
  AllowDuc: boolean;
  ServiceMethodEstimatedWaitMinutes: ServiceMethodEstimatedWaitMinutes;
  StoreCoordinates: StoreCoordinates;
  AllowPickupWindowOrders: boolean;
  IsOpen: boolean;
  ServiceIsOpen: ServiceIsOpen;
}
export interface ServiceHoursDescription {
  Carryout: string;
  Delivery: string;
}
export interface LanguageLocationInfo {
  es?: string | null;
}
export interface ServiceMethodEstimatedWaitMinutes {
  Delivery: DeliveryOrCarryout;
  Carryout: DeliveryOrCarryout;
}
export interface DeliveryOrCarryout {
  Min: number;
  Max: number;
}
export interface StoreCoordinates {
  StoreLatitude: string;
  StoreLongitude: string;
}
export interface ServiceIsOpen {
  Carryout: boolean;
  Delivery: boolean;
}
